import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

//  material ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// assets
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// ==============================|| CONVERSATION CHART CARD ||============================== //

const ConversionsChartCard = ({ chartData }) => {
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
      <CardContent sx={{ p: 0, pb: '0 !important' }}>
        <Box p={5}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Typography variant="subtitle1">New Stock</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">(Purchased)</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h4">0.85%</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center" sx={{ color: theme.palette.info.main }}>
                <ArrowUpwardIcon color="inherit" />
                <Typography variant="h4" color="inherit">
                  0.50%
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Chart options={chartDatas.options} series={chartDatas.series} type="bar" height={280} />
      </CardContent>
    </Card>
  );
};

ConversionsChartCard.propTypes = {
  chartData: PropTypes.object
};

export default ConversionsChartCard;
