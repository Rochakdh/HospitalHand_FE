import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import Axios from 'axios'

export default class DashboardDeleteDoctor extends Component {

    onCloseDeleteDoctorClick = () => {
        this.props.onClose()
        console.log(this.props.id)

    }

    deleteDoctor = (id) => {
        Axios.delete(`http://127.0.0.1:8000/categories/delete/${id}`)
            .then((response) => {


                // alert('Doctor Deleted')
                // window.location.reload()



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

        const { id, deleteDoctorOpen } = this.props

        return (
            <div>
                <Modal style={modalStyle} open={deleteDoctorOpen} onClose={this.onCloseDeleteDoctorClick}>
                    <Modal.Header style={{color:"red"}}>Delete?</Modal.Header>
                    <Modal.Content>
                        <p style={{color:"red"}}>Are you sure you want to delete this Doctor?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.onCloseDeleteDoctorClick} negative>
                            No
                        </Button>
                        <Button onClick={this.deleteDoctor.bind(this, id)} positive >
                            Yes
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
