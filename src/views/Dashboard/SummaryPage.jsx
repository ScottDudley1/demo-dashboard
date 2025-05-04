import React, { useMemo, useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItemText
} from '@mui/material';
import useCsvData from 'hooks/useCsvData';
import CustomDateRangePicker from 'component/CustomDateRangePicker';
import dayjs from 'dayjs';

const SummaryPage = () => {
  const { data, loading } = useCsvData('summary.csv');

  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [dateRange, setDateRange] = useState([dayjs().subtract(29, 'day'), dayjs()]);

  const channels = useMemo(() => [...new Set(data.map(d => d.Channel))], [data]);
  const countries = useMemo(() => [...new Set(data.map(d => d.Country))], [data]);
  const cities = useMemo(() => [...new Set(data.map(d => d.City))], [data]);

  const filteredData = useMemo(() => {
    return data.filter(row => {
      const rowDate = dayjs(row.Date);
      const isInDateRange = rowDate.isBetween(dateRange[0], dateRange[1], null, '[]');
      const channelMatch = selectedChannels.length === 0 || selectedChannels.includes(row.Channel);
      const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(row.Country);
      const cityMatch = selectedCities.length === 0 || selectedCities.includes(row.City);
      return isInDateRange && channelMatch && countryMatch && cityMatch;
    });
  }, [data, selectedChannels, selectedCountries, selectedCities, dateRange]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => new Date(b.Date) - new Date(a.Date));
  }, [filteredData]);

  if (loading) return <Typography>Loading data...</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Marketing Summary
      </Typography>

      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Channel</InputLabel>
            <Select
              multiple
              value={selectedChannels}
              onChange={(e) => setSelectedChannels(e.target.value)}
              input={<OutlinedInput label="Channel" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {channels.map((c) => (
                <MenuItem key={c} value={c}>
                  <Checkbox checked={selectedChannels.indexOf(c) > -1} />
                  <ListItemText primary={c} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              multiple
              value={selectedCountries}
              onChange={(e) => setSelectedCountries(e.target.value)}
              input={<OutlinedInput label="Country" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {countries.map((c) => (
                <MenuItem key={c} value={c}>
                  <Checkbox checked={selectedCountries.indexOf(c) > -1} />
                  <ListItemText primary={c} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>City</InputLabel>
            <Select
              multiple
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.target.value)}
              input={<OutlinedInput label="City" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {cities.map((c) => (
                <MenuItem key={c} value={c}>
                  <Checkbox checked={selectedCities.indexOf(c) > -1} />
                  <ListItemText primary={c} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CustomDateRangePicker onChange={(range) => setDateRange(range)} value={dateRange} />
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Filtered Results: {sortedData.length} rows
        </Typography>
        <Box component="div" sx={{ overflowX: 'auto' }}>
          <table width="100%" border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Date</th>
                <th>Channel</th>
                <th>Leads</th>
                <th>Sales</th>
                <th>Phone Enquiries</th>
                <th>Downloads</th>
                <th>Country</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, i) => (
                <tr key={i}>
                  <td>{row.Date}</td>
                  <td>{row.Channel}</td>
                  <td>{row.Leads}</td>
                  <td>{row.Sales}</td>
                  <td>{row['Phone Enquiries']}</td>
                  <td>{row.Downloads}</td>
                  <td>{row.Country}</td>
                  <td>{row.City}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
};

export default SummaryPage;