import React, { Component } from 'react'

import ProfileTable from './ProfileTable'

export default class ProfileHomeContent extends Component {
    render() {
        return (
            <>
                <div className="my-work">
                    <h3>Appointment </h3>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                < ProfileTable/>
                            </div>
                            <div className="col-md-6">
                                < ProfileTable/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-work">
                    <h3>Appointment </h3>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                < ProfileTable/>
                            </div>
                            <div className="col-md-6">
                                < ProfileTable/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-work">
                    <h3>Appointment </h3>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                < ProfileTable/>
                            </div>
                            <div className="col-md-6">
                                < ProfileTable/>  
                            </div>
                        </div>
                    </div>
                </div>
            </>
        
        )
    }
}
