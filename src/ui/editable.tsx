import { Editable as ArkEditable } from '@vitro/ark/editable'

import { editable } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

const Editable = withProvider(ArkEditable.Root, 'root')
const EditableArea = withContext(ArkEditable.Area, 'area')
const EditableCancelTrigger = withContext(
  ArkEditable.CancelTrigger,
  'cancelTrigger',
)
const EditableControl = withContext(ArkEditable.Control, 'control')
const EditableEditTrigger = withContext(ArkEditable.EditTrigger, 'editTrigger')
const EditableInput = withContext(ArkEditable.Input, 'input')
const EditableLabel = withContext(ArkEditable.Label, 'label')
const EditablePreview = withContext(ArkEditable.Preview, 'preview')
const EditableSubmitTrigger = withContext(
  ArkEditable.SubmitTrigger,
  'submitTrigger',
)

const Root = Editable
const Area = EditableArea
const CancelTrigger = EditableCancelTrigger
const Control = EditableControl
const EditTrigger = EditableEditTrigger
const Input = EditableInput
const Label = EditableLabel
const Preview = EditablePreview
const SubmitTrigger = EditableSubmitTrigger

export {
  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
  Input,
  Label,
  Preview,
  Root,
  SubmitTrigger,
}
