import React from 'react';
import { Switch } from 'react-router';
import routes from '../config/routes';
import Main from '../pages/Main';
import Users from '../pages/Users';
import Media from '../pages/Media';
import SignIn from '../pages/SignIn';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path={routes.root} component={Main} />
    <PrivateRoute path={routes.users} component={Users} />
    <PrivateRoute path={routes.media} component={Media} />
    <PublicRoute path={routes.signin} component={SignIn} />
  </Switch>
);

export default Routes;
