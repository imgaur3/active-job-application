import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCompanies } from './redux-modules/companies/Actions';
import { getAllUsers } from './redux-modules/users/Actions';

export const useStoreLeaveDateEffect = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCompanies());
        dispatch(getAllUsers());
    }, [dispatch]);
};
