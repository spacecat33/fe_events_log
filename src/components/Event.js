import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { title, month, country, diary } = this.props;
    return (
      <div>
<h3> Event name: { title } </h3>
       <ul> 
          <p> Date: { month } </p>
        <p> Where: { country } </p>
        <p> My record: { diary } </p>       
        </ul>
      </div>
    );
  }
}

export default Event;