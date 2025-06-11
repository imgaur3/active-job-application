import { COMPANIES, COMPANIES_COMPLETE, COMPANIES_ERROR, COMPANIES_LOADING } from "./Actions";
import { CompanyAction, CompanyState } from "./Types";

export const companiesInitialState: CompanyState = {
    company: {
        serial_no: '',
        name: '',
        status: '',
        type: '',
    },
    isLoading: false,
    errorMessage: ""
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
        default:
            return state;
    }
}