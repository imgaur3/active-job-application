
import { IRoute } from '../../common/Types';
import MainLayout from '../../layouts/MainLayout';
import Applications from './Applications';

export const ApplicationsRoute: IRoute = {
  path: '/applications',
  exact: true,
  element: Applications,
  layout: MainLayout,
};
