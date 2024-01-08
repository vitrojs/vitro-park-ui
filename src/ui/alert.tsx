import { AlertVariantProps, alert } from 'styled-system/recipes'
import { CombineProps, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

const Alert = withProvider('div', 'root')
const AlertContent = withContext('div', 'content')
const AlertDescription = withContext('p', 'description')
const AlertIcon = withContext('svg', 'icon')
const AlertTitle = withContext('h5', 'title')

const Root = Alert
const Content = AlertContent
const Description = AlertDescription
const Icon = AlertIcon
const Title = AlertTitle

export {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Content,
  Description,
  Icon,
  Root,
  Title,
}

export type AlertProps = CombineProps<
  JSX.HTMLAttributes<HTMLDivElement>,
  AlertVariantProps
>
