import React from 'react'
import { Button, Header, Icon, Modal,Form } from 'semantic-ui-react'

function ModalExampleBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Button circular color='yellow' icon='suitcase' />}
        >
        <Header icon>
            <Icon name='calendar plus' />
            Fix Appointment
        </Header>
        <Modal.Content>
            <p>
            Fix Appointment Date And Time
            </p>
        </Modal.Content>
        <Modal.Actions>
        <Form>
            <Form.Field>
            <label>Date</label>
            <input placeholder='' type='Date' />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' type='Time' />
            </Form.Field>
            <br />
            <Button basic color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Yes
            </Button>
        </Form>
        
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic
