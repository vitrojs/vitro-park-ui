import { CheckIcon, ChevronsUpDownIcon } from './lucide-icons'
import type { SelectProps } from '../ui/select'
import * as Select from '../ui/select'

export const Demo = (props: SelectProps) => {
  const items = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
  ]

  return (
    <Select.Root
      positioning={{ sameWidth: true }}
      width='2xs'
      {...props}
      items={items}
    >
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder='Select a Framework' />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup id='framework'>
            <Select.ItemGroupLabel htmlFor='framework'>
              Framework
            </Select.ItemGroupLabel>
            {items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
