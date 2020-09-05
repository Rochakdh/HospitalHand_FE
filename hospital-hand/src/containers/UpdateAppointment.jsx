import React, { Component } from 'react'
import Nav from './Nav'
import { Form, Input, Button, Modal, TextArea } from 'semantic-ui-react'
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

        Axios.patch(`http://127.0.0.1:8000/appointment/profile/update/${this.state.id}`, this.state)
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

        const { id, updateappointOpen, patient_name, doctor_requested, select_hospital, patient_problem_description, medicines_taken } = this.props



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
                                <label>Patient Problem Description</label>
                                <TextArea name='patient_problem_description' onChange={this.onChangeAppoint} defaultValue={patient_problem_description} />
                            </Form.Field>
                            <Form.Field width={20} required>
                                <label>Medicines Taken</label>
                                <TextArea name='medicines_taken' onChange={this.onChangeAppoint} defaultValue={medicines_taken} />
                            </Form.Field>


                            <Button type='submit'>Update Appointment</Button>


                        </Form>
                    </Modal.Content>

                </Modal>
            </div>

        )
    }
}
