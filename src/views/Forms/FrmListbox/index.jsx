import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

/// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import TransferList from './TransferList';
import TransferListEnhanced from './TransferListEnhanced';

// ==============================|| FORM LISTBOX ||============================== //

const FrmListbox = () => {
  const theme = useTheme();
  return (
    <>
      <Breadcrumb title="Listbox">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Listbox
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ color: theme.palette.text.dark }}>
                Simple Transfer List
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TransferList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ color: theme.palette.text.dark }}>
                Enhanced Transfer List
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TransferListEnhanced />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FrmListbox;
