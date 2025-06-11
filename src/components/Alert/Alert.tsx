import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type AlertType = 'success' | 'info' | 'warning' | 'error';

interface AlertProps {
    alerts: AlertType;
    message: string;
    onClose?: () => void;
    className?: string;
}

const CustomAlert: React.FC<AlertProps> = ({ alerts, message, onClose, className }) => {
    if (!message) return null;

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <MuiAlert severity={alerts} onClose={onClose} className={className}>
                {message}
            </MuiAlert>
        </Stack>
    );
};

export default CustomAlert;