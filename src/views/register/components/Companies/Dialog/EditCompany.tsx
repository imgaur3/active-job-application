import React from 'react';
import { Typography } from '@mui/material';
import { Button, WrapperDialog } from '../../../../../../src/components';

type Props = {
    handleClose: () => void;
    title: string;
    editCompany: object | null;
};

const EditCompany = ({ title, handleClose }: Props) => {
    const onClose = () => {
        handleClose();
    };
    return (
        <WrapperDialog
            id={'editCompany'}
            maxWidth={'sm'}
            title={title}
            handleClose={onClose}
        >
            <div>
                <div>
                    <Typography>
                        {/* Add your content here for editing company */}
                    </Typography>
                    <div>
                        <Typography>
                            {/* Add your content here for editing company */}
                        </Typography>
                    </div>
                    <div>
                        <Button
                            label={'Save'}
                            onClick={() => {
                                // Handle save action
                            }}
                        />
                        <Button
                            label="Cancel"
                            onClick={() => onClose()}
                        />
                    </div>
                </div>
            </div>
        </WrapperDialog>
    )
}

export default EditCompany;