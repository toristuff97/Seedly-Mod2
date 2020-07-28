import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div className="Homepage">
                    <div className="Logo">
                        <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", right: "42vw"}}>Seedly</h1>
                    </div>
                    <div className="Navbar">
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>My Plants</h2>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>My Plots</h2>
                    </div>
                </div>
            </Router>
        )
    }
}
