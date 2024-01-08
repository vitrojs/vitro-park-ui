import { Dialog as ArkDrawer } from '@vitro/ark/dialog'

import { drawer } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(drawer)

const Drawer = withProvider(ArkDrawer.Root)
const DrawerBackdrop = withContext(ArkDrawer.Backdrop, 'backdrop')
const DrawerBody = withContext('div', 'body')
const DrawerCloseTrigger = withContext(ArkDrawer.CloseTrigger, 'closeTrigger')
const DrawerContent = withContext(ArkDrawer.Content, 'content')
const DrawerDescription = withContext(ArkDrawer.Description, 'description')
const DrawerFooter = withContext('div', 'footer')
const DrawerHeader = withContext('div', 'header')
const DrawerPositioner = withContext(ArkDrawer.Positioner, 'positioner')
const DrawerTitle = withContext(ArkDrawer.Title, 'title')
const DrawerTrigger = withContext(ArkDrawer.Trigger, 'trigger')

const Root = Drawer
const Backdrop = DrawerBackdrop
const Body = DrawerBody
const CloseTrigger = DrawerCloseTrigger
const Content = DrawerContent
const Description = DrawerDescription
const Footer = DrawerFooter
const Header = DrawerHeader
const Positioner = DrawerPositioner
const Title = DrawerTitle
const Trigger = DrawerTrigger

export {
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Description,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerTitle,
  DrawerTrigger,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
}
