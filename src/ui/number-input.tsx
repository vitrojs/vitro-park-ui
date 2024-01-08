import { NumberInput as ArkNumberInput } from '@vitro/ark/number-input'

import { numberInput } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(numberInput)

const NumberInput = withProvider(ArkNumberInput.Root, 'root')
const NumberInputControl = withContext(ArkNumberInput.Control, 'control')
const NumberInputDecrementTrigger = withContext(
  ArkNumberInput.DecrementTrigger,
  'decrementTrigger',
)
const NumberInputIncrementTrigger = withContext(
  ArkNumberInput.IncrementTrigger,
  'incrementTrigger',
)
const NumberInputInput = withContext(ArkNumberInput.Input, 'input')
const NumberInputLabel = withContext(ArkNumberInput.Label, 'label')
const NumberInputScrubber = withContext(ArkNumberInput.Scrubber, 'scrubber')

const Root = NumberInput
const Control = NumberInputControl
const DecrementTrigger = NumberInputDecrementTrigger
const IncrementTrigger = NumberInputIncrementTrigger
const Input = NumberInputInput
const Label = NumberInputLabel
const Scrubber = NumberInputScrubber

export {
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input,
  Label,
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputScrubber,
  Root,
  Scrubber,
}
