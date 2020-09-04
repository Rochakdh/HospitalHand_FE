import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import setup from '../api/setup'



export default class DashboardAddDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {

            setOpen: false,
            // open:false,
            department: "",

        }


    };
    selectedDepartment = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.allDepartment)

    }
    render() {

        const { allDepartment, isAddOpen, onClose } = this.props
        return (
            <>
                <Modal
                    basic
                    open={isAddOpen}


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

                                <select onChange={this.selectedDepartment}>

                                    {
                                        allDepartment.map(department =>
                                            <option value={department.id} >
                                                {department.department_name}
                                            </option>

                                        )
                                    }
                                </select>
                            </Form.Field>
                            <br />
                            <Button basic color='red' inverted onClick={onClose} >
                                <Icon name='remove' /> No
                                </Button>
                            <Button color='green' inverted onClick={() => this.setState({ setOpen: false })}>
                                <Icon name='checkmark' /> Yes
                            </Button>
                        </Form>
                    </Modal.Actions>
                </Modal>
            </>

        )
    }
}

