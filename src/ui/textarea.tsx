import { CombineProps } from '../lib/create-style-context'
import { textarea, TextareaVariantProps } from 'styled-system/recipes'

type Props = CombineProps<
  JSX.IntrinsicElements['textarea'],
  TextareaVariantProps
>
export const Textarea = (props: Props) => {
  const [variantProps, otherProps] = textarea.splitVariantProps(props)

  return (
    <textarea
      {...otherProps}
      class={[textarea(variantProps), otherProps.class]}
    />
  )
}
