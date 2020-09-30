import React, { Component } from 'react';
import { DirectUpload } from 'activestorage';

class CreateAccount extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: '',
      avatar: {},
    }
  }

  // refactoring for the image file path
  handleOnChange = (event) => {
    if (event.target.name === 'avatar') {
      this.setState({
        [event.target.name]: event.target.files[0]
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitting this form...')

    let user = {
      name: this.state.name,
      password: this.state.password,
    }

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => this.uploadFile(this.state.avatar, data))
  }

  uploadFile = (file, user) => {
    const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
      if (error) {
        console.log(error)
      } else {
        // console.log('there is no error....')
        fetch(`http://localhost:3000/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({avatar: blob.signed_id})
        })
        .then(response => response.json())
        .then(data => this.props.updateCurrentUser(data))
      }
    })
  }

  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <label>Name:</label>
        <input type ='text' name ='name' value ={this.state.name} onChange ={this.handleOnChange} />
        <label>Password:</label>
        <input type ='password' name ='password' value ={this.state.password} onChange ={this.handleOnChange} />
        <label>Upload your avatar:</label>
        <input type ='file' name ='avatar' onChange ={this.handleOnChange} />
        <input type ='submit' value ='Create My Account' onSubmit ={this.handleSubmit}/>
      </form>
    )
  }

}

export default CreateAccount;