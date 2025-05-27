/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Grid, Typography, } from "@mui/material";
import Cards from "./Cards";
import { AppIcon, BuildingIcon, SeekersIcon } from "../../assets/svg";
import { DashboardHR } from "../../assets/images";

const Dashboard = () => {
  return (
    <Box>
      <Box className="w-full h-[250px] rounded-3xl flex items-center justify-between"
        sx={{ backgroundImage: 'linear-gradient(270deg, #11A5BD 0%, #0F8B9F 100%)' }}>
        <Box className="ml-10">
          <Typography sx={{ fontFamily: "'comfortaa', 'sans serif'" }} className="text-2xl! text-[#004A56]">Welcome<span className="text-[#ffffff]">,</span></Typography>
          <Typography sx={{ fontFamily: "'mulish', 'sans serif'" }} className="text-[#ffffff] text-4xl!">ActiveJobs</Typography>
          <Typography sx={{ fontFamily: "'mulish', 'sans serif'" }} className="text-[#FFFFFF] text-[14px] mt-2!">CosMic-IT is a customer-centric company that proudly <br />offers advanced business IT solutions across multiple<br /> service channels and functions</Typography>
        </Box>
         <Box>
        <img src={DashboardHR} alt={DashboardHR} className="w-[300px]"/>
      </Box>
      </Box>
    </Box>
  )
}

export default Dashboard;