import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import ContinuousSlider from './ContinuousSlider';
import DiscreteSlider from './DiscreteSlider';
import SmallStepSlider from './SmallStepSlider';
import CustomSlider from './CustomSlider';
import RestrictedSlider from './RestrictedSlider';
import LabelVisibleSlider from './LabelVisibleSlider';
import RangeSlider from './RangeSlider';
import InputSlider from './InputSlider';
import NonLinearSlider from './NonLinearSlider';
import CustomizedSlider from './CustomizedSlider';
import VerticalSlider from './VerticalSlider';
import TrackFalseSlider from './TrackFalseSlider';
import TrackInvertedSlider from './TrackInvertedSlider';

// ==============================|| FORM SLIDER ||============================== //

const FrmSlider = () => {
  return (
    <>
      <Breadcrumb title="Slider">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Slider
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Continuous Sliders
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ContinuousSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Discrete Sliders
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <DiscreteSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Small Steps
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SmallStepSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Custom Marks
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <CustomSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Restricted Values
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <RestrictedSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Label Visible
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <LabelVisibleSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Range Slider
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <RangeSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Slider With Input Field
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <InputSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Non Linear Scale
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <NonLinearSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Customized Sliders
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <CustomizedSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Vertical Sliders
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <VerticalSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Removed Track
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <TrackFalseSlider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Inverted Track
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <TrackInvertedSlider />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FrmSlider;
