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

class Home extends React.Component {
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

  
 
  constructor(props){  
    var today = new Date(),

    date =   (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear() ;

   

    this.pos2 = {

      currentDate: date

    }
    super(props);  
    if (this.state.notice.post_at=this.date)
    {
      this.pos1 = { visible:true };  

    }
    else
    {
      this.pos1= {visible:false};
    }
    
  };   
  closeModal(){
  this.setPos({
      visible : false
  });
  }

  togglePopup() {  
this.setPos({  
     showPopup: !this.state.showPopup  
  })}
render() {
  return (
  <div> 
      
     <section>
      
                <Modal visible={this.pos1.visible} style ={{paddingLeft: '50em'}} effect="fadeInUp"  onClickAway={() => this.closeModal()} >
                    <div>
                        
                        <h1>Hospital Notice</h1>
                          <h2>{this.state.notice.title}</h2>
                            
                        
                        <Container text style={{ marginTop: '7em' }}>
                          <Header as='h1'>{this.state.notice.description}</Header>
                          
                          
                        </Container>
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
    </section>
  </div>   

  );}}


export default Home;  