import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Nav from './Nav'


import validation from '../api/Authenticated'
import ProfileHomeContent from './ProfileHomeContent'
// import FixAppointment from './FixAppointment'
import ProfileButtons from './ProfileButtons'
import UpdateProfile from './UpdateProfile'

export default class Profile extends Component {
    constructor(props){
        super(props)
        console.log(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token === null){
            loggedIn = false
        }
        this.state = {
            'id':'',
            "email": "",
            "username": "",
            "contact_number": "",
            "first_name": "",
            "middle_name": '',
            "last_name": "",
            "date_of_birth": '',
            "profile_pictures":'',
            "contact_address":"",
            loggedIn,
            isUpdate:false
        }
        console.log(props.userData);
        // this.setState({username:props.username})
        validation.get(`/user/`,null).then(
            (response)=>{
                console.log(response.data[0].email);
                this.setState({
                    'id':response.data[0].id,
                    "email":response.data[0].email,
                    "username": response.data[0].username,
                    "contact_number": response.data[0].contact_number,
                    "first_name": response.data[0].first_name,
                    "middle_name": response.data[0].middle_name,
                    "last_name": response.data[0].last_name,
                    "date_of_birth": response.data[0].date_of_birth,
                    "profile_pictures":response.data[0].profile_pictures,
                    "contact_address":response.data[0].contact_address,
                })                
            }
        ).catch((error)=>{
            console.log(error);
        })
        this.updatedStatus = this.updatedStatus.bind(this)
        this.updatedUserProfile = this.updatedUserProfile.bind(this)
    };
    updatedStatus(updateClicked){
        this.setState({
            isUpdate:true
        })
    }
    updatedUserProfile (updatedUserData){
        this.setState({
            'id':updatedUserData.id,
            "email":updatedUserData.email,
            "username": updatedUserData.username,
            "contact_number": updatedUserData.contact_number,
            "first_name": updatedUserData.first_name,
            "middle_name": updatedUserData.middle_name,
            "last_name": updatedUserData.last_name,
            "date_of_birth":updatedUserData.date_of_birth,
            "profile_pictures":updatedUserData.profile_pictures,
            "contact_address":updatedUserData.contact_address,

        })
    }
    
    render() {
        if (this.state.loggedIn===false){
            return <Redirect to='/login/'> </Redirect>
        }
        return (
            <>
                <div className="profile-bg">
                    <Nav />
                    <div className="container main-content-wrap">
                        <div className="row">
                            <div className="col-md-3 profile-display">
                                <div className="profile-pic">
                                    <img src={this.state.profile_pictures} alt='Profile Pic'/>
                                </div>
                                <div className="profile-content">
                                    <p className="name"><b> {this.state.first_name} {this.state.middle_name} {this.state.last_name}</b></p>
                                    <div className="username"><p>Username : <b>{this.state.username}</b></p></div>
                                    <br/>
                                    <p>DOB: +{this.state.date_of_birth}</p>
                                    <br/>
                                    <div className="brief-profile">
                                        <i className="fas fa-map-marker-alt"></i> {this.state.contact_address}<br/>
                                        <i className="far fa-envelope"></i>{this.state.email}<br/>
                                        <i className="fas fa-mobile-alt"></i>{this.state.contact_number}<br/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 work-display">
                                <ProfileButtons getUpdateStatus = {this.updatedStatus} />
                                {(!this.state.isUpdate) ? <ProfileHomeContent />:<UpdateProfile sendUserData={this.state}  getUpdatedUser={this.updatedUserProfile}/> }
                            </div>
                             
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
