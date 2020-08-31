import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class Appointment extends Component {

    onButtonNo = () => {
        this.props.onCloseAppointment();

    }

    render() {

        const modalStyle = {

            marginLeft: 22 + "em",
            marginTop: 10 + "em",
            height: 'auto'

        };



        const { appointOpen } = this.props


        return (

            <Modal

                style={modalStyle}
                basic
                open={appointOpen}
                size='small'

            >
                <Header icon>
                    <Icon name='archive' />
                    Do You Want To Proceed To Appointment?
                    </Header>
                <Modal.Content>
                    <p>
                        Appoint This Doctor?
                         </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={this.onButtonNo}>
                        <Icon name='remove' /> No
                        </Button>
                    <Button color='green' inverted >
                        <Icon name='checkmark' /> Yes
                        </Button>
                </Modal.Actions>
            </Modal>

        )
    }
}
