import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

import Detail from './Detail.jsx'
import AllDoctors from './AllDoctors'
import Axios from 'axios';





export default class View extends Component {


    state = {
        isOpen: false,
        id: "",
        doctors: [],
        
        
    }

    onDetailClick = (id, Category, More) => {
        this.setState({ isOpen: true, id: id, Category: Category, More: More });
    }


    OnSeeDoctorsClick = (id, Category) => {
        this.setState({ doctorOpen: true, id: id, Category: Category });
        console.log(id)

        Axios.get(`http://127.0.0.1:8000/categories/list/${id}/`)
            .then(docs => {
                this.setState({
                    doctors: docs.data,
                    
                })
                console.log(docs.data);
                
                
               
            })

    }


    onClose = () => {
        this.setState({
            isOpen: false,
            doctorOpen: false
        })
    }


    render() {
        const { data } = this.props
        const { isOpen, doctors, doctorOpen, id, Category, More } = this.state

        return (

            <div>

                <Detail data={data} isOpen={isOpen} onClose={this.onClose} id={id} Category={Category} More={More}></Detail>
                <AllDoctors data={this.state.doctors} doctorOpen={doctorOpen} onClose={this.onClose} id={id} Category={Category} doctors={doctors} ></AllDoctors>

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

                                        <Button content="See Doctors" onClick={this.OnSeeDoctorsClick.bind(this, categories.id, categories.Category)} />


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
