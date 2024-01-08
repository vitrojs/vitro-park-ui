import { Switch as ArkSwitch } from '@vitro/ark/switch'

import { switchRecipe } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(switchRecipe)

const Switch = withProvider(ArkSwitch.Root, 'root')
const SwitchControl = withContext(ArkSwitch.Control, 'control')
const SwitchLabel = withContext(ArkSwitch.Label, 'label')
const SwitchThumb = withContext(ArkSwitch.Thumb, 'thumb')

const Root = Switch
const Control = SwitchControl
const Label = SwitchLabel
const Thumb = SwitchThumb

export {
  Control,
  Label,
  Root,
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
  Thumb,
}
