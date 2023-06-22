import React, { Component } from 'react';

class ClickMe extends Component {
    state = {
        name: "", counter: 0
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name.length)
        const NewCounter = this.state.counter + this.state.name.length 
        this.setState({
            counter: NewCounter,
            name: ""

        })

        // count characters in field on Submit
        // add the character count to this.state.counter as 'newstate' not changing the original state
        // rerender page

    }

    render() {

    return (
        <div>
        <form onSubmit={ this.handleSubmit }>
        <div>
           <label htmlFor="name">Title: </label>
            <input type="text" id="name" name="name" value={ this.state.name } onChange={ this.handleChange } />
            </div>
            <input type="submit" value="Increase Counter" /><br />
        </form>
        {this.state.counter}
        </div>
        )
    }
}

export default ClickMe;