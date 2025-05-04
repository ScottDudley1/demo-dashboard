import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';

// ==============================|| REVENUE CARD ||============================== //

const RevenueCard = ({ primary, secondary, content, iconPrimary, color }) => {
  const theme = useTheme();

  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? (
    <IconPrimary
      style={{
        marginRight: '15px',
        width: 100,
        height: 100,
        opacity: '0.5',
        '@media (maxWidth:600px)': {
          width: 80,
          height: 80
        }
      }}
      fontSize="large"
    />
  ) : null;

  return (
    <Card sx={{ position: 'relative', color: '#fff', background: color }}>
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            right: -17,
            top: { sm: 20, xs: 32 }
          }}
        >
          <span>{primaryIcon}</span>
        </Typography>
        <Grid container direction={matchDownXs ? 'column' : 'row'} spacing={1}>
          <Grid item sm={12}>
            <Typography variant="subtitle1" color="inherit">
              {primary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant={matchDownXs ? 'h3' : 'h2'} color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="subtitle2" color="inherit">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

RevenueCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  content: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default RevenueCard;
