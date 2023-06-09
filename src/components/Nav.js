import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/events/new">Create Event</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;