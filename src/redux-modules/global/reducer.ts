
import {
  TOGGLE_SIDEBAR,
} from './Actions';
import { GlobalAction, GlobalState } from './Types';

export const GlobalInitialState: GlobalState = {
  sidebar: {
    open: false,
  },
  signedUrlLoading: false,
  errorMessage: '',
  urlResponse: null
};

export default (state = GlobalInitialState, action: GlobalAction) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          open: payload,
        },
      };
    default:
      return state;
  }
};
