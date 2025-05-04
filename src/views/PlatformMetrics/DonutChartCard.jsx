import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, Divider, Grid, Typography, Box } from '@mui/material';
import Chart from 'react-apexcharts';

const DonutChartCard = ({ title, series, labels, colors, breakdown }) => {
  const chartData = {
    options: {
      chart: {
        type: 'donut',
        toolbar: { show: false }
      },
      labels: labels,
      colors: colors,
      legend: {
        show: true,
        position: 'bottom',
        fontFamily: 'inherit',
        labels: { colors: 'inherit' }
      },
      dataLabels: { enabled: true },
      stroke: { width: 0 },
      plotOptions: { pie: { donut: { size: '70%' } } }
    },
    series: series
  };

  return (
    <Card sx={{ borderRadius: 3 }}>
      <Box sx={{
        background: '#111',
        color: '#fff',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        px: 2,
        py: 1.2,
        fontWeight: 700,
        fontSize: '1.1rem',
        letterSpacing: 0.5,
        display: 'flex',
        alignItems: 'center',
        minHeight: 44
      }}>
        {title}
      </Box>
      <Divider />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Chart options={chartData.options} series={chartData.series} type="donut" height={220} />
          <Box display="flex" justifyContent="center" alignItems="center" mt={2} mb={2}>
            {labels.map((label, idx) => (
              <Box key={label} display="flex" alignItems="center" mx={1}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: colors[idx], mr: 1 }} />
                <Typography variant="body2" color="textSecondary">{label}</Typography>
              </Box>
            ))}
          </Box>
          <Divider sx={{ width: '100%', my: 2 }} />
          <Grid container spacing={2} justifyContent="center">
            {breakdown.map((item, idx) => (
              <Grid item key={item.label} xs={4} textAlign="center">
                <Typography variant="subtitle1" fontWeight={700} color={item.color}>{item.label}</Typography>
                <Typography variant="body2" color={item.color}>{item.value}</Typography>
                <Typography variant="body2" color={item.color}>{item.percent}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

DonutChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.arrayOf(PropTypes.number).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  breakdown: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    percent: PropTypes.string.isRequired
  })).isRequired
};

export default DonutChartCard; 