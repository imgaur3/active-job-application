import React from 'react';
import { IRoute } from '../common/Types';

type RouteWrapper = IRoute;

const PublicRouteWrapper = ({
  layout: Layout,
  element: Component,
  ...props
}: RouteWrapper) => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default PublicRouteWrapper;
