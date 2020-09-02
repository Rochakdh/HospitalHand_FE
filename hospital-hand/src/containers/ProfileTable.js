import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import UpdateProfile from './UpdateProfile'
import UpdateAppointment from './UpdateAppointment'

const color = "teal"

export default class ProfileTable extends Component {

    state = {
        appointment_info: [],

        id: "",




    }

    componentDidMount() {
        const token = localStorage.getItem("token")


        Axios.get(`http://127.0.0.1:8000/appointment/profile/${token}`, this.state)
            .then((response) => {
                this.setState({
                    appointment_info: response.data,

                })
                console.log(this.state.appointment_info)
            })

    }

    updateAppointment = (id) => {

        Axios.get(`http://127.0.0.1:8000/appointment/profile/update/${id}`, this.state)
    }


    render() {

        return (
            <div>
                <UpdateAppointment updateappointOpen={updateappointOpen} onClose={this.onCloseUpdateAppointment} id={id} ></UpdateAppointment>


                <Table color={color} key={color} inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Doctor</Table.HeaderCell>
                            <Table.HeaderCell>Hospital</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Time</Table.HeaderCell>
                            <Table.HeaderCell>Approved</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>


                    <Table.Body>
                        {
                            this.state.appointment_info.map(app =>

                                <Table.Row >
                                    <Table.Cell>{app.doctor_requested}</Table.Cell>
                                    <Table.Cell>{app.select_hospital}</Table.Cell>
                                    <Table.Cell>{app.appointment_date}</Table.Cell>
                                    <Table.Cell>{app.appointment_time}</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>
                                        <Link to='profile/updateAppointment' >
                                            <Button onClick={this.updateAppointment.bind(this, app.id)}>
                                                Update
                                            </Button>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell><Button>Delete</Button></Table.Cell>

                                </Table.Row>

                            )
                        }


                    </Table.Body>
                </Table>
            </div >
        )



    }
}
