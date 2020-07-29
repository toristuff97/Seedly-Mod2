import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';

class Explore extends Component {
    render() {
        return (
            <div className="ExplorePage">
                <div className="Navbar">
                    <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", top: "20vh", right:"67vw"}}>Seedly</h1>
                </div>
                <div className="Filter">
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Vegetables</button> <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Fruits</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Herbs</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Flowers</button>
                    <br/>
                    <h3 style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000"}}>Sort By:</h3>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>A-Z</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Z-A</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Planting Season</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Harvest Season</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Time to Harvest</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Average Yield</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Space Required</button>
                    <br/> <br/>
                </div>
                <div className="Results">

                </div>

            </div>
        )
    }
}
export default Explore