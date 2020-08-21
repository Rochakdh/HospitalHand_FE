import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import Nav from './Nav'
export default class Profile extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token === null){
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }
    logout = (e) =>{
        localStorage.removeItem("token")
        this.setState={
            loggedIn:false
        }
    }
        
    
    render() {
        if (this.state.loggedIn===false){
            return <Redirect to="/login" />
        }
        return (
            <div className="backgroundImage">
                <div className="bgColor">
                    < Nav/>
                    <div className='homeContent'>
                        <h1>This is Your Profile</h1>
                        <form onSubmit={this.logout}>
                            <button className="loginbtn"  type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }
}
