import React from 'react';
import { Box, Grid, Typography, } from "@mui/material";
import { JobSeeker } from "../../assets/images";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './components/webUsageStats';
import DashboardCard from './components/DashboardCard';
import { fontFamily } from '../../../src/common/utils/constants';

const Dashboard = () => {
  const size = {
    width: 200,
    height: 200,
  };

  const data = {
    data: desktopOS,
    valueFormatter,
  };
  return (
    <Box>
      <Box className="w-full h-[250px] rounded-3xl flex items-center justify-between"
        sx={{ backgroundImage: 'linear-gradient(270deg, #11A5BD 0%, #0F8B9F 100%)' }}>
        <Box className="ml-10">
          <Typography sx={{ fontFamily: "'comfortaa', 'sans serif'" }} className="text-2xl! text-[#004A56]">Welcome to<span className="text-[#ffffff]">,</span></Typography>
          <Typography sx={{ fontFamily: "'mulish', 'sans serif'" }} className="text-[#ffffff] text-4xl!">ActiveJobs</Typography>
          <Typography sx={{ fontFamily: "'mulish', 'sans serif'" }} className="text-[#FFFFFF] text-[14px] mt-2!">CosMic-IT is a customer-centric company that proudly <br />offers advanced business IT solutions across multiple<br /> service channels and functions</Typography>
        </Box>
        <Box>
          <img src={JobSeeker} alt={JobSeeker} className="w-[166px] object-contain" />
        </Box>
        <Box>
        </Box>
      </Box>
      <Grid container justifyContent={"space-between"} alignItems="center" className="mt-4">
        <Grid size={{ lg: 8 }}>
          <Grid size={{ lg: 12 }} className="flex">
            <Grid size={{ lg: 6 }}>
              <Box className="flex items-center justify-between flex-col gap-6">
                <DashboardCard title={'Users'} count={'1233'} subTitle={'Total Users'} />
                <DashboardCard title={'Companies'} count={'230'} subTitle={'Total Companies'} />
              </Box>
            </Grid>
            <Grid size={{ lg: 6 }}>
              <Box className="flex items-center justify-between flex-col gap-6">
                <DashboardCard title={'Applicaitons'} count={'435'} subTitle={'Total Applications'} />
                <DashboardCard title={'Register'} count={'258'} subTitle={'Total Register'} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ lg: 4 }}>
          <Box className="w-full bg-[#d1e8ec] rounded-3xl flex items-center justify-center h-[calc(100vh-360px)]!">
            <Box sx={{
              fill: '#11A5BD',
              '& .MuiPieArc-root .MuiPieArc-series-auto-generated-id-0 .MuiPieArc-data-index-0 .MuiPieArc-root':{
                fill: '#11A5BD',
              },
            }}>
              <PieChart
                series={[
                  {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 35,
                    arcLabelRadius: '60%',
                    ...data,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fontWeight: 'bold',
                    fontSize: '14px',
                    fontFamily: fontFamily.primary,
                  },
                }}
                {...size}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard;
