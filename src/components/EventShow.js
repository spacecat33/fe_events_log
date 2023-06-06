import React, { Component } from 'react';
import Index from "./Index.js";

class Event extends Component {
    render() {
    // const { id, title, month, country, diary } = this.props;
    
     return (
        <div>
            
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