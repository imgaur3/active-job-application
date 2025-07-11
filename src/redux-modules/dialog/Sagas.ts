/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, select, takeLatest } from "redux-saga/effects";
import { RootState } from "../store/rootState";
import { DIALOG_CLOSE, DIALOG_CLOSE_ASYNC, DIALOG_OPEN, DIALOG_OPEN_ASYNC } from "./Actions";

function* DialogOpenAsync(data: any) {
  const { payload } = data;
  const state: string[] = yield select(
    (state: RootState) => state.dialog.openModelIds,
  );
  const newList = [...state, payload];
  yield put({ type: DIALOG_OPEN, payload: newList });
}
function* DialogCloseAsync(data: any) {
  const { payload } = data;
  const state: string[] = yield select(
    (state: RootState) => state.dialog.openModelIds,
  );
  const newList: string[] = state.filter(
    (item: any) => !item.includes(payload),
  );
  yield put({ type: DIALOG_CLOSE, payload: newList });
}
function* DialogSagas() {
  yield takeLatest(DIALOG_OPEN_ASYNC, DialogOpenAsync);
  yield takeLatest(DIALOG_CLOSE_ASYNC, DialogCloseAsync);
}
export default DialogSagas;
