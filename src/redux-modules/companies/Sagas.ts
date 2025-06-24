import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_COMPANY, ADD_COMPANY_LOADING, addCompanyError, COMPANIES, COMPANIES_COMPLETE, COMPANIES_LOADING, DELETE_COMPANY, DELETE_COMPANY_COMPLETE, DELETE_COMPANY_LOADING, deleteCompanyError, EDIT_COMPANY, EDIT_COMPANY_COMPLETE, EDIT_COMPANY_LOADING, editCompanyError, getAllCompaniesError } from "./Actions";
import { errorMessageHandler } from "src/common/utils/helpers";
import { addCompanyAPI, deleteCompanyAPI, editCompanyAPI, getAllCompaniesApi } from "src/services/companies";
import { ISagaAction } from "src/common/Types";
import { AddCompanyPayload, DeleteCompanyPayload, EditCompanyPayload } from "./Types";

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

function* addCompany({ payload }: ISagaAction<AddCompanyPayload>) {
    yield put({ type: ADD_COMPANY_LOADING });
    try {
        const { cb } = payload;
        const res = yield call(addCompanyAPI, payload);
        yield put({ type: COMPANIES_COMPLETE, payload: res });
        yield put({ type: COMPANIES })
        if (cb) {
            cb();
        }
    }
    catch (err) {
        yield put(addCompanyError({
            message: errorMessageHandler(err),
        }))
    }
}

function* editCompanyData({ payload }: ISagaAction<EditCompanyPayload>) {
    yield put({ type: EDIT_COMPANY_LOADING });
    try {
        const data = yield call(editCompanyAPI, payload);
        yield put({ type: EDIT_COMPANY_COMPLETE, payload: data })
    }
    catch (err) {
        yield put(editCompanyError({
            message: errorMessageHandler(err),
        }))
    }
}

function* deleteCompanySaga({ payload }: ISagaAction<DeleteCompanyPayload>) {
    yield put({ type: DELETE_COMPANY_LOADING });
    try {
        const { cb } = payload;
        const res = yield call(deleteCompanyAPI, payload);
        yield put({ type: DELETE_COMPANY_COMPLETE, paylaod: res });
        yield put({ type: COMPANIES })
        if (cb) {
            cb();
        }
    }
    catch (err) {
        yield put(deleteCompanyError({
            message: errorMessageHandler(err),
        }))
    }
}

export default function* CompaniesSagas() {
    yield takeLatest(COMPANIES, companies);
    yield takeLatest(ADD_COMPANY, addCompany);
    yield takeLatest(EDIT_COMPANY, editCompanyData);
    yield takeLatest(DELETE_COMPANY, deleteCompanySaga);
}