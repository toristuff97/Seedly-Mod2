import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://trefle.io/api/'
const TOKEN = process.env.REACT_APP_API_KEY

class Explore extends Component {
    constructor(props) {
        super(props)
        
        this.state= {
            plantInfo: []
        }
    }

    async explorePlants() {
        try {
            const res = await axios.get(BASE_URL + 'v1/plants?token={TOKEN}&filter_not[description]');
            console.log(res.data);
            this.setState({plantInfo: res.data});
        } catch(err) {
            console.error(err.message);
        }
    }

    componentDidMount() {
        this.explorePlants();
    }

    
    render() {
        return (
            <div className="ExplorePage">
                <div className="Logo">
                    <br/>
                    <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", top: "2vh", right: "43vw"}}>Seedly</h1>
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