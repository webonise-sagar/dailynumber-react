import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Dashboard from 'components/dashboard/dashboard';
import Login from 'components/login/login';
import SignUp from 'components/login/sign-up';

class Root extends React.Component {
  render() {
    return(
      <HashRouter>
        <Switch>
        <Route name = "Dashboard" exact path = "/" component = {Dashboard} />
        <Route name = "User Login" path = "/login" component = {Login} />
        <Route name = "user SignUp" path = "/signup" component = {SignUp} />
        </Switch>
      </HashRouter>
    )
  }
}

export default Root;
