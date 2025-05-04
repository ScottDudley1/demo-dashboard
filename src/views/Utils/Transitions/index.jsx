import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project-import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import SimpleCollapse from './SimpleCollapse';
import SimpleFade from './SimpleFade';
import SimpleGrow from './SimpleGrow';
import SimpleSlide from './SimpleSlide';
import SimpleZoom from './SimpleZoom';

// ==============================|| TRANSITION ||============================== //

const Transitions = () => {
  return (
    <>
      <Breadcrumb title="Transitions">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Transitions
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Collapse
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleCollapse />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Fade
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleFade />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Grow
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleGrow />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Slide
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleSlide />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Zoom
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleZoom />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Transitions;
