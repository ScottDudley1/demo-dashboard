import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import Pagination from 'component/Pagination';
import { gridSpacing } from 'config.js';

// ==============================|| UI PAGINATION ||============================== //

const UIPagination = () => {
  return (
    <>
      <Breadcrumb title="Pagination">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Advance Element
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Pagination
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Pagination
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Pagination count={10} />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} color="primary" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} color="secondary" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} disabled />
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
                  Outline Pagination
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Pagination count={10} variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} variant="outlined" color="primary" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} variant="outlined" color="secondary" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} variant="outlined" disabled />
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
                  Rounded Pagination
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} color="primary" shape="rounded" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} color="secondary" shape="rounded" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} disabled shape="rounded" />
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
                  Pagination Size
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Pagination count={10} size="small" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} color="primary" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} color="secondary" size="large" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} variant="outlined" disabled size="small" />
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
                  Pagination Ranges
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Pagination size="small" count={11} defaultPage={6} siblingCount={0} />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={11} defaultPage={6} color="primary" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} color="secondary" />
                </Grid>
                <Grid item xs={12}>
                  <Pagination
                    sx={{ '& .MuiPaginationItem-root': { m: { xs: 0.5 } } }}
                    count={11}
                    defaultPage={6}
                    boundaryCount={2}
                    variant="outlined"
                    color="primary"
                  />
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
                  Pagination Buttons
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Pagination count={10} color="primary" showFirstButton showLastButton />
                </Grid>
                <Grid item xs={12}>
                  <Pagination count={10} color="secondary" hidePrevButton hideNextButton />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UIPagination;
