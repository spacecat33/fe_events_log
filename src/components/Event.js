import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { title, month, country, diary } = this.props
    return (
      <div>
        Events:
        <ul>
          <li>
        <h3> { title } </h3>
        <p> { month } </p>
        <p> { country } </p>
        <p> { diary } </p>       
          </li>
        </ul>
      </div>
    );
  }
}

export default Event;