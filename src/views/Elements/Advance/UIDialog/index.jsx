import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import SimpleDialogDemo from './SimpleDialogDemo';
import AlertDialog from './AlertDialog';
import AlertDialogSlide from './AlertDialogSlide';
import FormDialog from './FormDialog';
import CustomizedDialogs from './CustomizedDialogs';
import FullScreenDialog from './FullScreenDialog';
import MaxWidthDialog from './MaxWidthDialog';
import ResponsiveDialog from './ResponsiveDialog';
import DraggableDialog from './DraggableDialog';
import ScrollDialog from './ScrollDialog';

// ==============================|| UI DIALOG ||============================== //

const UIDialog = () => {
  return (
    <>
      <Breadcrumb title="Dialog">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Advance Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Dialog
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Simple Dialog
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SimpleDialogDemo />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Sweet Alert
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <AlertDialog />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Dialog Animation
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <AlertDialogSlide />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Form Dialogs
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <FormDialog />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Customized Dialogs
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <CustomizedDialogs />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Full Screen Dialogs
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <FullScreenDialog />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Dialogs Size
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <MaxWidthDialog />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Responsive Fullscreen Dialogs
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ResponsiveDialog />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Draggable Dialogs
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <DraggableDialog />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Scrolling Dialogs
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ScrollDialog />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UIDialog;
