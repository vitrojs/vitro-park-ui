import { Popover as ArkPopover } from '@vitro/ark/popover'

import { popover } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(popover)

const Popover = withProvider(ArkPopover.Root)
const PopoverAnchor = withContext(ArkPopover.Anchor, 'anchor')
const PopoverArrow = withContext(ArkPopover.Arrow, 'arrow')
const PopoverArrowTip = withContext(ArkPopover.ArrowTip, 'arrowTip')
const PopoverCloseTrigger = withContext(ArkPopover.CloseTrigger, 'closeTrigger')
const PopoverContent = withContext(ArkPopover.Content, 'content')
const PopoverDescription = withContext(ArkPopover.Description, 'description')
const PopoverIndicator = withContext(ArkPopover.Indicator, 'indicator')
const PopoverPositioner = withContext(ArkPopover.Positioner, 'positioner')
const PopoverTitle = withContext(ArkPopover.Title, 'title')
const PopoverTrigger = withContext(ArkPopover.Trigger, 'trigger')

const Root = Popover
const Anchor = PopoverAnchor
const Arrow = PopoverArrow
const ArrowTip = PopoverArrowTip
const CloseTrigger = PopoverCloseTrigger
const Content = PopoverContent
const Description = PopoverDescription
const Indicator = PopoverIndicator
const Positioner = PopoverPositioner
const Title = PopoverTitle
const Trigger = PopoverTrigger

export {
  Anchor,
  Arrow,
  ArrowTip,
  CloseTrigger,
  Content,
  Description,
  Indicator,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverIndicator,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  Positioner,
  Root,
  Title,
  Trigger,
}
