import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Grid, Typography, CardMedia } from '@mui/material';

// ==============================|| PRODUCT CARD ||============================== //

const ProductCard = ({ primary, secondary, color, prodimg }) => {
  return (
    <Card sx={{ textAlign: 'center', color: '#fff', background: color }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item sm={12}>
            <CardMedia sx={{ width: 100, height: 100, borderRadius: '50%', my: 0, mx: 'auto' }} image={prodimg} title="images" />
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h5" color="inherit">
              {primary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h6" color="inherit">
              {secondary}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  prodimg: PropTypes.object,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  color: PropTypes.string
};

export default ProductCard;
