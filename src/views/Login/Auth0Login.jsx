import React, { useState } from 'react';

// material-ui
import { Box, Button, FormHelperText, Grid } from '@mui/material';

// project import
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

// assets
import LockIcon from '@mui/icons-material/Lock';

// ==============================|| AUTH0 LOGIN ||============================== //

const Auth0Login = ({ ...rest }) => {
  const { popupLogin } = useAuth();
  const [error, setError] = useState(null);
  const scriptedRef = useScriptRef();

  const loginHandler = async () => {
    try {
      await popupLogin();
    } catch (err) {
      if (scriptedRef.current) {
        setError(err.message);
      }
    }
  };

  return (
    <Box {...rest}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {error && (
          <Grid item xs={12}>
            <FormHelperText error>{error}</FormHelperText>
          </Grid>
        )}

        <Grid item>
          <Button onClick={loginHandler} variant="contained" color="primary">
            <LockIcon fontSize="small" /> Log in with Auth0
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Auth0Login;
