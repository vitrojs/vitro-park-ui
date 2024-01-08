import { CombineProps } from '../lib/create-style-context'
import { kbd, KbdVariantProps } from 'styled-system/recipes'

type Props = CombineProps<JSX.IntrinsicElements['kbd'], KbdVariantProps>
export const Kbd = (props: Props) => {
  const [kbdProps, variantProps] = kbd.splitVariantProps(props)
  return <kbd {...variantProps} class={[kbd(kbdProps), variantProps.class]} />
}
