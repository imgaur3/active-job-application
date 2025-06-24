import React from 'react';
import { get } from 'lodash';
import { Box, Typography } from '@mui/material';
import WrapperDialog from 'src/components/Dialog/Dialog';
import { Button } from 'src/components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompanyAction } from 'src/redux-modules/companies/Actions';
import { CompaniesSelectors } from 'src/redux-modules/companies';

type Props = {
    handleClose: () => void;
    title: string;
    deleteCompany: object | null;
};

const DeleteCompany = ({ handleClose, title, deleteCompany }: Props) => {
    const dispatch = useDispatch();
    const companyData = useSelector(CompaniesSelectors.companies);
    const { deleteCompanyError } = companyData;
    const onClose = () => {
        handleClose();
    };

    const handleDelete = () => {
        const id = get(deleteCompany, 'id');

        const cb = () => {
            onClose();
        };
        dispatch(deleteCompanyAction({ id, cb }));
    };

    return (
        <WrapperDialog
            id={'deleteCompany'}
            maxWidth={'sm'}
            title={title}
            handleClose={onClose}
        >
            <Box>
                <Typography></Typography>
                <Box>
                    <Box>
                        <Typography>
                            Are you sure you want to delete{' '}
                            <span style={{ color: '#18a0b9' }}>
                                {get(deleteCompany, 'name')}
                            </span>{' '}
                            Company?
                        </Typography>
                    </Box>
                    <Box className="flex justify-end items-center mt-6">
                        <Button
                            label="Delete"
                            type="submit"
                            className='bg-[#18a0b9] px-5! text-[#ffffff] mr-5!'
                            onClick={handleDelete}
                        />
                        <Button
                            label="Cancel"
                            onClick={onClose}
                            className='border-[1px] border-[#18a0b9] px-5! text-[#18a0b9]'
                        />
                    </Box>
                </Box>
            </Box>
        </WrapperDialog>
    )
}

export default DeleteCompany