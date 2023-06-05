import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './Event';
import EventShow from './EventShow'

class Index extends Component {
  render() {
    console.log("In components/index.js")
    const events = this.props.events.map( (event, i) => <Event key={event.id} title={ event.title } month={ event.month } country={ event.country } diary={ event.diary } attendees={event.attendees.map(attendee => (<div>attendee:{attendee.name} {attendee.company} {attendee.position}</div> ))} />)
    // const id = this.props.match.params
    // console.log(this.props)
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
