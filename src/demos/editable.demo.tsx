import { Button } from '../ui/button'
import type { EditableProps } from '../ui/editable'
import * as Editable from '../ui/editable'
import { FormLabel } from '../ui/form-label'

export const Demo = (props: EditableProps) => {
  return (
    <Editable.Root
      placeholder='Your favorite Framework'
      defaultValue='Double click to edit'
      activationMode='dblclick'
      {...props}
    >
      {(state) => (
        <>
          <Editable.Label asChild>
            <FormLabel>Framework</FormLabel>
          </Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            {state.isEditing ? (
              <>
                <Editable.SubmitTrigger asChild>
                  <Button variant='link'>Save</Button>
                </Editable.SubmitTrigger>
                <Editable.CancelTrigger asChild>
                  <Button variant='link'>Cancel</Button>
                </Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger asChild>
                <Button variant='link'>Edit</Button>
              </Editable.EditTrigger>
            )}
          </Editable.Control>
        </>
      )}
    </Editable.Root>
  )
}
