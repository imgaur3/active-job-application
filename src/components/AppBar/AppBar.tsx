import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material';
import Tooltip from '../Tooltip/Tooltip';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { ProfilePhoto } from '../../../src/assets/images';
import { dialogOpen } from '../../../src/redux-modules/dialog/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../src/redux-modules/auth/Selectors';
import { get } from 'lodash';

const AppBarContainer = () => {
    const dispatch = useDispatch();
    const loginPayload = useSelector(auth);
    const user = loginPayload.user;
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleNotification = () => {
        dispatch(dialogOpen('dashboardNotification'));
    }
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginBottom: 2 }}>
                <Toolbar className='flex items-end'>
                    <Typography className='text-[#004A56]! font-[Albert_Sans] text-xl! font-normal'>{get(user, 'data.message')}</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 5 new notifications"
                            sx={{
                                backgroundColor: '#F2F2F2',
                                marginRight: 2,
                            }}
                            onClick={handleNotification}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsActiveIcon sx={{ color: '#404040' }} />
                            </Badge>
                        </IconButton>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <Box onClick={handleOpenUserMenu} className="bg-[#11A5BD] p-[2px] rounded-full cursor-pointer">
                                    {get(user, 'data.message') ?
                                        (
                                            <Avatar>
                                                {(get(user, 'data.message', '')).slice(14, 15).toUpperCase()}

                                            </Avatar>
                                        )
                                        :
                                        (
                                            <Avatar alt="User" src={ProfilePhoto} />
                                        )}
                                </Box>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarContainer;