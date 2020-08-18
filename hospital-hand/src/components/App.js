import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import Modal from 'react-awesome-modal';
 
import './css/style_popup.css'

// import {
//   Container,
//   Header
// } from 'semantic-ui-react'

import Notice from '../Notice.jsx'




class App extends React.Component {  

//   constructor(props){  
// super(props);  
// this.state = { visible:true };  
// }  
// closeModal() {
//   this.setState({
//       visible : false
//   });
// }

//   togglePopup() {  
// this.setState({  
//      showPopup: !this.state.showPopup  
// });  
//  }  

//   render() {  
// return (  
// <div> 
      
// <section>
//   <h1>Hospital Notice</h1>
//                 <Modal visible={this.state.visible} style ={{paddingLeft: '50em'}}   onClickAway={() => this.closeModal()} >
//                     <div>
//                         <h1>Health is Wealth</h1>
//                         <p>some tips to avoid this pandaemic</p>
//                         <Container text style={{ marginTop: '7em' }}>
//                           <Header as='h1'>Semantic UI React Fixed Template</Header>
//                           <p>This is a basic fixed menu template using fixed size containers.</p>
//                           <p>
//                             A text container is used for the main container, which is useful for single column layouts.
//                           </p>
                          
//                         </Container>
//                         <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
//                     </div>
//                 </Modal>
// </section>
// </div>  

// );  
// }  
// }  
  render(){
    return(
      <Notice></Notice>
    );
  }


}




export default App