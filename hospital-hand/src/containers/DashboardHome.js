import React, { Component } from 'react'


export default class DashboardHome extends Component {
    render() {
        return (
            <>
                <div className="hospital-work">
                    <div className="row">
                        <div className='col-md-4 hospital-work-flex' style={{backgroundColor:"lightGreen"}}>
                            <h3>Today's Appointments</h3>
                            <h1>100</h1>
                        </div>
                        <div className='col-md-4 hospital-work-flex' style={{backgroundColor:"#FFE701"}}>
                            <h3>Pending Appointments</h3>
                            <h1>100</h1>
                        </div>
                        <div className='col-md-4 hospital-work-flex' style={{backgroundColor:"#F56040"}}>
                            <h3>Complted Appointments</h3>
                            <h1>100</h1>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className='col-md-4 hospital-work-flex' style={{backgroundColor:"lightGreen"}}>
                            <h3>Doctors Available</h3>
                            <h1>100</h1>
                        </div>
                        <div className='col-md-4 hospital-work-flex' style={{backgroundColor:"#FFE701"}}>
                            <h3>Total Departments</h3>
                            <h1>100</h1>
                        </div>
                        <div className='col-md-4 hospital-work-flex' style={{backgroundColor:"#F56040"}}>
                            <h3>Notices Published</h3>
                            <h1>100</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
