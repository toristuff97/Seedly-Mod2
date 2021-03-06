import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// This is the base url and env token for the api
const BASE_URL = 'https://trefle.io/api/v1/'
const TOKEN = process.env.REACT_APP_API_KEY

// Explore page Component
export default class Explore extends Component {
    // Setting the default state with an empty info array and page numbers which i did not use
    constructor() {
        super()
        this.state= {
            info: [],
            pageNumber: 1,
            perPage: 30
        }
    }
    // An async function to get plants from the first page of the API that include descriptions and images
    async explorePlants() {
        try {
            const res = await axios.get(`${BASE_URL}plants?token=${TOKEN}&filter_not[description]&&filter_not[image_url]`);
            // console.log(res.data);
            this.setState({info: res.data.data});
        } catch(err) {
            console.error(err.message);
        }
    }
    // This loads the results when the page loads
    componentDidMount() {
        this.explorePlants();
    }
        
    render() {
        return (
            <div className="explore-page">
                {/* This is the logo with a link to the homepage */}
                <div className="Logo">
                    <br/>
                    <Link to="/Home" style={{textDecoration:"none"}}>
                    <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", top: "2vh", right: "43vw"}}>Seedly</h1>
                    </Link>
                </div>
                {/* This is the navbar with links to New Plant and Explore page */}
                <div className="Navbar">
                    <Link to="/NewPlant" style={{textDecoration:"none"}}>
                    <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>New Plant&nbsp; &nbsp;</h2>
                    </Link>
                    <Link to="/Explore" style={{textDecoration:"none"}}>
                    <h2 style={{fontFamily: "Pacifico", fontSize: "20pt", color: "#000000"}}>Explore&nbsp; &nbsp;</h2>
                    </Link>
                </div>
                {/* These buttons were SUPPOSED to filter the results but I didn't have time to learn how to do that. */}
                <div className="Filter">
                    <br/>
                    <h3 style={{fontFamily: "SignPainter", fontSize: "25pt", color: "#000000"}}>Filter:</h3>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Vegetables</button> <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Fruits</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Herbs</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Flowers</button>
                    <br/>
                    <h3 style={{fontFamily: "SignPainter", fontSize: "25pt", color: "#000000"}}>Sort By:</h3>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>A-Z</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Z-A</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Planting Season</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Harvest Season</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Time to Harvest</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Average Yield</button>
                    <br/>
                    <button style={{fontFamily: "SignPainter", fontSize: "20pt", color: "#000000", border: "none", backgroundColor: "#16C798"}}>Space Required</button>
                    <br/> <br/>
                </div>

                <div className="results-heading">
                    <h3 style={{color: "black", fontFamily: "SignPainter", fontSize:"25pt"}}>Results</h3>
                </div>
                <div className="Results">
                    {/* Mapping the array of data from the API results and giving each plant its own little container box with its picture and common name */}
                {
                    this.state.info.map(plant => {
                        // console.log(plant);
                        // console.log(plant.common_name);
                        return(
                            <div className="EachPlant">
                                <p style={{color: "black", fontFamily: "SignPainter", fontSize:"20pt"}}>Name:</p>
                                <p style={{color: "black", fontFamily: "SignPainter", fontSize:"20pt"}}>{plant.common_name}</p>
                                <img src={plant.image_url} style={{width: "5vw", height: "10vh"}} alt="Plant" />
                                <p style={{color: "black", fontFamily: "SignPainter", fontSize:"20pt"}}>{plant.description}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

// PAGINATION SOURCE
// https://medium.com/@imranhsayed/live-search-with-react-instant-search-pagination-6acd476af756
