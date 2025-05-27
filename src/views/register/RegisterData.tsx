import React from 'react';
import { Box, Typography } from '@mui/material';
import Tabs from '../../components/Tabs'; // Make sure the path matches
import { ResumeIcon } from '../../assets/svg';
import { BackDrop } from '../../assets/images';
import Users from './components/users/Users';
import Companies from './components/Companies/Companies';

const Register = () => {
  return (
    <Box>
      <Box
        className="w-full h-[200px] rounded-3xl flex items-center justify-between"
        sx={{
          backgroundImage: 'linear-gradient(270deg, #0F8B9F 0%, #11A5BD 100%)',
        }}
      >
        <Box className="relative">
          <Typography
            sx={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-2xl! ml-10! text-white"
          >
            Register Now
          </Typography>
          <img
            src={BackDrop}
            alt="Backdrop"
            className="absolute left-0 top-1/3 w-full"
          />
        </Box>
        <img src={ResumeIcon} alt="Resume" className="w-[238px]" />
      </Box>

      <Box className="bg-[#F2F2F2] mt-8 rounded-3xl">
        <Tabs
          tabs={[
            { label: 'Companies', href: '/companies', component: <Companies /> },
            { label: 'Users', href: '/users', component: <Users /> },
          ]}
          initialValue={0}
        />
      </Box>
    </Box>
  );
};

export default Register;
