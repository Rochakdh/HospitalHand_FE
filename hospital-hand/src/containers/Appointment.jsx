import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Checkbox, Form } from 'semantic-ui-react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class Appointment extends Component {

    state = {

        error_message: '',

        patient_name: '',
        authentication_token: '',

        patient_problem_description: '',
        medicines_taken: '',
        doctor_requested: '',
        appointment_time: '',
        appointment_date: '',
        select_hospital: '',
        hiddenProfile: true

    }

    onCloseAppointmentWindow = () => {

        this.props.onClose()
    }

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value,
                doctor_requested: this.props.name,
                select_hospital: this.props.hospital

            }
        );
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
        const token = localStorage.getItem("token")
        this.setState({ authentication_token: token })
        if (token === null) {

            alert('Login First To Send Appointment')

        }
        else {
            Axios.post(`http://127.0.0.1:8000/appointment/create/`, this.state)
                .then((response) => {
                    this.setState({
                        'error_message': '',

                    })
                    console.log(this.state)




                    if (response.status === 201) {
                        alert('Appointment Sucess !! Check Your Profile Or Appoint More')
                        this.setState({
                            hiddenProfile: false,

                        })

                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                    let errorData = error.response.data
                    for (var errorMsg in errorData) {
                        if (errorData.hasOwnProperty(errorMsg)) {
                            this.setState({
                                error_message: errorData[errorMsg]
                            });
                        }
                    }
                });
        }

    }


    render() {


        const modalStyle = {

            marginLeft: 22 + "em",
            marginTop: 2 + "em",
            height: 'auto'

        };

        const labelStyle = {
            color: 'white',
            fontSize: 20
        }



        const { appointOpen, name, hospital } = this.props



        return (


            <Modal

                style={modalStyle}
                basic
                open={appointOpen}
                size='small'

            >
                <Header icon>
                    <Icon name='archive' />
                    Appoint {name} ?
                </Header>
                <Modal.Content>

                    <Form onSubmit={this.handleSubmit}>


                        {this.state.error_message &&
                            <h3 className="error"> {this.state.error_message} </h3>}

                        <Form.Field required>
                            <label style={labelStyle}>Full Name</label>
                            <input name="patient_name" onChange={this.handleChange}></input>
                        </Form.Field>

                        <Form.Field >
                            <label style={labelStyle}>Selected Hospital</label>
                            {hospital}

                        </Form.Field>
                        <Form.Field required >
                            <label style={labelStyle}>Problem Description</label>
                            <textarea name="patient_problem_description" onChange={this.handleChange} placeholder='Explain Your Problem so we can Help you more.' />
                        </Form.Field>
                        <Form.Field required>
                            <label style={labelStyle}>Medicines Taken</label>
                            <input name="medicines_taken" onChange={this.handleChange}></input>
                        </Form.Field>
                        <Form.Field required>
                            <label aria-required style={labelStyle}>Appointment Date</label>
                            <input name="appointment_date" onChange={this.handleChange} type="date"></input>
                        </Form.Field>
                        <Form.Field required>
                            <label aria-required style={labelStyle}>Appointment Time</label>
                            <input name="appointment_time" onChange={this.handleChange} type="time"></input>
                        </Form.Field>


                        <Button type='submit' color='green' inverted >
                            <Icon name='checkmark' /> Confirm
                        </Button>&nbsp;&nbsp;&nbsp;
                        <a style={{ fontSize: 18 }} href='/profile' hidden={this.state.hiddenProfile}>
                            <strong style={{ color: 'yellow' }}>
                                Check Your Profile
                            </strong>

                        </a>

                    </Form>

                    <Button floated='right' basic color='red' inverted onClick={this.onCloseAppointmentWindow}>
                        <Icon name='remove' /> Cancel
                        </Button>

                </Modal.Content >


            </Modal >

        )
    }
}
