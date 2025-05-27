import { NavigateFunction } from 'react-router-dom';

import { LoginPayload } from './Types';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN = 'LOGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOG_OUT_LOADING = 'LOG_OUT_LOADING';
export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_COMPLETE = 'LOG_OUT_COMPLETE';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';

export const EMPTY_AUTH_STATE = 'EMPTY_AUTH_STATE';

export const logIn = (payload: LoginPayload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logOut = (payload: { navigate: NavigateFunction }) => {
  return {
    type: LOG_OUT,
    payload,
  };
};

export const emptyState = () => {
  return {
    type: EMPTY_AUTH_STATE,
  };
};
