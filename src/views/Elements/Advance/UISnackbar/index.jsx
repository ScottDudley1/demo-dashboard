import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Button, Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// third party
import { useDispatch } from 'react-redux';

// project import
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import * as actionTypes from 'store/actions';

// ==============================|| UI SNACKBAR ||============================== //

const UISnackbar = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  });

  const { vertical, horizontal, severity, open, message } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const buttons = (
    <>
      <Grid>
        <Button
          sx={{ margin: '10px' }}
          variant="contained"
          color="secondary"
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right',
            severity: 'error',
            message: 'This is an error message'
          })}
        >
          Error
        </Button>
      </Grid>
      <Grid>
        <Button
          sx={{ margin: '10px' }}
          variant="contained"
          color="secondary"
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right',
            severity: 'warning',
            message: 'This is an warning message'
          })}
        >
          Warning
        </Button>
      </Grid>
      <Grid>
        <Button
          sx={{ margin: '10px' }}
          variant="contained"
          color="secondary"
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right',
            severity: 'info',
            message: 'This is an info message'
          })}
        >
          Info
        </Button>
      </Grid>
      <Grid>
        <Button
          sx={{ margin: '10px' }}
          variant="contained"
          color="secondary"
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right',
            severity: 'success',
            message: 'This is a success message'
          })}
        >
          Success
        </Button>
      </Grid>
    </>
  );

  return (
    <>
      <Breadcrumb title="Snackbar">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Advance Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Snackbar
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Simple Snackbar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={() => dispatch({ type: actionTypes.SNACKBAR_OPEN, open: true })}>
                    Basic
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch({ type: actionTypes.SNACKBAR_OPEN, open: true, message: 'Welcome to Materially!!' })}
                  >
                    Custom Message
                  </Button>
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
                  Alert Snackbar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                {buttons}
                <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} key={vertical + horizontal}>
                  <Alert onClose={handleClose} variant="filled" severity={severity} sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Snackbar Position
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        anchorOrigin: { vertical: 'top', horizontal: 'left' },
                        message: 'This is an top-left message!'
                      })
                    }
                  >
                    Top-Left
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        anchorOrigin: { vertical: 'top', horizontal: 'center' },
                        message: 'This is an top-center message!'
                      })
                    }
                  >
                    Top-Center
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        anchorOrigin: { vertical: 'top', horizontal: 'right' },
                        message: 'This is an top-right message!'
                      })
                    }
                  >
                    Top-Right
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                        message: 'This is an bottom-right message!'
                      })
                    }
                  >
                    Bottom-Right
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                        message: 'This is an bottom-center message!'
                      })
                    }
                  >
                    Bottom-Center
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                        message: 'This is an bottom-left message!'
                      })
                    }
                  >
                    Bottom-Left
                  </Button>
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
                  Snackbar Trasition
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        message: 'This is an fade message!',
                        transition: 'Fade'
                      })
                    }
                  >
                    Default/Fade
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        message: 'This is an slide-left message!',
                        transition: 'SlideLeft'
                      })
                    }
                  >
                    Slide Left
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        message: 'This is an slide-up message!',
                        transition: 'SlideUp'
                      })
                    }
                  >
                    Slide Up
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        message: 'This is an slide-right message!',
                        transition: 'SlideRight'
                      })
                    }
                  >
                    Slide Right
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        message: 'This is an slide-down message!',
                        transition: 'SlideDown'
                      })
                    }
                  >
                    Slide Down
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SNACKBAR_OPEN,
                        open: true,
                        message: 'This is an grow message!',
                        transition: 'Grow'
                      })
                    }
                  >
                    Grow
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UISnackbar;
