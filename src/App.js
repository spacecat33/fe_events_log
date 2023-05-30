// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router> 
         <Nav />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route component={ ErrorPage } />
         
          
          </Switch>
          <Footer />
      </Router>
    );
  }
}

export default App;
