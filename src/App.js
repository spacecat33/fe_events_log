import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getEvents } from './reducers/eventsReducer';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Index from './components/Index';
import ErrorPage from './components/ErrorPage';
import Form from './components/Form';



class App extends Component {

  componentDidMount() {
    console.log("mounting", this.props);
    this.props.getEvents();
  }

render() {

    console.log("rendering post mounting", this.props.events);
    // if (this.props.loading) {
    //   return (
    //     <h3>Loading...</h3>
    //   )
    // }

    return (
      <Router> 

          <Switch>
        
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/events" component={ Index } />
            <Route exact path="/events/new" component={ Form } />
            {/* <Route path="/event/:eventId" component={ Home } /> */}
            <Route component={ ErrorPage } />

          </Switch>  
          <Nav />
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

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
  };
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
