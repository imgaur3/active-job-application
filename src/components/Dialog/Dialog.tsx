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
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux-modules/store/rootState';

type DialogType = {
  id: string;
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
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
export default function WrapperDialog({
  id,
  maxWidth,
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
  const { openModelIds } = useSelector((state: RootState) => state.dialog);

  const isOpen = () => {
    return openModelIds.includes(id);
  };
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth={maxWidth}
        className={className}
        open={isOpen()}
        fullScreen={fullScreen}
        onClose={(_: any, reason: any) => {
          if (
            reason &&
            (reason === 'backdropClick' || reason === 'escapeKeyDown')
          )
            return;
          handleClose();
        }}
      >
        <Box className="p-5! max-[300px]:p-2.5!">
          {title && (
            <Box className="relative flex items-start justify-start flex-col">
              <Typography className='text-start text-xl pt-2.5 pr-2.5 pb-2.5 pl-1.5 text-primary max-[550px]:pt-[15px] max-[550px]:pr-[30px] max-[550px]:pb-[5px] max-[550px]:pl-[10px] max-[475px]:break-words max-[320px]:text-[17px]">
  '>{title}</Typography>
              {subheading && (
                <Typography className="text-start text-lg pt-2.5 pr-2.5 pb-2.5 pl-1.5 font-normal max-[550px]:pt-[15px] max-[550px]:pr-[30px] max-[550px]:pb-[5px] max-[550px]:pl-[10px] max-[475px]:text-base">

                  {subheading}
                </Typography>
              )}
              {showClose && (
                <Typography
                  variant="caption"
                  onClick={handleClose}
                  className="absolute cursor-pointer top-3 right-0 hover:bg-transparent"
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
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
