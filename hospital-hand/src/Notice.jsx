import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "./constants/index";


class NewNoticeForm extends React.Component {
    state = {
      title: "",
      description: "",
      post_at: ""
    };
  
    componentDidMount() {
      if (this.props.notice) {
        const { title, description, post_at } = this.props.notice;
        this.setState({ title, description, post_at });
      }
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    createnotice = e => {
      e.preventDefault();
      axios.post(API_URL, this.state).then(() => {
        // this.props.resetState();
        
      });
    };
  
    
  
    defaultIfEmpty = value => {
      return value === "" ? "" : value;
    };
  
    render() {
      return (
        <Form onSubmit={this.createnotice}>
          <FormGroup>
            <Label for="title">Title:</Label>
            <Input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.name)}
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
              type="text"
              name="post_at"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.post_at)}
            />
          </FormGroup>
          <Button>Send</Button>
        </Form>
      );
    }
  }
  
export default NewNoticeForm;