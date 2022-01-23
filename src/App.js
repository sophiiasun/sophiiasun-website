import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import About from './Pages/About/About'; 
import Home from './Pages/Home/Home'; 
import Portfolio from './Pages/Portfolio/Portfolio'; 

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


export default App;
