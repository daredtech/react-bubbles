// Build a PrivateRoute component and use it to protect a route that renders the BubblesPage component
import React from 'react';
import { Route, Redirect } from 'react-router';
import BubblePage from './BubblePage';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // console.log('received the following rest: ', rest)

  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

