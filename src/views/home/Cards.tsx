import React from "react";
import { Box, Typography } from "@mui/material";

interface StatCardProps {
  icon: string;
  title: string;
  count: number | string;
  bgColor?: string;
}

const Cards: React.FC<StatCardProps> = ({ icon, title, count, bgColor = "#F2F2F2" }) => {
  return (
    <Box className={`w-[300px] h-[150px] rounded-3xl`} style={{ backgroundColor: bgColor }}>
      <Box className="flex justify-around flex-row h-full">
        <Box className="flex justify-center items-center">
          <img src={icon} alt={title} className="w-[70px]" />
        </Box>
        <Box className="flex flex-col justify-center">
          <Typography className="text-[20px] font-['Albert Sans', 'sans-serif'] text-[#8D8D8D]">
            {title}
          </Typography>
          <Typography className="text-[25px] text-right text-[#7FC1FB]">
            {count}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
