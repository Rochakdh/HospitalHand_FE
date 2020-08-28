import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
// import { Container, Input } from 'semantic-ui-react';
// import View from './containers/View';
import Home from './containers/Home';

import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AllDoctors from './containers/AllDoctors';
import LoginForm from './containers/LoginForm';
import Profile from './containers/Profile';
import SignUp from './containers/SignUp';
import Notice from './containers/Notice';
import AuthenticatedUser from './api/Authenticated'


export default class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        userid:'',
        errorMessage:''
      };
      this.getUserProfile = this.getUserProfile.bind(this) 
    }


    getUserProfile = (user)=>{
      console.log(user)
      this.setState({
        userid:user
      })
    }

  render() {
    return (
        <Router>
          <Route path='/' exact component={Home}>
            <Home />
          </Route>
          <Route path='/login' component={LoginForm}>
            <LoginForm userProfile = {this.getUserProfile} />
          </Route>
          <Route path='/profile' exact component={Profile}>
            <Profile />
          </Route>
          <Route path='/signup' exact component={SignUp}>
            <SignUp />
          </Route>
          <Route path='/notices' exact component={Notice}>
            <Notice />
          </Route>
      </Router>
    )
  }
}
