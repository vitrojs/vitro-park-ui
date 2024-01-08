import { CombineProps } from '../lib/create-style-context'
import { link, LinkVariantProps } from 'styled-system/recipes'

type Props = CombineProps<JSX.IntrinsicElements['a'], LinkVariantProps>

export const Link = (props: Props) => {
  const [linkProps, variantProps] = link.splitVariantProps(props)
  return <a {...variantProps} class={[link(linkProps), variantProps.class]} />
}
