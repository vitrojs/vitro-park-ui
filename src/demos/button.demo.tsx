import { ArrowRightIcon } from './lucide-icons'
import { Button, type ButtonProps } from '../ui/button'

export const Demo = (props: ButtonProps) => {
  return (
    <Button {...props}>
      Button
      <ArrowRightIcon />
    </Button>
  )
}
