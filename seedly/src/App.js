import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Landing from './Components/Landing'
import Home from './Components/Home'
import NewPlant from './Components/NewPlant'
import Explore from './Components/Explore'

function App() {
  return (
    <Router>
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
      </Route>
    </div>
    </Router>
  );
}

export default App;

