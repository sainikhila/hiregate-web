import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar, Box, IconButton, Toolbar, Button, Container, useMediaQuery,
    MenuItem, Typography, Menu, Avatar, Tooltip
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

import { useRouter, usePathname } from 'next/navigation';

const pages = [
    { id: 1, label: 'Dashboard', link: "/dashboard" },
    { id: 2, label: 'Candidate', link: "/candidate" },
    { id: 3, label: 'Interviewer', link: "/interviewer" },
    { id: 4, label: 'Jobs', link: "/jobs" },
    { id: 5, label: 'Sessions', link: "/sessions" },
    { id: 6, label: 'Interview Schedule', link: "/ischedule" }
];

const settings = [
    { id: 1, label: 'Profile', link: "/profile" },
    { id: 2, label: 'Account', link: "/account" },
    { id: 3, label: 'Logout', link: "/logout" }
];

const Header = () => {
    const theme = useTheme();
    const pathname = usePathname();
    const router = useRouter();

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElProfile, setAnchorElProfile] = useState(null);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOpenMenu = (e, type) => {
        e.preventDefault();
        if (type === 'NAV') {
            setAnchorElNav(e.currentTarget);
        } else {
            setAnchorElProfile(e.currentTarget);
        }
    };

    const onResetAnchors = (e) => {
        if (e) e.preventDefault();
        setAnchorElNav(null);
        setAnchorElProfile(null);
    };

    const onNavigateTo = (e, link) => {
        e.preventDefault();
        onResetAnchors(null);
        router.push(link);
    }

    const RenderMenu = ({ id, sx, mnuItems, anchorEl, menuCloseEvent, onMenuSelected }) => {
        return (
            <Menu

                id={id}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={menuCloseEvent}
                sx={{ ...sx }}
            >
                {mnuItems.map((mnu) => (
                    <MenuItem key={mnu.id} onClick={(e) => onMenuSelected(e, mnu.link)}
                        selected={isSelected(mnu.link)}
                        sx={{
                            '&.Mui-selected': {
                                backgroundColor: (theme) => theme.palette.primary.light,
                                color: (theme) => theme.palette.primary.contrastText,
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: (theme) => theme.palette.primary.dark,
                            },
                            '&:hover': {
                                backgroundColor: (theme) => theme.palette.primary.dark,
                                color: (theme) => theme.palette.primary.contrastText,
                            }
                        }}
                    >
                        <Typography sx={{ textAlign: 'center' }}>{mnu.label}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        );
    }

    const isSelected = (link) => {
        return link.startsWith(pathname);
    }

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'primary.dark', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ minHeight: '64px', padding: { sm: 0, md: 0 } }}>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={(e) => handleOpenMenu(e, 'NAV')}>
                                <MenuIcon />
                            </IconButton>
                            <RenderMenu id={'mnuNav'} mnuItems={pages} anchorEl={anchorElNav}
                                sx={{ display: { xs: 'block', sm: "block", md: 'none' } }}
                                menuCloseEvent={(e) => onResetAnchors(e)} onMenuSelected={(e, link) => onNavigateTo(e, link)} />
                        </Box>
                        {isMobile ? (
                            <>
                                <Image src="/logo.png" alt="logo" width={57} height={54} />
                            </>
                        ) : (
                            <>
                                <Image src="/hiregate.png" alt="logo" width={159} height={54} />
                            </>
                        )}
                        <Box sx={{ flexGrow: 1, pl: 2, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    className={isSelected(page.link) ? 'selected' : ''}
                                    key={page.id}
                                    sx={{
                                        color: "#ffffff", my: 2, display: 'block', textTransform: "none",
                                        '&.selected': {
                                            backgroundColor: (theme) => theme.palette.primary.light,
                                            color: 'white',
                                        },
                                        '&.selected:hover': {
                                            backgroundColor: (theme) => theme.palette.primary.dark,
                                        },
                                        '&:hover': {
                                            backgroundColor: (theme) => theme.palette.primary.light,
                                        }
                                    }}
                                    onClick={(e) => onNavigateTo(e, page.link)}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "flex-end" }}>
                            <Tooltip title="Profile settings">
                                <IconButton onClick={(e) => handleOpenMenu(e, null)} sx={{ p: 0 }}>
                                    <Avatar alt="Hello! User" />
                                </IconButton>
                            </Tooltip>
                            <RenderMenu sx={{}} id={'mnuProfile'} mnuItems={settings} anchorEl={anchorElProfile}
                                menuCloseEvent={(e) => onResetAnchors(e)} onMenuSelected={(e, link) => onNavigateTo(e, link)} />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    );
};

export default Header;
