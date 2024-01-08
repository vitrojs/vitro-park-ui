import { PinInput as ArkPinInput } from '@vitro/ark/pin-input'

import { pinInput } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pinInput)

const PinInput = withProvider(ArkPinInput.Root, 'root')
const PinInputControl = withContext(ArkPinInput.Control, 'control')
const PinInputInput = withContext(ArkPinInput.Input, 'input')
const PinInputLabel = withContext(ArkPinInput.Label, 'label')

const Root = PinInput
const Control = PinInputControl
const Input = PinInputInput
const Label = PinInputLabel

export {
  Control,
  Input,
  Label,
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputLabel,
  Root,
}
