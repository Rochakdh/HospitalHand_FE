import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import {Home} from './components/demo.js'
import {Notice} from './Notice';

const BaseRouter= ()=> {
    <div>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/notice' component={Notice}></Route>

    </div>
} 
export default BaseRouter