import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Detail from './Detail.jsx'

export default class View extends Component {

    state = {
        isOpen: false,
        id: "",
    }

    onDetailClick = (id, Category, More) => {
        this.setState({ isOpen: true, id: id, Category: Category, More: More });
    }

    onClose = () => {
        this.setState({
            isOpen: false,
        })
    }

    render() {
        const { data } = this.props
        const { isOpen, id, Category, More } = this.state

        return (
            <div>

                <Detail data={data} isOpen={isOpen} onClose={this.onClose} id={id} Category={Category} More={More}></Detail>
                <Table sortable celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign="center">
                                Departments
                        </Table.HeaderCell>

                            <Table.HeaderCell textAlign="center">
                                Info
                        </Table.HeaderCell>

                            <Table.HeaderCell textAlign="center">
                                More
                        </Table.HeaderCell>
                        </Table.Row>

                    </Table.Header>

                    <Table.Body>
                        {
                            data.map((categories) => (

                                <Table.Row key={categories.id}>
                                    <Table.Cell selectable textAlign="center">
                                        {categories.Category}
                                    </Table.Cell>


                                    <Table.Cell selectable textAlign="center">
                                        {categories.Info}
                                    </Table.Cell>


                                    <Table.Cell textAlign="center">
                                        <Button content="Detail" onClick={this.onDetailClick.bind(this, categories.id, categories.Category, categories.More)}></Button>

                                        <Button content="See Doctors"></Button>
                                    </Table.Cell>
                                </Table.Row>

                            ))
                        }

                    </Table.Body>

                </Table>
            </div>
        )
    }
}
