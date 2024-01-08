import type { AvatarProps } from '../ui/avatar'
import * as Avatar from '../ui/avatar'

export const Demo = (props: AvatarProps) => {
  return (
    <Avatar.Root {...props}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src='https://i.pravatar.cc/300' alt='avatar' />
    </Avatar.Root>
  )
}
