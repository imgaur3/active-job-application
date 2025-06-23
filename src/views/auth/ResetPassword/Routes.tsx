import { IRoute } from '../../../common/Types';
import AuthLayout from '../../../layouts/AuthLayout';
import ResetPassword from './ResetPassword';

export const ResetPasswordRoute: IRoute = {
  path: '/reset-password',
  exact: true,
  element: ResetPassword,
  layout: AuthLayout,
};
