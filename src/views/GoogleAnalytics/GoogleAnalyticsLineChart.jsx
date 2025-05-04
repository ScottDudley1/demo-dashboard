import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@mui/material';
import Chart from 'react-apexcharts';

const GoogleAnalyticsLineChart = ({ data = [] }) => {
  // Process data by date for the line chart
  const processData = () => {
    if (!data || !data.length) {
      return {
        series: [],
        options: {},
        noData: true
      };
    }

    // Group metrics by date
    const dateMap = {};
    data.forEach(row => {
      if (!row.Date) return;
      
      const dateObj = new Date(row.Date);
      if (isNaN(dateObj.getTime())) return;
      
      const dateStr = dateObj.toISOString().split('T')[0];
      if (!dateMap[dateStr]) {
        dateMap[dateStr] = {
          date: dateStr,
          Sessions: 0,
          Pageviews: 0,
          Users: 0
        };
      }
      
      dateMap[dateStr].Sessions += Number(row.Sessions || 0);
      dateMap[dateStr].Pageviews += Number(row.Pageviews || 0);
      dateMap[dateStr].Users += Number(row.Users || 0);
    });

    // Sort dates and create series data
    const sortedDates = Object.keys(dateMap).sort();
    const sessions = sortedDates.map(date => dateMap[date].Sessions);
    const pageviews = sortedDates.map(date => dateMap[date].Pageviews);
    const users = sortedDates.map(date => dateMap[date].Users);

    return {
      series: [
        { name: 'Sessions', data: sessions, color: '#1976d2' },
        { name: 'Pageviews', data: pageviews, color: '#43a047' },
        { name: 'Users', data: users, color: '#e53935' }
      ],
      options: {
        chart: {
          type: 'line',
          height: 460,
          toolbar: { show: false },
          fontFamily: 'inherit'
        },
        colors: ['#1976d2', '#43a047', '#e53935'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        xaxis: {
          categories: sortedDates,
          type: 'datetime',
          labels: {
            formatter: function(value, timestamp, opts) {
              const date = new Date(value);
              const month = date.toLocaleString('default', { month: 'short' });
              const year = date.getFullYear().toString().substr(2, 2);
              return `${month} '${year}`;
            }
          }
        },
        yaxis: {
          title: { text: 'Count' },
          labels: {
            formatter: (value) => value.toLocaleString()
          },
          min: 0
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        grid: {
          borderColor: '#f1f1f1'
        },
        legend: {
          position: 'top',
          horizontalAlign: 'center',
          offsetY: 10
        },
        noData: {
          text: 'No data available'
        }
      },
      noData: false
    };
  };

  const chartData = processData();

  return (
    <Card sx={{ border: '2px solid black', borderRadius: 2, boxShadow: 'none', height: 550 }}>
      <CardHeader
        title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 0.2 }}>Metrics Over Time</span>}
        sx={{ backgroundColor: 'black', textAlign: 'center', p: 1.5 }}
      />
      <CardContent sx={{ p: 1, height: 'calc(100% - 56px)' }}>
        {chartData.noData ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '460px' }}>
            No data available
          </div>
        ) : (
          <Chart 
            options={chartData.options} 
            series={chartData.series} 
            type="line" 
            height={460} 
          />
        )}
      </CardContent>
    </Card>
  );
};

GoogleAnalyticsLineChart.propTypes = {
  data: PropTypes.array
};

export default GoogleAnalyticsLineChart; 