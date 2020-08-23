import React, { Component } from 'react'
import Nav from './Nav'
import ProfileButtons from './ProfileButtons'
import ProfileTable from './ProfileTable'
import Authenticated from '../api/Authenticated'

export default class Profile extends Component {
    render() {
        Authenticated.get()

        return (
            <>
                <div className="profile-bg">
                    <Nav />
                    <div class="container main-content-wrap">
                        <div class="row">
                            <div class="col-md-3 profile-display">
                                <div class="profile-pic">
                                </div>
                                <div class="profile-content">
                                    <p class="name"><b> Rochak Dhakal</b></p>
                                    <div class="age"><p>Age:</p></div>
                                    <br/>
                                    <p>Contact: +9779860259516</p>
                                    <br/>
                                    <p>Koteshwor,Kathmandu,Nepal</p>
                                    <div class="brief-profile">
                                        <i class="fas fa-map-marker-alt"></i> Kathmandu, Nepal<br/>
                                        <i class="far fa-envelope"></i>rochakdh@gmail.com<br/>
                                        <i class="fas fa-mobile-alt"></i>+977 9840259516<br/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 work-display">
                                <ProfileButtons />
                                <div class="my-work">
                                    <h3>Appointment </h3>
                                    <br/>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                < ProfileTable/>
                                            </div>
                                            <div class="col-md-6">
                                                < ProfileTable/>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-work">
                                    <h3>Appointment </h3>
                                    <br/>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                < ProfileTable/>
                                            </div>
                                            <div class="col-md-6">
                                                < ProfileTable/>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-work">
                                    <h3>Appointment </h3>
                                    <br/>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                < ProfileTable/>
                                            </div>
                                            <div class="col-md-6">
                                                < ProfileTable/>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
