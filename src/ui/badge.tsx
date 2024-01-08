import { badge, BadgeVariantProps } from 'styled-system/recipes'

export const Badge = (
  props: BadgeVariantProps & JSX.IntrinsicElements['div'],
) => {
  const [variantProps, otherProps] = badge.splitVariantProps(props)

  return <div {...otherProps} class={[badge(variantProps), otherProps.class]} />
}
