import { secureApi } from "src/api/Axios";
import { ExcelSheetPayload } from "src/redux-modules/global/Types";

export const excelAPI = (payload: ExcelSheetPayload) => {
    return secureApi.post('/companies/upload', payload);
};
