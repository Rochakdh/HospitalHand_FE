import React, { Component } from 'react'
import { Input, Table, Icon, Button } from 'semantic-ui-react'
import ModalExampleBasic from './Approve'
import ModalExampleScrollingContent from './DashboardPatientDetail'
import Axios from 'axios'
import Approve from './Approve'
const color = 'teal'

export default class DashboardPatient extends Component {

    state = {
        data: this.props.data,

        updateapproveOpen: false

    }


    approveOpen = (id, fixed_appointment, appointment_date, appointment_time, doctor_requested) => {
        this.setState({
            appointment_date: appointment_date,
            appointment_time: appointment_time,
            doctor_requested: doctor_requested,
            id: id,
            fixed_appointment: fixed_appointment,


            updateapproveOpen: true
        })

    }

    onClose = () => {
        this.setState({
            updateapproveOpen: false
        })
    }

    deleteAppointment = (id) => {
        Axios.delete(`http://127.0.0.1:8000/appointment/profile/delete/${id}`)
            .then((response) => {


                alert('Appointment Deleted')
                window.location.reload()



            })
    }

    render() {

        const { updateapproveOpen, appointment_date, appointment_time, doctor_requested, fixed_appointment, id } = this.state

        const userid = localStorage.getItem("userid")





        return (
            <>
                <div className="hospital-work">
                    <h3>Patient</h3>
                    <Input icon="search" placeholder="Search Patient"></Input>
                    <Table color={color} key={color} inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Patient</Table.HeaderCell>
                                <Table.HeaderCell>Doctor</Table.HeaderCell>
                                <Table.HeaderCell>Appointment Time</Table.HeaderCell>
                                <Table.HeaderCell>Appointment Date</Table.HeaderCell>
                                <Table.HeaderCell>Approve</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                this.state.data.map(appoint =>
                                    <Table.Row >
                                        <Table.Cell>{appoint.patient_name}</Table.Cell>
                                        <Table.Cell>{appoint.doctor_requested}</Table.Cell>
                                        <Table.Cell>{appoint.appointment_time}</Table.Cell>
                                        <Table.Cell>{appoint.appointment_date}</Table.Cell>
                                        <Table.Cell>
                                            <Approve id={id} fixed_appointment={fixed_appointment} doctor_requested={doctor_requested} appointment_date={appointment_date} appointment_time={appointment_time} approveOpen={this.approveOpen} updateapproveOpen={updateapproveOpen} onClose={this.onClose} />
                                            <Button onClick={this.approveOpen.bind(this, appoint.id, appoint.fixed_appointment, appoint.appointment_date, appoint.appointment_time, appoint.doctor_requested)} circular color='yellow' icon='suitcase' />
                                            <Button onClick={this.deleteAppointment.bind(this, appoint.id)} circular color='red' icon='delete' />
                                        </Table.Cell>
                                        <Table.Cell>{(appoint.fixed_appointment) ? 'Approved' : 'Unapproved'} </Table.Cell>
                                    </Table.Row>

                                )
                            }

                        </Table.Body>
                    </Table>
                </div>
            </>
        )
    }
}
