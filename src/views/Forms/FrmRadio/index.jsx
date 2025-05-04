import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import RadioButtonsGroup from './RadioButtonsGroup';
import RadioButtons from './RadioButtons';
import FormControlLabelPlacement from './FormControlLabelPlacement';
import ErrorRadios from './ErrorRadios';

// ==============================|| FORM RADIO ||============================== //

const FrmRadio = () => {
  return (
    <>
      <Breadcrumb title="Radio Button">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Radio Button
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Radio Group
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <RadioButtonsGroup />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Standalone Radio
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <RadioButtons />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Label Placement
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <FormControlLabelPlacement />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Show Error
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ErrorRadios />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FrmRadio;
