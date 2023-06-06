import React, { Component } from 'react';
import Index from "./Index.js";
import { params } from "react-router-dom";

class Event extends Component {
    render() {
    // const { id, title, month, country, diary } = this.props;
    
     return (
        <div>
            <h2> The event object is {this.props.match.params.id} {this.props.match.params.title}</h2>
    console.log("this.props", {this.props.match.params.id})
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

export default Event;