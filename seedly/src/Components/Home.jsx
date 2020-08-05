import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div className="home-page">
                    <br/>
                    <div className="Logo">
                        <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", right: "42vw"}}>Seedly</h1>
                    </div>
                    <div className="Navbar">
                        <Link to="/NewPlant" style={{textDecoration: "none"}}>
                            <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>New Plant&nbsp; &nbsp;</h2>
                        </Link>
                        <Link to="/Explore" style={{textDecoration: "none"}}>
                            <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>Explore&nbsp; &nbsp;</h2>
                        </Link>
                    </div>
                    <div className="Prompt">
                        <h2 style={{fontFamily: "Pacifico", fontSize: "30pt", color: "#000000"}}>What do you want to grow?</h2>
                        <Link to="/NewPlant">
                        <button style={{fontFamily: "SignPainter", fontSize: "25pt", color: "#45BA9B", width: "200px", height: "60px", border: "none"}}>New Plant</button>
                        </Link>
                        <br/> <br/>
                        <Link to="/Explore">
                        <button style={{fontFamily: "SignPainter", fontSize: "25pt", color: "#45BA9B", width: "200px", height: "60px", border: "none"}}>Explore</button>
                        </Link>
                    </div>
                </div>
            </Router>
        )
    }
}
