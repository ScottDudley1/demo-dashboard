import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography, Link } from '@mui/material';

// assets
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

// ==============================|| BILL CARD ||============================== //

const BillCard = ({ primarytext, secondrytext, linktext, color }) => {
  const theme = useTheme();

  return (
    <Card sx={{ borderLeft: '10px solid', borderLeftColor: color }}>
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">{primarytext}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="div" sx={{ color: theme.palette.text.secondary, fontSize: 28, fontWeight: '500', mb: 1.25 }}>
              {secondrytext}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" sx={{ color: color }}>
              {linktext} <ArrowRightAltRoundedIcon sx={{ width: 28, height: 28, verticalAlign: 'middle' }} />
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

BillCard.propTypes = {
  primarytext: PropTypes.string,
  secondrytext: PropTypes.string,
  linktext: PropTypes.string,
  color: PropTypes.string
};

export default BillCard;
