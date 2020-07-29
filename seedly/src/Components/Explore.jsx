import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';

class Explore extends Component {
    render() {
        return (
            <div className="ExplorePage">
                <div className="Filter">
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Vegetables</button> <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Fruits</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Herbs</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Flowers</button>
                    <br/>
                    <h3 style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000"}}>Sort By:</h3>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>A-Z</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Z-A</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Planting Season</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Harvest Season</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Time to Harvest</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Average Yield</button>
                    <br/>
                    <button style={{fontFamily: "Pacifico", fontSize: "15pt", color: "#000000", border: "none", backgroundColor: "white"}}>Space Required</button>
                    <br/>
                </div>
                <div className="Results">

                </div>

            </div>
        )
    }
}
export default Explore