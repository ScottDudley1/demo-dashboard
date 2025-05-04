import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// ==============================|| FOOTER PROGRESS CARD ||============================== //

const FooterprogressCard = ({ title, primary, secondary, color, footerData }) => {
  const theme = useTheme();

  return (
    <Card sx={{ textAlign: 'center' }}>
      <CardContent>
        <Grid container direction="row-reverse" justifyContent="space-between" alignItems="center">
          <Grid item sm={12}>
            <Typography variant="h4" align="left">
              {title}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="subtitle1" sx={{ mt: 1.25, fontSize: 36, fontWeight: '400', color: color }}>
              {primary}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              {secondary}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Box sx={{ background: color }}>
        <Grid
          container
          justifyContent="space-between"
          sx={{ textAlign: 'center', p: theme.spacing(1.2), pl: 2.5, pr: 2.5, color: theme.palette.common.white }}
        >
          <Grid item>
            <Typography variant="body2">{footerData}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

FooterprogressCard.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.number,
  secondary: PropTypes.string,
  color: PropTypes.string,
  footerData: PropTypes.string
};

export default FooterprogressCard;
