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
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route exact path="/NewPlant">
        <NewPlant />
      </Route>
      
    </div>
    </Router>
  );
}

export default App;

