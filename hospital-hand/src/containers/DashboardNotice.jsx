import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
const color = 'teal'


export default class DashboardNotice extends Component {
    render() {
        return (
            <div className="hospital-work">
                <h3>Notices<Button floated='right' circular color='green' icon='add' />
                </h3>
                <br></br>
                <Table color={color} key={color} inverted>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Post At</Table.HeaderCell>
                            <Table.HeaderCell>Update/Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        <Table.Row >
                            <Table.Cell><h3 style={{ color: 'blue' }}>Corona Is Dangerous</h3></Table.Cell>
                            <Table.Cell><h5 style={{ color: 'blue' }}>5:55</h5></Table.Cell>
                            <Table.Cell>
                                <Button circular color='yellow' icon='edit' />

                                <Button circular color='red' icon='delete' />
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>

            </div>
        )
    }
}
