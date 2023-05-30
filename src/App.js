// import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux;'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import eventsIndex from './components/eventsIndex';
import ErrorPage from './components/ErrorPage';



class App extends Component {
  render() {
    return (
      <Router> 
         <Nav />
          <Switch>

            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/events" component={ eventsIndex } />
            <Route component={ ErrorPage } />
         
          
          </Switch>

          <Footer />
      </Router>
    );
  }
}

export default connect(null, {getEvents})(App);
