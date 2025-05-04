import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';

// project import
import Breadcrumb from 'component/Breadcrumb';
import Alert from 'component/Alert';
import { gridSpacing } from 'config.js';

// assets
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

// ==============================|| UI ALERT ||============================== //

const UIAlert = () => {
  return (
    <>
      <Breadcrumb title="Alert">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Advance Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Alert
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Alert
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Alert severity="error">This is an error alert — check it out!</Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert severity="warning">This is a warning alert — check it out!</Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert severity="info">This is an info alert — check it out!</Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert severity="success">This is a success alert — check it out!</Alert>
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
                  Outline Alert
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Alert variant="outlined" severity="error">
                    This is an error alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert variant="outlined" severity="warning">
                    This is a warning alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert variant="outlined" severity="info">
                    This is an info alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert variant="outlined" severity="success">
                    This is a success alert — check it out!
                  </Alert>
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
                  Custom Icon Alert
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Alert icon={false} severity="error">
                    This is an error alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert icon={<WarningTwoToneIcon fontSize="inherit" />} severity="warning">
                    This is a warning alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert icon={<HelpTwoToneIcon fontSize="inherit" />} severity="info">
                    This is an info alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert icon={<CheckBoxTwoToneIcon fontSize="inherit" />} severity="success">
                    This is a success alert — check it out!
                  </Alert>
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
                  Filled Alert
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Alert variant="filled" severity="error">
                    This is an error alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert variant="filled" severity="warning">
                    This is a warning alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert variant="filled" severity="info">
                    This is an info alert — check it out!
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert variant="filled" severity="success">
                    This is a success alert — check it out!
                  </Alert>
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
                  Description Alert
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is an info alert — <strong>check it out!</strong>
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                  </Alert>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UIAlert;
