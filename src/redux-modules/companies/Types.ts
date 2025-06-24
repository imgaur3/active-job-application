import { ErrorType } from "../global/Types"

export type Company = {
    name: string,
    email: string,
    status: boolean,
    type: string[],
    country: {},
    platform: string,
    domain: string,
    phone: number
}

export type EditCompanyPayload = {
    id: string,
    companyName: string,
    email: string,
    status: boolean,
    industry: string[],
    country: {},
    platform: string,
    domain: string,
    phone: number
}

export type CompanyState = {
    company: Company,
    isLoading: boolean,
    errorMessage: string,
    deleteCompanyError: ErrorType,
}

export type AddCompanyPayload = {
    name: string,
    email: string,
    status: string,
    type: string,
    country: string,
    platform: string,
    company_domain: string,
    company_phone: number,
    cb: () => void;
}

export type CompanyAction = {
    type: string;
    payload?: AddCompanyPayload;
}

export type DeleteCompanyPayload = {
    id: number;
    cb: () => void;
}