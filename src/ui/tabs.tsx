import { Tabs as ArkTabs } from '@vitro/ark/tabs'

import { tabs } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

const Tabs = withProvider(ArkTabs.Root, 'root')
const TabsContent = withContext(ArkTabs.Content, 'content')
const TabsIndicator = withContext(ArkTabs.Indicator, 'indicator')
const TabsList = withContext(ArkTabs.List, 'list')
const TabsTrigger = withContext(ArkTabs.Trigger, 'trigger')

const Root = Tabs
const Content = TabsContent
const Indicator = TabsIndicator
const List = TabsList
const Trigger = TabsTrigger

export {
  Content,
  Indicator,
  List,
  Root,
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
  Trigger,
}
