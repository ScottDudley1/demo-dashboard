import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import SimpleList from './SimpleList';
import NestedList from './NestedList';
import FolderList from './FolderList';
import SelectedListItem from './SelectedListItem';
import PinnedSubheaderList from './PinnedSubheaderList';
import VirtualizedList from './VirtualizedList';
import CheckboxList from './CheckboxList';
import CheckboxListSecondary from './CheckboxListSecondary';

// custom style
const CardTitle = styled((props) => <Typography variant="h5" {...props} />)(({ theme }) => ({
  color: theme.palette.text.dark
}));

// ==============================|| UI LIST ||============================== //

const UIList = () => {
  return (
    <>
      <Breadcrumb title="UI List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Basic Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          UI List
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Simple List</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <SimpleList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Folder List</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <FolderList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Selected List Item</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <SelectedListItem />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Nested List</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <NestedList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Pinned Subheader List</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <PinnedSubheaderList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Virtualized List</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <VirtualizedList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Checkbox List</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <CheckboxList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container diraction="column" spacing={2}>
            <Grid item xs={12}>
              <CardTitle>Checkbox List Secondary</CardTitle>
            </Grid>
            <Grid item xs={12}>
              <CheckboxListSecondary />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UIList;
