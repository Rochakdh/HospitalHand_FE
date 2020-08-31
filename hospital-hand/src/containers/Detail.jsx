import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react';


export default class Detail extends Component {

    onCloseClick = () => {
        this.props.onClose()
        console.log(this.props.id)

    }
    render() {
        const modalStyle = {
            marginLeft: 16 + "em",
            marginTop: 10 + "em",
            height: 'auto'


        };

        const { isOpen } = this.props
        return (
            <Modal style={modalStyle} open={isOpen} onClose={this.onCloseClick} >
                <Modal.Header>{this.props.Category}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <strong style={{ color: "black" }}>
                            {this.props.More}
                        </strong>

                    </Modal.Description>
                </Modal.Content>

            </Modal>


        )
    }
}
