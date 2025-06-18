import React from 'react';
import { Box } from '@mui/material';
import { Button } from 'src/components';
import { useDispatch } from 'react-redux';
import { dialogClose } from 'src/redux-modules/dialog/Actions';
import { WrapperDialog } from 'src/components/Dialog';

const ConfirmDelete = () => {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(dialogClose(''));
    }
    return (
        <WrapperDialog
            id='ConfirmAccountDelete'
            maxWidth='sm'
            title="Delete"
            handleClose={onClose}
        >
            Delete my account!  
            <Box className="text-right">
                <Button
                    label="Submit"
                    type="submit"
                    className='bg-[#18a0b9] px-5! text-[#ffffff] mr-5!'
                />
                <Button
                    label="Cancel"
                    onClick={onClose}
                    className='border-[1px] border-[#18a0b9] px-5! text-[#18a0b9]'
                />
            </Box>
            <Box>

            </Box>
        </WrapperDialog>
    )
}

export default ConfirmDelete;