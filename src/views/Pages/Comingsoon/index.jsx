import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Button, CardMedia, Box } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// assets
import Error from 'assets/images/page/comingsoon.svg';

// ==============================|| COOMING SOON ||============================== //

const Soonpages = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minWidth: '100%',
        minHeight: '100vh',
        textAlign: 'center',
        p: { xs: 3.75, md: 'inherit' }
      }}
    >
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item lg={4} md={6} sm={10}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <CardMedia component="img" image={Error} title="Cover image" sx={{ width: '80%', margin: '0 auto' }} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontSize: '25px',
                  fontWeight: '600',
                  position: 'relative',
                  mb: 2,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: 'calc(50% - 25px)',
                    width: 50,
                    height: 4,
                    background: theme.palette.primary.main,
                    borderRadius: '3px'
                  }
                }}
              >
                Sorry, We are Offline!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" variant="body2">
                Our website is currently offline for maintenance, we will back shortly
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Try again
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Soonpages;
