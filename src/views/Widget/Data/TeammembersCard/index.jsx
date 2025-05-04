import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Avatar, Divider, Button, Card, CardHeader, CardContent, CardActions, Grid, Typography } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// assets
import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';

// ==============================|| TEAM MEMBERS CARD ||============================== //

const TeammembersCard = ({ title }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography component="div" className="card-header">
            {title}
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={gridSpacing} alignItems="center">
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt="User 1" src={Avatar1} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  David Jones
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Developer
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt="User 1" src={Avatar2} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  David Jones
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Developer
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt="User 1" src={Avatar3} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  David Jones
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Developer
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt="User 1" src={Avatar4} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  David Jones
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Developer
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions className="f-right">
        <Button variant="text" size="small" color="primary">
          View all Projects
        </Button>
      </CardActions>
    </Card>
  );
};

TeammembersCard.propTypes = {
  title: PropTypes.string
};

export default TeammembersCard;
