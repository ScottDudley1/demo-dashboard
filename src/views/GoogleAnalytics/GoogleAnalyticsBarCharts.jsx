import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@mui/material';
import Chart from 'react-apexcharts';

const COLORS = [
  '#1976d2', '#43a047', '#fbc02d', '#e53935', '#8e24aa', '#00acc1', '#fb8c00', '#6d4c41', '#757575', '#c62828'
];

function aggregateBySource(data, metricKey) {
  const map = {};
  data.forEach(row => {
    const source = row.Source || 'Unknown';
    const value = parseFloat(row[metricKey]) || 0;
    if (!map[source]) map[source] = 0;
    map[source] += value;
  });
  const labels = Object.keys(map);
  const series = labels.map(l => map[l]);
  return { labels, series, colors: labels.map((_, idx) => COLORS[idx % COLORS.length]) };
}

const BarChartCard = ({ title, labels, series, colors }) => {
  const chartData = {
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false },
        height: 340
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          columnWidth: '40%'
        }
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: labels,
        labels: { style: { fontWeight: 600, fontSize: 15 } }
      },
      yaxis: {
        labels: { style: { fontWeight: 600, fontSize: 15 } }
      },
      colors: colors,
      grid: { show: false },
      legend: { show: false },
      tooltip: { y: { formatter: val => val.toLocaleString() } }
    },
    series: [{ name: title, data: series }]
  };

  return (
    <Card sx={{ border: '2px solid black', borderRadius: 2, boxShadow: 'none', minWidth: 0, width: '100%', height: 440, display: 'flex', flexDirection: 'column', justifyContent: 'stretch', p: 0, m: 0 }}>
      <CardHeader
        title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 0.2 }}>{title}</span>}
        sx={{ backgroundColor: 'black', textAlign: 'center', p: 1.5 }}
      />
      <CardContent sx={{ flex: 1, p: 2, pb: 2, m: 0 }}>
        <Chart options={chartData.options} series={chartData.series} type="bar" height={340} width="100%" />
      </CardContent>
    </Card>
  );
};

BarChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  series: PropTypes.arrayOf(PropTypes.number).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

const GoogleAnalyticsBarCharts = ({ data }) => {
  const pageviews = aggregateBySource(data, 'Pageviews');
  const users = aggregateBySource(data, 'Users');
  const sessions = aggregateBySource(data, 'Sessions');

  return (
    <div style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 320 }}>
        <BarChartCard title="Pageviews per Source" {...pageviews} />
      </div>
      <div style={{ flex: 1, minWidth: 320 }}>
        <BarChartCard title="Users per Source" {...users} />
      </div>
      <div style={{ flex: 1, minWidth: 320 }}>
        <BarChartCard title="Sessions per Source" {...sessions} />
      </div>
    </div>
  );
};

export default GoogleAnalyticsBarCharts; 