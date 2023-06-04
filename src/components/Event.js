import React, { Component } from 'react';

class Event extends Component {
  

  // handleDeleteClick = () => {
  //   this.props.deleteEvent(this.props.event)
  //   }
  
  
  render() {
    const { title, month, country, diary } = this.props;
    console.log("this.props", this.props)
    return (
      <div>
        <h3> Event name: { title } </h3>
          <ul> 
            <p> Date: { month } </p>
            <p> Where: { country } </p>
            <p> My record: { diary } </p>     
            {/* <button onClick={() => this.handleDeleteClick()}>DELETE</button>   */}
          </ul>
      </div>
    );
  }
}

export default Event;