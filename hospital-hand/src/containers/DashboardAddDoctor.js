import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import setup from '../api/setup'
import Authenticated from '../api/Authenticated'
import form from '../api/FormData'

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
            // 'isAddOpen':this.props.isAddOpen
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
                console.log(error.response.data)
            }
        )

            this.onAddUser=this.onAddUser.bind(this)
    };
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state.department)

    }
    onAddUser = ()=>{
        let formData = new FormData()
            // var imagedata = document.querySelector('input[type="file"]').files[0];
            formData.append("name",this.state.name)
            formData.append("experience",this.state.experience)
            formData.append("department",this.state.department)
            formData.append("hospital",this.state.hospital)
            formData.append("contact_number",this.state.contact_number)
            formData.append("email", this.state.email)
        form.post(`/categories/create/`,formData).then(
            (response)=>{
            alert("Succesfully Created")
            this.props.onClose()
        }).catch((error)=>{
                console.log(error)
            }
            // console.log(error.response.data)
            // console.log(this.state.department)
        )};
        

    
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

