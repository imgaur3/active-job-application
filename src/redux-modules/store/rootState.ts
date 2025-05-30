import { AuthState } from '../auth/Types';
import { GlobalState } from '../global/Types';
import { DialogState } from './Types';

export interface RootState {
  auth: AuthState;
  global: GlobalState;
  dialog: DialogState;

}
