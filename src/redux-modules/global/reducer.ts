
import {
  EXCELREADER_COMPLETE,
  EXCELREADER_ERROR,
  EXCELREADER_LOADING,
  TOGGLE_SIDEBAR,
} from './Actions';
import { GlobalAction, GlobalState } from './Types';

export const GlobalInitialState: GlobalState = {
  sidebar: {
    open: false,
  },
  signedUrlLoading: false,
  errorMessage: '',
  urlResponse: null,
  isLoading: false,
  createOrUpdateError: {
    message: '',
  },
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
    case EXCELREADER_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case EXCELREADER_COMPLETE:
      return {
        ...state,
        isLoading: false,
      }
    case EXCELREADER_ERROR:
      return {
        ...state,
        isLoading: false,
        createOrUpdateError: action.payload,
      }
    default:
      return state;
  }
};
