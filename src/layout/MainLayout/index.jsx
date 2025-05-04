import React from 'react';
import { Outlet } from 'react-router-dom';

// Material-UI imports
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery, AppBar, Box, Toolbar } from '@mui/material';

// Redux
import { useSelector } from 'react-redux';

// Project imports
import { drawerWidth } from 'config.js';
import Header from './Header';
import Sidebar from './Sidebar';

// Custom styled components
const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const OutletDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  }
}));

const MainLayout = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const { rtlLayout } = customization;
  const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  React.useEffect(() => {
    setDrawerOpen(matchUpLg);
  }, [matchUpLg]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <AppBar position="fixed" sx={{ bgcolor: '#000000' }}>
        <Toolbar>
          <Header drawerOpen={drawerOpen} drawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Sidebar drawerOpen={drawerOpen} drawerToggle={handleDrawerToggle} />
      <Main open={drawerOpen}>
        <Offset />
        <OutletDiv>
          <Outlet />
        </OutletDiv>
      </Main>
    </Box>
  );
};

export default MainLayout;