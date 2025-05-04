import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import BasicTimeline from './BasicTimeline';
import LeftAlignedTimeline from './RightAlignedTimeline';
import AlternateTimeline from './AlternateTimeline';
import ColorsTimeline from './ColorsTimeline';
import OutlinedTimeline from './OutlinedTimeline';
import OppositeContentTimeline from './OppositeContentTimeline';
import CustomizedTimeline from './CustomizedTimeline';

// ==============================|| UI TIMELINE ||============================== //

const UITimeline = () => {
  return (
    <>
      <Breadcrumb title="Timeline">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Advance Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Timeline
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="span" className="card-header">
                  Simple Timeline
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <BasicTimeline />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="span" className="card-header">
                  Left Aligned Timeline
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <LeftAlignedTimeline />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="span" className="card-header">
                  Alternating Timeline
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <AlternateTimeline />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="span" className="card-header">
                  Color Timeline
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ColorsTimeline />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="span" className="card-header">
                  Outlined Timeline
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <OutlinedTimeline />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="span" className="card-header">
                  Opposite Content Timeline
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <OppositeContentTimeline />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardHeader
              title={
                <Typography component="span" className="card-header">
                  Customized Timeline
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <CustomizedTimeline />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UITimeline;
