import { Stack } from 'styled-system/jsx'
import { FormLabel } from '../ui/form-label'
import { Input, type InputProps } from '../ui/input'

export const Demo = (props: InputProps) => {
  return (
    <Stack gap='1.5' width='2xs'>
      <FormLabel htmlFor='name'>Name</FormLabel>
      <Input id='name' placeholder='Your Name' {...props} />
    </Stack>
  )
}
