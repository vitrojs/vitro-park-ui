import { ChevronDownIcon } from './lucide-icons'

import { For } from 'vitro'
import * as Accordion from '../ui/accordion'

export const Demo = () => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <Accordion.Root value={['React']} multiple>
      <For values={items}>
        {(item) => (
          <Accordion.Item value={item} disabled={item === 'Svelte'}>
            <Accordion.ItemTrigger>
              {item}
              <Accordion.ItemIndicator>
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <div>
                Pudding donut gummies chupa chups oat cake marzipan biscuit
                tart. Dessert macaroon ice cream bonbon jelly. Jelly topping
                tiramisu halvah lollipop.
              </div>
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}
