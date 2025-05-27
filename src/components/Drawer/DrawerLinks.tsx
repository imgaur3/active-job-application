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
import { DashboardIcon, JobIcon, CompaniesIcon, ApplicationIcon, SettingIcon } from '../../assets/svg';


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
      return '#1B98F5';
    } else return '#6A6A6A';
  };

  const pages: MenuItem[] = [
    {
      text: 'Dashboard',
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('dashboard')
              ? DashboardIcon
              : DashboardIcon
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
              ? JobIcon
              : JobIcon
          }
        />
      ), 
      path: '/job-seekers',
    },
     {
      text: 'Companies',  
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('companies')
              ? CompaniesIcon
              : CompaniesIcon
          }
        />
      ),
      path: '/companies',
    },
     {
      text: 'Applications',  
      id: useId(),
      icon: (
        <img
          src={
            location.pathname.includes('applications')
              ? ApplicationIcon
              : ApplicationIcon
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
              ? ApplicationIcon
              : ApplicationIcon
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
              ? SettingIcon
              : SettingIcon
          }
        />
      ),
      path: '/settings',
    },
  ];
  const isOpen = useSelector(GlobalSelectors.sidebarToggle);

  const { open } = isOpen;
  const MenuItem = ({ path, id, text, icon, onClick }: MenuItem) => (
    <ListItem key={id} disablePadding sx={{ display: 'block' }}>
      <Link
        style={{ color: getColor(path) }}
        to={path}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            px: 2.5,
          }}
          onClick={onClick && onClick}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              marginLeft: '0',
              '& .MuiListItemIcon-root':{
                color: '#FFFFFF',
              },
            }}
          >
            {icon}
          </ListItemIcon>
          {open && (
            <ListItemText
              sx={{'& .MuiTypography-root': {fontFamily: '"Albert Sans", sans-serif'}}}
              primary={text}
            />
          )}
        </ListItemButton>
      </Link>
    </ListItem>
  );
  return (
    <List sx={{
      marginTop: '60px',
      '& .MuiListItemText-root': {
        color: '#505050',
      }
    }}>
      {pages.map((page) => (
        <MenuItem key={page.id} {...page} />
      ))}
    </List>
  );
};

export default DrawerLinks;
