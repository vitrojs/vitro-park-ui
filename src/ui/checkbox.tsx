import { Checkbox as ArkCheckbox } from '@vitro/ark/checkbox'

import { checkbox } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(checkbox)

const Checkbox = withProvider(ArkCheckbox.Root, 'root')
const CheckboxControl = withContext(ArkCheckbox.Control, 'control')
const CheckboxIndicator = withContext(ArkCheckbox.Indicator, 'indicator')
const CheckboxLabel = withContext(ArkCheckbox.Label, 'label')

const Root = Checkbox
const Control = CheckboxControl
const Indicator = CheckboxIndicator
const Label = CheckboxLabel

export {
  Checkbox,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxLabel,
  Control,
  Indicator,
  Label,
  Root,
}
