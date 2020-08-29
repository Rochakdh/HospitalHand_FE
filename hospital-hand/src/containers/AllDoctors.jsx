import React, { Component } from 'react'
import { Modal, List, Button, Image } from 'semantic-ui-react';
import Appointment from './Appointment'



export default class AllDoctors extends Component {

    state = {
        appointOpen: false,
        id: "",
        name: "",
    }


    onCloseClick = () => {
        this.props.onClose()
        console.log(this.props.id)

    }

    selectedHospital = (item, index) => {


        console.log(item, index)



    }

    fixAppointment = (name, id) => {
        console.log("Appointment Fixed", name, id, this.selectedHospital)
        this.setState({ appointOpen: true, id: id, name: name });


    }

    onCloseAppointment = () => {
        this.setState({
            appointOpen: false,
        })
    }






    render() {

        const { doctorOpen } = this.props
        const { data } = this.props
        const { id, name, appointOpen } = this.state



        return (


            <Modal open={doctorOpen} onClose={this.onCloseClick} >
                <Appointment  data={data} appointOpen={appointOpen} onClose={this.onCloseAppointment} id={id} name={name}></Appointment>

                <Modal.Header><h5>{this.props.Category}</h5> Doctors</Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <List divided verticalAlign='middle'>
                            {
                                data.map((doctors) => (
                                    < List.Item >


                                        <List.Content floated='right'>
                                            <Button content="Appoint" onClick={this.fixAppointment.bind(this, doctors.name, doctors.id)} primary></Button>
                                        </List.Content>

                                        <List.Content floated='right'>
                                            <select>

                                                {
                                                    doctors.hospital.map((item, index) =>
                                                        <option value={index} onClick={this.selectedHospital.bind(this, item, index)}>

                                                            {item}

                                                        </option>

                                                    )
                                                }
                                            </select>

                                        </List.Content>
                                        <Image avatar src='data:image/png;base64,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' />
                                        <List.Content>
                                            <strong style={{ paddingRight: 8 + "em" }}>{doctors.name}</strong> {doctors.experience} yrs. of Experience
                                    </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List>

                    </Modal.Description>
                </Modal.Content>

            </Modal >


        )
    }
}
