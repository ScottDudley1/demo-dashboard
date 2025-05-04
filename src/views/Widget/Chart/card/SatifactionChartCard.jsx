import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Card, CardContent, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| SATISFACTION CHART CARD ||============================== //

const SatifactionChartCard = ({ chartData }) => {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={1}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Customer Satisfaction</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied
              together.,as the opinion...
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Chart {...chartData} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SatifactionChartCard.propTypes = {
  chartData: PropTypes.object
};

export default SatifactionChartCard;
