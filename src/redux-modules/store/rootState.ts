import { AuthState } from '../auth/Types';
import { GlobalState } from '../global/Types';

export interface RootState {
  auth: AuthState;
  global: GlobalState;
}
