import {
  ToggleGroup as ArkToggleGroup,
  type ToggleGroupProps as ArkToggleGroupProps,
} from '@vitro/ark'

import { ToggleGroupVariantProps, toggleGroup } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'
import { Component } from 'vitro'

const { withProvider, withContext } = createStyleContext(toggleGroup)
export type ToggleGroupProps = Assign<
  ArkToggleGroupProps,
  ToggleGroupVariantProps
>
const ToggleGroup: Component<ToggleGroupProps> = withProvider(
  ArkToggleGroup.Root,
  'root',
)
const ToggleGroupItem = withContext(ArkToggleGroup.Item, 'item')

const Root = ToggleGroup
const Item = ToggleGroupItem

export {
  // ToggleGroup,
  // ToggleGroupItem

  Item,
  Root,
}
