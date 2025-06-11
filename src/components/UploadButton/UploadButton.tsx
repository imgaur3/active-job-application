import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface FileUploadButtonProps extends ButtonProps {
    label?: string;
    multiple?: boolean;
    accept?: string;
    onFileChange?: (files: FileList | null) => void;
    className?: string;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
    label = 'Upload files',
    multiple = false,
    accept,
    onFileChange,
    startIcon,
    className,
    ...buttonProps
}) => {
    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={startIcon}
            {...buttonProps}
            className={className}
        >
            {label}
            <VisuallyHiddenInput
                type="file"
                multiple={multiple}
                accept={accept}
                onChange={(event) => {
                    onFileChange?.(event.target.files);
                }}
            />
        </Button>
    );
};

export default FileUploadButton;
