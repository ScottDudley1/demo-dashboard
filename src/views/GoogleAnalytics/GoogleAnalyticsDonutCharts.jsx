import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';
import Chart from 'react-apexcharts';

const DeviceDonutChart = ({ data = [] }) => {
  // Process data for device types
  const processDeviceData = () => {
    if (!data || !data.length) {
      return {
        series: [40, 35, 25],
        labels: ['Desktop', 'Mobile', 'Tablet'],
        noData: false
      };
    }

    try {
      // Group by device and count users
      const deviceMap = {};
      data.forEach(row => {
        if (!row.Device) return;
        const device = row.Device.trim();
        if (!deviceMap[device]) deviceMap[device] = 0;
        deviceMap[device] += Number(row.Users || 1);
      });

      // Convert to series and labels
      const entries = Object.entries(deviceMap)
        .sort((a, b) => b[1] - a[1]);
      
      const series = entries.map(([_, value]) => value);
      const labels = entries.map(([label, _]) => label);

      return {
        series,
        labels,
        noData: series.length === 0
      };
    } catch (error) {
      console.error('Error processing device data:', error);
      return {
        series: [40, 35, 25],
        labels: ['Desktop', 'Mobile', 'Tablet'],
        noData: false
      };
    }
  };

  const deviceData = processDeviceData();

  const options = {
    chart: {
      type: 'donut',
    },
    colors: ['#1976d2', '#e53935', '#43a047'],
    labels: deviceData.labels,
    legend: {
      position: 'bottom',
      fontFamily: 'inherit'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '55%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Users',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + '%';
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <Card sx={{ border: '2px solid black', borderRadius: 2, boxShadow: 'none', height: 450 }}>
      <CardHeader
        title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 0.2 }}>Devices By User</span>}
        sx={{ backgroundColor: 'black', textAlign: 'center', p: 1.5 }}
      />
      <CardContent sx={{ p: 1, height: 'calc(100% - 56px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Chart 
          options={options} 
          series={deviceData.series} 
          type="donut" 
          height={370} 
          width="100%"
        />
      </CardContent>
    </Card>
  );
};

const BrowserDonutChart = ({ data = [] }) => {
  // Process data for browsers
  const processBrowserData = () => {
    if (!data || !data.length) {
      return {
        series: [30, 25, 20, 15, 10, 5],
        labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Opera', 'Others'],
        noData: false
      };
    }

    try {
      // Group by browser and count users
      const browserMap = {};
      data.forEach(row => {
        if (!row.Browser) return;
        const browser = row.Browser.trim();
        if (!browserMap[browser]) browserMap[browser] = 0;
        browserMap[browser] += Number(row.Users || 1);
      });

      // Ensure consistent ordering of common browsers
      const orderedBrowsers = ['Edge', 'Safari', 'Opera', 'Brave', 'Firefox'];
      
      // Extract entries for ordered browsers first
      const orderedEntries = [];
      orderedBrowsers.forEach(browser => {
        if (browserMap[browser]) {
          orderedEntries.push([browser, browserMap[browser]]);
          delete browserMap[browser];
        }
      });
      
      // Get remaining browsers and sort by value
      const remainingEntries = Object.entries(browserMap)
        .sort((a, b) => b[1] - a[1]);
      
      // Combine ordered browsers with remaining browsers
      let allEntries = [...orderedEntries, ...remainingEntries];
      
      // Limit to top 5 browsers plus Others
      let topEntries = allEntries.slice(0, 5);
      if (allEntries.length > 5) {
        const othersValue = allEntries.slice(5).reduce((sum, [_, value]) => sum + value, 0);
        if (othersValue > 0) {
          topEntries.push(['Others', othersValue]);
        }
      }
      
      const series = topEntries.map(([_, value]) => value);
      const labels = topEntries.map(([label, _]) => label);

      return {
        series,
        labels,
        noData: series.length === 0
      };
    } catch (error) {
      console.error('Error processing browser data:', error);
      return {
        series: [30, 25, 20, 15, 10, 5],
        labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Opera', 'Others'],
        noData: false
      };
    }
  };

  const browserData = processBrowserData();

  const options = {
    chart: {
      type: 'donut',
    },
    colors: ['#1976d2', '#e53935', '#43a047', '#ff9800', '#795548', '#e91e63'],
    labels: browserData.labels,
    legend: {
      position: 'bottom',
      fontFamily: 'inherit'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '55%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Users',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + '%';
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <Card sx={{ border: '2px solid black', borderRadius: 2, boxShadow: 'none', height: 450 }}>
      <CardHeader
        title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 0.2 }}>Browsers By User</span>}
        sx={{ backgroundColor: 'black', textAlign: 'center', p: 1.5 }}
      />
      <CardContent sx={{ p: 1, height: 'calc(100% - 56px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Chart 
          options={options} 
          series={browserData.series} 
          type="donut" 
          height={370} 
          width="100%"
        />
      </CardContent>
    </Card>
  );
};

const GoogleAnalyticsDonutCharts = ({ data = [] }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <DeviceDonutChart data={data} />
      </Grid>
      <Grid item xs={12} md={6}>
        <BrowserDonutChart data={data} />
      </Grid>
    </Grid>
  );
};

GoogleAnalyticsDonutCharts.propTypes = {
  data: PropTypes.array
};

export default GoogleAnalyticsDonutCharts; 