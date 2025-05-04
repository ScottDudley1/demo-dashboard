import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import SimplePopper from './SimplePopper';
import PositionedPopper from './PositionedPopper';

// ==============================|| POPER ||============================== //

const Popper = () => {
  return (
    <>
      <Breadcrumb title="Popper">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Popper
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <PositionedPopper />
            </CardContent>
          </Card>
          <Card>
            <Divider />
            <CardContent>
              <SimplePopper />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Popper;
