export const GET_ALL_USERS_LOADING = 'GET_ALL_USERS_LOADING';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_COMPLETE = 'GET_ALL_USERS_COMPLETE';
export const GET_ALL_USERS_ERROR = 'GET_ALL_USERS_ERROR';


export const getAllUsers = () => {
    return {
        type: GET_ALL_USERS,
    }
}

export const getAllUsersError = (payload: { message: string }) => ({
    type: GET_ALL_USERS_ERROR,
    payload,
})