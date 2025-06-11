import { combineReducers } from 'redux';

import { AuthReducer } from '../auth';
import { GlobalReducer } from '../global';
import DialogReducer from '../dialog/Reducer';
import usersReducer from '../users/Reducer';
import { CompaniesReducer } from '../companies';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = combineReducers<any>({
  auth: AuthReducer,
  global: GlobalReducer,
  dialog: DialogReducer,
  users: usersReducer,
  companies: CompaniesReducer,
});

export default rootReducer;
