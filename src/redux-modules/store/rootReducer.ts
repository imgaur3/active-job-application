import { combineReducers } from 'redux';

import { AuthReducer } from '../auth';
import { GlobalReducer } from '../global';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = combineReducers<any>({
  auth: AuthReducer,
  global : GlobalReducer
});

export default rootReducer;
