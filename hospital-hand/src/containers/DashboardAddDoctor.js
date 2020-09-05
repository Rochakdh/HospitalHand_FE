import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import setup from '../api/setup'
import Authenticated from '../api/Authenticated'


export default class DashboardAddDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setOpen: false,
            "name": '',
            "experience": '',
            "department": '',
            "hospital": [],
            "contact_number": '',
            "email": '',
        }
        Authenticated.get('/user/',null).then(
            (response)=>{
                console.log(response.data[0].id)
                this.setState({
                    hospital:[response.data[0].id]
                })
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )


    };
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state.department)

    }
    onAddUser = ()=>{
        console.log(this.state.department)
        Authenticated.post('/categories/create/',{
            "name": this.state.name,
            "experience":this.state.experience,
            "department": this.state.department,
            "hospital": [this.state.hospital],
            "contact_number": this.state.contact_number,
            "email": this.state.email,
        }).then(
            (response)=>{
                alert(response)
            }
        ).catch(
            (error)=>{
                alert(error)
            }
        )

    }
    render() {

        const { allDepartment, isAddOpen, onClose } = this.props
        console.log(allDepartment)
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
                    <Modal.Actions>
                        <Form onSubmit={this.onAddUser}>
                            <Form.Field>
                                <label>Date</label>
                                <input placeholder='Full Name' type='text' name='name' onChange={this.onChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' type='email' name='email' onChange={this.onChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Experience</label>
                                <input placeholder='Experience' type='number' name='experience' onChange={this.onChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Contact</label>
                                <input placeholder='Phone No.' type='number' name='contact_number' onChange={this.onChange}/>
                            </Form.Field>
                            <br />
                            <Form.Field>

                                <select name='department' onChange={this.onChange}>  
                                    <option disabled> Department </option>
                                    {
                                        allDepartment.map(department =>
                                            <option   value={department.id} >
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
                            <Button type="submit" color='green' inverted onClick={() => this.setState({ setOpen: false })}>
                                <Icon name='checkmark' /> Yes
                            </Button>
                        </Form>
                    </Modal.Actions>
                </Modal>
            </>

        )
    }
}

