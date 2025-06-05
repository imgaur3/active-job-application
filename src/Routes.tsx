import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import { HomeRoute, NotFoundRoute, SignInRoute } from './views';
import { AuthSelectors } from './redux-modules/auth';
import { IRoute } from './common/Types';
import createRoutes from './common/utils/routeUtils';
import { ForgotPasswordRoute } from './views/auth/ForgotPassword/Routes';
import { JobSeekerRoute } from './views/jobSeekers/Routes';
import { ApplicationsRoute } from './views/applications/Routes';
import { SettingsRoute } from './views/settings/Routes';
import { RegisterDataRoute } from './views/register/Routes';
import { UsersRoute } from './views/register/components/users/Routes';
import { CompaniesRoute } from './views/register/components/Companies/Routes';
import { AllUsersRoute } from './views/users/Routes';

const App = () => {
  const PublicRoutes: IRoute[] = [SignInRoute, NotFoundRoute, ForgotPasswordRoute];
  const ProtectedRoutes: IRoute[] = [HomeRoute, JobSeekerRoute, ApplicationsRoute, SettingsRoute, RegisterDataRoute, UsersRoute, CompaniesRoute, AllUsersRoute];

  const auth = useSelector(AuthSelectors.auth);
  const loggedIn = get(auth, 'loggedIn');

  let appRoutes: RouteObject[];
  if (!loggedIn) {
    appRoutes = createRoutes({ PublicRoutes });
  } else {
    appRoutes = createRoutes({
      PublicRoutes,
      ProtectedRoutes,
    });
  }
  return useRoutes(appRoutes);
};

const RouteWrapper = () => <App />;

export default RouteWrapper;
