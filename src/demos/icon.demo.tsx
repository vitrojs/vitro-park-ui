import { DiamondIcon } from './lucide-icons'
import { Icon, type IconProps } from '../ui/icon'

export const Demo = (props: IconProps) => {
  return (
    <Icon {...props}>
      <DiamondIcon />
    </Icon>
  )
}
