import { RouteObject } from 'react-router';

import PublicRouteWrapper from '../../route-wrapper/PublicRouteWrapper';
import AuthenticatedRouteWrapper from '../../route-wrapper/AuthenticatedRouteWrapper';
import { IRoute } from '../Types';
import React from 'react';

type AppRoutes = {
  PublicRoutes?: IRoute[];
  ProtectedRoutes?: IRoute[];
};

const createRoutes = (routes: AppRoutes) => {
  const { PublicRoutes = [], ProtectedRoutes = [] } = routes;
  const allRoutes: RouteObject[] = [];

  PublicRoutes.map((route) => {
    allRoutes.push({
      path: route.path,
      element: React.createElement(PublicRouteWrapper, { ...route }),
    });
  });

  ProtectedRoutes.map((route) => {
    allRoutes.push({
      path: route.path,
      element: React.createElement(AuthenticatedRouteWrapper, { ...route }),
    });
  });
  return allRoutes;
};

export default createRoutes;