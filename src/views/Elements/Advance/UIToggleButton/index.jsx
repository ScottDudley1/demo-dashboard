import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import ExclusiveToggleButtons from './ExclusiveToggleButton';
import ToggleButtonsMultiple from './ToggleButtonsMultiple';
import StandaloneToggleButton from './StandaloneToggleButton';
import ToggleButtonSizes from './ToggleButtonSizes';
import VerticalToggleButtons from './VerticalToggleButtons';
import ToggleButtonNotEmpty from './ToggleButtonNotEmpty';
import CustomizedDividers from './CustomizedDividers';

// ==============================|| UI TOGGLE BUTTON ||============================== //

const UIToggleButton = () => {
  return (
    <>
      <Breadcrumb title="Toggle Button">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Advance Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Toggle Button
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Exclusive Selection
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ExclusiveToggleButtons />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Multiple Selection
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ToggleButtonsMultiple />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Standalone Toggle Button
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <StandaloneToggleButton />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Sizes
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ToggleButtonSizes />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Enforce Value Set
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ToggleButtonNotEmpty />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Vertical
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <VerticalToggleButtons />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Customized
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <CustomizedDividers />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UIToggleButton;
