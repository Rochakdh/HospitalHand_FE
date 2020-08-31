// import NewStudentModal from "./NewStudentModal";
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Header
} from 'semantic-ui-react'
import Modal from 'react-awesome-modal';
import React from 'react'
import axios from "axios";

import { API_URL2 } from "../constants";
import {Link, RichText, Date} from 'prismic-reactjs';

class List extends React.Component {
  state = {
    notice: []
  };

  componentDidMount() {
    axios.get(API_URL2)
    .then(res => {
      this.setState({ notice: res.data[0] })
    console.log(res.data)
    console.log(this.state.notice)
    })
    }

    render(){
        return(
            <h2>{this.state.notice.title}</h2>
        )
    };

}
export default List;