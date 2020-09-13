import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

import Home from './containers/Home';


import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css'
import LoginForm from './containers/LoginForm';
import Profile from './containers/Profile';
import SignUp from './containers/SignUp';
import AuthenticatedUser from './api/Authenticated'
import Dashboard from './containers/Dashboard';
import DashboardLogin from './containers/DashboardLogin'



import Notice from './containers/Notice.jsx'
import DetailNotice from './containers/DetailNotice'
import List from './containers/Noticelist'
import UpdateNoticeForm from './containers/UpdateNoticeForm.jsx'
import AdminDashBoard from './containers/AdminDashBoard';
import AdminDashBoardHome from './containers/AdminDashBoardHome';



export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userid: '',
      errorMessage: ''
    };
    this.getUserProfile = this.getUserProfile.bind(this)
  }


  getUserProfile = (user) => {
    console.log(user)
    this.setState({
      userid: user
    })
  }

  render() {
    return (

      <Router>

        <Route path="/" exact component={Home}>

        </Route>


        <Route path='/login' exact component={LoginForm}>
          <LoginForm userProfile={this.getUserProfile} />
        </Route>
        <Route path='/profile' exact component={Profile}>
          <Profile />
        </Route>

        <Route path='/signup' exact component={SignUp}>
          <SignUp />
        </Route>
        
        <Route path='/hospital/login' exact component={Dashboard}>
          <DashboardLogin />
        </Route>
        <Route path='/hospital/' exact component={Dashboard}>
          <Dashboard />
        </Route>


        <Route exact path='/createnotice/' component={Notice}></Route>
        <Route exact path='/detailnotice/' component={DetailNotice}></Route>
        <Route exact path='/notices/' component={List}></Route>
        <Route exact path='/updatenotice/' component={UpdateNoticeForm}></Route>
        <Route exact path='/admin/login' component={AdminDashBoard}></Route>
        <Route exact path='/admin/' component={AdminDashBoardHome}></Route>

      </Router>


    )
  }
}
