import React, { Component } from 'react'
import { Modal, Image } from 'semantic-ui-react'

export default class DetailNotice extends Component {
  onClose = () => {
    this.props.onDetailClose()
    console.log(this.props.id)

  }
  render() {
    const { isDetailOpen, id, title, description } = this.props
    return (
      <div>
        <Modal open={isDetailOpen} onClose={this.onClose}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>

            <Modal.Description>
              <p>
                {description}
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div >
    )
  }
}
