import React, { Component } from 'react'
// import Nav from './Nav'
import { Redirect } from 'react-router-dom'
import validation from '../api/setup';
// import Axios from 'axios';

export default class AdminDashBoard extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn,
            errorMessage: '',
            userId: ''
        }
        this.onChange = this.onChange.bind(this)
        this.loginFormSubmit = this.loginFormSubmit.bind(this)
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    loginFormSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
        const { username, password } = this.state
        console.log(this.state)
        validation.post('user/login/', {
            username: username,
            password: password,
        })

            .then((response) => {
                const userid = response.data.id
                console.log(userid);
                const token = response.data.token
                const is_admin = response.data.is_admin
                const loginflag = response.data.loginflag
                if (token && is_admin ) {
                    localStorage.setItem("token", token)
                    localStorage.setItem("userid", userid)

                    this.setState({
                        loggedIn: true,
                        userId: userid,
                    });
                    console.log(userid)
                    // this.props.userProfile(userid)
                }
                else {
                    this.setState({
                        errorMessage: "Hey! You Provided Us Wrong Details",
                    });
                }
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    errorMessage: "Hey! You Provided Us Wrong Details",
                });
            });

    };
    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to='/admin/'></Redirect>
        }
        
        return (
            <div>
                <div className="backgroundImageAdmin">
                    <div className="bgColorHospital">
                        <div className='homeContentHospital'>
                            <h1>Login</h1>
                            {this.state.errorMessage && <h4 className="error"> {this.state.errorMessage} </h4>}
                            {/* { this.props.location.state.message && <h4 className="error"> { this.props.location.state.message } </h4> } */}
                            <form onSubmit={this.loginFormSubmit}>
                                <input type="text" placeholder="user" name="username"
                                    className="formfields" value={this.state.username}
                                    onChange={this.onChange} required></input>
                                <br />
                                <input type="password" placeholder="password"
                                    name="password" className="formfields"
                                    value={this.state.password}
                                    onChange={this.onChange} required></input>
                                <br />
                                <button type="submit" className="loginbtn">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
