import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../reducers/eventsReducer';

class Form extends Component {
  state = {
    title: "",
    month: "",
    country: "",
    diary: ""
    // attendees: "",
  }

  
  handleChange = e => {
    console.log("added data to form") 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    console.log("submitted form and called addEvent") 
    e.preventDefault();

    this.props.addEvent(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <h3>Create a diary entry: </h3>
        <form onSubmit={ this.handleSubmit }>
        <div>
           <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
          </div>
       
          <div>
            <p><label htmlFor="month">Date:</label></p>
            <textarea id="month" name="month" value={ this.state.month } onChange={ this.handleChange }/>
          </div>
        
          <div>
            <p><label htmlFor="country">Country:</label></p>
            <textarea id="country" name="country" value={ this.state.country } onChange={ this.handleChange }/>
          </div>
        
          <div>
            <p><label htmlFor="diary">Diary details:</label></p>
            <textarea id="diary" name="diary" value={ this.state.diary } onChange={ this.handleChange }></textarea>
          </div>

          <div>
            <p><label htmlFor="attendee">Attendee details:</label></p>
            <textarea id="attendee" name="attendee" value={ this.state.attendee } onChange={ this.handleChange }></textarea>
          </div>
          console.log({this.state.attendee})
          <br />
          <input type="submit" value="Create Event" /><br />
        </form>
      </div>
    );
  }
}


export default connect(null, { addEvent })(Form)