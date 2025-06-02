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
import { useDispatch } from 'react-redux';

const AppBarContainer = () => {
    const dispatch = useDispatch();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const user = {
        displayName: 'John Doe',
        email: "jhon@gmail.com",
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleNotification = () => {

        // eslint-disable-next-line no-undef
        console.log('opne dialog');
        dispatch(dialogOpen('dashboardNotification'));
    }
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginBottom: 2 }}>
                <Toolbar>
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
                                <Box onClick={handleOpenUserMenu} className="bg-[#11A5BD] p-1 rounded-full cursor-pointer">
                                    {user.displayName ? (
                                        <Avatar alt="User" src={ProfilePhoto} />
                                    ) : (
                                        <Avatar>
                                            {user?.displayName?.slice(0, 1).toUpperCase()}
                                        </Avatar>
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