import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import storage from 'redux-persist/lib/storage';
import { NavigateFunction } from 'react-router-dom';

import {
  LOGIN,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOG_OUT,
  LOG_OUT_COMPLETE,
  LOG_OUT_ERROR,
} from './Actions';
import { ISagaAction } from '../../common/Types';
import { LoginPayload } from './Types';
import { errorMessageHandler } from '../../common/utils/helpers';
import { signinAPi } from '../../services/auth';

function* login({ payload }: ISagaAction<LoginPayload>) {
  try {
    yield put({ type: LOGIN_LOADING });
    const res: AxiosResponse = yield call(() => signinAPi(payload));
    yield put({ type: LOGIN_COMPLETE, payload: res });
  } catch (err) {
    const message = errorMessageHandler(err);
    yield put({ type: LOGIN_ERROR, payload: message });
  }
}

function* logOut({ payload }: ISagaAction<{ navigate: NavigateFunction }>) {
  const { navigate } = payload;
  try {
    yield put({ type: LOG_OUT_COMPLETE });
    storage.removeItem('persist:root');
    // redirect to signin
    navigate('/sign-in');
  } catch (error) {
    const message: string = errorMessageHandler(error);
    yield put({ type: LOG_OUT_ERROR, payload: message });
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

function* logOutSaga() {
  yield takeLatest(LOG_OUT, logOut);
}

export default function* authSagas() {
  yield all([fork(loginSaga), fork(logOutSaga)]);
}
