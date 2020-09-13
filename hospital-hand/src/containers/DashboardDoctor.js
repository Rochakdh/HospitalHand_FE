import React, { Component } from 'react'
import { Input, Table, Icon, Button } from 'semantic-ui-react'
import DashboardAddDoctor from './DashboardAddDoctor'
import DashboardDoctorAppointmentDetail from './DashboardDoctorAppointmentDetail'
import setup from '../api/setup'
import Authenticated from '../api/Authenticated'
import DashboardUpdateDoctor from './DashboardUpdateDoctor'
import DashboardDeleteDoctor from './DashboardDeleteDoctor'
import Axios from 'axios'

const color = "teal"


export default class DashboardDoctor extends Component {

    state = {
        updateDoctorOpen: false,
        deleteDoctorOpen: true,

        doctorAppointmentOpen: false,
    }

    constructor(props) {
        super(props)
        this.state = {
            isAddOpen: false,
            allDepartment: [],
            userId: this.props.userId,
            doctordetail: [],
            doctorAppointment: []


        }
        setup.get('/categories/alldepartment/', null)
            .then((response) => {
                this.setState({
                    allDepartment: response.data
                })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
        Authenticated.get('/categories/list/', null)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    doctordetail: response.data
                })
            })

            .catch((error) => {
                console.log(error)
            });

        this.updateDoctorList = this.updateDoctorList.bind(this)
    }

    AddDoctorOpen = () => {
        this.setState({
            isAddOpen: true
        })

    }

    onAddClose = () => {
        this.setState({
            isAddOpen: false
        })
    }

    updateDoctor = (id, name, email, contact_number, experience, department) => {
        this.setState({
            updateDoctorOpen: true,

            id: id,
            name: name,
            email: email,
            contact_number: contact_number,
            experience: experience,
            department: department
        })

        console.log(id)
    }
    onUpdateClose = () => {
        this.setState({
            updateDoctorOpen: false
        })
    }

    deleteDoctor = (id) => {

        this.setState({
            id: id,
            deleteDoctorOpen: true,

        })
    }

    onCloseDeleteDoctor = () => {
        this.setState({
            deleteDoctorOpen: false
        })
    }
    updateDoctorList = () => {
        Authenticated.get('/categories/list/', null)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    doctordetail: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    doctorAppointments = (id) => {
        this.setState({
            doctor_id: id,
            doctorAppointmentOpen: true
        })
        Axios.get(`http://127.0.0.1:8000/appointment/doctor/${id}`)
            .then((appointment) => {
                this.setState({
                    doctorAppointment: appointment.data
                })
                console.log(this.state.doctorAppointment)

            })
    }

    onAppDetailClose = () => {
        this.setState({
            doctorAppointmentOpen: false
        })
    }


    render() {
        const { doctor_id, allDepartment, isAddOpen, updateDoctorOpen, id, name, contact_number, experience, department, email } = this.state
        const { data } = this.state.doctorAppointment
        return (
            <>
                <div className="hospital-work">
                    <h3>Doctor List</h3>
                    <DashboardAddDoctor onClose={this.onAddClose} isAddOpen={isAddOpen} allDepartment={allDepartment} updateDoctorList={this.updateDoctorList} />
                    <DashboardUpdateDoctor id={id} name={name} contact_number={contact_number} experience={experience} department={department} email={email} onClose={this.onUpdateClose} isUpdateOpen={updateDoctorOpen} allDepartment={allDepartment} />
                    <DashboardDeleteDoctor deleteDoctorOpen={this.state.deleteDoctorOpen} onClose={this.onCloseDeleteDoctor} id={id} ></DashboardDeleteDoctor>
                    <DashboardDoctorAppointmentDetail doctorAppointment={this.state.doctorAppointment} onClose={this.onAppDetailClose} doctorAppointmentOpen={this.state.doctorAppointmentOpen} id={doctor_id} />


                    <Button
                        onClick={this.AddDoctorOpen}
                        floated='right'
                        icon='doctor'
                        labelPosition='left'
                        color='teal'
                        size='small'
                    >
                        <Icon name='user' /> Add User
                </Button>

                    <Input icon="search" placeholder="Search Doctor"></Input>
                    <Table color={color} key={color} inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Doctor</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Phone No.</Table.HeaderCell>
                                <Table.HeaderCell>Experience</Table.HeaderCell>
                                <Table.HeaderCell>Department</Table.HeaderCell>
                                <Table.HeaderCell>See Appointment</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        {this.state.doctordetail.map(doctor =>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{doctor.name}</Table.Cell>
                                    <Table.Cell>{doctor.email}</Table.Cell>
                                    <Table.Cell>{doctor.contact_number}</Table.Cell>
                                    <Table.Cell>{doctor.experience}</Table.Cell>
                                    <Table.Cell>{doctor.department}</Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={this.doctorAppointments.bind(this, doctor.id)} color='blue'>Appointments</Button>
                                    </Table.Cell>
                                    <Table.Cell>

                                        <Button onClick={this.updateDoctor.bind(this, doctor.id, doctor.name, doctor.email, doctor.contact_number, doctor.experience, doctor.department)} circular color='yellow' icon='edit' />
                                        <Button onClick={this.deleteDoctor.bind(this, doctor.id)} circular color='red' icon='delete' />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        )}
                    </Table>
                </div>
            </>
        )
    }
}
