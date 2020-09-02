import React, { Component } from 'react'
import Nav from './Nav'
import { Form, Input, Button } from 'semantic-ui-react'


export default class UpdateAppointment extends Component {
    

    render() {
        const formStyle = {
            paddingLeft: 30 + "em",
            paddingTop: 4 + "em"

        }

       

        return (
            <div className="profile-bg">
                <Nav />
                <Form style={formStyle}>
                    <Form.Field width={10} required>
                        <label>Name Registered For Appointment</label>
                        <Input placeholder='Patient Name' />
                    </Form.Field>
                    <Form.Field width={10} required>
                        <label>Date Registered For Appointment</label>
                        <Input type='date' />
                    </Form.Field>
                    <Form.Field width={10} required>
                        <label>Time Registered For Appointment</label>
                        <Input type='time' />
                    </Form.Field>

                    <Button type='submit'>Update Appointment</Button>


                </Form>
            </div>

        )
    }
}
