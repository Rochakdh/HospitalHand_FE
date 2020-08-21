import React, { Component } from 'react'
import { Modal, List, Button, Image } from 'semantic-ui-react';



export default class AllDoctors extends Component {


    onCloseClick = () => {
        this.props.onClose()
        console.log(this.props.id)

    }

    selectedHospital = (item, index) => {


        console.log(item, index)



    }






    render() {

        const { doctorOpen } = this.props
        const { data } = this.props


        return (
            <Modal open={doctorOpen} onClose={this.onCloseClick} >
                <Modal.Header><h5>{this.props.Category}</h5> Doctors</Modal.Header>
                <Modal.Content>
                    <Modal.Description>

                        <List divided verticalAlign='middle'>
                            {
                                data.map((doctors) => (
                                    < List.Item >


                                        <List.Content floated='right'>
                                            <Button primary>Fix Appointment</Button>
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
                                        <Image avatar src='https://lh3.googleusercontent.com/proxy/QALDWmv3S9ylMSSB8LVx3Fl6NZEOtBFecl9_FKWJlp7CfC3sMaCJ8L1nDPPfgAFenqA3OKPqij26Uqj-JhNt2seCXW_JjMzg' />
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
