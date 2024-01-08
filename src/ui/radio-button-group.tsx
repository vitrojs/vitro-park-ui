import { RadioGroup as ArkRadioButtonGroup } from '@vitro/ark/radio-group'

import { radioButtonGroup } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

const RadioButtonGroup = withProvider(ArkRadioButtonGroup.Root, 'root')
const RadioButtonGroupIndicator = withContext(
  ArkRadioButtonGroup.Indicator,
  'indicator',
)
const RadioButtonGroupItem = withContext(ArkRadioButtonGroup.Item, 'item')
const RadioButtonGroupItemControl = withContext(
  ArkRadioButtonGroup.ItemControl,
  'itemControl',
)
const RadioButtonGroupItemText = withContext(
  ArkRadioButtonGroup.ItemText,
  'itemText',
)
const RadioButtonGroupLabel = withContext(ArkRadioButtonGroup.Label, 'label')

const Root = RadioButtonGroup
const Indicator = RadioButtonGroupIndicator
const Item = RadioButtonGroupItem
const ItemControl = RadioButtonGroupItemControl
const ItemText = RadioButtonGroupItemText
const Label = RadioButtonGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  RadioButtonGroup,
  RadioButtonGroupIndicator,
  RadioButtonGroupItem,
  RadioButtonGroupItemControl,
  RadioButtonGroupItemText,
  RadioButtonGroupLabel,
  Root,
}
