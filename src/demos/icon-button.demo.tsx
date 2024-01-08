import { ArrowRightIcon } from './lucide-icons'
import { IconButton, type IconButtonProps } from '../ui/icon-button'

export const Demo = (props: IconButtonProps) => {
  return (
    <IconButton {...props} aria-label='Next Page'>
      <ArrowRightIcon />
    </IconButton>
  )
}
