import React, { Component } from 'react'
import { Modal, Form, Input, Button } from 'semantic-ui-react'
import Axios from 'axios'

export default class Approve extends Component {

  state = {
    fixed_appointment: this.props.fixed_appointment
  }


  onCloseApproveAppointClick = () => {
    this.props.onClose()


  }

  onChangeAppoint = (event) => {
    this.setState({

      [event.target.name]: event.target.value,
      id: this.props.id,

    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    console.log(token)

    Axios.patch(`http://127.0.0.1:8000/appointment/hospital/update/${this.state.id}`, this.state)
      .then((response) => {

        if (response.status === 200) {
          alert('Appointment Created!')
          window.location.reload()

        }

      })
  }

  approveChange = () => {

    this.setState({
      fixed_appointment: true
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

    const { updateapproveOpen, appointment_date, appointment_time, doctor_requested } = this.props

    return (
      <div>
        <Modal style={modalStyle} open={updateapproveOpen} onClose={this.onCloseApproveAppointClick} >
          <Modal.Header>Appointment Set For {doctor_requested}</Modal.Header>
          <Modal.Content >
            <Form style={formStyle} onSubmit={this.onFormSubmit}>

              <Form.Field width={20} required>
                <label>Appointment Date</label>
                <Input name='appointment_date' type='date' onChange={this.onChangeAppoint} defaultValue={appointment_date} />
              </Form.Field>
              <Form.Field width={20} required>
                <label>Appointment Time</label>
                <Input name='appointment_time' type='time' onChange={this.onChangeAppoint} defaultValue={appointment_time} />
              </Form.Field>


              <Button onClick={this.approveChange} type='submit'>Approve Appointment</Button>


            </Form>
          </Modal.Content>

        </Modal>

      </div>
    )
  }
}
