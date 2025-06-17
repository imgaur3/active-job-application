import { call, put, takeLatest } from "redux-saga/effects"
import { EXCELREADER, EXCELREADER_COMPLETE, EXCELREADER_LOADING, excelReaderError } from "./Actions"
import { ISagaAction } from "src/common/Types";
import { ExcelSheetPayload } from "./Types";
import { errorMessageHandler } from "src/common/utils/helpers";
import { excelAPI } from "src/services/excel";

function* excelReaderUpload({ payload }: ISagaAction<ExcelSheetPayload>) {
    yield put({ type: EXCELREADER_LOADING });
    try {
        const res = yield call(() => {
            return excelAPI(payload);
        });
        yield put({ type: EXCELREADER_COMPLETE, payload: res });
    }
    catch (err) {
        yield put(
            excelReaderError({
                message: errorMessageHandler(err),
            })
        )
    }
}

export default function* excelReaderSaga() {
    yield takeLatest(EXCELREADER, excelReaderUpload);
}