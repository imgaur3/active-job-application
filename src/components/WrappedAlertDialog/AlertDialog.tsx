/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Button from '../Button';
type ConfirmDialogProps = {
  dialogOpen: boolean;
  dialogHeading: string;
  dialogContent: any;
  onClose: any;
};
const AlertDialog = ({
  dialogOpen,
  onClose,
  dialogContent,
  dialogHeading,
}: ConfirmDialogProps) => {
  return (
    <Dialog
      open={dialogOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogHeading}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button label={'OK'} onClick={() => onClose()} />
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
