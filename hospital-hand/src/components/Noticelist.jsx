// import NewStudentModal from "./NewStudentModal";
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import axios from "axios";

import { API_URL2} from "../constants";
import DetailNotice from './DetailNotice';
import UpdateNotice from './UpdateNotice'
// import {Link, RichText, Date} from 'prismic-reactjs';

class List extends React.Component {
  state = {
    id: "",
    title: "",
    description: "",
    post_at:"",

    notice: [],
    isDetailOpen: false,
    isUpdateOpen: false
  };

  componentDidMount() {
    axios.get(API_URL2)
      .then(res => {
        this.setState({ notice: res.data })


      })

  }
  detail_data(id, title, description,post_at) {
    this.setState({
      isDetailOpen: true,
      id: id,
      title: title,
      description: description,
      post_at:post_at

    })



  }
  update_data(id,title,description,post_at) {
    this.setState({ 
      isUpdateOpen: true,
      id:id,
      title:title,
      description:description,
      post_at:post_at
     })
  }

  del_data(id) {
    console.log(id);
    axios.delete(`http://localhost:8000/notice/update_delete/${id}/`, this.state)
    .then((response) => {

      if (response.status === 200) {
          alert('Notice Deleted! ')

    }}
    )
    .then(window.location.reload())
    
  };
  onDetailClose = () => {
    this.setState({
      isDetailOpen: false,

    })
  }
  onUpdateClose = () => {
    this.setState({
      isUpdateOpen: false
    })
  }


  render() {
    const { isDetailOpen } = this.state
    const { isUpdateOpen } = this.state
    const { id, title, description, post_at } = this.state



    return (
      <div>


        <DetailNotice id={id} title={title} description={description} post_at={post_at} isDetailOpen={isDetailOpen} onDetailClose={this.onDetailClose} ></DetailNotice>
        <UpdateNotice id={id} title={title} description={description} post_at={post_at} isUpdateOpen={isUpdateOpen} onUpdateClose={this.onUpdateClose}></UpdateNotice>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.notice.map(notice => (

              <tr textAlign="center" key={notice.id}>
                <td data-label="Title" >{notice.title}</td>
                <td data-label="Action">

                  <button type="submit" onClick={this.detail_data.bind(this, notice.id, notice.title, notice.description, notice.post_at)} > Detail</button>

                  <button type="submit" onClick={this.update_data.bind(this, notice.id, notice.title, notice.description, notice.post_at)}>Update</button>

                  <button type="submit" onClick={this.del_data.bind(this, notice.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <a href="/createnotice/"><button>Create Notice</button></a>
        </div>
      </div>
    )
  };
}


export default List;