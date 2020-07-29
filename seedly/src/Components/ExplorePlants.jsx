// import React, { Component } from 'react'
// import axios from 'axios';


// const BASE_URL = 'https://trefle.io/api/v1/'
// const TOKEN = 'PqNJtAHsO_n4nlOY8CbOKiBRAyW7CuSaO4PMbCOLhtk'

// export default class ExplorePlants extends Component {
//     constructor(props) {
//         super(props)
//         this.state= {
//             info: []
//         }
//     }

//     async explorePlants() {
//         try {
//             const res = await axios.get(BASE_URL + 'plants?token=' + TOKEN + '&filter_not[description]');
//             console.log(res.data);
//             this.setState({plantInfo: res.data.results});
//         } catch(err) {
//             console.error(err.message);
//         }
//     }

//     componentDidMount() {
//         this.explorePlants();
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     this.state.info.map(plant => {
//                         console.log(plant);
//                         return(
//                             <div className="Results">
//                                 <h4 style={{color: "black", fontFamily: "Pacifico", fontSize:"10pt"}}>Name: {plant.data.common_name}</h4>
//                                 <img src={plant.image_url} alt="Plant" />
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }
