import { CombineProps } from '../lib/create-style-context'
import { code as codeRecipe, CodeVariantProps } from 'styled-system/recipes'

type Props = CombineProps<JSX.IntrinsicElements['code'], CodeVariantProps>

export const Code = (props: Props) => {
  const [codeProps, otherProps] = codeRecipe.splitVariantProps(props)
  return (
    <code {...otherProps} class={[codeRecipe(codeProps), otherProps.class]} />
  )
}
