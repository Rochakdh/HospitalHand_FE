import React from "react";
import { Button, Form, FormGroup, Input, Label } from "semantic-ui-react";

// import {DatePicker,useState}  from "react-datepicker";

import axios from "axios";

import { API_URL1 } from "../constants/index";
import { Modal } from "semantic-ui-react";


export default class UpdateNoticeForm extends React.Component {
    state = {
      title: "",
      description: "",
      post_at: "",
      notice:[]
    };
  
    componentDidMount() {
      if (this.props.notice) {
        const { title, description, post_at } = this.props.notice;
        this.setState({ title, description, post_at });
      }
      axios.get(`http://localhost:8000/notice/update_delete/8/`).then(res => {
            this.setState({ notice: res.data })})
            // .then(this.setState({
            //     title:this.state.notice.title
            // }))
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    // get_notice =e =>{
    //     e.preventDefault();
    //     axios.get(`http://localhost:8000/notice/update_delete/${id}/`).then(res => {
    //         this.setState({ notice: res.data }).then(this.setState({
    //             title=this.state.notice.title
    //         }))
    // })
    up_notice = e => {
      e.preventDefault();
      axios.put(`http://localhost:8000/notice/update_delete/8/`, this.state).then(() => {
        // this.props.resetState();
        
      });
    };
  
    
    defaultIfEmpty = value => {
      return value === "" ? "" : value;
    };
  
    onCloseClick(){
      this.props.onUpdateClose()
    }

    render() {
      const { isUpdateOpen }=this.props;
      const { onUpdateClose}= this.props;
      return (
        <Modal open={isUpdateOpen} onClose={this.onCloseClick}>
          <Modal.Header>Update Notice</Modal.Header>
          <Modal.Content>
        <Form onSubmit={this.up_notice}>
          <FormGroup>
            <Label for="title">Title:</Label>
            <Input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.title)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description:</Label>
            <Input
              type="text"
              name="description"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.description)}
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="post_at">Post at:</Label>
            <Input
              type="date"
              name="post_at"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.post_at)}
            />
          </FormGroup>
          <Button onClick={this.up_notice} content="Submit" type="submit">Update</Button>
        </Form>
        </Modal.Content>
        </Modal>
      );
    }
  }

  