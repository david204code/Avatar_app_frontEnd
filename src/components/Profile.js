import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>This is the profile page for</h3>
        <h1>{this.props.currentUser.name}</h1>
        <img src ={`http://localhost:3000/${this.props.currentAvatar}`} />
      </div>
    )
  }
}

export default Profile;