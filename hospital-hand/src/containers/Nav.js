import React, { Component } from 'react'


export default class Nav extends Component {
    render() {
        return ( <
            >
            <
            nav >
                <
            h3 >
                    Logo <
            /h3> <
            ul className="nav-links" >
                        <
            li > < a href="/"
                                className="active" > Home < /a></li >
                            <
            li > < a href="/categories" > Services < /a></li >
                                <
            li > < a href="/notices" > Notices < /a></li >
                                    <
            li > < a href="/login" > Login < /a></li >
                                        <
            li > < a href="/signup" > Sigup < /a></li >
                                            <
            li > < a href="/profile" > Profile < /a></li >
                                                <
            /ul>  < /
            nav > <
            />
        )
    }
}