import React from 'react';
import { Box } from '@mui/material';
import { Tabs } from 'src/components';
import Profile from './components/Profile';
import Other from './components/Other';

const Settings = () => {
  return (
    <Box className="bg-[#d1e8ec] mt-4 rounded-3xl p-6 h-[calc(100vh-120px)]!">
      <Box className="w-full flex justify-between text-left items-center">
        <Tabs
          tabs={[
            { label: 'Profile', href: '/profile', component: <Profile /> },
            { label: 'Other Settings', href: '/other-settings', component: <Other /> },
          ]}
          initialValue={0}
        />
      </Box>
    </Box>
  )
}

export default Settings;