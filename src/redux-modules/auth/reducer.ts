import {
  EMPTY_AUTH_STATE,
  LOGIN,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOG_OUT,
  LOG_OUT_COMPLETE,
  RESET_PASSWORD_COMPLETE,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_LOADING,
} from './Actions';
import { AuthState, AuthAction } from './Types';

export const authInitialState: AuthState = {
  user: {
    name: '',
    email: '',
    id: '',
  },
  isLoading: false,
  loggedIn: false,
  errorMessage: '',
};

export default (state = authInitialState, action: AuthAction) => {
  const { type } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
        user: null,
      };

    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case LOGIN_COMPLETE:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        loggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        errorMessage: '',
      };
    case LOG_OUT_COMPLETE:
      return {
        ...authInitialState,
      };
    case EMPTY_AUTH_STATE:
      return {
        ...state,
        errorMessage: '',
      };
    case RESET_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
    case RESET_PASSWORD_COMPLETE:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        loggedIn: true,
      }
    default:
      return state;
  }
};
