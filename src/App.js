// import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux;'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getEvents } from './actions/eventsIndex';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import eventsIndex from './components/eventsIndex';
import ErrorPage from './components/ErrorPage';
import Form from '.components/Form';



class App extends Component {

  componentDidMount() {
    this.props.getEvents();
  }

render() {

    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <Router> 
         <Nav />
          <Switch>

            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/events" component={ eventsIndex } />
            <Route exact path="/events/new" component={ Form } />
            <Route component={ ErrorPage } />
                      
          </Switch>
          <Footer />
      </Router>
    );
  }
}

const MapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(MapStateToProps, { getEvents })(App);
