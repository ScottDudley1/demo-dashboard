import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// ==============================|| REPORT CARD ||============================== //

const ReportCard = ({ primary, secondary, iconPrimary, color, footerData, iconFooter }) => {
  const theme = useTheme();

  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;
  const IconFooter = iconFooter;
  const footerIcon = iconFooter ? <IconFooter /> : null;

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4" sx={{ color: color }}>
              {primary}
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '.5rem' }}>
              {secondary}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">{primaryIcon}</Typography>
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
            <Typography variant="subtitle2">{footerData}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">{footerIcon}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ReportCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  footerData: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string,
  iconFooter: PropTypes.object
};

export default ReportCard;
