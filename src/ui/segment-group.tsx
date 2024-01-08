import { SegmentGroup as ArkSegmentGroup } from '@vitro/ark/segment-group'

import { segmentGroup } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

const SegmentGroup = withProvider(ArkSegmentGroup.Root, 'root')
const SegmentGroupIndicator = withContext(
  ArkSegmentGroup.Indicator,
  'indicator',
)
const SegmentGroupItem = withContext(ArkSegmentGroup.Item, 'item')
const SegmentGroupItemControl = withContext(
  ArkSegmentGroup.ItemControl,
  'itemControl',
)
const SegmentGroupItemText = withContext(ArkSegmentGroup.ItemText, 'itemText')
const SegmentGroupLabel = withContext(ArkSegmentGroup.Label, 'label')

const Root = SegmentGroup
const Indicator = SegmentGroupIndicator
const Item = SegmentGroupItem
const ItemControl = SegmentGroupItemControl
const ItemText = SegmentGroupItemText
const Label = SegmentGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  Root,
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemControl,
  SegmentGroupItemText,
  SegmentGroupLabel,
}
