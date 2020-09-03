
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
    notice: [],
    visible:true
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/notice/update_delete/8`)
    .then(res => {
      this.setState({ notice: res.data })
    console.log(res.data)
    console.log(this.state.notice)
    })
    
    
  }
  
closeModal() {
    this.setState({
        visible : false
    });
}

 
 
render() {
    const {isDetailOpen}=this.props
  return (
  <div> 
      
     <section>
      
                <Modal  style ={{paddingLeft: '50em'}} width="400" height="300"  effect="fadeInUp"  visible={isDetailOpen}>
                  <h2>Hospital Notice</h2>
                    <div>
                        
                        <h2>{this.state.notice.title}</h2>
                            
                        
                        <Container text style={{ marginTop: '7em' }}>
                          <Header as='h1'>{this.state.notice.description}</Header>
                          
                          
                        </Container>
                        
                    </div>
                    <button type="submit" content="Submit" onClick={this.state.closeModal}>Close</button>
                </Modal>
    </section>

  </div>   

  )
}
}


 