import React from 'react'
import { Button, Modal, Table } from 'semantic-ui-react'

import { Component } from 'react'
import Axios from 'axios'
const color = "teal"


export default class DashboardDoctorAppointmentDetail extends Component {
  state = {
    doctorAppointment: []
  }

  componentDidMount() {
    Axios.get(`http://127.0.0.1:8000/appointment/doctor/${this.props.id}`)
      .then((appointment) => {
        this.setState({
          doctorAppointment: appointment.data
        })
      })

  }

  render() {
    return (
      <div><Modal
        basic
        closeIcon
        open={this.props.doctorAppointmentOpen}
        onClose={this.props.onClose}

      >
        <Modal.Header>Appointments </Modal.Header>
        <Modal.Content>
          <Table color={color} key={color} inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell >Patient Name</Table.HeaderCell>
                <Table.HeaderCell> Appointment Time</Table.HeaderCell>

              </Table.Row>
            </Table.Header>


            <Table.Body>
              {
                this.state.doctorAppointment.map(app =>

                  <Table.Row >
                    <Table.Cell>{app.patient_name}</Table.Cell>
                    <Table.Cell>{app.appointment_time}</Table.Cell>

                  </Table.Row>

                )
              }


            </Table.Body>
          </Table>
        </Modal.Content>
      </Modal>

      </div>
    )
  }
}
