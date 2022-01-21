import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Button from './components/Button'
import {useState} from 'react' 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import About from './Pages/About/About'; 
import Home from './Pages/Home/Home'; 
import Portfolio from './Pages/Portfolio/Portfolio'; 

// import ParticlesBg from 'particles-bg'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/About' component = {About}/>
          <Route path = '/Portfolio' component = {Portfolio}/>
        </Switch>
      </Router>
    </div>  
  );
}

/* "color"
"ball"
"lines"
"thick"
"circle"
"cobweb"
"polygon"
"square"
"tadpole"
"fountain"
"random"
"custom"
*/ 

export default App;
