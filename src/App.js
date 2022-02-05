import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import About from './Pages/About'; 
import Home from './Pages/Home'; 
import Portfolio from './Pages/Portfolio'; 
import Timeline from './Pages/Timeline'; 
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/About' component = {About}/>
          <Route path = '/Portfolio' component = {Portfolio}/>
          <Route path = '/Timeline' component = {Timeline}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>  
  );
}


export default App;
