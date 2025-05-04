import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Divider, Grid, Typography, CardHeader, LinearProgress } from '@mui/material';

// ==============================|| SOCIAL PROGRESS CARD ||============================== //

const SocialprogressCard = ({ cardtitle, text1, progressvalue1, text2, progressvalue2, text3, progressvalue3, progresscolor }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography component="div" className="card-header">
            {cardtitle}
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">{text1}</Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" aria-label="Social Progress" value={progressvalue1} color={progresscolor} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">{text2}</Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" aria-label="Social Progress" value={progressvalue2} color={progresscolor} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">{text3}</Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" aria-label="Social Progress" value={progressvalue3} color={progresscolor} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SocialprogressCard.propTypes = {
  cardtitle: PropTypes.string,
  text1: PropTypes.string,
  progressvalue1: PropTypes.number,
  text2: PropTypes.string,
  progressvalue2: PropTypes.number,
  text3: PropTypes.string,
  progressvalue3: PropTypes.number,
  progresscolor: PropTypes.string
};

export default SocialprogressCard;
