import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Grid, Typography } from '@mui/material';

// ==============================|| HOVER DATA CARD ||============================== //

const HoverdataCard = ({ title, iconPrimary, primary, secondary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary style={{ color: color, width: 20, height: 20 }} fontSize="large" /> : null;

  return (
    <Card sx={{ textAlign: 'center' }}>
      <CardContent>
        <Grid container justifyContent="space-between" direction="column" alignItems="center">
          <Grid item sm={12}>
            <Typography variant="subtitle1">{title}</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h4" sx={{ my: 1.75, mx: 0, fontSize: '1.25rem', fontWeight: '400' }}>
              {' '}
              {primaryIcon} {primary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="subtitle2">{secondary}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

HoverdataCard.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.number,
  secondary: PropTypes.string,
  color: PropTypes.string,
  iconPrimary: PropTypes.object
};

export default HoverdataCard;
