export const COMPANIES = 'COMPANIES';
export const COMPANIES_LOADING = 'COMPANIES_LOADING';
export const COMPANIES_COMPLETE = 'COMPANIES_COMPLETE';
export const COMPANIES_ERROR = 'COMPANIES_ERROR';

export const getAllCompanies = () => {
    return {
        type: COMPANIES,
    }
}

export const getAllCompaniesError = (payload: { message: string }) => ({
    type: COMPANIES_ERROR,
    payload,
})