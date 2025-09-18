import React from 'react';
import { useDispatch } from 'react-redux';
import { dialogClose } from '../../redux-modules/dialog/Actions';
import { WrapperDialog } from '../../components/Dialog';
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