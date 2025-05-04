import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import SimpleTabs from './SimpleTabs';
import TabsWrappedLabel from './TabsWrappedLabel';
import DisabledTabs from './DisabledTabs';
import FullWidthTabs from './FullWidthTabs';
import CenteredTabs from './CenteredTabs';
import IconTabs from './IconTabs';

// custom style
const CardTitle = styled((props) => <Typography variant="h5" {...props} />)(({ theme }) => ({
  color: theme.palette.text.dark
}));

// ==============================|| UI TABS ||============================== //

const UITabs = () => {
  return (
    <>
      <Breadcrumb title="UI Tabs">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Basic Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          UI Tabs
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Simple Tab</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <SimpleTabs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Wrapped Labels</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <TabsWrappedLabel />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Disabled Tab</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <DisabledTabs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Full width Fixed Tab</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <FullWidthTabs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Centered Fixed Tab</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <CenteredTabs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Icon Tabs</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <IconTabs />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UITabs;
