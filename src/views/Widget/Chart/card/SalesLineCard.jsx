import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| SALES LINE CARD ||============================== //

const SalesLineCard = ({ bgColor, chartData, footerData, icon, title, percentage }) => {
  const theme = useTheme();

  // Default chart configuration
  const defaultChartData = {
    options: {
      chart: {
        id: 'sales-line-chart',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        },
        height: 350
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: [],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      },
      tooltip: {
        theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        x: {
          show: false
        }
      },
      theme: {
        mode: theme.palette.mode === 'dark' ? 'dark' : 'light'
      }
    },
    series: [
      {
        name: 'Sales',
        data: []
      }
    ]
  };

  const [chartDatas, setChartDatas] = useState(chartData ?? defaultChartData);

  useEffect(() => {
    // Update theme mode when it changes
    setChartDatas((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        theme: {
          mode: theme.palette.mode === 'dark' ? 'dark' : 'light'
        }
      }
    }));
  }, [theme.palette.mode]);

  let footerHtml = null;
  if (footerData && Array.isArray(footerData)) {
    footerHtml = footerData.map((item, index) => (
      <Grid item key={index}>
        <Box mt={3} mb={3} p={1}>
          <Grid container direction="column" spacing={1} alignItems="center">
            <Typography variant="h4">{item.value}</Typography>
            <Typography variant="subtitle2">{item.label}</Typography>
          </Grid>
        </Box>
      </Grid>
    ));
  }

  return (
    <Card>
      <CardContent sx={{ padding: 0, paddingBottom: '0 !important' }}>
        <Box bgcolor={bgColor || theme.palette.primary.main} p={3}>
          <Grid container direction="column" spacing={1}>
            <Grid item container justifyContent="space-between" alignItems="center">
              {title && (
                <Grid item>
                  <Typography variant="subtitle1" color="#fff">
                    {title}
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <Grid container alignItems="center">
                  {icon && (
                    <Box component="span" mr={2} color="#fff">
                      {icon}
                    </Box>
                  )}
                  {percentage && (
                    <Typography variant="subtitle1" color="#fff">
                      {percentage}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>

            {chartDatas?.series?.length > 0 ? (
              <Grid item>
                <Chart
                  options={chartDatas.options}
                  series={chartDatas.series}
                  type="line"
                  height={115}
                />
              </Grid>
            ) : (
              <Grid item>
                <Typography variant="body2" color="#fff">
                  No data available.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>

        {footerData && (
          <Grid container justifyContent="space-around" alignItems="center">
            {footerHtml}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

SalesLineCard.propTypes = {
  bgColor: PropTypes.string,
  chartData: PropTypes.object,
  footerData: PropTypes.array,
  icon: PropTypes.object,
  title: PropTypes.string,
  percentage: PropTypes.string
};

export default SalesLineCard;