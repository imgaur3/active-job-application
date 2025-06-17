export type Company = {
    companyName: string,
    email: string,
    status: boolean,
    industry: string[],
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
}

export type AddCompanyPayload = {
    company: Company,
}

export type CompanyAction = {
    type: string;
    payload?: AddCompanyPayload;
}