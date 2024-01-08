import { FileUpload as ArkFileUpload } from '@vitro/ark/file-upload'

import { fileUpload } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

const FileUpload = withProvider(ArkFileUpload.Root, 'root')
const FileUploadDropzone = withContext(ArkFileUpload.Dropzone, 'dropzone')
const FileUploadItem = withContext(ArkFileUpload.Item, 'item')
const FileUploadItemDeleteTrigger = withContext(
  ArkFileUpload.ItemDeleteTrigger,
  'itemDeleteTrigger',
)
const FileUploadItemGroup = withContext(ArkFileUpload.ItemGroup, 'itemGroup')
const FileUploadItemName = withContext(ArkFileUpload.ItemName, 'itemName')
const FileUploadItemPreview = withContext(
  ArkFileUpload.ItemPreview,
  'itemPreview',
)
const FileUploadItemPreviewImage = withContext(
  ArkFileUpload.ItemPreviewImage,
  'itemPreviewImage',
)
const FileUploadItemSizeText = withContext(
  ArkFileUpload.ItemSizeText,
  'itemSizeText',
)
const FileUploadLabel = withContext(ArkFileUpload.Label, 'label')
const FileUploadTrigger = withContext(ArkFileUpload.Trigger, 'trigger')

const Root = FileUpload
const Dropzone = FileUploadDropzone
const Item = FileUploadItem
const ItemDeleteTrigger = FileUploadItemDeleteTrigger
const ItemGroup = FileUploadItemGroup
const ItemName = FileUploadItemName
const ItemPreview = FileUploadItemPreview
const ItemPreviewImage = FileUploadItemPreviewImage
const ItemSizeText = FileUploadItemSizeText
const Label = FileUploadLabel
const Trigger = FileUploadTrigger

export {
  Dropzone,
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadTrigger,
  Item,
  ItemDeleteTrigger,
  ItemGroup,
  ItemName,
  ItemPreview,
  ItemPreviewImage,
  ItemSizeText,
  Label,
  Root,
  Trigger,
}
