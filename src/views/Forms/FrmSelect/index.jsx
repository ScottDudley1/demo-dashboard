import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import SimpleSelect from './SimpleSelect';
import NativeSelects from './NativeSelects';
import MultipleSelect from './MultipleSelect';
import ControlledOpenSelect from './ControlledOpenSelect';
import DialogSelect from './DialogSelect';
import GroupedSelect from './GroupedSelect';

// ==============================|| FORM SELECT ||============================== //

const FrmSelect = () => {
  return (
    <>
      <Breadcrumb title="Select">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Select
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Simple Select
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleSelect />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Native Select
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <NativeSelects />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Multiple Select
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <MultipleSelect />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Controlled Open Select
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ControlledOpenSelect />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Grouping
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <GroupedSelect />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  With Dialog
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <DialogSelect />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FrmSelect;
