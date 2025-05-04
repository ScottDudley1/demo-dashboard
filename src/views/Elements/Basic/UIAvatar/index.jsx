import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Grid, Typography, Divider } from '@mui/material';
import AvatarGroup from '@mui/material/AvatarGroup';

// project import
import Avatar from 'component/Avatar';
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import FolderIcon from '@mui/icons-material/FolderTwoTone';
import PageviewIcon from '@mui/icons-material/PageviewTwoTone';
import AssignmentIcon from '@mui/icons-material/AssignmentIndTwoTone';

import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';
import Avatar5 from 'assets/images/users/avatar-5.jpg';

const UIAvatar = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumb title="Avatar">
            <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
              Home
            </Typography>
            <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
              Basic Element
            </Typography>
            <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
              Avatar
            </Typography>
          </Breadcrumb>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Avatar color="default" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Image Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="User 1" src={Avatar1} />
                </Grid>
                <Grid item>
                  <Avatar alt="User 2" src={Avatar2} />
                </Grid>
                <Grid item>
                  <Avatar alt="User 3" src={Avatar3} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Letter Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar color="primary">A</Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="secondary">P</Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="error">C</Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Icon Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar color="warning">
                    <PageviewIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="info">
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="success">
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Variant Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar color="primary">A</Avatar>
                </Grid>
                <Grid item>
                  <Avatar variant="square" color="grey">
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar variant="rounded" color="success">
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Outline Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar color="primary" outline>
                    A
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar variant="square" color="grey" outline>
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar variant="rounded" color="success" outline>
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Fallbacks Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="primary">
                    A
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" />
                </Grid>
                <Grid item>
                  <Avatar src="/broken-image.jpg" color="warning" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Grouped Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container>
                <AvatarGroup max={4}>
                  <Avatar alt="User 1" src={Avatar1} />
                  <Avatar alt="User 2" src={Avatar2} />
                  <Avatar alt="User 3" src={Avatar3} />
                  <Avatar alt="User 4" src={Avatar4} />
                  <Avatar alt="User 5" src={Avatar5} />
                </AvatarGroup>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Color Variation Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar color="primary">A</Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="secondary">C</Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="error">P</Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="warning">
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="info">
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="success">
                    <PageviewIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar>R</Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Size Avatar
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="User 1" src={Avatar1} size="small" />
                </Grid>
                <Grid item>
                  <Avatar alt="User 2" src={Avatar2} />
                </Grid>
                <Grid item>
                  <Avatar alt="User 3" src={Avatar3} size="large" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UIAvatar;
