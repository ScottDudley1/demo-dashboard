import React from 'react';

// material-ui
import { Card, CardHeader, CardContent, Divider, FormGroup, FormControl, FormControlLabel, Grid, Link, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import Switch from 'component/Switch';
import { gridSpacing } from 'config.js';

// ==============================|| FORM SWITCH ||============================== //

const FrmSwitch = () => {
  return (
    <>
      <Breadcrumb title="Switches">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Switche
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Switches
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Switch color="secondary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                </Grid>
                <Grid item>
                  <Switch defaultChecked color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />
                </Grid>
                <Grid item>
                  <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />
                </Grid>
                <Grid item>
                  <Switch color="secondary" disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                </Grid>
                <Grid item>
                  <Switch color="secondary" disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
                </Grid>
                <Grid item>
                  <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Switch With Label
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <FormGroup>
                    <Grid container spacing={1}>
                      <Grid item>
                        <FormControlLabel control={<Switch color="secondary" defaultChecked />} label="Secondary" />
                      </Grid>
                      <Grid item>
                        <FormControlLabel control={<Switch color="primary" defaultChecked />} label="Primary" />
                      </Grid>
                      <Grid item>
                        <FormControlLabel control={<Switch color="secondary" />} label="Uncontrolled" />
                      </Grid>
                      <Grid item>
                        <FormControlLabel disabled control={<Switch color="secondary" />} label="Disabled" />
                      </Grid>
                      <Grid item>
                        <FormControlLabel disabled control={<Switch color="secondary" checked />} label="Disabled" />
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Switch Size
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <FormGroup>
                    <Grid container spacing={1}>
                      <Grid item>
                        <FormControlLabel control={<Switch size="small" color="secondary" defaultChecked />} label="Small" />
                      </Grid>
                      <Grid item>
                        <FormControlLabel control={<Switch color="secondary" defaultChecked />} label="Normal" />
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Grid>
              </Grid>
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
              <Grid container spacing={2}>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position">
                      <Grid container spacing={1}>
                        <Grid item>
                          <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />
                        </Grid>
                        <Grid item>
                          <FormControlLabel value="start" control={<Switch color="primary" />} label="Start" labelPlacement="start" />
                        </Grid>
                        <Grid item>
                          <FormControlLabel value="bottom" control={<Switch color="primary" />} label="Bottom" labelPlacement="bottom" />
                        </Grid>
                        <Grid item>
                          <FormControlLabel value="end" control={<Switch color="primary" />} label="End" labelPlacement="end" />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FrmSwitch;
