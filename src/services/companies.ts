import { AddCompanyPayload, EditCompanyPayload } from "src/redux-modules/companies/Types";
import { secureApi } from "../../src/api/Axios";


export const getAllCompaniesApi = () => {
    return secureApi.get('/companies');
}

export const addCompanyAPI = (payload: AddCompanyPayload) => {
    return secureApi.post('/companies', payload);
}

export const editCompanyAPI = (payload: EditCompanyPayload) => {
    const { id } = payload;
    console.log(payload, 'test'); //eslint-disable-line
    return secureApi.post(`/companies/${id}`, payload);
}