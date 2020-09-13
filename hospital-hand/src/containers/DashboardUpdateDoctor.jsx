import React, { Component } from 'react'
import { Modal, Form, Button, Icon, Header } from 'semantic-ui-react'
import Axios from 'axios'

export default class DashboardUpdateDoctor extends Component {


    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state.department)

    }

    updateDoctor = (e) => {

        e.preventDefault();

        Axios.patch(`http://127.0.0.1:8000/categories/update/${this.props.id}/`, this.state)
            .then((response) => {

                if (response.status === 200) {
                    alert('Doctor Updated! Refresh To See Changes')

                }

            })

    }

    render() {

        const { isUpdateOpen, id, name, email, contact_number, experience, department, allDepartment, onClose } = this.props
        return (
            <div>

                <Modal
                    basic
                    open={isUpdateOpen}
                    onClose={onClose}
                >
                    <Header icon>
                        <Icon name='calendar plus' />
                        Fix Appointment
                    </Header>
                    <Modal.Actions>
                        <Form onSubmit={this.updateDoctor} >
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='Full Name' type='text' name='name' onChange={this.onChange} defaultValue={name} />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' type='email' name='email' onChange={this.onChange} defaultValue={email} />
                            </Form.Field>
                            <Form.Field>
                                <label>Experience</label>
                                <input placeholder='Experience' type='number' name='experience' onChange={this.onChange} defaultValue={experience} />
                            </Form.Field>
                            <Form.Field>
                                <label>Contact</label>
                                <input placeholder='Phone No.' type='number' name='contact_number' onChange={this.onChange} defaultValue={contact_number} />
                            </Form.Field>
                            <br />
                            <Form.Field>

                                <select name='department' onChange={this.onChange}>
                                    <option>{department}  </option>
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
                            <Button type="submit" color='green' inverted >
                                <Icon name='checkmark' /> Yes
                            </Button>
                        </Form>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
