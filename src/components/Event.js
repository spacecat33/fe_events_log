import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Event extends Component {
  

  // handleDeleteClick = () => {
  //   this.props.deleteEvent(this.props.event)
  //   }
  
  
  render() {
    const { id, title, month, country, diary } = this.props;
    console.log("this.props", this.props)
    return (
      <div>
        <h3> Event name: { title } </h3>
          {/* <ul> id: { id } */}
          <li><Link to={`/events/${ id }`} />{title} </li> 
            {/* <button onClick={() => this.handleDeleteClick()}>DELETE</button>   */}
         
      </div>
    );
  }
}

export default Event;