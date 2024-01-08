import { RadioGroup as ArkRadioGroup } from '@vitro/ark/radio-group'

import { radioGroup } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

const RadioGroup = withProvider(ArkRadioGroup.Root, 'root')
const RadioGroupIndicator = withContext(ArkRadioGroup.Indicator, 'indicator')
const RadioGroupItem = withContext(ArkRadioGroup.Item, 'item')
const RadioGroupItemControl = withContext(
  ArkRadioGroup.ItemControl,
  'itemControl',
)
const RadioGroupItemText = withContext(ArkRadioGroup.ItemText, 'itemText')
const RadioGroupLabel = withContext(ArkRadioGroup.Label, 'label')

const Root = RadioGroup
const Indicator = RadioGroupIndicator
const Item = RadioGroupItem
const ItemControl = RadioGroupItemControl
const ItemText = RadioGroupItemText
const Label = RadioGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
  Root,
}
