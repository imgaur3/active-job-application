import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { LogoAi, LogOut } from '../../assets/svg';
import { GlobalSelectors } from '../../redux-modules/global';
import { toggleSidebar } from '../../redux-modules/global/Actions';
import DrawerLinks from './DrawerLinks';
import { fontFamily } from '../../../src/common/utils/constants';
import { dialogOpen } from 'src/redux-modules/dialog/Actions';
import LogoutConfirm from 'src/views/logoutConfirm/LogoutConfirm';

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  backgroundColor: 'transparent',
  ...theme.mixins.toolbar,
}));


const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const Drawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(GlobalSelectors.sidebarToggle);
  const { open } = isOpen;
  const hadleToggleDrawer = () => {
    dispatch(toggleSidebar(!open));
  };


  const closeDrawer = () => {
    dispatch(toggleSidebar(false));
  };

  const confirmLogout = () => {
    dispatch(dialogOpen('logoutConfirm'));
  }

  return (
    <>
      <Box sx={{
        display: 'flex',
        '& .MuiDrawer-paper': {
          backgroundColor: '#FFFFFF',
          boxShadow: 3,
        },

      }}>
        <CssBaseline />
        <StyledDrawer variant="permanent" open={open} onClose={closeDrawer} sx={{ '& .MuiDrawer-paper': { border: 'none' } }}>
          <Box className="flex flex-col justify-around items-center">
            <Box className="h-[15vh]!">
              <DrawerHeader>
                <IconButton onClick={hadleToggleDrawer} sx={{ marginTop: '20px', ":hover": { cursor: 'pointer' } }}>
                  {open ?
                    <Box className="flex items-center">
                      <img src={LogoAi} alt={LogoAi} />
                      <Typography sx={{ fontFamily: "'mulish', 'sans serif'", fontSize: 18, marginLeft: 1, }}> ActiveJobs </Typography>
                    </Box>
                    : <img src={LogoAi} alt={LogoAi} />}
                </IconButton>
              </DrawerHeader>
            </Box>
            <Box className="h-[70vh]!">
              <List>
                <DrawerLinks />
              </List>
            </Box>
            <Box className="cursor-pointer" onClick={confirmLogout}>
              {
                open ?
                  <Box className="flex justify-around items-center h-[15vh]!">
                    <img src={LogOut} alt={LogOut} className='w-[25px]' />
                    <Typography className='p-2' sx={{ fontFamily: fontFamily.primary }}> Logout </Typography>
                  </Box>
                  :
                  <img src={LogOut} alt={LogOut} className='w-[25px]' />
              }
            </Box>
          </Box>
        </StyledDrawer>
      </Box>
      <LogoutConfirm />
    </>
  );
}

export default Drawer;
