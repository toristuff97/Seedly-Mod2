import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
            <div className="LandingPage">
                <br/>
                <h1 style={{fontFamily: "Pacifico", fontSize: "200pt", color: "white"}}>Seedly</h1>
                <br/> 
                <button style={{fontFamily: "SignPainter", fontSize: "45pt", color: "#45BA9B", width: "300px", height: "100px", border: "none"}}>Get Started</button>
            </div>
        )
    }
}
