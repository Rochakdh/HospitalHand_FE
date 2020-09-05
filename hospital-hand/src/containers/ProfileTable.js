import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import UpdateProfile from './UpdateProfile'
import UpdateAppointment from './UpdateAppointment'
import DeleteAppointment from './DeleteAppointment'

const color = "teal"

export default class ProfileTable extends Component {

    state = {
        appointment_info: [],

        id: "",
        appointment_date: "",
        patient_name: "",
        appointment_time: "",
        select_hospital: "",
        doctor_requested: "",
        patient_problem_description: "",
        medicines_taken: "",

        updateappointOpen: false,
        deleteappointOpen: false




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

    updateAppointment = (id, patient_name, doctor_requested, select_hospital, patient_problem_description, medicines_taken) => {

        this.setState({
            id: id,
            updateappointOpen: true,
            doctor_requested: doctor_requested,
            select_hospital: select_hospital,
            patient_name: patient_name,
            patient_problem_description: patient_problem_description,
            medicines_taken: medicines_taken
        })
    }

    deleteAppoint = (id) => {

        this.setState({
            id: id,
            deleteappointOpen: true,

        })
    }






    onCloseUpdateAppointment = () => {
        this.setState({
            updateappointOpen: false
        })
    }


    onCloseDeleteAppointment = () => {
        this.setState({
            deleteappointOpen: false
        })
    }




    render() {

        const { updateappointOpen, deleteappointOpen, id, patient_name, doctor_requested, select_hospital, patient_problem_description, medicines_taken } = this.state

        return (
            <div>
                <UpdateAppointment updateappointOpen={updateappointOpen} onClose={this.onCloseUpdateAppointment} id={id} patient_name={patient_name} doctor_requested={doctor_requested} select_hospital={select_hospital} patient_problem_description={patient_problem_description} medicines_taken={medicines_taken} ></UpdateAppointment>
                <DeleteAppointment deleteappointOpen={deleteappointOpen} onClose={this.onCloseDeleteAppointment} id={id} ></DeleteAppointment>


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
                                    <Table.Cell>Receive</Table.Cell>
                                    <Table.Cell>Garne</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>

                                        <Button onClick={this.updateAppointment.bind(this, app.id, app.patient_name, app.doctor_requested, app.select_hospital, app.patient_problem_description, app.medicines_taken)}>
                                            Update
                                            </Button>

                                    </Table.Cell>
                                    <Table.Cell><Button onClick={this.deleteAppoint.bind(this, app.id)}>Delete</Button></Table.Cell>

                                </Table.Row>

                            )
                        }


                    </Table.Body>
                </Table>
            </div >
        )

    }
}
