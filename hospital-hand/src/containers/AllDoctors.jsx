import React, { Component } from 'react'
import { Modal, List, Button, Image, Dropdown } from 'semantic-ui-react';



export default class AllDoctors extends Component {


    onCloseClick = () => {
        this.props.onClose()
        console.log(this.props.id)

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
                                            <Dropdown selection>
                                                <Dropdown.Menu>

                                                    <Dropdown.Item>
                                                        {doctors.hospital[0]}

                                                    </Dropdown.Item>

                                                    <Dropdown.Item>
                                                        {doctors.hospital[1]}

                                                    </Dropdown.Item>



                                                </Dropdown.Menu>


                                            </Dropdown>

                                        </List.Content>
                                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
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
