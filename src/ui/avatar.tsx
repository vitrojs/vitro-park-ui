import { Avatar as ArkAvatar } from '@vitro/ark/avatar'

import { avatar } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

const Avatar = withProvider(ArkAvatar.Root, 'root')
const AvatarFallback = withContext(ArkAvatar.Fallback, 'fallback')
const AvatarImage = withContext(ArkAvatar.Image, 'image')

const Root = Avatar
const Fallback = AvatarFallback
const Image = AvatarImage

export { Avatar, AvatarFallback, AvatarImage, Fallback, Image, Root }
