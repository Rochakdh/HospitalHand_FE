import React, { Component } from 'react'
import { Icon, Menu, Button, Sidebar,Table,Input } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import Authenticated from '../api/Authenticated'
import AdminDashboardAddHospital from './AdminDashboardAddHospital'

const color= 'teal'
export default class AdminDashBoardHome extends Component {


    constructor(props) {
        super(props)
        let loggedIn = true
        let token = localStorage.getItem('token')
        // let userid = localStorage.getItem('userid')
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            isHome: true,
            isAddOpen: false,
            isDoctor: false,
            isAppointment: false,
            isNotice: false,
            loggedIn,
            userId: '',
            appointments: [],
            // departments:''
        }

        // Authenticated.get('/appointment/hospital/').then((response) => {
        //     this.setState({
        //         appointments: response.data,

        //     })
        //     console.log(response.data);
        // })
    //     this.onPatientDelete = this.onPatientDelete.bind(this)

    };
    // doctorProfile = (e) => {
    //     this.setState({
    //         isHome: false,
    //         isDoctor: true
    //     })
    // }
    homeProfile = (e) => {
        this.setState({
            isHome: true,
        })
    }
    // appointmentProfile = (e) => {
    //     this.setState({
    //         isAppointment: true,
    //         isHome: false,
    //         isDoctor: false,
    //         isNotice: false
    //     })


    // }

    // noticeProfile = (e) => {
    //     this.setState({
    //         isAppointment: false,
    //         isHome: false,
    //         isDoctor: false,
    //         isNotice: true
    //     })


    // }

    AddDoctorOpen = () => {
        this.setState({
            isAddOpen: true
        })

    }

    logout = (e) => {
        localStorage.removeItem("token")
        // localStorage.removeItem("userid")

        this.setState({
            loggedIn: false
        })
    }
 
    // onPatientDelete = (index)=>{
    //     this.setState(prevState => {
    //         const appointments = prevState.appointments.filter(appointment => appointment.id !== index);
    //         return { appointments };
    //     });
    //     console.log(this.state.appointments)
    // }
    onAddClose = () => {
        this.setState({
            isAddOpen: false
        })
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/admin/'> </Redirect>
        }
        const { allDepartment, isAddOpen, updateDoctorOpen, id, name, contact_number, experience, department, email } = this.state

        return (
            <>
                <div className="side-bar">
                    <div className="row">
                        <div className="col-md-2 side-bar-left">
                            <Sidebar
                                as={Menu}
                                animation='overlay'
                                icon='labeled'
                                inverted
                                vertical
                                visible
                                width='thin'
                                className="col-md-2"
                            >
                                <Menu.Item as='a' onClick={this.homeProfile}>
                                    <Icon name='home' />
                                    Home
                                </Menu.Item>
                            </Sidebar>
                        </div>
                        <div className="col-md-10 side-bar-right">
                            <div className="hospital-info">
                                <nav className="navbar justify-content-between">
                                    <div className="navbar-brand">Admin Hospital DashBoard</div>
                                    <div className="form-inline">
                                        <p><Button onClick={this.logout}>Logout</Button></p>
                                    </div>
                                </nav>
                            </div>

                            <div className="hospital-work">
                    <h3>Doctor List</h3>
                    <AdminDashboardAddHospital onClose={this.onAddClose} isAddOpen={isAddOpen} />
                    {/* <DashboardUpdateDoctor id={id} name={name} contact_number={contact_number} experience={experience} department={department} email={email} onClose={this.onUpdateClose} isUpdateOpen={updateDoctorOpen} allDepartment={allDepartment} updateDoctorList={this.updateDoctorList}/>
                    <DashboardDeleteDoctor deleteDoctorOpen={this.state.deleteDoctorOpen} onClose={this.onCloseDeleteDoctor} id={id} updateDoctorList={this.updateDoctorList}></DashboardDeleteDoctor> */}

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

                        {/* {this.state.doctordetail.map(doctor => */}
                            <Table.Body>
                                <Table.Row>
                                    {/* <Table.Cell>{doctor.name}</Table.Cell>
                                    <Table.Cell>{doctor.email}</Table.Cell>
                                    <Table.Cell>{doctor.contact_number}</Table.Cell>
                                    <Table.Cell>{doctor.experience}</Table.Cell>
                                    <Table.Cell>{doctor.department}</Table.Cell> */}
                                    {/* <Table.Cell><DashboardDoctorAppointmentDetail /></Table.Cell> */}
                                    <Table.Cell>
{/* 
                                        <Button onClick={this.updateDoctor.bind(this, doctor.id, doctor.name, doctor.email, doctor.contact_number, doctor.experience, doctor.department)} circular color='yellow' icon='edit' />
                                        <Button onClick={this.deleteDoctor.bind(this, doctor.id)} circular color='red' icon='delete' /> */}
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        {/* )} */}
                    </Table>
                </div>
                            {/* {(this.state.isHome) ?  )} */}
                            {/* {(this.state.isHome) ? <DashboardHome /> : (this.state.isDoctor) ? <DashboardDoctor /> : (this.state.isNotice) ? <DashboardNotice /> : <DashboardPatient patients={this.state.appointments} onPatientDelete={this.onPatientDelete} />} */}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

