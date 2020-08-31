import React, { Component } from 'react'
import Nav from './Nav'
import signUp from '../api/setup'
import {Redirect} from 'react-router-dom'

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            username: "",
            contact_number: "",
            password: "",
            confirm_password: "",
            errorMessage :"",
            created:false
        }
    };
    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    SignupFormSubmit = (e) =>
    {
        console.log(e)
        console.log(this.state)
        e.preventDefault();
        const {email,username,contact_number,password,confirm_password} = this.state
        signUp.post('user/signup/',{
            email:email,
            username:username,
            contact_number:contact_number,
            password:password,
            confirm_password:confirm_password,
        })
        .then((response)=>{
            if(response.status===201){
                alert('Successfully Created New Account. Please Login!!')
                this.setState({
                    created:true
                });

            }
        })       
        .catch( (error) => {
            console.log(error.response.data);
            let errorData = error.response.data
            for(var errorMsg in errorData) {
                if(errorData.hasOwnProperty(errorMsg)) {
                    this.setState({
                        errorMessage:errorData[errorMsg]
                    });
                }
            } 
        });
    };
    render() {
        if(this.state.created){
            return <Redirect to='/login/'></Redirect>
        }
        return (
            <div>
                <div className="backgroundImage">
                <div className="bgColor">
                    < Nav />
                    <div className='homeContent mr-10'>
                        <h1>Sign Up</h1>
                        <form onSubmit={this.SignupFormSubmit}>
                        { this.state.errorMessage && <h4 className="error"> { this.state.errorMessage } </h4> }
                            <input type="email" placeholder="email" name ="email" 
                                className="formfields" value={this.state.email} 
                                onChange={this.onChange} required></input>
                            <br />
                            
                            <input type="text" placeholder="username" name ="username" 
                                className="formfields" value={this.state.username} 
                                onChange={this.onChange} required></input>
                            <br />
                            <input type="text" placeholder="Contact Number" name ="contact_number" 
                                className="formfields" value={this.state.contact_number} 
                                onChange={this.onChange} ></input>
                            <br />
                            <input type ="password" placeholder="password" 
                                name ="password" className="formfields" 
                                value={this.state.password} 
                                onChange={this.onChange} required></input>
                            <br />
                            <input type ="password" placeholder="Confirm Password" 
                                name ="confirm_password" className="formfields" 
                                value={this.state.confirm_password} 
                                onChange={this.onChange} required></input>
                            <br />
                            <button type="submit" className="loginbtn">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>  
                
            </div>
        )
    }
}
