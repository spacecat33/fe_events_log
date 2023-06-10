import React, { Component } from 'react';
import Index from "./Index.js";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';




class EventShow extends Component {
    
    render() {

        // const event = this.props.events.find(event => event.id === this.props.match.params.id)
    
        const eventId = this.props.match.params.id
        console.log(typeof eventId)
        console.log(eventId)
        const num = parseInt(eventId, 10)
        console.log(typeof num)
        console.log(num)
        const event = this.props.events.find(event => event.id === num )
        console.log(event)

    // const { id, title, month, country, diary, attendees } = this.props;
    // console.log(this.props)
     return (
            <div>
    {/* <h2> The event object is {this.props.match.params.id} {this.props.match.params.title}</h2>
    console.log("this.props", {[this.props.match.params.id].title})
{title} */}
<h2>Details of the event, {event.title}:</h2>
<ol>
    Event Title: {event.title} <br />
    Date:    {event.month} <br />
    Location: {event.country} <br /><br />
    Attendees: {event.attendees.map(attendee => (<div><br /><li><ol>Name:{attendee.name} <br /> Position: {attendee.position} <br /> Company: {attendee.company}</ol></li></div>))}
   <br /> <br />
    My diary of the day: <br /> <br />
     "{event.diary}""
    </ol>
    
    {/* <h3>Total Attendees: {this.props.attendeeCount}</h3> */}



    {/* <h1>{this.props.match.params.event.title}</h1> */}
    
    {/* const event = events.find(event => event.id === {this.props.match.params.id}) */}
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
    //   attendeeCount: state.attendees.length,
    //   event: state.events.events.find(event => event.id === parseInt(localStorage.getItem('id'))).at(-1)
    }
}
  
  export default connect(mapStateToProps)(EventShow);