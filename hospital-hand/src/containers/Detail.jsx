import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react';

export default class Detail extends Component {

    onCloseClick = () => {
        this.props.onClose()
        console.log(this.props.id)

    }
    render() {

        const { isOpen } = this.props
        return (
            <Modal open={isOpen} onClose={this.onCloseClick} >
                <Modal.Header>{this.props.Category}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        {this.props.More}
                    </Modal.Description>
                </Modal.Content>

            </Modal>


        )
    }
}