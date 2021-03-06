import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing'
import Home from './Components/Home'
import NewPlant from './Components/NewPlant'
import Explore from './Components/Explore'
// import MyPlants from './Components/MyPlants'
// import ExplorePlants from './Components/ExplorePlants'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/NewPlant">
            <NewPlant />
          </Route>
          <Route path="/Explore">
            <Explore />
            {/* <ExplorePlants /> */}
          </Route>
          {/* <Route path="/MyPlants">
            <MyPlants />
          </Route> */}
        </div>
        </Switch>
    </Router>
  );
}

export default App;

