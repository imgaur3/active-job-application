import React from 'react'
import { useDispatch } from 'react-redux'
import { WrapperDialog } from 'src/components/Dialog'
import { dialogClose } from 'src/redux-modules/dialog/Actions'

const AddJobSeeker = () => {
    const dispatch = useDispatch()
    const onClose = () => {
        dispatch(dialogClose(''));
    }
    return (
        <WrapperDialog
            id='addJobSeeker'
            title='Add Job Seeker'
            maxWidth='md'
            handleClose={onClose}
        >
            Test
        </WrapperDialog>
    )
}

export default AddJobSeeker