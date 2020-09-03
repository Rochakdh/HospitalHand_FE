
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Header
} from 'semantic-ui-react'
import Modal from 'react-awesome-modal';
import React from 'react'
import axios from "axios";


export default class DetailNotice extends React.Component {
  state = {
    notice: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/notice/update_delete/8`)
    .then(res => {
      this.setState({ notice: res.data })
    console.log(res.data)
    console.log(this.state.notice)
    })
    
    
  }

  
 
render() {

  return (
  <div> 
      
     <section>
      
                <Modal  style ={{paddingLeft: '50em'}} effect="fadeInUp"  >
                  <Modal.Header>Update Notice</Modal.Header>
                    <div>
                        
                        <h1>Hospital Notice</h1>
                          <h2>{this.state.notice.title}</h2>
                            
                        
                        <Container text style={{ marginTop: '7em' }}>
                          <Header as='h1'>{this.state.notice.description}</Header>
                          
                          
                        </Container>
                        <button type="submit" content="Submit" >Close</button>
                    </div>
                </Modal>
    </section>
  </div>   

  )
}
}


 