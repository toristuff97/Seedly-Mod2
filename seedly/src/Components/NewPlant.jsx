import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';


export default class NewPlant extends Component {
    render() {
        return (
            <div className="NewPlantPage">
                <br/>
                    <div className="Logo">
                        <Link to="/Home" style={{textDecoration: "none"}}>
                        <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", right: "42vw"}}>Seedly</h1>
                        </Link>
                    </div>
                    <div className="Navbar">
                        <Link to="/MyPlants" style={{textDecoration:"none"}}>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>My Plants&nbsp; &nbsp;</h2>
                        </Link>
                        <Link to="/MyPlots" style={{textDecoration:"none"}}>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>My Plots&nbsp; &nbsp;</h2>
                        </Link>
                        <Link to="/Calendar" style={{textDecoration:"none"}}>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>Calendar&nbsp; &nbsp;</h2>
                        </Link>
                    </div>
                    <br/>
                    <h3 style={{fontFamily: "Pacifico", fontSize: "30pt", color: "black"}}>What would you like to grow? <br/>(Common Name only please)</h3>
                <input className="Search" type="text" style={{height: "5vh", width: "30vw", textAlign: "center"}}></input>
            </div>
        )
    }
}
