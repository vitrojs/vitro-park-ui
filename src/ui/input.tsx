import { CombineProps } from '../lib/create-style-context'
import { InputVariantProps, input } from 'styled-system/recipes'

type Props = CombineProps<JSX.IntrinsicElements['input'], InputVariantProps>

export const Input = (props: Props) => {
  const [inputProps, otherProps] = input.splitVariantProps(props)
  return <input {...otherProps} class={[input(inputProps), otherProps.class]} />
}
