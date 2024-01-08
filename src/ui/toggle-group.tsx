import { ToggleGroup as ArkToggleGroup } from '@vitro/ark/toggle-group'

import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

const ToggleGroup = withProvider(ArkToggleGroup.Root, 'root')
const ToggleGroupItem = withContext(ArkToggleGroup.Item, 'item')

const Root = ToggleGroup
const Item = ToggleGroupItem

export { Item, Root, ToggleGroup, ToggleGroupItem }
