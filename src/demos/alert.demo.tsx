import { InfoIcon } from './lucide-icons'
import type { AlertProps } from '../ui/alert'
import * as Alert from '../ui/alert'

export const Demo = (props: AlertProps) => {
  return (
    <Alert.Root {...props}>
      <Alert.Icon asChild>
        <InfoIcon />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>Browser Update available</Alert.Title>
        <Alert.Description>
          For the best experience, please update your browser.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
