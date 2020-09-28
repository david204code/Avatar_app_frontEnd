import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CurrentUser: null,
      CurrentAvatar: null
    };

    // this.setCurrentUser = this.setCurrentUser.bind(this);
  };

  setCurrentUser = (data) => {
    this.setState({
      CurrentUser: data.user,
      CurrentAvatar: data.avatar
    })
  }

  logout = () => {
    this.setState({
      CurrentUser: null,
      CurrentAvatar: null
    })
  }


  render() {
    return (
      <Fragment>
        <Navbar currentUser ={this.state.CurrentUser} logout ={this.logout}/>
        <Switch>
          {/* <Route exact path ='/' component ={Home} /> */}
          {/* <Route exact path ='/' component ={Login} /> */}
          {/* <Route exact path ='/login' render ={() => <Login setCurrentUser ={this.setCurrentUser} />} /> */}
          <Route 
            exact path ={'/login'}
            render ={props => (
              <Login {...props}
                setCurrentUser ={this.setCurrentUser}
              />
            )}
          />  
          <Route exact path ='/create_account' component ={CreateAccount} />
          <Route exact path ='/profile' render={() => {
            return this.state.CurrentUser ? (
              <Profile currentUser ={this.state.CurrentUser} currentAvatar ={this.state.CurrentAvatar} />
            ) : (
              <Login setCurrentUser ={this.setCurrentUser} />
            )
            }} />
        </Switch>
      </Fragment>
    )
  }


}

export default App;
