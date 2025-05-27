import { IRoute } from '../../../common/Types';
import MainLayout from '../../../layouts/MainLayout';
import Register from './Register';


export const RegisterRoute: IRoute = {
  path: '/register',
  exact: true,
  element: Register,
  layout: MainLayout,
};
