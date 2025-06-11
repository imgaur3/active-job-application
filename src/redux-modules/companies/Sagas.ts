import { call, put, takeLatest } from "redux-saga/effects";
import { COMPANIES, COMPANIES_COMPLETE, COMPANIES_LOADING, getAllCompaniesError } from "./Actions";
import { errorMessageHandler } from "src/common/utils/helpers";
import { getAllCompaniesApi } from "src/services/companies";

function* companies() {
    yield put({ type: COMPANIES_LOADING });
    try {
        const data: string = yield call(getAllCompaniesApi);
        yield put({ type: COMPANIES_COMPLETE, payload: data });
    }
    catch (err) {
        yield put(getAllCompaniesError({
            message: errorMessageHandler(err),
        }),
        );
    }
}

export default function* CompaniesSagas() {
    yield takeLatest(COMPANIES, companies);
}