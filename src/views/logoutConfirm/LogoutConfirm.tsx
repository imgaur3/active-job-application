import React from 'react';
import { useNavigate } from 'react-router';
import { AuthActions } from '../../redux-modules/auth';
import { useDispatch } from 'react-redux';
import { Button, WrapperDialog } from 'src/components';
import { dialogClose } from 'src/redux-modules/dialog/Actions';
import { Box, Typography } from '@mui/material';



const LogoutConfirm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(AuthActions.logOut({ navigate }));
    };

    const onClose = () => {
        dispatch(dialogClose(''));
    }
    return (
        <WrapperDialog
            id='logoutConfirm'
            title='Logout Confirm'
            maxWidth='sm'
            handleClose={onClose}
        >
            <Typography>
                Are you Sure want to logout?
            </Typography>
            <Box className="mt-10 flex justify-end">
                <Button
                    label='Logout'
                    onClick={handleLogout}
                    isLoading={false}
                    className='bg-[#18a0b9] px-5! text-[#ffffff] mr-5!'
                />
                <Button
                    label='Cancel'
                    onClick={onClose}
                    className='border-[1px] border-[#18a0b9] px-5! text-[#18a0b9]'
                />
            </Box>

        </WrapperDialog>
    )
}

export default LogoutConfirm;