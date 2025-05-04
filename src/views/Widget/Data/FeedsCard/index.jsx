import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Button, Card, Divider, CardHeader, CardContent, CardActions, Grid, Typography } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';
import Avatar from 'component/Avatar';

// assets
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartTwoTone';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionTwoTone';

// custom style
const UserCoverMain = styled((props) => <div {...props} />)(() => ({
  position: 'relative'
}));

// ==============================|| FEEDS CARD ||============================== //

const FeedsCard = ({ title }) => {
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
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <UserCoverMain>
                  <Avatar color="primary">
                    <NotificationsNoneOutlinedIcon />
                  </Avatar>
                </UserCoverMain>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="subtitle2" component="div">
                      You have 3 pending tasks.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption">
                      Just Now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <UserCoverMain>
                  <Avatar color="error">
                    <ShoppingCartOutlinedIcon />
                  </Avatar>
                </UserCoverMain>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="subtitle2" component="div">
                      New order received
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption">
                      Just Now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <UserCoverMain>
                  <Avatar color="success">
                    <DescriptionOutlinedIcon />
                  </Avatar>
                </UserCoverMain>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="subtitle2" component="div">
                      You have 3 pending tasks.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption">
                      Just Now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <UserCoverMain>
                  <Avatar color="primary">
                    <NotificationsNoneOutlinedIcon />
                  </Avatar>
                </UserCoverMain>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="subtitle2" component="div">
                      New order received
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption">
                      Just Now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item>
                <UserCoverMain>
                  <Avatar color="warning">
                    <ShoppingCartOutlinedIcon />
                  </Avatar>
                </UserCoverMain>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="subtitle2" component="div">
                      Order cancelled
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="left" variant="caption">
                      Just Now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions className="f-right">
        <Button variant="text" size="small" color="primary">
          View all Feeds
        </Button>
      </CardActions>
    </Card>
  );
};

FeedsCard.propTypes = {
  title: PropTypes.string
};

export default FeedsCard;
