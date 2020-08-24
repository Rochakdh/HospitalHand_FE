import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from '../Routes'
import 'semantic-ui-css/semantic.min.css'
// import Modal from 'react-awesome-modal';
 
import './css/style_popup.css'

// import {
//   Container,
//   Header
// } from 'semantic-ui-react'

import Notice from '../Notice.jsx'




class App extends React.Component {  

 
  render(){
    return(
      <Router>
        <Notice>
          <BaseRouter />
        </Notice>

      </Router>
    );
  }


}




export default App