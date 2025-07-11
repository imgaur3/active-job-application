import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_USERS, GET_ALL_USERS_COMPLETE, GET_ALL_USERS_LOADING, getAllUsersError } from "./Actions";
import { errorMessageHandler } from "../../../src/common/utils/helpers";
import { getAllUsersApi } from "src/services/users";


function* allUsers() {
    yield put({ type: GET_ALL_USERS_LOADING });
    try {
        const data: string = yield call(getAllUsersApi);
        yield put({ type: GET_ALL_USERS_COMPLETE, payload: data });
    }
    catch (err) {
        yield put(getAllUsersError({
            message: errorMessageHandler(err),
        }),
        );
    }
}

export default function* UsersSagas() {
    yield takeLatest(GET_ALL_USERS, allUsers);
}