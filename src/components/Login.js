import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit =(event) => {
    event.preventDefault()
    console.log('handle submit...')
  }

  render() {
    return (
      <form onSubmit ={this.handleSubmit} >
        <lable>Name:</lable>
        <input type ='text' name ='name' value ={this.state.name} onChange ={this.handleOnChange} />
        <label>Passwood:</label>
        <input type ='password' name ='password' value ={this.state.password} onChange ={this.handleOnChange} />
        <input type ='submit' value ='Login' />
      </form>
    )
  }

}

export default Login