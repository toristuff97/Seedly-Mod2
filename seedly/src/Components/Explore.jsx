import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import ExplorePlants from './ExplorePlants';

const BASE_URL = 'https://trefle.io/api/v1/'
const TOKEN = 'PqNJtAHsO_n4nlOY8CbOKiBRAyW7CuSaO4PMbCOLhtk'


class Explore extends Component {
    constructor(props) {
        super(props)
        this.state= {
            info: []
        }
    }

    async explorePlants() {
                try {
                    const res = await axios.get(BASE_URL + 'plants?token=' + TOKEN + '&filter_not[description]');
                    console.log(res.data);
                    this.setState({plantInfo: res.data.data});
                } catch(err) {
                    console.error(err.message);
                }
            }
        
            componentDidMount() {
                this.explorePlants();
            }

    // Below goes inside Results component (replace what needs to be replaced)
    // {
    //     this.state.info.map((index,id) => {
    //         return (
    //           <div className="theFriends" key={id}>
    //             <h2>My first name is {index.firstname}.</h2>
    //             <h2>My last name is {index.lastname}.</h2>
    //             <h3>My email is {index.email}.</h3>
    //           </div>
    //         )
    //       })}

    // Another example of the above
    // {
    //     this.state.info.map(person => {
    //         console.log(person);
    //         return (
    //             <div className="people">
    //                 <h1>{person.name}</h1>
    //                 <h2>They weigh {person.mass} kg.</h2>
    //                 <h3>They are {person.height} cm tall.</h3>
    //             </div>
    //         )
    //     })
    // }


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

                <div className="ResultsHeading">
                    <h3>Results</h3>
                </div>
                {
                    this.state.info.map(plant => {
                        console.log(plant);
                        return(
                            <div>
                                <h4 style={{color: "black", fontFamily: "Pacifico", fontSize:"10pt"}}>Name: {plant.data.common_name}</h4>
                                <img src={plant.data.image_url} alt="Plant" />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Explore;


// Filtering by plants that have growth_habit included and no edible parts:
// https://trefle.io/api/v1/plants?token=PqNJtAHsO_n4nlOY8CbOKiBRAyW7CuSaO4PMbCOLhtk&filter[growth_habit]&&filter_not[edible_part]

// Showing ALLLLLL of the info for a specific plant:
// https://trefle.io/api/v1/species/cirsium-oleraceum?token=PqNJtAHsO_n4nlOY8CbOKiBRAyW7CuSaO4PMbCOLhtk

// I THINK I have to do (BASE_URL + 'plants/token={TOKEN}&filter[growth_habit]&&filter_not[row_spacing]') and then do the map thing with each specific plant result with the description, growth habit, common name, etc. 