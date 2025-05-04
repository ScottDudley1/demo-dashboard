import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Grid, Button, useMediaQuery, useTheme, Typography } from '@mui/material';

// ==============================|| SOCIAL ACTION CARD ||============================== //

const SocialactionCard = ({ primaryone, primarytwo, secondary, content, iconPrimary, color, btncolor }) => {
  const theme = useTheme();

  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary style={{ width: 45, height: 45 }} fontSize="large" /> : null;

  return (
    <Card sx={{ textAlign: 'center' }}>
      <CardContent>
        <Grid container direction={matchDownXs ? 'column' : 'row'} spacing={2}>
          <Grid item sm={12}>
            <Typography variant="subtitle2" sx={{ color: color }}>
              {primaryIcon}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant={matchDownXs ? 'h5' : 'h3'} color="inherit">
              <span style={{ color: color }}>{primaryone}</span> {primarytwo}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="subtitle2" color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Button variant="contained" color={btncolor}>
              {content}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SocialactionCard.propTypes = {
  primaryone: PropTypes.string,
  primarytwo: PropTypes.string,
  secondary: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string,
  btncolor: PropTypes.string
};

export default SocialactionCard;
