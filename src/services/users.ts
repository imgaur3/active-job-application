import { secureApi } from "../../src/api/Axios";


export const getAllUsersApi = () => {
    return secureApi.get('/profile');
}