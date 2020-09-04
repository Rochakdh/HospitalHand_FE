import React, { Component } from 'react'
import {Input,Table,Icon,Button} from 'semantic-ui-react'
import ModalExampleBasic from './DashboardAddDoctor'
import DashboardDoctorAppointmentDetail from './DashboardDoctorAppointmentDetail'
const color = "teal"


export default class DashboardDoctor extends Component {
    render() {
        return (
            <>
                <div className="hospital-work">
                    <h3>Doctor List</h3>
                    <ModalExampleBasic />
                    <Input icon="search" placeholder="Search Doctor"></Input>
                    <Table color={color} key={color} inverted>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Doctor</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Phone No.</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>See Appointment</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>Prerit</Table.Cell>
                            <Table.Cell>2011-10-10</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>Prerit</Table.Cell>
                            <Table.Cell><DashboardDoctorAppointmentDetail /></Table.Cell>
                            <Table.Cell>
                                <Button circular color='yellow' icon='edit' />
                                <Button circular color='red' icon='delete' />
                            </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>                
                </div>    
            </>
        )
    }
}
