/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
    DialogTitle,
    Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type DialogType = {
    maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    open: boolean;
    handleClose?: any;
    title?: string;
    children: ReactNode;
    buttonText?: string;
    subheading?: string;
    className?: any;
    dialogAction?: boolean;
    dialogActionChildren?: ReactNode;
    showClose?: boolean;
    fullScreen?: boolean;
    dialogActionClass?: any;
    dialogTitle?: any;
};
export default function DialogComponent({
    maxWidth,
    open,
    handleClose,
    title,
    subheading,
    children,
    className,
    dialogAction,
    dialogActionChildren,
    showClose = true,
    fullScreen = false,
    dialogActionClass,
    dialogTitle,
}: DialogType) {
    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth={maxWidth}
                className={className}
                open={open}
                fullScreen={fullScreen}
                onClose={(_: any, reason: any) => {
                    if (
                        reason &&
                        (reason === 'backdropClick' || reason === 'escapeKeyDown')
                    )
                        return;
                    handleClose();
                }}
                PaperProps={{
                    classes: {
                        root: fullScreen
                            ? ''
                            : '',
                    },
                }}
            >
                {title && (
                    <Box>
                        <Typography>{title}</Typography>
                        {subheading && (
                            <Typography variant="h6">
                                {subheading}
                            </Typography>
                        )}
                        {showClose && (
                            <Typography
                                variant="caption"
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </Typography>
                        )}
                    </Box>
                )}
                {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
                <DialogContent>{children}</DialogContent>
                {dialogAction && (
                    <DialogActions className={dialogActionClass}>
                        {dialogActionChildren}
                    </DialogActions>
                )}
            </Dialog>
        </React.Fragment>
    );
}
