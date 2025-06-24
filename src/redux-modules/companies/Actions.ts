import { AddCompanyPayload, DeleteCompanyPayload, EditCompanyPayload } from "./Types";

export const COMPANIES = 'COMPANIES';
export const COMPANIES_LOADING = 'COMPANIES_LOADING';
export const COMPANIES_COMPLETE = 'COMPANIES_COMPLETE';
export const COMPANIES_ERROR = 'COMPANIES_ERROR';

export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_COMPANY_LOADING = 'ADD_COMPANY_LOADING';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_ERROR = 'ADD_COMPANY_SUCCESS';

export const EDIT_COMPANY = 'EDIT_COMPANY';
export const EDIT_COMPANY_LOADING = 'EDIT_COMPANY_LOADING';
export const EDIT_COMPANY_COMPLETE = 'EDIT_COMPANY_COMPLETE';
export const EDIT_COMPANY_ERROR = 'EDIT_COMPANY_ERROR';

export const DELETE_COMPANY = 'DELETE_COMANY';
export const DELETE_COMPANY_LOADING = 'DELETE_COMPANY_LOADING';
export const DELETE_COMPANY_COMPLETE = 'DELETE_COMPANY_COMPLETE';
export const DELETE_COMPANY_ERROR = 'DELETE_COMPANY_ERROR';

export const getAllCompanies = () => {
    return {
        type: COMPANIES,
    }
};

export const getAllCompaniesError = (payload: { message: string }) => ({
    type: COMPANIES_ERROR,
    payload,
});

export const addCompany = (payload: AddCompanyPayload) => ({
    type: ADD_COMPANY,
    payload: payload,
});

export const addCompanyError = (payload: { message: string }) => ({
    type: ADD_COMPANY_ERROR,
    payload: payload,
});

export const editCompanyAction = (payload: EditCompanyPayload) => ({
    type: EDIT_COMPANY,
    payload: payload,
});

export const editCompanyError = (payload: { message: string }) => ({
    type: EDIT_COMPANY_ERROR,
    payload: payload,
});

export const deleteCompanyAction = (payload: DeleteCompanyPayload) => ({
    type: DELETE_COMPANY,
    payload,
});

export const deleteCompanyError = (payload: { message: string }) => ({
    type: DELETE_COMPANY_ERROR,
    payload
})