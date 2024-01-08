import { HoverCard as ArkHoverCard } from '@vitro/ark/hover-card'

import { hoverCard } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(hoverCard)

const HoverCard = withProvider(ArkHoverCard.Root)
const HoverCardArrow = withContext(ArkHoverCard.Arrow, 'arrow')
const HoverCardArrowTip = withContext(ArkHoverCard.ArrowTip, 'arrowTip')
const HoverCardContent = withContext(ArkHoverCard.Content, 'content')
const HoverCardPositioner = withContext(ArkHoverCard.Positioner, 'positioner')
const HoverCardTrigger = withContext(ArkHoverCard.Trigger, 'trigger')

const Root = HoverCard
const Arrow = HoverCardArrow
const ArrowTip = HoverCardArrowTip
const Content = HoverCardContent
const Positioner = HoverCardPositioner
const Trigger = HoverCardTrigger

export {
  Arrow,
  ArrowTip,
  Content,
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
  Positioner,
  Root,
  Trigger,
}
