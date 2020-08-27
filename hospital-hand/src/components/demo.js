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

class Home extends React.Component {
  state = {
    notice: []
  };

  componentDidMount() {
    axios.get(API_URL2)
    .then(res => {
      this.setState({ notice: res.data[0] })
    console.log(res.data)
    })
    console.log(this.state.notice)
    
  }

  
 
//   constructor(props){  
//     super(props);  
//     this.state = { visible:true };  
//   };   
//   closeModal(){
//   this.setState({
//       visible : false
//   });
//   }

//   togglePopup() {  
// this.setState({  
//      showPopup: !this.state.showPopup  
//   })}
render() {
  return (
  <div> 
      
     <section>
      <h1>Hospital Notice</h1>
       <h2>{this.state.notice.title}</h2>
      <p>{this.state.notice.description}</p> 
                <Modal visible={this.state.visible} style ={{paddingLeft: '50em'}} effect="fadeInUp"  onClickAway={() => this.closeModal()} >
                    <div>
                        <h1>Health is Wealth</h1>
                        
                        <Container text style={{ marginTop: '7em' }}>
                          <Header as='h1'>Semantic UI React Fixed Template</Header>
                          
                          
                        </Container>
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
    </section>
  </div>   

  );}}


export default Home;  