import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Avatar, Button, Card, CardHeader, CardContent, CardActions, Grid, Typography, Divider, Box } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// assets
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Imgcover from 'assets/images/widget/slider5.jpg';

// custom style
const UserMainAvatar = styled((props) => <Avatar alt="User 1" src={Avatar1} {...props} />)(() => ({
  width: 20,
  height: 20,
  position: 'absolute',
  bottom: '0px',
  right: '-5px'
}));

const WatchLaterTimeIcon = styled((props) => <WatchLaterTwoToneIcon {...props} />)(() => ({
  fontSize: '0.875rem',
  marginRight: '2px',
  verticalAlign: 'sub'
}));

// ==============================|| USER ACTIVITY CARD ||============================== //

const UseractivityCard = ({ title }) => {
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
            <Grid container spacing={2}>
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar alt="coverimage" src={Imgcover} />
                  <UserMainAvatar />
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  John Deo
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Lorem Ipsum is simply dummy text.
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left" variant="caption">
                  <WatchLaterTimeIcon /> 2 min ago
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar alt="coverimage" src={Imgcover} />
                  <UserMainAvatar />
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  John Deo
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Lorem Ipsum is simply dummy text.
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left" variant="caption">
                  <WatchLaterTimeIcon /> 2 min ago
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar alt="coverimage" src={Imgcover} />
                  <UserMainAvatar />
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  John Deo
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Lorem Ipsum is simply dummy text.
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left" variant="caption">
                  <WatchLaterTimeIcon /> 2 min ago
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Box sx={{ position: 'relative' }}>
                  <Avatar alt="coverimage" src={Imgcover} />
                  <UserMainAvatar />
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  John Deo
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  Lorem Ipsum is simply dummy text.
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="left" variant="caption">
                  <WatchLaterTimeIcon /> 2 min ago
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

UseractivityCard.propTypes = {
  title: PropTypes.string
};

export default UseractivityCard;
