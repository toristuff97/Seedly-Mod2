import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import ExplorePlants from './ExplorePlants';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const BASE_URL = 'https://trefle.io/api/v1/'
const TOKEN = process.env.REACT_APP_API_KEY

export default class Explore extends Component {
    constructor() {
        super()
        this.state= {
            info: [],
            pageNumber: 1,
            perPage: 30,
            currentPage: 0
        }
    }

            componentDidMount() {
                this.explorePlants();
            }

            forwardPage = () => {
                this.setState({pageNumber: 2});
                console.log(this.pageNumber);
                // window.location.reload(true);
            }

            backPage = () => {
                this.setState({pageNumber: 1});
                console.log(this.pageNumber);
                // window.location.reload(true);
            }

            refreshPage = () => {
                window.location.reload();
            }

    async explorePlants() {
        try {
            const res = await axios.get(`${BASE_URL}plants?token=${TOKEN}&filter_not[description]&&filter_not[image_url]`);
            console.log(res.data);
            this.setState({info: res.data.data});
        } catch(err) {
            console.error(err.message);
        }
    }
        

    render() {
        return (
            <div className="ExplorePage">
                
                <div className="Logo">
                    <br/>
                    <Link to="/Home" style={{textDecoration:"none"}}>
                    <h1 style={{fontFamily: "Pacifico", fontSize: "35pt", color: "black", position: "relative", top: "2vh", right: "43vw"}}>Seedly</h1>
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

                <div className="ResultsHeading">
                    <h3 style={{color: "black", fontFamily: "SignPainter", fontSize:"25pt"}}>Results</h3>
                </div>
                <div className="Results">
                {
                    this.state.info.map(plant => {
                        console.log(plant);
                        console.log(plant.common_name);
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
                <div className="Pages">
                    {/* <Pagination>
                        <PaginationItem>
                            <PaginationLink previous onClick={this.backPage, this.explorePlants}  />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next onClick={this.forwardPage, this.explorePlants} />
                        </PaginationItem>
                    </Pagination> */}
                </div>
                </div>
            </div>
        )
    }
}

// export default Explore;


// Filtering by plants that have growth_habit included and no edible parts:
// https://trefle.io/api/v1/plants?token=PqNJtAHsO_n4nlOY8CbOKiBRAyW7CuSaO4PMbCOLhtk&filter[growth_habit]&&filter_not[edible_part]

// Showing ALLLLLL of the info for a specific plant:
// https://trefle.io/api/v1/species/cirsium-oleraceum?token=PqNJtAHsO_n4nlOY8CbOKiBRAyW7CuSaO4PMbCOLhtk

// To go to a different page, add however many ampersands you need and page=number
// Ex: 
// https://trefle.io/api/v1/plants?token=PqNJtAHsO_n4nlOY8CbOKiBRAyW7CuSaO4PMbCOLhtk&filter_not[description]&&page=2

// PAGINATION SOURCE
// https://medium.com/@imranhsayed/live-search-with-react-instant-search-pagination-6acd476af756


// I THINK I have to do (BASE_URL + 'plants/token={TOKEN}&filter[growth_habit]&&filter_not[row_spacing]') and then do the map thing with each specific plant result with the description, growth habit, common name, etc. 

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
