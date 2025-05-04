import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import BasicTextFields from './BasicTextFields';
import FormPropsTextFields from './FormPropsTextFields';
import ValidationTextFields from './ValidationTextFields';
import MultilineTextFields from './MultilineTextFields';
import SelectTextFields from './SelectTextFields';
import InputWithIcon from './InputWithIcon';
import InputAdornments from './InputAdornments';
import TextFieldSizes from './TextFieldSizes';
import LayoutTextFields from './LayoutTextFields';

// ==============================|| FORM TEXTFIELD ||============================== //

const FrmTextField = () => {
  return (
    <>
      <Breadcrumb title="Text Field">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Text Field
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Text Field
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <BasicTextFields />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Form Props
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <FormPropsTextFields />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Validation Form
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <ValidationTextFields />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Multiline Input
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <MultilineTextFields />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Select Input
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <SelectTextFields />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Input Icons
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <InputWithIcon />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Input Adornments
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <InputAdornments />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Input Sizes
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <TextFieldSizes />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Forms Layout
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <LayoutTextFields />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FrmTextField;
