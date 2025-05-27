import { all, call, spawn } from 'redux-saga/effects';

import { AuthSaga } from '../auth';
import { errorMessageHandler } from '../../common/utils/helpers';

export default function* rootSaga() {
  const sagas = [AuthSaga];
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
