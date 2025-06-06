import { NavigateFunction } from 'react-router-dom';

import { LoginPayload, ResetPasswordPayload } from './Types';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN = 'LOGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOG_OUT_LOADING = 'LOG_OUT_LOADING';
export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_COMPLETE = 'LOG_OUT_COMPLETE';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_LOADING = 'RESET_PASSWORD_LOADING';
export const RESET_PASSWORD_COMPLETE = 'RESET_PASSWORD_COMPLETE';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

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

export const resetPassword = (payload: ResetPasswordPayload) => {
  return {
    type: RESET_PASSWORD,
    payload,
  }
}

export const resetPasswordError = (payload: { message: string }) => ({
  type: RESET_PASSWORD_ERROR,
  payload,
})