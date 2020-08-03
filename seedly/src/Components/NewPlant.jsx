import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
// import Search from './Search';
import PlantResults from './PlantResults';

const BASE_URL = 'https://trefle.io/api/v1/plants/search?token='
const TOKEN = process.env.REACT_APP_API_KEY


export default class NewPlant extends Component {

    constructor() {
        super() 
        this.state = {
            info: [],
            plantSearch: ''
        }
    }

    search = async input => {
        const res = await axios(`${BASE_URL}${TOKEN}&q=${input}`);
        const info = await res.data.data;
        this.setState({info})
    };

    inputHandler = async e => {
        this.search(e.target.value);
        this.setState({plantSearch: e.target.value});
    }

    get renderPlants() {
        let info = <h1>No results :(</h1>;
            if (this.state.info) {
                info = <PlantResults list={this.state.info} />
            }
        return info;
    }


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
                <input className="Search" value={this.state.value} onChange={e => this.inputHandler(e)} style={{height: "5vh", width: "30vw", textAlign: "center"}}></input>
                {this.renderPlants}
            </div>
        )
    }
}


// SEARCH FUNCTION SOURCE: https://www.digitalocean.com/community/tutorials/react-live-search-with-axios