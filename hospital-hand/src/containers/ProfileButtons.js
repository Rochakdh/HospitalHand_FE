import React, { Component } from 'react'
import { Button, Divider } from 'semantic-ui-react'
export default class ProfileButtons extends Component {
    render() {
        return (
            <div>
                <Button.Group widths='5'>
                    <Button>Update Profile</Button>
                    <Button>Fix Appointment</Button>
                    <Button>History</Button>
                    <Button>Logout</Button>
                </Button.Group>
            </div>
        )
    }
}
