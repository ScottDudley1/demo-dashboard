import React, { useEffect, useState, useMemo } from 'react';
import Papa from 'papaparse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';

// project imports
import PlatformMetricScorecard from '../../component/PlatformMetricScorecard';
import CustomDateRangePicker from 'component/CustomDateRangePicker';
import GoogleAnalyticsFilters from './GoogleAnalyticsFilters';
import GoogleAnalyticsBarCharts from './GoogleAnalyticsBarCharts';
import GoogleAnalyticsLineChart from './GoogleAnalyticsLineChart';
import GoogleAnalyticsGeoChart from './GoogleAnalyticsGeoChart';
import GoogleAnalyticsDonutCharts from './GoogleAnalyticsDonutCharts';
import GoogleAnalyticsSourceMediumTable from './GoogleAnalyticsSourceMediumTable';
import TotalLineCard from '../Widget/Chart/card/TotalLineCard';
import { prepareSparklineData } from '../../utils/prepareSparklineData';
import { loadCSVData } from '../../utils/csvLoader';

// TODO: Update to the correct Google Analytics CSV file if available
const csvUrl = '/data/google_analytics.csv';

const initialFilters = {
  country: [],
  city: [],
  source: [],
  medium: [],
  browser: [],
  device: [],
  dateRange: [null, null]
};

const METRICS = [
  { key: 'Sessions', label: 'Total Sessions', color: '#1976d2' }, // Blue
  { key: 'Users', label: 'Total Users', color: '#e53935' }, // Red
  { key: 'Pageviews', label: 'Total Pageviews', color: '#43a047' }, // Green
  { key: 'BounceRate', label: 'Bounce Rate', isPercent: true, color: '#ff9800' }, // Orange
  { key: 'AvgSessionDuration', label: 'Session Duration', color: '#5e35b1' } // Purple
];

const GoogleAnalytics = () => {
  const theme = useTheme();
  // All hooks at the top
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState([]);
  
  // Calculate default date range - last 30 days
  const getDefaultDateRange = () => {
    const endDate = dayjs();
    const startDate = dayjs().subtract(29, 'day');
    return [startDate, endDate];
  };
  
  // New filter state for GoogleAnalyticsFilters
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedSource, setSelectedSource] = useState([]);
  const [selectedMedium, setSelectedMedium] = useState([]);
  const [selectedBrowser, setSelectedBrowser] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState([]);
  const [dateRange, setDateRange] = useState(getDefaultDateRange());

  // Load CSV data
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await loadCSVData(csvUrl);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error loading CSV data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter data based on filters
  useEffect(() => {
    if (!data.length) return;
    
    // Helper function to normalize dates for comparison - truncates to date only for fair comparison
    const normalizeDate = (date) => {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      return d;
    };
    
    // Get normalized date range bounds
    const startDate = dateRange[0] ? normalizeDate(dateRange[0].toDate()) : null;
    const endDate = dateRange[1] ? normalizeDate(dateRange[1].toDate()) : null;
    
    let filtered = data.filter(row => {
      try {
        // Date filter
        if (startDate && endDate) {
          const rowDate = normalizeDate(row.Date);
          // Check if rowDate is valid
          if (isNaN(rowDate.getTime())) return false;
          if (rowDate < startDate || rowDate > endDate) return false;
        }
        
        // Country
        if (filters.country.length && !filters.country.includes(row.Country)) return false;
        // City
        if (filters.city.length && !filters.city.includes(row.City)) return false;
        // Source
        if (filters.source.length && !filters.source.includes(row.Source)) return false;
        // Medium
        if (filters.medium.length && !filters.medium.includes(row.Medium)) return false;
        // Browser
        if (filters.browser.length && !filters.browser.includes(row.Browser)) return false;
        // Device
        if (filters.device.length && !filters.device.includes(row.Device)) return false;
        
        return true;
      } catch (error) {
        console.error("Error filtering row:", error, row);
        return false;
      }
    });
    
    setFilteredData(filtered);
  }, [data, filters, dateRange]);

  // Sync new filter state with filters
  useEffect(() => {
    setFilters({
      country: selectedCountry,
      city: selectedCity,
      source: selectedSource,
      medium: selectedMedium,
      browser: selectedBrowser,
      device: selectedDevice,
      dateRange: dateRange
    });
  }, [selectedCountry, selectedCity, selectedSource, selectedMedium, selectedBrowser, selectedDevice, dateRange]);

  // Extract unique filter options
  const countries = useMemo(() => [...new Set(data.map(row => row.Country).filter(Boolean))], [data]);
  
  // Cities filtered by selected countries
  const cities = useMemo(() => {
    let filteredRows = data;
    
    // Filter rows based on selected countries
    if (filters.country.length) {
      filteredRows = filteredRows.filter(row => filters.country.includes(row.Country));
    }
    
    // Extract unique cities from filtered rows
    return [...new Set(filteredRows.map(row => row.City).filter(Boolean))];
  }, [data, filters.country]);
  
  // When city selection changes, update countries based on selected cities
  const countriesToShow = useMemo(() => {
    if (!selectedCity.length) {
      return countries;
    }
    
    // Get countries that contain the selected cities
    const countriesWithSelectedCities = [...new Set(
      data.filter(row => selectedCity.includes(row.City))
          .map(row => row.Country)
          .filter(Boolean)
    )];
    
    return countriesWithSelectedCities;
  }, [countries, data, selectedCity]);
  
  // Sources filtered by selected countries and cities
  const sources = useMemo(() => {
    let filteredRows = data;
    
    // Filter rows based on selected countries
    if (filters.country.length) {
      filteredRows = filteredRows.filter(row => filters.country.includes(row.Country));
    }
    
    // Filter rows based on selected cities
    if (filters.city.length) {
      filteredRows = filteredRows.filter(row => filters.city.includes(row.City));
    }
    
    // Extract unique sources from filtered rows
    return [...new Set(filteredRows.map(row => row.Source).filter(Boolean))];
  }, [data, filters.country, filters.city]);
  
  // Mediums filtered by selected countries, cities, and sources
  const mediums = useMemo(() => {
    let filteredRows = data;
    
    // Filter rows based on selected countries
    if (filters.country.length) {
      filteredRows = filteredRows.filter(row => filters.country.includes(row.Country));
    }
    
    // Filter rows based on selected cities
    if (filters.city.length) {
      filteredRows = filteredRows.filter(row => filters.city.includes(row.City));
    }
    
    // Filter rows based on selected sources
    if (filters.source.length) {
      filteredRows = filteredRows.filter(row => filters.source.includes(row.Source));
    }
    
    // Extract unique mediums from filtered rows
    return [...new Set(filteredRows.map(row => row.Medium).filter(Boolean))];
  }, [data, filters.country, filters.city, filters.source]);
  
  // Browsers filtered by all previous selections
  const browsers = useMemo(() => {
    let filteredRows = data;
    
    // Apply all previous filters
    if (filters.country.length) {
      filteredRows = filteredRows.filter(row => filters.country.includes(row.Country));
    }
    
    if (filters.city.length) {
      filteredRows = filteredRows.filter(row => filters.city.includes(row.City));
    }
    
    if (filters.source.length) {
      filteredRows = filteredRows.filter(row => filters.source.includes(row.Source));
    }
    
    if (filters.medium.length) {
      filteredRows = filteredRows.filter(row => filters.medium.includes(row.Medium));
    }
    
    // Extract unique browsers from filtered rows
    return [...new Set(filteredRows.map(row => row.Browser).filter(Boolean))];
  }, [data, filters.country, filters.city, filters.source, filters.medium]);
  
  // Devices filtered by all previous selections
  const devices = useMemo(() => {
    let filteredRows = data;
    
    // Apply all previous filters
    if (filters.country.length) {
      filteredRows = filteredRows.filter(row => filters.country.includes(row.Country));
    }
    
    if (filters.city.length) {
      filteredRows = filteredRows.filter(row => filters.city.includes(row.City));
    }
    
    if (filters.source.length) {
      filteredRows = filteredRows.filter(row => filters.source.includes(row.Source));
    }
    
    if (filters.medium.length) {
      filteredRows = filteredRows.filter(row => filters.medium.includes(row.Medium));
    }
    
    if (filters.browser.length) {
      filteredRows = filteredRows.filter(row => filters.browser.includes(row.Browser));
    }
    
    // Extract unique devices from filtered rows
    return [...new Set(filteredRows.map(row => row.Device).filter(Boolean))];
  }, [data, filters.country, filters.city, filters.source, filters.medium, filters.browser]);
  
  // Check if the current selection is still valid after cascading filters
  useEffect(() => {
    // Check and update city selection
    if (selectedCity.length) {
      const validCities = selectedCity.filter(city => cities.includes(city));
      if (validCities.length !== selectedCity.length) {
        setSelectedCity(validCities);
      }
    }
    
    // Check and update source selection
    if (selectedSource.length) {
      const validSources = selectedSource.filter(source => sources.includes(source));
      if (validSources.length !== selectedSource.length) {
        setSelectedSource(validSources);
      }
    }
    
    // Check and update medium selection
    if (selectedMedium.length) {
      const validMediums = selectedMedium.filter(medium => mediums.includes(medium));
      if (validMediums.length !== selectedMedium.length) {
        setSelectedMedium(validMediums);
      }
    }
    
    // Check and update browser selection
    if (selectedBrowser.length) {
      const validBrowsers = selectedBrowser.filter(browser => browsers.includes(browser));
      if (validBrowsers.length !== selectedBrowser.length) {
        setSelectedBrowser(validBrowsers);
      }
    }
    
    // Check and update device selection
    if (selectedDevice.length) {
      const validDevices = selectedDevice.filter(device => devices.includes(device));
      if (validDevices.length !== selectedDevice.length) {
        setSelectedDevice(validDevices);
      }
    }
  }, [cities, sources, mediums, browsers, devices, selectedCity, selectedSource, selectedMedium, selectedBrowser, selectedDevice]);
  
  // For the filter dropdowns, we need the unique sets
  const uniqueCities = cities;
  const uniqueSources = sources;
  const uniqueMediums = mediums;
  const uniqueBrowsers = browsers;
  const uniqueDevices = devices;

  // Aggregate metrics for scorecards
  const aggregateMetric = (key) => {
    if (!filteredData.length) return 0;
    if (key === 'BounceRate') {
      // Average bounce rate
      const sum = filteredData.reduce((acc, row) => acc + parseFloat(row.BounceRate || 0), 0);
      return filteredData.length ? sum / filteredData.length : 0;
    }
    if (key === 'AvgSessionDuration') {
      // Average session duration
      const sum = filteredData.reduce((acc, row) => acc + parseFloat(row.AvgSessionDuration || 0), 0);
      return filteredData.length ? sum / filteredData.length : 0;
    }
    return filteredData.reduce((sum, row) => sum + (parseFloat(row[key]) || 0), 0);
  };

  // Format metric value for display
  const formatMetricValue = (value, isPercent) => {
    if (isPercent) return `${Number(value).toFixed(2)}%`;
    return Number(value).toLocaleString();
  };

  if (loading) {
    return <Typography>Loading Google Analytics metrics...</Typography>;
  }

  const handleRefreshFilters = () => {
    setSelectedCountry([]);
    setSelectedCity([]);
    setSelectedSource([]);
    setSelectedMedium([]);
    setSelectedBrowser([]);
    setSelectedDevice([]);
    setDateRange(getDefaultDateRange());
  };

  return (
    <Box sx={{ p: 3, pt: 0.3, bgcolor: '#f4f5fa', minHeight: '100vh' }}>
      {/* Filter bar */}
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item xs={12} md={8}>
          <GoogleAnalyticsFilters
            countries={countriesToShow}
            cities={uniqueCities}
            sources={uniqueSources}
            mediums={uniqueMediums}
            browsers={uniqueBrowsers}
            devices={uniqueDevices}
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
              // Ensure we have proper dayjs objects
              if (newRange && newRange.length === 2) {
                const startDate = dayjs.isDayjs(newRange[0]) ? newRange[0] : dayjs(newRange[0]);
                const endDate = dayjs.isDayjs(newRange[1]) ? newRange[1] : dayjs(newRange[1]);
                setDateRange([startDate, endDate]);
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
      
      {/* Scorecards with TotalLineCard */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {METRICS.map((metric) => {
          const value = aggregateMetric(metric.key);
          const displayValue = formatMetricValue(value, metric.isPercent);
          
          // Calculate a percentage or additional information to display
          let percentageInfo = '';
          if (metric.key === 'Sessions') {
            percentageInfo = `${filteredData.length} records`;
          } else if (metric.key === 'Users' && aggregateMetric('Sessions') > 0) {
            const sessionsPerUser = aggregateMetric('Sessions') / value;
            percentageInfo = `${sessionsPerUser.toFixed(2)} sessions/user`;
          } else if (metric.key === 'BounceRate') {
            percentageInfo = `${Math.round(filteredData.length * (value / 100))} bounces`;
          }
          
          return (
            <Grid item xs={12} sm={6} md={2.4} key={metric.key} sx={{ height: '100%' }}>
              <TotalLineCard
                chartData={prepareSparklineData(filteredData, metric.key, dateRange)}
                value={displayValue}
                title={metric.label}
                percentage={percentageInfo}
                bgColor={metric.color}
              />
            </Grid>
          );
        })}
      </Grid>
      
      {loading && <CircularProgress sx={{ mt: 4 }} />}
      <GoogleAnalyticsBarCharts data={filteredData} />
      
      {/* Add Line Chart and Geo Chart in a row */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <GoogleAnalyticsLineChart data={filteredData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <GoogleAnalyticsGeoChart data={filteredData} />
        </Grid>
      </Grid>
      
      {/* Add Donut Charts for Devices and Browsers */}
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <GoogleAnalyticsDonutCharts data={filteredData} />
        </Grid>
      </Grid>
      
      {/* Add Source/Medium Performance Table */}
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <GoogleAnalyticsSourceMediumTable data={filteredData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GoogleAnalytics; 