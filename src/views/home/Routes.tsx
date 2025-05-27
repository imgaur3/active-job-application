import { IRoute } from '../../common/Types';
import MainLayout from '../../layouts/MainLayout';
import Dashboard from './Home';

export const HomeRoute: IRoute = {
  path: '/dashboard',
  exact: true,
  element: Dashboard,
  layout: MainLayout,
};
