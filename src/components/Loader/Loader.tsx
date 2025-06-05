import React from 'react';
import { CircularProgress, Box } from '@mui/material';

type Props = {
    size?: number;
};

const Loader = ({ size }: Props) => {
    return (
        <Box>
            <CircularProgress size={size}
                sx={{
                    '& .MuiCircularProgress-circle': {
                        stroke: '#11A5BD',
                    },
                }}
            />
        </Box>
    );
};

export default Loader;
