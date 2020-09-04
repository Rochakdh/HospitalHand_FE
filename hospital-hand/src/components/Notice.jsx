import React from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Button, Form, Input, Label, Header, Icon, TextArea } from 'semantic-ui-react'
// import {DatePicker,useState}  from "react-datepicker";

import axios from "axios";

import { API_URL1 } from "../constants/index";

const initialstate={
      title_error: '',
      desc_error: '',
      date_error: '',

      title: "",
      description: "",
      post_at: ""
}

class NewNoticeForm extends React.Component {
    state =
      initialstate;
  
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
      const isValid=this.validate();
      if (isValid){
        console.log(this.state)
        this.setState(initialstate)
      }
      
      axios.post(API_URL1, this.state).then((response)=>{
         if (response.status===201){
            alert('Notice Created! ')
            window.location.reload()
         }
  
    }
      )
      
    };
  

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
    <a href='/noticelist/'  style={{paddingLeft:110+'em' , size:40} }>
    <Icon name='list' rectangular />
        Notice List
    </a>
    
          
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
            <div style={{color:'crimson', fontSize:12}}>
            {this.state.title_error}
          </div>
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
            <div style={{color:'crimson', fontSize:12}}>
            {this.state.desc_error}
          </div>
            
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
          <div style={{color:'crimson', fontSize:12}}>
            {this.state.date_error}
          </div>
        </Form>
        </div>
      );
    }
  }
  
export default NewNoticeForm;