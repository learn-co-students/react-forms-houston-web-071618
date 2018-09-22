// Code ControlledInput Component Here
import React, { Component } from 'react'
  class ControlledInput extends Component {
        // maxChars: this.props.maxChars
      state = {
        firstName: "John",
        lastName: "Henry"
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value},
        () => {console.log(this.state)})
      }

      render() {
      return (
        <div className='ControlledInput'>
        <form>
          <input type="text" id="firstName" name="firstName" onChange={(e) => this.handleChange(e)} value={this.state.firstName}/>
            <input type="text" id="lastName" name="lastName" onChange={(e) => this.handleChange(e)} value={this.state.lastName}/>
          </form>
        </div>
      )
    }
  }

export default ControlledInput;
