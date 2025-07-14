import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string;
    count: number | string;
    subTitle?: string;
    handleNavigate?: string;
}

const DashboardCard = (props: Props) => {
        const navigate = useNavigate();
         const handleClick = () => {
        if (props.handleNavigate) {
            navigate(props.handleNavigate);
        }
    };
    return (
        <Box className="w-[calc(100%-30px)] h-[140px] bg-[#F5F5F5] rounded-3xl flex items-center justify-around hover:bg-[#d1e8ec] transition-all duration-300 ease-in-out hover:cursor-pointer" onClick={handleClick}>
            <Box className="flex flex-col items-start justify-left ">
                <Typography className="text-[#004A56] text-xl! font-[Albert_Sans]">{props.title}</Typography>
                {props.subTitle && <Typography className="text-[#8D8D8D] text-lg font-[Albert_Sans]">{props.subTitle}</Typography>}
            </Box>
            <Typography className="text-[#18a0b9] text-3xl! font-bold font-[Albert_Sans]">{props.count}</Typography>
        </Box>
    )
}

export default DashboardCard;