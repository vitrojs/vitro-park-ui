import { Toast as ArkToast } from '@vitro/ark/toast'

import { toast } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

const Toast = withProvider(ArkToast.Root, 'root')
const ToastCloseTrigger = withContext(ArkToast.CloseTrigger, 'closeTrigger')
const ToastDescription = withContext(ArkToast.Description, 'description')
const ToastGroup = withContext(ArkToast.Group, 'group')
const ToastTitle = withContext(ArkToast.Title, 'title')

const Root = Toast
const CloseTrigger = ToastCloseTrigger
const Description = ToastDescription
const Group = ToastGroup
const Title = ToastTitle

export {
  CloseTrigger,
  Description,
  Group,
  Root,
  Title,
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastTitle,
}
