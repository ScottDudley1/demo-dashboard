import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useMediaQuery
} from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| REVENUE CHART CARD ||============================== //

const RevenuChartCard = ({ chartData }) => {
  const theme = useTheme();

  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  // Provide safe defaults if chartData is not valid
  const safeChartData = chartData && chartData.series && chartData.options
    ? chartData
    : {
        options: {
          chart: {
            id: 'revenue-fallback'
          },
          xaxis: {
            categories: []
          }
        },
        series: [
          {
            name: 'Downloads',
            data: []
          }
        ]
      };

  return (
    <Card>
      <CardHeader
        title={
          <Typography component="div" className="card-header">
            Total Revenue
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2} direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
          <Grid item xs={12}>
            <Chart {...safeChartData} type="bar" height="350" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

RevenuChartCard.propTypes = {
  chartData: PropTypes.object
};

export default RevenuChartCard;
