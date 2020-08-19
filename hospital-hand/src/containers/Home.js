import React, { Component } from 'react';
// import hospitalhand from './hospitalhand.jpg';
import Nav from './Nav'
// import Background from './Background';
// import HomeBackgroundContent from './HomeBackgroundContent';


export default class Home extends Component {
    render() {
        return (
            <>
                <div className="backgroundImage">
                    <div className="bgColor">
                        < Nav/>
                        <div className='homeContent'>
                            <h1>Hospital Hand</h1>
                            <p>
                                We aspire to be best online platform to assist you to get 
                                hospital service easily and quickly.
                            </p>
                            <p>
                                Book appointment to available doctor by Signing Up.
                            </p>
                            <button type="submit">Make Appointment</button>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}
