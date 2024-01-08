import { CombineProps } from '../lib/create-style-context'
import { iconButton, IconButtonVariantProps } from 'styled-system/recipes'

type Props = CombineProps<
  JSX.IntrinsicElements['button'],
  IconButtonVariantProps
>
export const IconButton = (props: Props) => {
  const [iconButtonProps, otherProps] = iconButton.splitVariantProps(props)

  return (
    <button
      {...otherProps}
      class={[iconButton(iconButtonProps), otherProps.class]}
    />
  )
}
