import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { params } from "react-router-dom";
import index from "./Index"
import { deleteAttendee } from '../reducers/eventsReducer';


class Attendee extends Component {
 
    handleDeleteClick = () => {
        debugger;
          this.props.deleteAttendee(this.props.attendee)
          console.log("attendees", this.props.match.params.attendees)
        }

    render() {
        console.log("line 11", this.props.attendee)
        // debugger;
        // console.log ("Attendee component")
        // const attendeeId = this.props.events.attendees
        // console.log("attendees", this.props.events.attendees)
        // console.log(typeof eventId)
        // console.log(eventId)
        // const num = parseInt(eventId, 10)
        // console.log(typeof num)
        // console.log(num)
        // const event = this.props.events.find(event => event.id === num )
        // console.log(event)

        return (
                    <div>
                        <br /><li><ol>Name:{this.props.attendee.name} <br /> Position: {this.props.attendee.position} <br /> Company: {this.props.attendee.company} <button onClick={() => this.handleDeleteClick()}>DELETE</button>  </ol></li>
                        {/* Attendees: {event.attendees.map(attendee => (<div><br /><li><ol>Name:{attendee.name} <br /> Position: {attendee.position} <br /> Company: {attendee.company} <button onClick={() => this.handleDeleteClick()}>DELETE</button>  </ol></li></div>))}
                        {this.props.attendee.name} */}
                 
                {/* iterate over event attendees and display { event.attendees } */}
                {/* Attendees: {event.attendees.map(attendee => (<div><br /><li><ol>Name:{attendee.name} <br /> Position: {attendee.position} <br /> Company: {attendee.company}</ol></li></div>))} */}
                {/* <h3> { this.props.name } - {this.props.position} at {this.props.company} -  </h3> */}
            </div>
        );
  }
}

const mapStateToProps = state => {
    return {
      events: state.events,
    //   attendeeCount: state.attendees.length,
    //   event: state.events.events.find(event => event.id === parseInt(localStorage.getItem('id'))).at(-1)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    //   getEvents: () => dispatch(getEvents()),
      deleteAttendee: dispatch(deleteAttendee())
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Attendee);