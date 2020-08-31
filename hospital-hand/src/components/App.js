import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
// import BaseRouter from '../Routes'
import 'semantic-ui-css/semantic.min.css'
// import Modal from 'react-awesome-modal';
 
// import './css/style_popup.css'

// import {
//   Container,
//   Header
// } from 'semantic-ui-react'

import Notice from './Notice.jsx'
import Home from './Noticepopup'
import List from './Noticelist'



class App extends React.Component {  

 
  render(){
    return(
      <Router>
        <Route exact path='/notice/' component={Notice}></Route>
        <Route exact path='/demo/' component={Home}></Route>
        <Route exact path='/noticelist/' component={List}></Route>

      </Router>
    );
  }


}




export default App