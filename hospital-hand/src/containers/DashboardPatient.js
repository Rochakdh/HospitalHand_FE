import React, { Component } from 'react'
import {Input,Table,Icon,Button} from 'semantic-ui-react'
import ModalExampleBasic from './Approve'
import ModalExampleScrollingContent from './DashboardPatientDetail'
const color='teal'

export default class DashboardPatient extends Component {
    render() {
        return (
            <>
                <div className="hospital-work">
                    <h3>Patient</h3>
                    <Input icon="search" placeholder="Search Patient"></Input>
                    <Table color={color} key={color} inverted>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Patient</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Phone No.</Table.HeaderCell>
                            <Table.HeaderCell>Doctor</Table.HeaderCell>
                            <Table.HeaderCell>History</Table.HeaderCell>
                            <Table.HeaderCell>Approve</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>Rochak</Table.Cell>
                            <Table.Cell>rochak@gmail.com</Table.Cell>
                            <Table.Cell>9090909090</Table.Cell>
                            <Table.Cell>Prerit</Table.Cell>
                            <Table.Cell> <ModalExampleScrollingContent /></Table.Cell>
                            <Table.Cell>
                                <ModalExampleBasic />
                                <Button circular color='red' icon='delete' />
                            </Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>                
                </div>    
            </>
        )
    }
}
