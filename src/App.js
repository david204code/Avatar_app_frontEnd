import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login'

class App extends Component {
  constructor() {
    super()
    this.state = {
      CurrentUser: null,
      CurrentAvatar: null
    }
  }


  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path ='/' component ={Login} />
        </Switch>
      </Fragment>
    )
  }


}

export default App;
