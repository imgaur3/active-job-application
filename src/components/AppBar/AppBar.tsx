import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material';
import Tooltip from '../Tooltip/Tooltip';

const AppBarContainer = () => {
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
    return (
        <Box sx={{
            '& .MuiPaper-root .MuiAppBar-root': {
                backgroundColor: 'transparent',
                color: '#000000',
                boxShadow: 'none',
            }
        }}>
            <AppBar position="static" sx={{
                '& .MuiAppBar-root': {
                    backgroundColor: 'transparent',
                    color: '#000000',
                    boxShadow: 'none',
                }
            }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <div onClick={handleOpenUserMenu}>
                                    {user.displayName ? (
                                        <NotificationsIcon />
                                    ) : (
                                        <Avatar>
                                            {user?.displayName?.slice(0, 1).toUpperCase()}
                                        </Avatar>
                                    )}
                                </div>
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