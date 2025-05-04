import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// ==============================|| E-COMMERCE NUM CARD ||============================== //

const EcommerceNumCard = ({ primary, secondary, content, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <Card sx={{ position: 'relative', color: '#fff' }} style={{ background: color }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item sm zeroMinWidth>
            <Grid container spacing={1}>
              <Grid item sm={12}>
                <Typography variant="h6" color="inherit">
                  {primary}
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography variant="h3">{secondary}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box>
              <span style={{ width: '30px', height: '30px', color: '#fff' }}>{primaryIcon}</span>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="inherit">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

EcommerceNumCard.propTypes = {
  content: PropTypes.string,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  color: PropTypes.string,
  iconPrimary: PropTypes.object
};

export default EcommerceNumCard;
