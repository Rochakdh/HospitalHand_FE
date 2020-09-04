import React, { Component } from 'react'
import { Button, Header, Icon, Modal,Form } from 'semantic-ui-react'
import setup from '../api/setup'



export default class DashboardAddDoctor extends Component {
    constructor(props){
        super(props)
        this.state={
            allDepartment: this.props.data,
            setOpen:false,
            // open:false,
            department: "",
        }
        

    };
    selectedDepartment = (item, index) => {
        this.setState({department:item})
    }
    render() {
        return (
            <>
                <Modal
                basic
                onClose={() => this.setState({setOpen:false})}
                onOpen={() => this.setState({setOpen:true})}
                open={this.state.setOpen}
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
                                <select>
                                    
                                    {
                                        this.state.allDepartment.map((item, index) =>
                                            <option value={index} onClick={this.selectedDepartment.bind(this, item, index)}>
                                                {item}
                                            </option>

                                        )
                                    }
                                </select>
                            </Form.Field>
                            <br />
                            <Button basic color='red' inverted onClick={() => this.setState({setOpen:false})} >
                                <Icon name='remove' /> No
                                </Button>
                                <Button color='green' inverted onClick={() => this.setState({setOpen:false})}>
                                <Icon name='checkmark' /> Yes
                            </Button>
                        </Form>
                    </Modal.Actions>
                </Modal>
            </>
            
        )
    }
}

