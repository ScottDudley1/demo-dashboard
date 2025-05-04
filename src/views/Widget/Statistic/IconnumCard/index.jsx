import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Grid, Typography, LinearProgress } from '@mui/material';

// ==============================|| ICON NUM CARD ||============================== //

const IconnumCard = ({ title, numtext, numtextcolor, iconPrimary, progresscolor, progressvalue }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary style={{ width: 20, height: 20 }} fontSize="large" /> : null;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle2">{primaryIcon}</Typography>
                <Typography variant="subtitle1">{title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3">
                  <span style={{ color: numtextcolor }}>{numtext}</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" aria-label="Card Status" value={progressvalue} color={progresscolor} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

IconnumCard.propTypes = {
  title: PropTypes.string,
  numtext: PropTypes.string,
  numtextcolor: PropTypes.string,
  progresscolor: PropTypes.string,
  progressvalue: PropTypes.number,
  iconPrimary: PropTypes.object
};

export default IconnumCard;
