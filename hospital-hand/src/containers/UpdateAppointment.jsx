import React, { Component } from 'react'
import Nav from './Nav'
import { Form, Input, Button, Modal } from 'semantic-ui-react'
import Axios from 'axios'


export default class UpdateAppointment extends Component {

    state = {
        id: this.props.id,
        
    }




    onCloseUpdateAppointClick = () => {
        this.props.onClose()
        console.log(this.props.id)

    }

    onChangeAppoint = (event) => {
        this.setState({

            [event.target.name]: event.target.value,
            id: this.props.id,



        });
        console.log(this.state)
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        Axios.put(`http://127.0.0.1:8000/appointment/profile/update/${this.state.id}`, this.state)
            .then((response) => {

                if (response.status === 200) {
                    alert('Appointment Updated! Refresh To See Changes')

                }

            })




    }

    render() {
        const formStyle = {
            paddingLeft: 2 + "em",


        }

        const modalStyle = {

            backgroundColor: 'teal',
            marginLeft: 30 + "em",
            marginTop: 7 + "em",
            height: 'auto',
            width: 35 + "em",



        };

        const { id, updateappointOpen, patient_name, doctor_requested, select_hospital, appointment_time, appointment_date } = this.props



        return (
            <div>
                <Modal style={modalStyle} open={updateappointOpen} onClose={this.onCloseUpdateAppointClick} >
                    <Modal.Header>Appointment Update For {doctor_requested}, {select_hospital}</Modal.Header>
                    <Modal.Content >
                        <Form style={formStyle} onSubmit={this.onFormSubmit}>
                            <Form.Field width={20} required>
                                <label>Name Registered For Appointment</label>
                                <Input name='patient_name' onChange={this.onChangeAppoint} placeholder='Patient Name' defaultValue={patient_name} />
                            </Form.Field>
                            <Form.Field width={20} required>
                                <label>Date Registered For Appointment</label>
                                <Input name='appointment_date' onChange={this.onChangeAppoint} type='date' defaultValue={appointment_date} />
                            </Form.Field>
                            <Form.Field width={20} required>
                                <label>Time Registered For Appointment</label>
                                <Input name='appointment_time' onChange={this.onChangeAppoint} type='time' defaultValue={appointment_time} />
                            </Form.Field>


                            <Button type='submit'>Update Appointment</Button>


                        </Form>
                    </Modal.Content>

                </Modal>
            </div>

        )
    }
}