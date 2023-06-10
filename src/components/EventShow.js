import React, { Component } from 'react';
import Index from "./Index.js";
import { params } from "react-router-dom";
import { connect } from 'react-redux';


class EventShow extends Component {
    render() {
    // const { id, title, month, country, diary } = this.props;
    
     return (
        <div>
            <h2> The event object is {this.props.match.params.id} {this.props.match.params.title}</h2>
    console.log("this.props", {this.props.match.params.id})
    
    {/* this.props.events.findby( (event, i) => <Event key={ event.id } id={ event.id } title={ event.title } month={ event.month } country={ event.country } diary={ event.diary } attendees={event.attendees.map(attendee => (<div>attendee:{attendee.name} {attendee.company} {attendee.position}</div> ))} />); */}
    {/* use find id in params to find correct event and then show its attendees  - will need to convert string into integer from (this.props.match.params.id) using the parse funcion within the 'find' condition*/}
             {/* <h3> Event name: { title } </h3>
          <ul>
            <p>id: {id}</p>
            <p> Date: { month } </p>
            <p> Where: { country } </p>
            <p> My record: { diary } </p>      */}
        {/* </ul> */}
        </div>
     )
}
}

const mapStateToProps = state => {
    return {
      events: state.events,
      eventCount: state.events.length,
    }
}
  
  export default connect(mapStateToProps)(EventShow);