import React from 'react';
import { useId, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { GlobalSelectors } from '../../redux-modules/global';
import { ActiveDashboard, ActiveSeeker, ActiveApplication, ActiveSetting, ActiveRegister } from '../../assets/svg';
import { fontFamily } from '../../../src/common/utils/constants';


type MenuItem = {
  text?: string;
  id: string;
  icon: ReactNode;
  path: string;
  onClick?: () => void;
};


export const DrawerLinks = () => {
  const location = useLocation();

  const getColor = (curr: string) => {
    if (location.pathname.includes(curr)) {
      return 'red';
    } else return 'green';
  };

  const pages: MenuItem[] = [
    {
      text: 'Dashboard',
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('dashboard')
              ? ActiveDashboard
              : ActiveDashboard
          }
        />
      ),
      path: '/dashboard',
    },
    {
      text: 'Job Seekers',
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('job-seekers')
              ? ActiveSeeker
              : ActiveSeeker
          }
        />
      ),
      path: '/job-seekers',
    },
    {
      text: 'Users',
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('users')
              ? ActiveSeeker
              : ActiveSeeker
          }
        />
      ),
      path: '/all-users',
    },
    {
      text: 'Applications',
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('applications')
              ? ActiveApplication
              : ActiveApplication
          }
        />
      ),
      path: '/applications',
    },
    {
      text: 'Register',
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('register-data')
              ? ActiveRegister
              : ActiveRegister
          }
        />
      ),
      path: '/register-data',
    },
    {
      text: 'Settings',
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('settings')
              ? ActiveSetting
              : ActiveSetting
          }
        />
      ),
      path: '/settings',
    },
  ];
  const isOpen = useSelector(GlobalSelectors.sidebarToggle);

  const { open } = isOpen;
  const MenuItem = ({ path, id, text, icon, onClick }: MenuItem) => (
    <ListItem
      key={id}
      disablePadding
      sx={{ display: 'block' }}>
      <Link
        style={{ color: getColor(path) }}
        to={path}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            px: 2.5,
            background: 'none',
            '& .MuiTouchRipple-root .MuiTouchRipple-root': {
              background: 'red',
            },
            '&:hover': {
              background: '#d1e8ec',
            },
            '& .MuiTouchRipple-root': {
              color: '#11A5BD',
            }
          }}
          onClick={onClick && onClick}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              marginLeft: '0',
              '& .MuiListItemIcon-root': {
                color: '#d1e8ec',
              },
            }}
          >
            {icon}
          </ListItemIcon>
          {open && (
            <ListItemText
              sx={{
                '& .MuiTypography-root': { fontFamily: fontFamily.primary },
              }}
              primary={text}
            />
          )}
        </ListItemButton>
      </Link>
    </ListItem>
  );
  return (
    <List
      sx={{
        '& .MuiListItemText-root': {
          color: '#505050',
        },
      }}
    >
      {pages.map((page) => (
        <MenuItem key={page.id} {...page} />
      ))}
    </List>
  );
};

export default DrawerLinks;