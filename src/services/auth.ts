import { secureApi } from '../../src/api/Axios';
import { LoginPayload, ResetPasswordPayload } from '../redux-modules/auth/Types';

export const signinAPI = (payload: LoginPayload) => {
  return secureApi.post('/login', payload);
};


export const forgotPasswordAPI = (payload: ResetPasswordPayload) => {
  return secureApi.post('/reset-password', payload);
}