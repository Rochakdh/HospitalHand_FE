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
        trigger={<Button
            floated='right'
            icon = 'doctor'
            labelPosition='left'
            color='teal'
            size='small'
        >
            <Icon name='user' /> Add User
        </Button>}
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
            <input placeholder='Full Name' type='text' />
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input placeholder='Email' type='email' />
            </Form.Field>
            <Form.Field>
            <label>Contact</label>
            <input placeholder='Phone No.' type='number' />
            </Form.Field>
            <Form.Field>
            <label>Choose Department</label>
            <select name="department" id="department">
                <option value="none">Department</option>
                <option value="ent">ENT</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
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
