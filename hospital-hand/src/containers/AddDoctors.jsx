import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import Axios from 'axios';



export default class AddDoctors extends Component {


    addDoctor = () => {

        Axios.post(`http://127.0.0.1:8000/categories/create/`)
            .then(docs => {
                this.setState({
                    doctors: docs.data,

                })
                console.log(docs.data);



            })
    }
    render() {



        return (

            <Form action='/categories'>
                <Form.Group widths='50%'>
                    <Form.Field

                        control={Input}
                        label='Name'
                        placeholder='Name'
                    />
                    <Form.Field

                        control={Input}
                        label='Experience (yrs.)'
                        placeholder='Experience in yrs.'

                    />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Opinion'
                    placeholder='Opinion'
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Add Doctor'
                    onClick={this.addDoctor}

                />
            </Form>
        )
    }
}
