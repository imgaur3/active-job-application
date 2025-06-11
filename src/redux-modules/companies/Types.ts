export type Company = {
    serial_no: string,
    name: string,
    status: string,
    type: string,
}

export type CompanyState = {
    company: Company,
    isLoading: boolean,
    errorMessage: string,
}

export type CompanyPayload = {
    company: Company,
}

export type CompanyAction = {
    type: string;
    payload?: CompanyPayload;
}