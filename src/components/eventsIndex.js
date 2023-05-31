import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './Event';

class eventsIndex extends Component {
  render() {
    const events = this.props.events.map( (blog, i) => <Blog key={i} title={ event.title } date={ event.month } country={ event.country } diary={ event.diary } />)
    
    return (
      <div>
        List of Events
        { events }
      </div>
    );
  }
}

export default eventsIndex;
