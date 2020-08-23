import React, { Component } from 'react';
import Nav from './Nav'

export default class SideBar extends Component {
    render() {
        return (
            <>
                <div className="flex-wrapper">
                    <div className="flex-child-nav" >
                        <ul className="side-nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/categories">Update Profile</a></li>
                            <li><a href="/notices">Fix Appointment</a></li>
                            <li><a href="/login">User History</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul> 
                    </div>
                    <div className="flex-child-content" >
                        <div className="headig">
                            <div className="profile">
                                <h2>User Profile</h2>
                            </div>
                            <div className="appointment">
                                <button type="submit" className="homme-btn appointment-btn">Make Appointment</button>
                            </div>
                        </div>

                        <div className="user-info">
                            <div className ="user-profile-wrapper" >
                                <div className="backgroundImage bg-rm-ht user-profile">
                                    <div className="bgColor bg-rm-ht">
                                        <div className='user-profie-content'>
                                            <h2>
                                            Hello!  Rochak Dhakal
                                            </h2>
                                            <p>
                                                Here is your profile. See all of your details here
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="user-appointment">
                                    <div className="pending-appointment">
                                        <div className='appointment-content'>
                                            <h2>
                                            Hello!  Rochak Dhakal
                                            </h2>
                                            <p>
                                                Here is your profile. See all of your details here
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fixed-appointment">
                                        <div className='appointment-content'>
                                            <h2>
                                            Hello!  Rochak Dhakal
                                            </h2>
                                            <p>
                                                Here is your profile. See all of your details here
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-right">
                                <div className="profile-pic">
                                    <img src="./hospitalhand.jpg" alt="Profile Pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
