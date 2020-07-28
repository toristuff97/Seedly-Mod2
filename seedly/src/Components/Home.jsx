import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div className="Homepage">
                    <br/>
                    <div className="Logo">
                        <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", right: "42vw"}}>Seedly</h1>
                    </div>
                    <div className="Navbar">
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>My Plants&nbsp; &nbsp;</h2>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>My Plots&nbsp; &nbsp;</h2>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>Calendar&nbsp; &nbsp;</h2>
                    </div>
                    <div className="Prompt">
                        <h2 style={{fontFamily: "Pacifico", fontSize: "30pt", color: "#000000"}}>What do you want to grow?</h2>
                        
                    </div>
                </div>
            </Router>
        )
    }
}
