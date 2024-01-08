import { Tooltip as ArkTooltip } from '@vitro/ark/tooltip'

import { tooltip } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

const Tooltip = withProvider(ArkTooltip.Root)
const TooltipArrow = withContext(ArkTooltip.Arrow, 'arrow')
const TooltipArrowTip = withContext(ArkTooltip.ArrowTip, 'arrowTip')
const TooltipContent = withContext(ArkTooltip.Content, 'content')
const TooltipPositioner = withContext(ArkTooltip.Positioner, 'positioner')
const TooltipTrigger = withContext(ArkTooltip.Trigger, 'trigger')

const Root = Tooltip
const Arrow = TooltipArrow
const ArrowTip = TooltipArrowTip
const Content = TooltipContent
const Positioner = TooltipPositioner
const Trigger = TooltipTrigger

export {
  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Root,
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
  Trigger,
}
