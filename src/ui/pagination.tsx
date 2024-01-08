import { Pagination as ArkPagination } from '@vitro/ark/pagination'

import { pagination } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pagination)

const Pagination = withProvider(ArkPagination.Root, 'root')
const PaginationEllipsis = withContext(ArkPagination.Ellipsis, 'ellipsis')
const PaginationItem = withContext(ArkPagination.Item, 'item')
const PaginationNextTrigger = withContext(
  ArkPagination.NextTrigger,
  'nextTrigger',
)
const PaginationPrevTrigger = withContext(
  ArkPagination.PrevTrigger,
  'prevTrigger',
)

const Root = Pagination
const Ellipsis = PaginationEllipsis
const Item = PaginationItem
const NextTrigger = PaginationNextTrigger
const PrevTrigger = PaginationPrevTrigger

export {
  Ellipsis,
  Item,
  NextTrigger,
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PrevTrigger,
  Root,
}
