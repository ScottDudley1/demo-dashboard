import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';

// ==============================|| SIDE ICON CARD ||============================== //

const SideiconCard = ({ iconPrimary, numtext, primary, primarysub, color }) => {
  const theme = useTheme();

  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary style={{ width: 46, height: 46 }} fontSize="large" /> : null;

  return (
    <Card sx={{ position: 'reltive' }}>
      <CardContent sx={{ padding: '0', paddingBottom: '0 !important' }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={4} sx={{ background: color, py: 2, px: 0, textAlign: 'center', color: '#fff' }}>
            <Typography variant="h5" sx={{ py: 2, px: 0, textAlign: 'center', color: '#fff' }} align="center">
              {primaryIcon}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              spacing={1}
              alignItems={matchDownXs ? 'center' : 'flex-start'}
            >
              <Grid item sm={12}>
                <Typography variant="h2" sx={{ fontWeight: '400', ml: 2 }}>
                  {numtext}
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography variant="body2" align="left" sx={{ ml: 2 }}>
                  {primary} <span style={{ color: color }}>{primarysub}</span>{' '}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SideiconCard.propTypes = {
  numtext: PropTypes.string,
  primary: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string,
  primarysub: PropTypes.string
};

export default SideiconCard;
