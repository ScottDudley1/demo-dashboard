import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Button, Card, Divider, CardMedia, CardHeader, CardContent, CardActions, Grid, Typography } from '@mui/material';

// prroject import
import { gridSpacing } from 'config.js';

// assets
import Dashborad1 from 'assets/images/widget/dashborad-1.jpg';
import Dashborad2 from 'assets/images/widget/dashborad-3.jpg';

// ==============================|| LATEST POST CARD ||============================== //

const LatestpostsCard = ({ title }) => {
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
            <Grid container spacing={2}>
              <Grid item>
                <CardMedia component="img" image={Dashborad1} title="image" sx={{ width: 90, height: 80 }} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography align="left" component="div" variant="subtitle1">
                      Up unpacked friendly
                    </Typography>
                    <Typography align="left" component="div" variant="caption">
                      Video | 14 minutes ago
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" component="div" variant="subtitle2">
                      Lorem Ipsum is simply dummy text of the.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <CardMedia
                  component="iframe"
                  src="https://www.youtube.com/embed/668nUCeBHyY"
                  title="image"
                  sx={{ width: 90, height: 80 }}
                />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography align="left" component="div" variant="subtitle1">
                      Up unpacked friendly
                    </Typography>
                    <Typography align="left" component="div" variant="caption">
                      Video | 14 minutes ago
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" component="div" variant="subtitle2">
                      Lorem Ipsum is simply dummy text of the.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <CardMedia component="img" image={Dashborad2} title="image" sx={{ width: 90, height: 80 }} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography align="left" component="div" variant="subtitle1">
                      Up unpacked friendly
                    </Typography>
                    <Typography align="left" component="div" variant="caption">
                      Video | 14 minutes ago
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="left" component="div" variant="subtitle2">
                      Lorem Ipsum is simply dummy text of the.
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
          View Friend List
        </Button>
      </CardActions>
    </Card>
  );
};

LatestpostsCard.propTypes = {
  title: PropTypes.string
};

export default LatestpostsCard;
