import React, { useEffect, useState, useMemo } from 'react';
import Papa from 'papaparse';
import { useTheme } from '@mui/material/styles';
import { 
  Grid, 
  Typography, 
  Button,
  Box
} from '@mui/material';
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

// Import our scorecard components and chart data
import TotalLineCard from './card/TotalLineCard';
import TotalLineCardChart1 from './chart/total-value-gragh-1';
import TotalLineCardChart2 from './chart/total-value-gragh-2';
import TotalLineCardChart3 from './chart/total-value-gragh-3';

// Import filter components from Google Analytics
import GoogleAnalyticsFilters from '../../GoogleAnalytics/GoogleAnalyticsFilters';
import CustomDateRangePicker from 'component/CustomDateRangePicker';

// CSV file path
const gaUrl = '/data/google_analytics.csv';
const pmUrl = '/data/platform_metrics.csv';

// Main component
const ScorecardsExperiment = () => {
  const theme = useTheme();
  
  // State variables
  const [gaData, setGaData] = useState([]);
  const [pmData, setPmData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredGaData, setFilteredGaData] = useState([]);
  const [filteredPmData, setFilteredPmData] = useState([]);
  
  // Filter states
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedSource, setSelectedSource] = useState([]);
  const [selectedMedium, setSelectedMedium] = useState([]);
  const [selectedBrowser, setSelectedBrowser] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState([]);
  
  // Default date range - last 30 days
  const getDefaultDateRange = () => {
    return [dayjs().subtract(29, 'day'), dayjs()];
  };
  
  const [dateRange, setDateRange] = useState(getDefaultDateRange());

  // Load CSV data
  useEffect(() => {
    setLoading(true);
    
    // Load Google Analytics data
    Papa.parse(gaUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setGaData(results.data);
        setFilteredGaData(results.data);
        
        // Now load Platform Metrics data
        Papa.parse(pmUrl, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: (pmResults) => {
            setPmData(pmResults.data);
            setFilteredPmData(pmResults.data);
            setLoading(false);
          }
        });
      }
    });
  }, []);

  // Extract unique filter options - for Google Analytics data
  const countries = useMemo(() => [...new Set(gaData.map(row => row.Country).filter(Boolean))], [gaData]);
  const cities = useMemo(() => {
    let filteredRows = gaData;
    if (selectedCountry.length) {
      filteredRows = filteredRows.filter(row => selectedCountry.includes(row.Country));
    }
    return [...new Set(filteredRows.map(row => row.City).filter(Boolean))];
  }, [gaData, selectedCountry]);

  const sources = useMemo(() => {
    let filteredRows = gaData;
    if (selectedCountry.length) {
      filteredRows = filteredRows.filter(row => selectedCountry.includes(row.Country));
    }
    if (selectedCity.length) {
      filteredRows = filteredRows.filter(row => selectedCity.includes(row.City));
    }
    return [...new Set(filteredRows.map(row => row.Source).filter(Boolean))];
  }, [gaData, selectedCountry, selectedCity]);

  const mediums = useMemo(() => {
    let filteredRows = gaData;
    if (selectedCountry.length) {
      filteredRows = filteredRows.filter(row => selectedCountry.includes(row.Country));
    }
    if (selectedCity.length) {
      filteredRows = filteredRows.filter(row => selectedCity.includes(row.City));
    }
    if (selectedSource.length) {
      filteredRows = filteredRows.filter(row => selectedSource.includes(row.Source));
    }
    return [...new Set(filteredRows.map(row => row.Medium).filter(Boolean))];
  }, [gaData, selectedCountry, selectedCity, selectedSource]);

  const browsers = useMemo(() => {
    let filteredRows = gaData;
    if (selectedCountry.length) {
      filteredRows = filteredRows.filter(row => selectedCountry.includes(row.Country));
    }
    if (selectedCity.length) {
      filteredRows = filteredRows.filter(row => selectedCity.includes(row.City));
    }
    if (selectedSource.length) {
      filteredRows = filteredRows.filter(row => selectedSource.includes(row.Source));
    }
    if (selectedMedium.length) {
      filteredRows = filteredRows.filter(row => selectedMedium.includes(row.Medium));
    }
    return [...new Set(filteredRows.map(row => row.Browser).filter(Boolean))];
  }, [gaData, selectedCountry, selectedCity, selectedSource, selectedMedium]);

  const devices = useMemo(() => {
    let filteredRows = gaData;
    if (selectedCountry.length) {
      filteredRows = filteredRows.filter(row => selectedCountry.includes(row.Country));
    }
    if (selectedCity.length) {
      filteredRows = filteredRows.filter(row => selectedCity.includes(row.City));
    }
    if (selectedSource.length) {
      filteredRows = filteredRows.filter(row => selectedSource.includes(row.Source));
    }
    if (selectedMedium.length) {
      filteredRows = filteredRows.filter(row => selectedMedium.includes(row.Medium));
    }
    if (selectedBrowser.length) {
      filteredRows = filteredRows.filter(row => selectedBrowser.includes(row.Browser));
    }
    return [...new Set(filteredRows.map(row => row.Device).filter(Boolean))];
  }, [gaData, selectedCountry, selectedCity, selectedSource, selectedMedium, selectedBrowser]);

  // Filter data based on selections - for both datasets
  useEffect(() => {
    if (!gaData.length && !pmData.length) return;
    
    // Helper function to normalize dates
    const normalizeDate = (date) => {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      return d;
    };
    
    // Get normalized date range bounds
    const startDate = dateRange[0] ? normalizeDate(dateRange[0].toDate()) : null;
    const endDate = dateRange[1] ? normalizeDate(dateRange[1].toDate()) : null;
    
    // Filter Google Analytics data
    if (gaData.length) {
      let filtered = gaData.filter(row => {
        try {
          // Date filter
          if (startDate && endDate) {
            const rowDate = normalizeDate(new Date(row.Date));
            if (isNaN(rowDate.getTime())) return false;
            if (rowDate < startDate || rowDate > endDate) return false;
          }
          
          // Apply all other filters
          if (selectedCountry.length && !selectedCountry.includes(row.Country)) return false;
          if (selectedCity.length && !selectedCity.includes(row.City)) return false;
          if (selectedSource.length && !selectedSource.includes(row.Source)) return false;
          if (selectedMedium.length && !selectedMedium.includes(row.Medium)) return false;
          if (selectedBrowser.length && !selectedBrowser.includes(row.Browser)) return false;
          if (selectedDevice.length && !selectedDevice.includes(row.Device)) return false;
          
          return true;
        } catch (error) {
          console.error("Error filtering GA row:", error, row);
          return false;
        }
      });
      
      setFilteredGaData(filtered);
    }
    
    // Filter Platform Metrics data
    if (pmData.length) {
      let filtered = pmData.filter(row => {
        try {
          // Date filter
          if (startDate && endDate) {
            const rowDate = normalizeDate(new Date(row.Date));
            if (isNaN(rowDate.getTime())) return false;
            if (rowDate < startDate || rowDate > endDate) return false;
          }
          
          // Apply source/medium filters if they exist in this dataset
          if (selectedSource.length && row.Source && !selectedSource.includes(row.Source)) return false;
          if (selectedMedium.length && row.Medium && !selectedMedium.includes(row.Medium)) return false;
          
          return true;
        } catch (error) {
          console.error("Error filtering PM row:", error, row);
          return false;
        }
      });
      
      setFilteredPmData(filtered);
    }
  }, [gaData, pmData, dateRange, selectedCountry, selectedCity, selectedSource, selectedMedium, selectedBrowser, selectedDevice]);

  // Validation for filters when options change
  useEffect(() => {
    // Check and update city selection
    if (selectedCity.length) {
      const validCities = selectedCity.filter(city => cities.includes(city));
      if (validCities.length !== selectedCity.length) {
        setSelectedCity(validCities);
      }
    }
    
    // Repeat for other filters
    if (selectedSource.length) {
      const validSources = selectedSource.filter(source => sources.includes(source));
      if (validSources.length !== selectedSource.length) {
        setSelectedSource(validSources);
      }
    }
    
    if (selectedMedium.length) {
      const validMediums = selectedMedium.filter(medium => mediums.includes(medium));
      if (validMediums.length !== selectedMedium.length) {
        setSelectedMedium(validMediums);
      }
    }
    
    if (selectedBrowser.length) {
      const validBrowsers = selectedBrowser.filter(browser => browsers.includes(browser));
      if (validBrowsers.length !== selectedBrowser.length) {
        setSelectedBrowser(validBrowsers);
      }
    }
    
    if (selectedDevice.length) {
      const validDevices = selectedDevice.filter(device => devices.includes(device));
      if (validDevices.length !== selectedDevice.length) {
        setSelectedDevice(validDevices);
      }
    }
  }, [cities, sources, mediums, browsers, devices, selectedCity, selectedSource, selectedMedium, selectedBrowser, selectedDevice]);

  // Aggregate metrics from filtered data - for Google Analytics
  const aggregateGaMetric = (key) => {
    if (!filteredGaData.length) return 0;
    if (key === 'BounceRate') {
      const sum = filteredGaData.reduce((acc, row) => acc + parseFloat(row.BounceRate || 0), 0);
      return filteredGaData.length ? sum / filteredGaData.length : 0;
    }
    if (key === 'AvgSessionDuration') {
      const sum = filteredGaData.reduce((acc, row) => acc + parseFloat(row.AvgSessionDuration || 0), 0);
      return filteredGaData.length ? sum / filteredGaData.length : 0;
    }
    return filteredGaData.reduce((sum, row) => sum + (parseFloat(row[key]) || 0), 0);
  };

  // Aggregate metrics from filtered data - for Platform Metrics
  const aggregatePmMetric = (key) => {
    if (!filteredPmData.length) return 0;
    if (key === 'CPC') {
      let totalSpend = 0, totalClicks = 0;
      filteredPmData.forEach(row => {
        totalSpend += parseFloat(row.Spend || 0);
        totalClicks += parseInt(row.Clicks || 0);
      });
      return totalClicks ? (totalSpend / totalClicks) : 0;
    }
    if (key === 'CTR') {
      let totalClicks = 0, totalImpressions = 0;
      filteredPmData.forEach(row => {
        totalClicks += parseInt(row.Clicks || 0);
        totalImpressions += parseInt(row.Impressions || 0);
      });
      return totalImpressions ? (totalClicks / totalImpressions) * 100 : 0;
    }
    return filteredPmData.reduce((sum, row) => sum + (parseFloat(row[key]) || 0), 0);
  };

  // Prepare sparkline data for Google Analytics
  const prepareGaSparklineData = (key) => {
    if (!filteredGaData.length) return { series: [], options: {} };
    
    // Create a map of all dates in the range
    const dateMap = {};
    
    // If we have a date range, create entries for each day in the range
    if (dateRange[0] && dateRange[1]) {
      const start = dateRange[0].toDate();
      const end = dateRange[1].toDate();
      
      // Create entries for every day in the range (even if no data)
      for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
        const dateStr = day.toISOString().split('T')[0];
        dateMap[dateStr] = 0;
      }
    }
    
    // Add data from filteredData
    filteredGaData.forEach(row => {
      if (!row.Date) return;
      try {
        const dateStr = new Date(row.Date).toISOString().split('T')[0];
        if (!dateMap[dateStr]) dateMap[dateStr] = 0;
        dateMap[dateStr] += parseFloat(row[key]) || 0;
      } catch (e) {
        console.error("Error processing GA date", e, row.Date);
      }
    });
    
    // Sort dates and convert to array
    const sortedDates = Object.keys(dateMap).sort();
    let values = sortedDates.map(date => dateMap[date]);
    
    // Ensure we have data
    if (!values.length) values = [0];
    
    // Calculate min and max for better scaling
    const max = Math.max(...values);
    const min = Math.min(...values);
    
    // Create the chart data in format expected by TotalLineCard
    return {
      type: 'area',
      height: 100,
      options: {
        chart: {
          animations: {
            enabled: false // Disable animations for faster rendering
          },
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#fff'], // Use white for line color to match the demo
        fill: {
          type: 'solid',
          opacity: 0.4
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        yaxis: {
          min: min > 0 ? min * 0.9 : 0, // Slightly extend the range for better visualization
          max: max * 1.1
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: () => key
            }
          },
          marker: {
            show: false
          }
        }
      },
      series: [
        {
          name: key,
          data: values
        }
      ]
    };
  };

  // Prepare sparkline data for Platform Metrics
  const preparePmSparklineData = (key) => {
    if (!filteredPmData.length) return { series: [], options: {} };
    
    // Create a map of all dates in the range
    const dateMap = {};
    
    // If we have a date range, create entries for each day in the range
    if (dateRange[0] && dateRange[1]) {
      const start = dateRange[0].toDate();
      const end = dateRange[1].toDate();
      
      // Create entries for every day in the range (even if no data)
      for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
        const dateStr = day.toISOString().split('T')[0];
        dateMap[dateStr] = 0;
      }
    }
    
    // Add data from filteredData
    filteredPmData.forEach(row => {
      if (!row.Date) return;
      try {
        const dateStr = new Date(row.Date).toISOString().split('T')[0];
        if (!dateMap[dateStr]) dateMap[dateStr] = 0;
        
        if (key === 'CPC') {
          // Handle calculated metrics
          const spend = parseFloat(row.Spend || 0);
          const clicks = parseInt(row.Clicks || 0);
          if (clicks > 0) dateMap[dateStr] += spend / clicks;
        } else if (key === 'CTR') {
          const clicks = parseInt(row.Clicks || 0);
          const impressions = parseInt(row.Impressions || 0);
          if (impressions > 0) dateMap[dateStr] += (clicks / impressions) * 100;
        } else {
          dateMap[dateStr] += parseFloat(row[key]) || 0;
        }
      } catch (e) {
        console.error("Error processing PM date", e, row.Date);
      }
    });
    
    // Sort dates and convert to array
    const sortedDates = Object.keys(dateMap).sort();
    let values = sortedDates.map(date => dateMap[date]);
    
    // Ensure we have data
    if (!values.length) values = [0];
    
    // Calculate min and max for better scaling
    const max = Math.max(...values);
    const min = Math.min(...values);
    
    // Create the chart data in format expected by TotalLineCard
    return {
      type: 'area',
      height: 100,
      options: {
        chart: {
          animations: {
            enabled: false
          },
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#fff'],
        fill: {
          type: 'solid',
          opacity: 0.4
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        yaxis: {
          min: min > 0 ? min * 0.9 : 0,
          max: max * 1.1
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: () => key
            }
          },
          marker: {
            show: false
          }
        }
      },
      series: [
        {
          name: key,
          data: values
        }
      ]
    };
  };

  // Handle filter reset
  const handleRefreshFilters = () => {
    setSelectedCountry([]);
    setSelectedCity([]);
    setSelectedSource([]);
    setSelectedMedium([]);
    setSelectedBrowser([]);
    setSelectedDevice([]);
    setDateRange(getDefaultDateRange());
  };

  // Loading state
  if (loading) {
    return <Typography>Loading scorecard data...</Typography>;
  }

  // Format values for display
  const formatValue = (value, isPercent = false) => {
    if (isPercent) return `${Number(value).toFixed(2)}%`;
    return Number(value).toLocaleString();
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumb title="Scorecard Experiment">
            <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
              Home
            </Typography>
            <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
              Widget
            </Typography>
            <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
              Chart
            </Typography>
          </Breadcrumb>
        </Grid>
      </Grid>
      
      {/* Filter bar */}
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item xs={12} md={8}>
          <GoogleAnalyticsFilters
            countries={countries}
            cities={cities}
            sources={sources}
            mediums={mediums}
            browsers={browsers}
            devices={devices}
            selectedCountry={selectedCountry}
            selectedCity={selectedCity}
            selectedSource={selectedSource}
            selectedMedium={selectedMedium}
            selectedBrowser={selectedBrowser}
            selectedDevice={selectedDevice}
            onCountryChange={e => setSelectedCountry(e.target.value)}
            onCityChange={e => setSelectedCity(e.target.value)}
            onSourceChange={e => setSelectedSource(e.target.value)}
            onMediumChange={e => setSelectedMedium(e.target.value)}
            onBrowserChange={e => setSelectedBrowser(e.target.value)}
            onDeviceChange={e => setSelectedDevice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
          <CustomDateRangePicker
            value={dateRange}
            onChange={(newRange) => {
              if (newRange && newRange.length === 2) {
                setDateRange([
                  dayjs.isDayjs(newRange[0]) ? newRange[0] : dayjs(newRange[0]),
                  dayjs.isDayjs(newRange[1]) ? newRange[1] : dayjs(newRange[1])
                ]);
              } else {
                setDateRange(getDefaultDateRange());
              }
            }}
          />
          <Button
            variant="contained"
            onClick={handleRefreshFilters}
            sx={{
              backgroundColor: '#1976d2',
              color: '#fff',
              textTransform: 'capitalize',
              fontWeight: 600,
              ml: 2,
              height: '40px',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#115293' }
            }}
          >
            Refresh Filters
          </Button>
        </Grid>
      </Grid>
      
      {/* Google Analytics Scorecard row */}
      <Grid container spacing={gridSpacing} sx={{ mb: 3 }}>
        <Grid item xs={12} sx={{ mb: 1 }}>
          <Typography variant="h4">Google Analytics Metrics</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard 
            chartData={prepareGaSparklineData('Sessions')} 
            value={aggregateGaMetric('Sessions')} 
            title="Total Sessions" 
            percentage={`${filteredGaData.length} records`} 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={prepareGaSparklineData('Users')}
            bgColor={theme.palette.error.light}
            value={aggregateGaMetric('Users')}
            title="Total Users"
            percentage={formatValue(aggregateGaMetric('Users') / aggregateGaMetric('Sessions') * 100, true)}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={prepareGaSparklineData('Pageviews')}
            bgColor={theme.palette.success.light}
            value={aggregateGaMetric('Pageviews')}
            title="Total Pageviews"
            percentage={formatValue(aggregateGaMetric('BounceRate'), true)}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={prepareGaSparklineData('AvgSessionDuration')}
            bgColor={theme.palette.warning.main}
            value={formatValue(aggregateGaMetric('AvgSessionDuration'))}
            title="Avg. Session Duration"
            percentage=""
          />
        </Grid>
      </Grid>
      
      {/* Platform Metrics Scorecard row */}
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sx={{ mb: 1 }}>
          <Typography variant="h4">Platform Metrics</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard 
            chartData={preparePmSparklineData('Spend')} 
            value={`$${formatValue(aggregatePmMetric('Spend'))}`} 
            title="Total Spend" 
            percentage={`${filteredPmData.length} records`} 
            bgColor="#6200ea" // Deep purple
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={preparePmSparklineData('Clicks')}
            value={formatValue(aggregatePmMetric('Clicks'))}
            title="Total Clicks"
            percentage={formatValue(aggregatePmMetric('CTR'), true)}
            bgColor="#0091ea" // Light blue
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={preparePmSparklineData('Impressions')}
            value={formatValue(aggregatePmMetric('Impressions'))}
            title="Total Impressions"
            percentage=""
            bgColor="#00bfa5" // Teal
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineCard
            chartData={preparePmSparklineData('CPC')}
            value={`$${formatValue(aggregatePmMetric('CPC'))}`}
            title="Cost Per Click"
            percentage=""
            bgColor="#ff6d00" // Orange
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ScorecardsExperiment; 