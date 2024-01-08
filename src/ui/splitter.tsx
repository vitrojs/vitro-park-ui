import { Splitter as ArkSplitter } from '@vitro/ark/splitter'

import { splitter } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

const Splitter = withProvider(ArkSplitter.Root, 'root')
const SplitterPanel = withContext(ArkSplitter.Panel, 'panel')
const SplitterResizeTrigger = withContext(
  ArkSplitter.ResizeTrigger,
  'resizeTrigger',
)

const Root = Splitter
const Panel = SplitterPanel
const ResizeTrigger = SplitterResizeTrigger

export {
  Panel,
  ResizeTrigger,
  Root,
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
}
