import { all, call, spawn } from 'redux-saga/effects';

import { AuthSaga } from '../auth';
import { errorMessageHandler } from '../../common/utils/helpers';
import DialogSagas from '../dialog/Sagas';
import UsersSagas from '../users/Sagas';

export default function* rootSaga() {
  const sagas = [AuthSaga, DialogSagas, UsersSagas];
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            errorMessageHandler(error);
          }
        }
      }),
    ),
  );
}
