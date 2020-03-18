import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import routes from '../config/routes';
import * as selectors from '../store/auth/selectors';
import { RootReducer } from '../interfaces/redux';

const PublicRoute = ({ component: Component, isAuth, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      !isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: routes.root }} />
      )
    }
  />
);

const mapStateToProps = (state: RootReducer) => {
  return {
    isAuth: selectors.isAuthSelector(state),
  };
};

export default connect(mapStateToProps)(PublicRoute);
