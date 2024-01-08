import { RatingGroup as ArkRatingGroup } from '@vitro/ark/rating-group'

import { ratingGroup } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(ratingGroup)

const RatingGroup = withProvider(ArkRatingGroup.Root, 'root')
const RatingGroupControl = withContext(ArkRatingGroup.Control, 'control')
const RatingGroupItem = withContext(ArkRatingGroup.Item, 'item')
const RatingGroupLabel = withContext(ArkRatingGroup.Label, 'label')

const Root = RatingGroup
const Control = RatingGroupControl
const Item = RatingGroupItem
const Label = RatingGroupLabel

export {
  Control,
  Item,
  Label,
  RatingGroup,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupLabel,
  Root,
}
