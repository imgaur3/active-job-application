import React from 'react';
import { Box, Grid, Typography, } from "@mui/material";
import { JobSeeker } from "../../assets/images";
import DashboardCard from './components/DashboardCard';
import { AreaChart } from '../../../src/components';
import { useSelector } from 'react-redux';
import { allUsersDetails } from 'src/redux-modules/users/Selectors';


const Dashboard = () => {
  const usersData = useSelector(allUsersDetails);
  const countObjects = (array) => {
    return Array.isArray(array) ? array.length : 0;
  };

  return (
    <>
      <Box className="w-full h-[250px] rounded-3xl flex items-center justify-between"
        sx={{ backgroundImage: 'linear-gradient(270deg, #0F8B9F 0%, #11A5BD  100%)' }}>
        <Box className="ml-10">
          <Typography className="text-2xl! text-[#004A56] font-[Albert_Sans]">Welcome to<span className="text-[#ffffff]">,</span></Typography>
          <Typography className="text-[#ffffff] text-4xl! font-[Albert_Sans]">ActiveJobs</Typography>
          <Typography className="text-[#FFFFFF] text-[14px] mt-2! font-[Albert_Sans]">CosMic-IT is a customer-centric company that proudly <br />offers advanced business IT solutions across multiple<br /> service channels and functions</Typography>
        </Box>
        <img src={JobSeeker} alt={JobSeeker} className="w-[166px] object-contain" />
        <Box>
        </Box>
      </Box>
      <Grid container justifyContent={"space-between"} alignItems="center" className="mt-4">
        <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }}>
          <Grid size={{ lg: 12 }} className="flex">
            <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }}>
              <Box className="flex items-center justify-between flex-col gap-6">
                <DashboardCard title={'Users'} count={countObjects(usersData.users)} subTitle={'Total Users'} handleNavigate='/all-users' />
                <DashboardCard title={'Job Seekers'} count={'230'} subTitle={'Total Seekers'} handleNavigate='/job-seekers' />
              </Box>
            </Grid>
            <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }}>
              <Box className="flex items-center justify-between flex-col gap-6">
                <DashboardCard title={'Applicaitons'} count={'435'} subTitle={'Total Applications'} handleNavigate='/applications' />
                <DashboardCard title={'Register'} count={'258'} subTitle={'Total Register'} handleNavigate='/register-data' />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }}>
          <Box className="w-full bg-[#F5F5F5] rounded-3xl flex items-center justify-center h-[calc(100vh-380px)]! p-2">
            <AreaChart />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard;
