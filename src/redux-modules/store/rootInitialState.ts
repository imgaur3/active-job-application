import { authInitialState } from '../auth/reducer';
import { RootState } from './rootState';

export const rootInitialState: RootState = {
  auth: authInitialState,
  global: {
    sidebar: {
      open: false
    },
    signedUrlLoading: false,
    errorMessage: '',
    urlResponse: null
  }
};
