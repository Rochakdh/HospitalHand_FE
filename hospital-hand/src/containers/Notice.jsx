import React from "react";
import { Button, Form, Input, Label, TextArea, Modal } from 'semantic-ui-react';

// import {DatePicker,useState}  from "react-datepicker";

import axios from "axios";

import { API_URL1 } from "../constants/index";
import Nav from './Nav'


class NewNoticeForm extends React.Component {
  state = {
    title: "",
    description: "",
    post_at: "",
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

  createnotice = (e) => {
    e.preventDefault();
    axios.post(API_URL1, this.state).then((response) => {
      if (response.status === 201) {
        alert('Notice Created !!')
      }
      this.noticeClose()
    });
  };


  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  noticeClose = () => {

    this.props.onCloseNotice()

  }



  render() {

    const noticeStyle = {
      width: 70 + "em",
      paddingLeft: 15 + "em",
      paddingTop: 7 + "em"

    }

    const { openNotice } = this.props

    return (
      <div>
        <Modal size='medium' basic closeIcon open={openNotice} onClose={this.noticeClose}>
          <Form style={noticeStyle} onSubmit={this.createnotice}>
            <h2>Create A Notice</h2>
            <Form.Group>
              <Label for="title">Title:</Label>
              <Input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.name)}
              />
            </Form.Group>
            <Form.Group>
              <Label for="description">Description:</Label>
              <TextArea
                type="text"
                name="description"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.description)}
              />
            </Form.Group>

            <Form.Group>
              <Label for="post_at">Post at:</Label>
              <Input
                type="date"
                name="post_at"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.post_at)}
              />
            </Form.Group>
            <br /><Button >Send</Button>

          </Form>
        </Modal>

      </div>
    );
  }
}

export default NewNoticeForm;