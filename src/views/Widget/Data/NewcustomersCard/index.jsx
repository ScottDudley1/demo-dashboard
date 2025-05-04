import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Avatar, Card, CardHeader, Divider, CardContent, Grid, Typography } from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project import
import { gridSpacing } from 'config.js';

// assets
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';
import Avatar5 from 'assets/images/users/avatar-5.jpg';

// custom style
const FiberTextActiveIcon = styled((props) => <FiberManualRecordIcon {...props} />)(({ theme }) => ({
  width: '16px',
  height: '16px',
  verticalAlign: 'sub',
  color: theme.palette.success.main
}));

const WatchLaterTimeIcon = styled((props) => <WatchLaterTwoToneIcon {...props} />)(() => ({
  fontSize: '0.875rem',
  marginRight: '2px',
  verticalAlign: 'sub'
}));

// ==============================|| NEW CUSTOMERS CARD ||============================== //

const NewcustomersCard = ({ title }) => {
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
      <PerfectScrollbar style={{ height: 370 }}>
        <CardContent>
          <Grid container spacing={gridSpacing} alignItems="center">
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar1} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    Alex Thompson
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        Cheers!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" component="div" variant="caption">
                        <FiberTextActiveIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar2} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    John Doue
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        stay hungry stay foolish!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <FiberTextActiveIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar3} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    Alex Thompson
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        Cheers!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <WatchLaterTimeIcon />
                        30 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar4} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    John Doue
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        stay hungry stay foolish!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <WatchLaterTimeIcon />
                        10 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar5} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    Shirley Hoe
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        Cheers!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <WatchLaterTimeIcon />
                        30 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar1} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    Alex Thompson
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        Cheers!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <FiberTextActiveIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar2} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    John Doue
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        stay hungry stay foolish!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <FiberTextActiveIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar3} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    Alex Thompson
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        Cheers!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <WatchLaterTimeIcon />
                        30 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar4} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    John Doue
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        stay hungry stay foolish!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <WatchLaterTimeIcon />
                        10 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="coverimage" src={Avatar5} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" component="div" variant="subtitle1">
                    Shirley Hoe
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Typography align="left" component="div" variant="subtitle2">
                        Cheers!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left" variant="caption">
                        <WatchLaterTimeIcon />
                        30 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </PerfectScrollbar>
    </Card>
  );
};

NewcustomersCard.propTypes = {
  title: PropTypes.string
};

export default NewcustomersCard;
