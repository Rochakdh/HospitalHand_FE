import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Button, Divider } from 'semantic-ui-react'
import validation from '../api/Authenticated'
export default class ProfileButtons extends Component {
    constructor(props){
        super(props)
        let loggedIn = true
        this.state={
            loggedIn,
            isUpdate:false
            // isProfile:false
        }
        this.updateProfile = this.updateProfile.bind(this)
        
    }
    logout = (e) =>{
        localStorage.removeItem("token")
        this.setState({
            loggedIn:false
        })
    }
    updateProfile = (e) =>{
        // console.log(e)
        // this.setState({
        //     isUpdate:true 
        // })
        this.props.getUpdateStatus()
    }
    // getProfile = (e) =>{
    //     this.setState({
    //         isUpdate:true 
    //     })
    //     this.props.getUpdateStatus(true)
    // }
    
    render() {
        if (this.state.loggedIn===false){
            return <Redirect to='/login/'> </Redirect>
        }
        return (
            <div>
                <Button.Group widths='4'>
                    <Button>Profile</Button>
                    <Button onClick={this.updateProfile}>Update Profile</Button>
                    <Button>Fix Appointment</Button>
                    
                    <Button onClick={this.logout}>Logout</Button>
                </Button.Group>
            </div>
        )
    }
}
