import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DeviceHubTwoToneIcon from '@mui/icons-material/DeviceHubTwoTone';
import CalendarViewDayTwoToneIcon from '@mui/icons-material/CalendarViewDayTwoTone';

// ==============================|| UI BREADCRUMB ||============================== //

const UIBreadcrumb = () => {
  return (
    <>
      <Breadcrumb title="Breadcrumb" divider={false}>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Basic Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Breadcrumb
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={6}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <Breadcrumb title="Basic Breadcrumb">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                  Breadcrumb
                </Typography>
              </Breadcrumb>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <Breadcrumb title="Custom Separator" separator={<NavigateNextIcon fontSize="small" />}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                  Breadcrumb
                </Typography>
              </Breadcrumb>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <Breadcrumb title="Icon Breadcrumbs" separator={<NavigateNextIcon fontSize="small" />}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                  <HomeTwoToneIcon className="icon-breadcrumb" />
                  Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                  <DeviceHubTwoToneIcon className="icon-breadcrumb" /> Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                  <CalendarViewDayTwoToneIcon className="icon-breadcrumb" /> Breadcrumb
                </Typography>
              </Breadcrumb>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <Breadcrumb title="Collapsed Breadcrumbs" maxItems={2} separator={<NavigateNextIcon fontSize="small" />}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                  Breadcrumb
                </Typography>
              </Breadcrumb>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <Breadcrumb title="No Divider" divider={false}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                  Breadcrumb
                </Typography>
              </Breadcrumb>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <Breadcrumb title="Card Style" divider={false} isCard="true">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                  Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                  Breadcrumb
                </Typography>
              </Breadcrumb>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UIBreadcrumb;
