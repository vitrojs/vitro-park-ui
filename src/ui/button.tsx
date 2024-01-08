import { button, ButtonVariantProps } from 'styled-system/recipes'

type Props = Omit<JSX.IntrinsicElements['button'], keyof ButtonVariantProps> &
  ButtonVariantProps

export const Button = (props: Props) => {
  const [ButtonProps, otherProps] = button.splitVariantProps(props)

  return (
    <button {...otherProps} class={[button(ButtonProps), otherProps.class]} />
  )
}
