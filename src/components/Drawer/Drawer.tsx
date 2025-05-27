import React from 'react';
import { ChevronRight } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { LogoAi, LogOut } from '../../assets/svg';
import { AuthActions } from '../../redux-modules/auth';
import { GlobalSelectors } from '../../redux-modules/global';
import { toggleSidebar } from '../../redux-modules/global/Actions';
import DrawerLinks from './DrawerLinks';


const drawerWidth = 240;

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
  const navigate = useNavigate();
  const isOpen = useSelector(GlobalSelectors.sidebarToggle);
  const { open } = isOpen;
  const hadleToggleDrawer = () => {
    dispatch(toggleSidebar(!open));
  };
  const handleLogout = () => {
    dispatch(AuthActions.logOut({ navigate }));
  };

  const closeDrawer = () => {
    dispatch(toggleSidebar(false));
  };


  return (
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
          <Box className="h-[10vh]!">
            <DrawerHeader>
              <IconButton onClick={hadleToggleDrawer} sx={{ marginTop: '20px', ":hover": { cursor: 'pointer' } }}>
                {open ?
                <Box className="flex items-center ">
                <img src={LogoAi} alt={LogoAi} />
                <Typography sx={{ fontFamily: "'mulish', 'sans serif'", fontSize: 18, marginLeft: 1, }}> ActiveJobs </Typography>
                </Box>
                : <ChevronRight sx={{ color: '#fff' }} />}
              </IconButton>
            </DrawerHeader>
          </Box>
          <Box className="h-[80vh]!">
            <List>
              <DrawerLinks />
            </List>
          </Box>
          <Box className="h-[10vh]!">
            <img src={LogOut} alt={LogOut} onClick={handleLogout} className='w-[35px] cursor-pointer' />
          </Box>
        </Box>
      </StyledDrawer>
    </Box>
  );
}

export default Drawer;
