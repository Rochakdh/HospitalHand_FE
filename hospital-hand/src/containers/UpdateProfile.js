import React, { Component } from 'react'
import { Button, Form} from 'semantic-ui-react'
import form from '../api/FormData'


export default class UpdateProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            'id':this.props.sendUserData.id,
            "email": this.props.sendUserData.email,
            "username": this.props.sendUserData.username,
            "contact_number": this.props.sendUserData.contact_number,
            "first_name": this.props.sendUserData.first_name,
            "middle_name": this.props.sendUserData.middle_name,
            "last_name": this.props.sendUserData.last_name,
            "date_of_birth": this.props.sendUserData.date_of_birth,
            "profile_pictures":this.props.sendUserData.profile_pictures,
            "contact_address":this.props.sendUserData.contact_address,
        }
        this.onChange = this.onChange.bind(this)
        this.submitUpdatedForm = this.submitUpdatedForm.bind(this)
        // this.updatedUserProfile = this.props.updatedUserProfile.bind(this)
    };
    submitUpdatedForm = (e)=>{
        const {id,email,username,contact_number,first_name,middle_name,last_name,
            date_of_birth,contact_address} = this.state
            let formData = new FormData()
            var imagedata = document.querySelector('input[type="file"]').files[0];
            formData.append("email",email)
            formData.append("username",username)
            formData.append("contact_number",contact_number)
            formData.append("first_name",first_name)
            formData.append("middle_name", middle_name)
            formData.append("last_name",last_name)
            formData.append("date_of_birth",date_of_birth)
            formData.append("profile_pictures",imagedata)
            formData.append("contact_address",contact_address)
        form.put(`/user/${id}/`,formData).then((response)=>{
                console.log(response.data);
                if (response.status === 200){
                    alert('update successful')
                }
                this.props.getUpdatedUser(response.data)
            }
        ).catch((error)=>{
            let errorData = error.response
            for(var errorMsg in errorData) {
                if(errorData.hasOwnProperty(errorMsg)) {
                    console.log(errorData[errorMsg])
                }
            } 
            // console.log(error.response.data)
        });
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    render() {
        const {email,username,contact_number,first_name,
            middle_name,last_name,date_of_birth,profile_pictures,contact_address} = this.state
        return (
            <div className='update-form'>
                <Form onSubmit={this.submitUpdatedForm}>
                    <Form.Group unstackable widths={2}>
                    <Form.Input label='First name' placeholder='First name' name='first_name' onChange={this.onChange} value={first_name}   />
                    <Form.Input label='Middle name' placeholder='Middle name' name='middle_name' value={middle_name}  onChange={this.onChange} />
                    <Form.Input label='Last name' placeholder='Last name'name='last_name' value={last_name} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group width={2}>
                    <Form.Input type='text' label='Username' placeholder='Username' name='username' value={username} width={12}  onChange={this.onChange}  required/>
                    <Form.Input type='date' label='Date of Birth' placeholder='DOB'  name='date_of_birth' value={date_of_birth} width={12}  onChange={this.onChange} />
                    </Form.Group>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='email' type='email' name='email' value={email}  onChange={this.onChange} />
                    </Form.Field>
                    <Form.Group widths={2}>
                    <Form.Input label='Address' placeholder='Address' name='contact_address' value={contact_address}  onChange={this.onChange}  />
                    <Form.Input label='Phone' type='number' name='contact_number' placeholder='Phone'  value={contact_number}  onChange={this.onChange} name='contact_number' required/>
                    <Form.Input label='Image' type='File'  placeholder='Image'  value={profile_pictures}  onChange={this.onChange}/>
                    </Form.Group>
                    <Button type='submit' color='teal' className="update-submit-btn">Submit</Button>
                </Form>
            </div>
        )
    }
}
