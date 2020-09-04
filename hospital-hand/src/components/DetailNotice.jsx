import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

export default class DetailNotice extends Component {
  onClose = () => {
    this.props.onDetailClose()
    console.log(this.props.id)

  }
  render() {
    const { isDetailOpen, title, description, post_at } = this.props
    const modalStyle = {

      backgroundColor: 'teal',
      // marginLeft: 30 + "em",
      // marginTop: 7 + "em",
      height: 'auto',
      width: 35 + "em",



  };
    return (
      <div>
        <Modal style={modalStyle} open={isDetailOpen} onClose={this.onClose}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>

            <Modal.Description>
              <p>
                {description}
              </p>
            </Modal.Description>
            <Modal.Description>
              <p>
                Post at :{post_at}
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div >
    )
  }
}
