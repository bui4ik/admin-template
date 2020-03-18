import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../config/routes';
import Main from '../pages/Main';
import Users from '../pages/Users';
import Media from '../pages/Media';
import SignIn from '../pages/SignIn';

const Routes = () => (
  <Switch>
    <Route exact path={routes.root} component={Main} />
    <Route path={routes.users} component={Users} />
    <Route path={routes.media} component={Media} />
    <Route path={routes.signin} component={SignIn} />
  </Switch>
);

export default Routes;
