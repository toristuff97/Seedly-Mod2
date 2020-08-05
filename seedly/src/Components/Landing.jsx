import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';

// This is the very first page that shows up when you npm start the app, the get started button links to the Homepage.

export default class Landing extends Component {
    render() {
        return (
            <div className="LandingPage">
                <br/>
                <h1 style={{fontFamily: "Pacifico", fontSize: "200pt", color: "black"}}>Seedly</h1>
                <Link to='/Home'>
                <button style={{fontFamily: "SignPainter", fontSize: "45pt", color: "#45BA9B", width: "300px", height: "100px", border: "none"}}>Get Started</button>
                </Link>
            </div>
        )
    }
}
