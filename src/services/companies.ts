import { secureApi } from "../../src/api/Axios";


export const getAllCompaniesApi = () => {
    return secureApi.get('/companies');
}