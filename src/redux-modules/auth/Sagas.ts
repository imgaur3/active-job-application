import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import {
  LOGIN,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOG_OUT,
  LOG_OUT_COMPLETE,
  LOG_OUT_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_COMPLETE,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_LOADING,
} from './Actions';
import { ISagaAction } from '../../common/Types';
import { LoginPayload, ResetPasswordPayload } from './Types';
import { errorMessageHandler } from '../../common/utils/helpers';
import { forgotPasswordAPI, signinAPI } from '../../services/auth';

function* login({ payload }: ISagaAction<LoginPayload & { navigate: NavigateFunction }>) {
  try {
    yield put({ type: LOGIN_LOADING });
    const res = yield call(() => signinAPI(payload));
    yield put({ type: LOGIN_COMPLETE, payload: res });
    if (res && payload.navigate) {
      payload.navigate('/dashboard');
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      'An unknown error occurred';
    yield put({ type: LOGIN_ERROR, payload: message });
  }
}

function* logOut({ payload }: ISagaAction<{ navigate: NavigateFunction }>) {
  const { navigate } = payload;
  try {
    yield put({ type: LOG_OUT_COMPLETE });
    storage.removeItem('persist:root');
    navigate('/sign-in');
  } catch (error) {
    const message: string = errorMessageHandler(error);
    yield put({ type: LOG_OUT_ERROR, payload: message });
  }
}

function* resetPassword({ payload }: ISagaAction<ResetPasswordPayload>) {
  try {
    yield put({ type: RESET_PASSWORD_LOADING });
    const res = yield call(() => forgotPasswordAPI(payload));
    yield put({ type: RESET_PASSWORD_COMPLETE, payload: res })
  }
  catch (error) {
    const message: string = errorMessageHandler(error);
    yield put({ type: RESET_PASSWORD_ERROR, payload: message });
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

function* logOutSaga() {
  yield takeLatest(LOG_OUT, logOut);
}

function* resetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD, resetPassword);
}

export default function* authSagas() {
  yield all([fork(loginSaga), fork(logOutSaga), fork(resetPasswordSaga)]);
}
