import { IRoute } from '../../../common/Types';
import AuthLayout from '../../../layouts/AuthLayout';
import ForgotPassword from './ForgotPassword';

export const ForgotPasswordRoute: IRoute = {
  path: '/forgot-password',
  exact: true,
  element: ForgotPassword,
  layout: AuthLayout,
};
