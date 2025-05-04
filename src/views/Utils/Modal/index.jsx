import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import SimpleModal from './SimpleModal';
import ServerModal from './ServerModal';

// ==============================|| MODAL ||============================== //

const Modal = () => {
  return (
    <>
      <Breadcrumb title="Modal">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Modal
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ServerModal />
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Simple Modal
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleModal />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Modal;
