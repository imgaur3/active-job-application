import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <Box className="bg-[#d1e8ec] w-full h-screen flex items-center justify-center" sx={{
      '& .MuiTypography-root': {
        fontFamily: 'Albert Sans, sans-serif',
      }
    }}>
      <Box className="flex flex-col justify-center items-center">
        <Typography className='text-[150px]! font-bold! text-[#18a0b9]'>404</Typography>
        <Typography className="text-center text-xl! font-bold mb-4">
          The page you are looking for does not exist
        </Typography>
        <Link to="/sign-in"><Typography className='mt-6! text-2xl!'>Go back to <span style={{ color: '#18a0b9' }}>Sign in</span></Typography></Link>
      </Box>
    </Box>
  );
};

export default NotFound;
