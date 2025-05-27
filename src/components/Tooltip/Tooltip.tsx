import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { TooltipProps } from '@mui/material/Tooltip';

interface CustomTooltipProps extends TooltipProps {
    children: React.ReactElement;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ children, title, ...props }) => {
    return (
        <Tooltip title={title} {...props}>
            {children}
        </Tooltip>
    );
};

export default CustomTooltip;