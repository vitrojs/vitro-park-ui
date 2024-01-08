
## Install

<!-- Add 'vitro' to `package.json#trustedDependencies`

```json
{
    "trustedDependencies": ["vitro", "@vitro/zag", "@vitro/ark", "@vitro/park-ui"],
}
``` -->

```sh
pnpm add github:vitrojs/{vitro, vitro-zag,  vitro-ark}

git clone --depth 1 https://github.com/vitrojs/park-ui.git

cd <you-app>

cp ../park-ui/{panda.config.ts, postcss.config.cjs} .
cp -r ../park-ui/src/{ui,lib} ./src
```