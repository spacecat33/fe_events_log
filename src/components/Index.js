import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './Event';

class Index extends Component {
  render() {
    const events = this.props.events.map( (event, i) => <Event key={i} title={ event.title } month={ event.month } country={ event.country } diary={ event.diary } />)
    
    return (
      <div>
        List of Events
        { events }
        <h3>Total Events: {this.props.eventCount}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    eventCount: state.events.length
  }
}

export default connect(mapStateToProps)(Index);
