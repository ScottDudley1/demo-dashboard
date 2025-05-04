import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Grid, Typography } from '@mui/material';

// ==============================|| SOCIAL HOVER CARD ||============================== //

const SocialhoverCard = ({ primary, secondary, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? (
    <IconPrimary
      style={{
        width: 70,
        height: 70,
        opacity: '0.4',
        transition: 'all .3s ease-in-out'
      }}
      fontSize="large"
    />
  ) : null;

  return (
    <Card sx={{ position: 'relative', color: '#fff', background: color }}>
      <CardContent>
        <Typography variant="body2" sx={{ position: 'absolute', right: 5, top: '30px' }}>
          {primaryIcon}
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="inherit">
              {primary}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SocialhoverCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default SocialhoverCard;
