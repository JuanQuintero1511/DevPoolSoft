
import {

  BusinessCenter,
  ChevronLeft,

  Dashboard,
  House,
  Inbox,

  Logout,
  Mail,
  MarkChatUnread,
  MenuBook,
  NewspaperRounded,
  NotificationsActive,

  VerifiedUserRounded,

} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,

  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { useMemo, useState } from 'react';

import UsersDash from './Pages/Users/UsersDash';
import CompaniesDash from './Pages/Companies/CompaniesDash';
import Jobs from './Pages/Jobs/Jobs';
import Main from './Pages/Main/Main';
import TechNews from './Pages/TechNews/TechNews';
import { Route, Routes, useNavigate } from 'react-router-dom';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const SideListDash = ({ open, setOpen }) => {

  const [selectedLink, setSelectedLink] = useState('');

  const list = useMemo(
    () => [
      {
        title: 'Inicio',
        icon: <House />,
        link: '',
        component: <Main {...{ setSelectedLink, link: '' }} />,
      },
      {
        title: 'Users',
        icon: <VerifiedUserRounded />,
        link: 'users',
        component: <UsersDash {...{ setSelectedLink, link: 'users' }} />,
      },
      {
        title: 'Empresas',
        icon: <BusinessCenter />,
        link: 'companies',
        component: <CompaniesDash {...{ setSelectedLink, link: 'companies' }} />,
      },
      {
        title: 'Postulaciones',
        icon: <MenuBook />,
        link: 'jobs',
        component: <Jobs {...{ setSelectedLink, link: 'jobs' }} />,
      },
      {
        title: 'Noticias Tech',
        icon: <NewspaperRounded />,
        link: 'technews',
        component: <TechNews {...{ setSelectedLink, link: 'technews' }} />,
      },
    ],
    []
  );

  const navigate = useNavigate();


  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => { setOpen(false) }}>

            <ChevronLeft />

          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {list.map((item) => (
            <Route key={item.title} path={item.link} element={item.component} />
          ))}
        </Routes>

      </Box>
    </>
  )
}

export default SideListDash;