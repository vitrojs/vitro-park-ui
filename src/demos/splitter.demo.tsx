import type { SplitterProps } from '../ui/splitter'
import * as Splitter from '../ui/splitter'

export const Demo = (props: SplitterProps) => {
  return (
    <Splitter.Root
      size={[
        { id: 'a', size: 50 },
        { id: 'b', size: 50 },
      ]}
      {...props}
    >
      <Splitter.Panel id='a'>A</Splitter.Panel>
      <Splitter.ResizeTrigger id='a:b' />
      <Splitter.Panel id='b'>B</Splitter.Panel>
    </Splitter.Root>
  )
}
