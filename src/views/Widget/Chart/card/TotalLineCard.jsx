import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// import colorValue from 'assets/scss/_themes-vars.module.scss';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// third party
import Chart from 'react-apexcharts';

// ==============================|| TOTAL LINE CARD ||============================== //

const TotalLineCard = ({ bgColor, chartData, title, percentage, value, hidePercentage = false }) => {
  const theme = useTheme();
  const [chartOptions, setChartOptions] = useState({});
  const [series, setSeries] = useState([]);
  
  // Initialize and update chart data when props change
  useEffect(() => {
    if (chartData && chartData.options && chartData.series) {
      setChartOptions({
        ...chartData.options,
        theme: {
          mode: theme.palette.mode === 'dark' ? 'dark' : 'light'
        },
        chart: {
          ...chartData.options.chart,
          sparkline: {
            enabled: true
          },
          animations: {
            enabled: false // Disable animations for performance
          }
        }
      });
      
      setSeries(chartData.series);
    }
  }, [chartData, theme.palette.mode]);

  const cardStyle = {
    height: '100%',
    border: '2px solid black',
    borderRadius: 2,
    boxShadow: 'none',
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    maxHeight: 250
  };

  if (!chartData || !chartOptions || !series || series.length === 0) {
    return (
      <Card sx={cardStyle}>
        <CardContent sx={{ padding: 0, paddingBottom: '0 !important', height: '100%' }}>
          <Box bgcolor={bgColor ? bgColor : theme.palette.primary.main} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box p={2.5} sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Grid container direction="column" spacing={1} alignItems="center" textAlign="center">
                {value && (
                  <Grid item>
                    <Typography variant="h3" color="#fff" sx={{ fontWeight: 500, fontSize: '2rem' }}>
                      {value}
                    </Typography>
                  </Grid>
                )}
                {title && (
                  <Grid item>
                    <Typography variant="h6" color="#fff" sx={{ fontSize: '1.1rem' }}>
                      {title}
                    </Typography>
                  </Grid>
                )}
                {percentage && !hidePercentage && (
                  <Grid item>
                    <Typography variant="body2" color="#fff" sx={{ fontSize: '0.9rem' }}>
                      {percentage}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={cardStyle}>
      <CardContent sx={{ padding: 0, paddingBottom: '0 !important', height: '100%' }}>
        <Box bgcolor={bgColor ? bgColor : theme.palette.primary.main} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box p={2.5} sx={{ flex: '1 0 auto' }}>
            <Grid container direction="column" spacing={1} alignItems="center" textAlign="center">
              {value && (
                <Grid item>
                  <Typography variant="h3" color="#fff" sx={{ fontWeight: 500, fontSize: '2rem' }}>
                    {value}
                  </Typography>
                </Grid>
              )}
              {title && (
                <Grid item>
                  <Typography variant="h6" color="#fff" sx={{ fontSize: '1.1rem' }}>
                    {title}
                  </Typography>
                </Grid>
              )}
              {percentage && !hidePercentage && (
                <Grid item>
                  <Typography variant="body2" color="#fff" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                    {percentage}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
          <Box sx={{ flex: '0 0 auto', width: '100%', minHeight: '100px' }}>
            <Chart 
              options={chartOptions} 
              series={series} 
              type="area" 
              height={120} 
              key={`chart-${title}-${value}`}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

TotalLineCard.propTypes = {
  bgColor: PropTypes.string,
  chartData: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  percentage: PropTypes.string,
  hidePercentage: PropTypes.bool
};

export default TotalLineCard;
