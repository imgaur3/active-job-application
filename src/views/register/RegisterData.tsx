import React from 'react';
import { Box } from '@mui/material';
import Tabs from '../../components/Tabs';
import Companies from './components/Companies/Companies';
import Users from '../users/Users';

const Register = () => {
  return (
    <Box>
      <Box className="bg-[#d1e8ec] mt-4 rounded-3xl">
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
