import { ADD_COMPANY_ERROR, ADD_COMPANY_LOADING, ADD_COMPANY_SUCCESS, COMPANIES, COMPANIES_COMPLETE, COMPANIES_ERROR, COMPANIES_LOADING, EDIT_COMPANY_ERROR, EDIT_COMPANY_LOADING, EDIT_COMPANY_COMPLETE, DELETE_COMPANY_LOADING, DELETE_COMPANY_COMPLETE, DELETE_COMPANY_ERROR } from "./Actions";
import { CompanyAction, CompanyState } from "./Types";

export const companiesInitialState: CompanyState = {
    company: {
        name: "",
        email: "",
        status: false,
        country: undefined,
        platform: "",
        domain: "",
        phone: 0,
        type: [],
    },
    isLoading: false,
    errorMessage: "",
    deleteCompanyError: {
        message: ""
    }
}

export default (state = companiesInitialState, action: CompanyAction) => {
    const { type } = action;
    switch (type) {
        case COMPANIES:
            return {
                ...state,
                isLoading: true,
                companies: null,
            };
        case COMPANIES_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            }
        case COMPANIES_COMPLETE:
            return {
                ...state,
                isLoading: false,
                company: action.payload,
            }
        case COMPANIES_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }
        case ADD_COMPANY_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            }
        case ADD_COMPANY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload
            }
        case ADD_COMPANY_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }
        case EDIT_COMPANY_LOADING:
            return {
                isLoading: true,
                errorMessage: '',
            }
        case EDIT_COMPANY_COMPLETE:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
            }
        case EDIT_COMPANY_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }
        case DELETE_COMPANY_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            }
        case DELETE_COMPANY_COMPLETE:
            return {
                ...state,
                isLoading: false,
                paylaod: action.payload
            }
        case DELETE_COMPANY_ERROR:
            return {
                ...state,
                isLoading: false,
                deleteCompanyError: action.payload,
            }
        default:
            return state;
    }
}