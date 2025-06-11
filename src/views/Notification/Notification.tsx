import React from 'react';
import { WrapperDialog } from '../../components';
import { useDispatch } from 'react-redux';
import { dialogClose } from '../../redux-modules/dialog/Actions';

const Notification = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(dialogClose(''));
    }
    return (
        <WrapperDialog
            id='dashboardNotification'
            title='Notification'
            handleClose={handleClose}
        >
            Test
        </WrapperDialog>
    )
}

export default Notification;