import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

import { Component } from 'react'
import Axios from 'axios'

export default class DashboardDoctorAppointmentDetail extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div><Modal
        trigger={<Button color='blue'>Appointments</Button>}
        header='Reminder!'
        content='Call Benjamin regarding the reports.'
        actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
      />

      </div>
    )
  }
}
