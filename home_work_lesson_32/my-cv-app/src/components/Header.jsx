import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Головна', path: '/' },
    { label: 'Портфоліо', path: '/portfolio' },
    { label: 'Контакти', path: '/contacts' }
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlgin: 'center'}}>
            <Typography variant='h5' sx={{my: 2, fontWeight: 700, color: 'text.primary'}}>
                Front<Box component="span" sx={{ color: 'primary.main' }}>End</Box>
            </Typography>
            <List>
            {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
                <ListItem key={item.path} disablePadding>
                    <ListItemButton 
                            component={NavLink} 
                            to={item.path}
                            sx={{
                            textAlign: 'center',
                            bgcolor: isActive ? 'primary.light' : 'transparent',
                            color: isActive ? 'primary.main' : 'text.secondary',
                            '&:hover': { bgcolor: 'primary.light', color: 'primary.main' }
                        }}
                    >
                        <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: isActive ? 600 : 400 }} />
                    </ListItemButton>
                </ListItem>
                );
            })}
            </List>
        </Box>
    );

    return(
        <>
            <AppBar
                position='sticky'
                elevation={0}
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: '0px 4px 20px rgba(121, 134, 203, 0.08)',
                    borderBottom: '1px solid rgba(0,0,0,0.02)'
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1040, width: '100%', mx: 'auto' }}>
                    <Typography 
                        variant="h6" 
                        component={NavLink} 
                        to="/"
                        sx={{ 
                        fontWeight: 700, 
                        color: 'text.primary', 
                        textDecoration: 'none',
                        letterSpacing: '0.5px'
                        }}
                    >
                    Front<Box component="span" sx={{ color: 'primary.main' }}>End</Box>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Button 
                                key={item.path} 
                                component={NavLink} 
                                to={item.path}
                                sx={{ 
                                    color: isActive ? 'primary.main' : 'text.secondary',
                                    bgcolor: isActive ? 'primary.light' : 'transparent',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    px: 2,
                                    borderRadius: 2,
                                    '&:hover': {
                                    bgcolor: 'primary.light',
                                    color: 'primary.main'
                                    }
                                }}
                                >
                                {item.label}
                                </Button>
                            );
                        })}
                    </Box>
                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' }, color: 'text.primary' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};