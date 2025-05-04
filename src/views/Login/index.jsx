import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

// project import
// import AuthLogin from './FirebaseLogin';
import AuthLogin from './JWTLogin';
// import AuthLogin from './Auth0Login';
import useAuth from 'hooks/useAuth';

// assets
import Logo from 'assets/images/Mine My Data White Logo.jpg';

// ==============================|| LOGIN ||============================== //

const Login = () => {
  const theme = useTheme();
  const { isLoggedIn } = useAuth();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.common.black, height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={11} sm={7} md={6} lg={4}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            position: 'relative',
            '& .MuiCardContent-root': {
              flexGrow: 1,
              flexBasis: '50%',
              width: '50%'
            },
            maxWidth: '475px',
            margin: '24px auto',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}
        >
          <CardContent sx={{ p: theme.spacing(5, 4, 5, 4) }}>
            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
                <Box textAlign="center" mb={4}>
                  <RouterLink to="/">
                    <img 
                      alt="Mine My Data Logo" 
                      src={Logo} 
                      style={{ 
                        maxWidth: '280px', 
                        width: '100%', 
                        border: '2px solid black',
                        borderRadius: '12px',
                        padding: '10px'
                      }} 
                    />
                  </RouterLink>
                </Box>
                <Grid container justifyContent="center" textAlign="center">
                  <Grid item>
                    <Typography color="textPrimary" gutterBottom variant="h2" sx={{ 
                      fontSize: '2.5rem', 
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      mb: 1.5 
                    }}>
                      Client Demo
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                      Log in below to see our client demo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                      Credentials are pre-filled. Just click the Log In button to continue.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <AuthLogin />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
