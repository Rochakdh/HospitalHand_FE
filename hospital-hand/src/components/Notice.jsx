import React from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Button, Form, Input, Label, Header, Icon, TextArea } from 'semantic-ui-react'
// import {DatePicker,useState}  from "react-datepicker";

import axios from "axios";

import { API_URL1 } from "../constants/index";


class NewNoticeForm extends React.Component {
    state = {
      error_message: '',
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
      
      axios.post(API_URL1, this.state).then((response)=>{
        e.preventDefault();
         if (response.status===201){
            alert('Notice Created! ')
            window.location.reload()
         }
  
    }
      )
      .catch((error) => {
        console.log(error.response.data);
        let errorData = error.response.data
        for (var errorMsg in errorData) {
            if (errorData.hasOwnProperty(errorMsg)) {
                this.setState({
                    error_message: errorData[errorMsg]
                });
            }
        }})
    };
  
    
    defaultIfEmpty = value => {
      return value === "" ? "" : value;
    };
  
    render() {
      const formStyle = {
        paddingLeft: 20 + "em",

      }
      

    
      return (
        <div>
          <div>
          <Header as='h1' textAlign='center'> Create Notice</Header>
          
          
    <Header as='h2' icon textAlign='center'>
      <Icon name='bell' circular />
      
    </Header>
    </div>
    <a href='/noticelist/'  style={{paddingLeft:130+'em' , size:30} }>
    <Icon name='list' rectangular />
        Notice List
    </a>
    {this.state.error_message &&
                            <h3 className="error"> {this.state.error_message} </h3>}
          
          <Form style={formStyle} onSubmit={this.createnotice}  >
          <Form.Field style={{width:1000}} required>
            <Label size='large' for="title">Title:</Label>
            <Input 
              type="text"
              name="title"
              onChange={this.onChange}
              placeholder="Title"
              value={this.defaultIfEmpty(this.state.name)}
            />
          </Form.Field>
          <Form.Field style={{width:1000}}>
            <Label size='large' for="description">Description:</Label>
            <TextArea 
              type="text"
              name="description"
              onChange={this.onChange}
              placeholder="Description"
              value={this.defaultIfEmpty(this.state.description)}
            />
          </Form.Field>
          
          <Form.Field style={{width:500}}>
            <Label size='large' for="post_at">Post at:</Label>
            <Input
              type="date"
              name="post_at"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.post_at)}
            />
          </Form.Field>
          <Button size='big' >Post</Button>
        </Form>
        </div>
      );
    }
  }
  
export default NewNoticeForm;