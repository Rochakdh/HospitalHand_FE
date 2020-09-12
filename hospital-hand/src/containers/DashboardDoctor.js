import React, { Component } from 'react'
import { Input, Table, Icon, Button } from 'semantic-ui-react'
import DashboardAddDoctor from './DashboardAddDoctor'
import DashboardDoctorAppointmentDetail from './DashboardDoctorAppointmentDetail'
import setup from '../api/setup'
import Authenticated from '../api/Authenticated'

const color = "teal"


export default class DashboardDoctor extends Component {

    constructor(props){
        super(props)
        this.state = {
            isAddOpen: false,
            allDepartment: [],
            userId:this.props.userId,
            doctordetail:[],
    
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
        Authenticated.get('/categories/list/',null)
        .then((response) => {
            console.log(response.data)
            this.setState({
                doctordetail:response.data
            })
        })
        .catch((error) => {
            console.log(error)
        });
        
    }

    AddDoctorOpen = () => {
        this.setState({
            isAddOpen: true
        })

    }

    onAddClose=()=>{
        this.setState({
            isAddOpen:false
        })
    }

    render() {
        const { allDepartment, isAddOpen } = this.state
        return (
            <>
                <div className="hospital-work">
                    <h3>Doctor List</h3>
                    <DashboardAddDoctor onClose={this.onAddClose} isAddOpen={isAddOpen} allDepartment={allDepartment} />
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

                        {this.state.doctordetail.map(doctor=>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{doctor.name}</Table.Cell>
                                <Table.Cell>{doctor.email}</Table.Cell>
                                <Table.Cell>{doctor.contact_number}</Table.Cell>
                                <Table.Cell>{doctor.experience}</Table.Cell>
                                <Table.Cell>{doctor.department}</Table.Cell>
                                <Table.Cell><DashboardDoctorAppointmentDetail /></Table.Cell>
                                <Table.Cell>
                                    <Button circular color='yellow' icon='edit' />
                                    <Button circular color='red' icon='delete' />
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
