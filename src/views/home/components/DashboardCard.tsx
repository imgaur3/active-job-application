import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
    title: string;
    count: number | string;
    subTitle?: string;
}

const DashboardCard = (props: Props) => {
    return (
        <Box className="w-[calc(100%-30px)] h-[140px] bg-[#F5F5F5] rounded-3xl flex items-center justify-around hover:bg-[#d1e8ec] transition-all duration-300 ease-in-out hover:cursor-pointer">
            <Box className="flex flex-col items-start justify-left ">
                <Typography className="text-[#004A56] text-xl!">{props.title}</Typography>
                {props.subTitle && <Typography className="text-[#8D8D8D] text-lg font-[Albert_Sans]!">{props.subTitle}</Typography>}
            </Box>
            <Typography className="text-[#18a0b9] text-3xl! font-bold font-[Albert_Sans]">{props.count}</Typography>
        </Box>
    )
}

export default DashboardCard;