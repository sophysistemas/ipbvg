import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/Signin';
import Dashboard from './pages/Dashboard';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact component = { SignIn }></Route>
        <Route path = '/dashboard' exact component = { Dashboard }></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
