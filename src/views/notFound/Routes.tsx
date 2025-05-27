import { IRoute } from '../../common/Types';
import AuthLayout from '../../layouts/AuthLayout';
import NotFound from './NotFound';

export const NotFoundRoute: IRoute = {
  path: '*',
  exact: true,
  element: NotFound,
  layout: AuthLayout,
};
