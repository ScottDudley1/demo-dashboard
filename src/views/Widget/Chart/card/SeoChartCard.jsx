import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// ==============================|| SEO CHART CARD ||============================== //

const SeoChartCard = ({ chartData, value, title, icon, type }) => {
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
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction={type === 1 ? 'column' : 'row'}
          justifyContent="space-between"
          spacing={type === 1 ? 2 : 0}
          alignItems={type === 1 ? 'flex-start' : 'center'}
        >
          <Grid item xs={12} sm={type === 1 ? 12 : 6}>
            <Grid container direction={type === 1 ? 'column-reverse' : 'column'} spacing={type === 1 ? 0 : 1}>
              {value && (
                <Grid item>
                  <Typography variant={matchDownMd ? 'h4' : 'h3'}>{value}</Typography>
                </Grid>
              )}
              {(title || icon) && (
                <Grid item container justifyContent="flex-start" alignContent="center">
                  {title && <Typography variant="subtitle1">{title}</Typography>}
                  {icon && <Box ml={1}>{icon}</Box>}
                </Grid>
              )}
            </Grid>
          </Grid>
          {chartData && (
            <Grid item xs={12} sm={type === 1 ? 12 : 6}>
              <Chart {...chartDatas} />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

SeoChartCard.propTypes = {
  value: PropTypes.string,
  chartData: PropTypes.object,
  icon: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.number,
  prop: PropTypes.string
};

export default SeoChartCard;
