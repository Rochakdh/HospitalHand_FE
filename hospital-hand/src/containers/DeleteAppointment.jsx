import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import Axios from 'axios'

export default class DeleteAppointment extends Component {

    onCloseDeleteAppointClick = () => {
        this.props.onClose()
        console.log(this.props.id)

    }

    deleteAppointment = (id) => {
        Axios.delete(`http://127.0.0.1:8000/appointment/profile/delete/${id}`)
            .then((response) => {


                alert('Appointment Deleted')
                window.location.reload()



            })
    }

    

    render() {

        const modalStyle = {

            backgroundColor: 'teal',
            marginLeft: 30 + "em",
            marginTop: 7 + "em",
            height: 'auto',
            width: 35 + "em",

        };

        const { id, deleteappointOpen } = this.props

        return (
            <div>
                <Modal style={modalStyle} open={deleteappointOpen} onClose={this.onCloseDeleteAppointClick}>
                    <Modal.Header style={{color:"red"}}>Delete?</Modal.Header>
                    <Modal.Content>
                        <p style={{color:"red"}}>Are you sure you want to delete this Appointment?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.onCloseDeleteAppointClick} negative>
                            No
                        </Button>
                        <Button onClick={this.deleteAppointment.bind(this, id)} positive >
                            Yes
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
