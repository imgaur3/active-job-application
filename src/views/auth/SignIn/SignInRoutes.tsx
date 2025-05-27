import { IRoute } from '../../../common/Types';
import AuthLayout from '../../../layouts/AuthLayout';
import SignIn from './SignIn';

export const SignInRoute: IRoute = {
  path: '/sign-in',
  exact: true,
  element: SignIn,
  layout: AuthLayout,
};
