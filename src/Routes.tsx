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
import { CompaniesRoute } from './views/register/components/Companies/Routes';
import { AllUsersRoute } from './views/users/Routes';
import { ResetPasswordRoute } from './views/auth/ResetPassword/Routes';

const App = () => {
  const PublicRoutes: IRoute[] = [SignInRoute, NotFoundRoute, ForgotPasswordRoute, ResetPasswordRoute];
  const ProtectedRoutes: IRoute[] = [
    HomeRoute,
    JobSeekerRoute,
    ApplicationsRoute,
    SettingsRoute,
    RegisterDataRoute,
    CompaniesRoute,
    AllUsersRoute
  ];

  const auth = useSelector(AuthSelectors.auth);
  const loggedIn = get(auth, 'loggedIn');

  let appRoutes: RouteObject[];
  if (loggedIn) {
    appRoutes = createRoutes({
      ProtectedRoutes,
      PublicRoutes,
    });
  } else {
    appRoutes = createRoutes({ PublicRoutes });
  }
  return useRoutes(appRoutes);
};

export default App;