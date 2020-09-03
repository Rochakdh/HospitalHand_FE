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
import DetailNotice from './DetailNotice'
import List from './Noticelist'
import UpdateNoticeForm from './UpdateNoticeForm.jsx'



class App extends React.Component {  

 
  render(){
    return(
      <Router>
        <Route exact path='/createnotice/' component={Notice}></Route>
        <Route exact path='/detailnotice/' component={DetailNotice}></Route>
        <Route exact path='/noticelist/' component={List}></Route>
        <Route exact path='/updatenotice/' component={UpdateNoticeForm}></Route>

      </Router>
    );
  }


}
export default App