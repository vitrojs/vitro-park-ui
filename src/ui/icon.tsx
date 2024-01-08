import { CombineProps } from '../lib/create-style-context'
import { icon, type IconVariantProps } from 'styled-system/recipes'

type Props = CombineProps<
  JSX.IntrinsicElements['svg'],
  IconVariantProps & { children: JSX.Child }
>

export const Icon = (props: Props) => {
  const [iconProps, otherProps] = icon.splitVariantProps(props)
  return (
    <svg asChild {...otherProps} class={[icon(iconProps), otherProps.class]} />
  )
}
