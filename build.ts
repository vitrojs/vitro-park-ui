/// <reference types="bun-types" />

import { buildSync } from 'esbuild'
import * as fs from 'node:fs'
import * as path from 'node:path'
import pkg from './package.json' assert { type: 'json' }

const isProduction = Bun.env.NODE_ENV === 'production'

const dist = path.join(import.meta.dir, 'dist')

if (fs.existsSync(dist)) {
  if (isProduction) process.exit(0)
  console.log(`🧹 Cleaning dist folder...`)
  fs.rmSync(dist, { recursive: true, force: true })
}

const tsx = fs.readdirSync('./src/ui').filter((it) => it.endsWith('.tsx'))

if (isProduction) {
  const exports = tsx.reduce(
    (acc, it) => {
      const entry = {
        import: `./dist/ui/${it.replace('.tsx', '.js')}`,
        types: `./src/ui/${it}`,
      }
      acc['./' + it.replace('.tsx', '')] = entry

      return acc
    },
    {} as Record<string, any>,
  )
  exports['./create-style-context'] = {
    import: './dist/lib/create-style-context.js',
    types: './src/lib/create-style-context.tsx',
  }

  // @ts-ignore
  pkg['exports'] = exports
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
}

buildSync({
  entryPoints: [
    './src/lib/create-style-context.tsx',
    ...tsx.map((it) => `./src/ui/${it}`),
  ],
  format: 'esm',
  outdir: 'dist',
  bundle: true,
  splitting: true,
  platform: 'browser',
  external: [
    'styled-system',
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
})

console.log('✅ Build done!')
