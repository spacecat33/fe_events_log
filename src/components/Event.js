import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { params } from "react-router-dom";
import index from "./Index"


class Event extends Component {
//   // handleDeleteClick = () => {
//   //   this.props.deleteEvent(this.props.event)
//   //   }
  render() {
//     const { id, title, month, country, diary } = this.props;
//     console.log("this.props", this.props)
// const Event = (props) => {
    return (
      <div>
        {/* <h3> Event name: { this.props.title } </h3> */}
        <Link 
          to={`/events/${this.props.id}`}>
            <ol><h3> { this.props.title } - {this.props.month} </h3></ol>
        </Link>
          {/* <ul> id: { id } */}
          {/* <li><Link to={`/events/${this.props.event.id}`} />{title} </li>  */}
            {/* <button onClick={() => this.handleDeleteClick()}>DELETE</button>   */}
         
      </div>
    );
  }
}

export default Event;