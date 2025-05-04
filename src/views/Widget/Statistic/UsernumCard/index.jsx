import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Grid, Typography } from '@mui/material';

// ==============================|| USER NUM CARD ||============================== //

const UsernumCard = ({ primary, secondary, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary style={{ width: 100, height: 100, opacity: '0.5' }} fontSize="large" /> : null;

  return (
    <Card sx={{ position: 'relative', color: '#fff', background: color }}>
      <CardContent>
        <Typography variant="subtitle2" sx={{ position: 'absolute', left: -17, bottom: -27, transform: 'rotate(25deg)' }}>
          {primaryIcon}
        </Typography>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item sm={12}>
            <Typography variant="h2" align="center" color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="subtitle1" align="center" color="inherit">
              {primary}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

UsernumCard.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.string,
  iconPrimary: PropTypes.object,
  secondary: PropTypes.string
};

export default UsernumCard;
