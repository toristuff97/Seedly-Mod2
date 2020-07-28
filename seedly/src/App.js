import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Landing from './Components/Landing'
import Home from './Components/Home'

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
    </div>
    </Router>
  );
}

export default App;

