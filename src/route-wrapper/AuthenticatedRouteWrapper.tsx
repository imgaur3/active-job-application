import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import { IRoute } from '../common/Types';
import { AuthSelectors } from '../redux-modules/auth';

type RouteWrapper = IRoute;

const AuthenticatedRouteWrapper = ({
  layout: Layout,
  element: Component,
  ...props
}: RouteWrapper) => {
  const auth = useSelector(AuthSelectors.auth);
  const loggedIn = get(auth, 'loggedIn');
  console.log(loggedIn, 'check'); //eslint-disable-line

  const RouteWrapper = () => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
  return loggedIn ? <RouteWrapper /> : <Navigate to={'/sign-in'} />;
};

export default AuthenticatedRouteWrapper;
