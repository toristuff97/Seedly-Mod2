import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import { Card, CardText, CardBody, CardLink, CardTitle, CardImg, CardSubtitle, ListGroup } from 'reactstrap';
import axios from 'axios';
import Result from './Result'

// This is the base url and env token for the api
const BASE_URL = 'https://trefle.io/api/v1/plants/search?token='
const TOKEN = process.env.REACT_APP_API_KEY

// New Plant page component
export default class NewPlant extends Component {
    // Setting the default state with an empty array of info and a variable for the user input to be held in
    constructor() {
        super() 
        this.state = {
            info: [],
            plantSearch: ''
        }
    }
    // An async function that searches through the API with the input of the plant's common name from the user
    search = async input => {
        const res = await axios(`${BASE_URL}${TOKEN}&q=${input}`);
        const info = await res.data.data;
        this.setState({info: res.data.data})
        // console.log(info);
    };
    // This changes the plantSearch state to hold the user input in the text box
    inputHandler = async e => {
        this.search(e.target.value);
        this.setState({plantSearch: e.target.value});
    }
    // A getter to list each result of the search, or in the case of nothing matching, show a No results message
    get renderPlants() {
        let info = <h1>No results :(</h1>;
            if (this.state.info) {
                info = <Result list={this.state.info} />
            }
        return info;
    }


    render() {
        return (
            <div className="new-plant-page">
                <br/>
                    {/* Logo and navbar */}
                    <div className="Logo">
                        <Link to="/Home" style={{textDecoration: "none"}}>
                        <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", right: "42vw"}}>Seedly</h1>
                        </Link>
                    </div>
                    <div className="Navbar">
                        <Link to="/NewPlant" style={{textDecoration:"none"}}>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>New Plant&nbsp; &nbsp;</h2>
                        </Link>
                        <Link to="/Explore" style={{textDecoration:"none"}}>
                        <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>Explore&nbsp; &nbsp;</h2>
                        </Link>
                    </div>
                    <br/>
                    <h3 style={{fontFamily: "Pacifico", fontSize: "30pt", color: "black"}}>What would you like to grow? <br/>(Common Name only please)</h3>
                <input className="Search" value={this.state.value} onChange={e => this.inputHandler(e)} style={{height: "5vh", width: "30vw", textAlign: "center"}}></input>
                {/* Mapping the results of the search and displaying each in a reactstrap Card component */}
                {
                    this.state.info.map(result => {
                        // console.log(result);
                        // console.log(result.common_name);
                        return(
                            <div className="Result">
                                <Card>
                                    <CardImg top src={result.image_url} style={{width: "100px", height: "100px"}}></CardImg>
                                    <CardTitle>{result.common_name}</CardTitle>
                                    <CardText>{result.description}</CardText>
                                </Card>  
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


// SEARCH FUNCTION SOURCE: https://www.digitalocean.com/community/tutorials/react-live-search-with-axios