import { LoginPayload } from '../redux-modules/auth/Types';

export const signinAPi = (payload: LoginPayload) => {
  return {
    name: 'suneel',
    email: payload.email,
    id: '1223s',
  };
  // return authApi.post('login', payload);
};
