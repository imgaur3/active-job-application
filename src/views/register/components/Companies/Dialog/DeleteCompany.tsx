import React from 'react';
import { get } from 'lodash';
import { Typography } from '@mui/material';
import WrapperDialog from 'src/components/Dialog/Dialog';
import { Button } from 'src/components';

type Props = {
    handleClose: () => void;
    title: string;
    deleteCompany: object | null;
};

const DeleteCompany = ({ handleClose, title, deleteCompany }: Props) => {
    const onClose = () => {
        handleClose();
    };

    const handleDelete = () => {
        const id = get(deleteCompany, 'id');
        // eslint-disable-next-line no-undef
        console.log('Delete action triggered for company ID:', id);
    };
    return (
        <WrapperDialog
            id={'deleteCompany'}
            maxWidth={'sm'}
            title={title}
            handleClose={onClose}
        >
            <div>
                <div>
                    <Typography

                    />
                    <div>
                        <Typography>
                            {`Are you sure you want to delete ${get(
                                deleteCompany,
                                'title',
                            )}
                Company?`}
                        </Typography>
                    </div>
                    <div>
                        <Button
                            label={'delete'}
                            onClick={handleDelete}
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

export default DeleteCompany