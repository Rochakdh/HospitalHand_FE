import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const color = ['teal']

export default class ProfileTable extends Component {
    render() {
        return (
            <div>
                <Table color={color} key={color} inverted>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Doctor</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Apporved</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>Prerit</Table.Cell>
                        <Table.Cell>2011-10-10</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Prerit</Table.Cell>
                        <Table.Cell>2011-10-10</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
