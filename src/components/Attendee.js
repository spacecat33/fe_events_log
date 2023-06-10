import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { params } from "react-router-dom";
import index from "./Index"


class Attendee extends Component {
 
    render() {
        return (
            <div>
                {/* iterate over event attendees and display { event.attendees } */}
                <h3> { this.props.name } - {this.props.position} at {this.props.company} -  </h3>
            </div>
    );
  }
}

export default Attendee;