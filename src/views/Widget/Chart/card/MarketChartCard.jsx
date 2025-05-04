import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// assets
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// ==============================|| MARKET CHART CARD ||============================== //

const MarketChartCard = ({ chartData }) => {
  const theme = useTheme();
  const [chartDatas, setChartDatas] = useState(chartData);

  useEffect(() => {
    setChartDatas((prevState) => ({
      ...prevState,
      options: {
        theme: {
          mode: theme.palette.mode === 'dark' ? 'dark' : 'light'
        }
      }
    }));
  }, [theme.palette.mode]);

  return (
    <Card>
      <CardHeader
        title={
          <Typography t="div" className="card-header">
            Market Sales
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Grid container direction="column">
          <Grid item container spacing={1} alignItems="center">
            <Grid item>
              <TrendingDownIcon fontSize="large" color="error" />
            </Grid>
            <Grid item>
              <Typography variant="h3">27, 695.65</Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent="space-around" alignItems="center">
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h6">Youtube</Typography>
                <Typography variant="subtitle1" sx={{ color: theme.palette.primary[100] }}>
                  + 16.85%
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h6">Facebook</Typography>
                <Box color={theme.palette.primary.dark}>
                  <Typography variant="subtitle1" color="inherit">
                    +45.36%%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h6">Twitter</Typography>
                <Typography variant="subtitle1" sx={{ color: theme.palette.error.main }}>
                  - 50.69%
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ '& .apexcharts-legend-text': { mr: 1 } }}>
            <Chart options={chartDatas.options} series={chartDatas.series} type="bar" height={190} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

MarketChartCard.propTypes = {
  chartData: PropTypes.object
};

export default MarketChartCard;
