import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label, TextArea } from 'semantic-ui-react';
import axios from "axios";

import { Modal} from 'semantic-ui-react'

const initialstate={
  title_error: "",
  desc_error: "",
  date_error: "",
}

export default class UpdateNotice extends Component {
  state =
      initialstate;

  onClose = () => {
    this.props.onUpdateClose()
    console.log(this.props.id)

    
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  up_notice = (id) => {
      console.log(id)
      const isValid=this.validate();
      if (isValid){
        console.log(this.state)
        this.setState(initialstate)
      }
    axios.patch(`http://localhost:8000/notice/update_delete/${id}/`, this.state).then((response)=>{
      if (response.status===200){
         alert('Notice Updated! ')
         window.location.reload()
      }});}
      validate=()=>{
        if (!this.state.title){
          this.setState({title_error:'Input fields cannot be empty'})
          console.log(this.state.title_error)
          return false
        }
        if (!this.state.description){
          this.setState({desc_error:'Input fields cannot be empty'})
          return false
        }
        if (!this.state.post_at){
          this.setState({date_error:'Input fields cannot be empty'})
          return false
        }
        return true
      }
  render() {
    const modalStyle = {

      backgroundColor: 'teal',
      // marginLeft: 30 + "em",
      // marginTop: 7 + "em",
      height: 'auto',
      width: 35 + "em",



  };
    const { isUpdateOpen, id, title, description, post_at} = this.props
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
          <Button onClick={this.up_notice.bind(this,id)} content="Submit" type="submit">Update</Button>
        </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div >
    )
  }
}