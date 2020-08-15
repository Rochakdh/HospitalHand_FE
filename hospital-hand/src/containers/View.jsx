import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

import Detail from './Detail.jsx'

import { BrowserRouter as Link } from 'react-router-dom';




export default class View extends Component {


    state = {
        isOpen: false,
        id: "",
    }

    state = {
        doctors: { name: '', department: '' }
    }

    onDetailClick = (id, Category, More) => {
        this.setState({ isOpen: true, id: id, Category: Category, More: More });
    }


    OnSeeDoctorsClick = (id) => {
        console.log(id)

        fetch('http://127.0.0.1:8000/categories/list/', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },

        })

            .then(data => data.json())
            .then(
                data => {
                    console.log(data[id-1]);
                }
            )



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

                                        <Link to="/doctors" > <Button content="See Doctors" onClick={this.OnSeeDoctorsClick.bind(this, categories.id)} />
                                        </Link>

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
