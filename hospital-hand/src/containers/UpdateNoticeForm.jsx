import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label, TextArea } from 'semantic-ui-react';
import axios from "axios";

import { Modal } from 'semantic-ui-react'


export default class UpdateNoticeForm extends Component {
  state = {
    id: this.props.id
  }

  onClose = () => {
    this.props.onUpdateClose()
    console.log(this.props.id)


  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      id: this.props.id
    });
  };


  up_notice = (e) => {
    e.preventDefault();
    axios.patch(`http://127.0.0.1:8000/notice/notice/update_delete/${this.state.id}`, this.state)
      .then((response) => {
        if (response.status === 200) {
          alert('Notice Updated! ')
          window.location.reload()
        }
      })
  }

  render() {
    const modalStyle = {
      marginLeft: 18 + "em",
      marginTop: 7 + "em",
      height: 'auto',

    };
    const { isUpdateOpen } = this.props
    const { id, title, description, post_at } = this.props
    return (
      <div>
        <Modal style={modalStyle} open={isUpdateOpen} onClose={this.onClose}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form onSubmit={this.up_notice}>
                <FormGroup>
                  <Label for="title">Title:</Label>
                  <Input
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    defaultValue={title}
                  />

                </FormGroup>
                <FormGroup>
                  <Label for="description">Description:</Label>
                  <TextArea
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    defaultValue={description}
                  />

                </FormGroup>

                <FormGroup>
                  <Label for="post_at">Post at:</Label>
                  <Input
                    type="date"
                    name="post_at"
                    onChange={this.onChange}
                    defaultValue={post_at}
                  />

                </FormGroup>
                <Button type="submit">Update</Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div >
    )
  }
}