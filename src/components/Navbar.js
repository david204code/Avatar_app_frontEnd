import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render() {
    return (
      <nav>
        <ul>
          <li><Link to ='/'></Link></li>
          <li><Link to ='/profile'>My Profile</Link></li>
          {this.props.currentUser ? (
            <li onClick ={this.props.logout}>Logout</li>

          ) : (
            <Fragment>
              <li><Link to ='/login'>Login</Link></li>
              <li><Link to ='/create_account'>Create an Account</Link></li>
            </Fragment>
          )}
        </ul>
      </nav>
    )
  }
}

export default Navbar;