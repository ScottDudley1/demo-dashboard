import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// third party
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import * as actionTypes from 'store/actions';

// ==============================|| RTL LAYOUT ||============================== //

const RtlLayout = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: actionTypes.THEME_LOCALE, locale: 'zh' });
    dispatch({ type: actionTypes.THEME_RTL, rtlLayout: true });
  }, [dispatch]);

  return (
    <>
      <Breadcrumb title="RTL Layout">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          RTL Layout
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  RTL Layout
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2">
                <FormattedMessage id="message" />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default RtlLayout;
