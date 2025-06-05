import { secureApi } from '../../src/api/Axios';
import { LoginPayload } from '../redux-modules/auth/Types';

export const signinAPi = (payload: LoginPayload) => {
  // eslint-disable-next-line no-undef
  console.log(payload, 'service');
  return secureApi.post('/login', payload);
};
