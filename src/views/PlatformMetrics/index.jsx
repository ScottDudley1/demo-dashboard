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
import CustomDateRangePicker from 'component/CustomDateRangePicker';
import PlatformMetricScorecard from '../../component/PlatformMetricScorecard';
import PlatformMetricsCharts from './PlatformMetricsCharts';
import PlatformMetricsTable from './PlatformMetricsTable';
import dayjs from 'dayjs';
import PlatformMetricsFilters from './PlatformMetricsFilters';
import CollapsibleGroupTable from "./CollapsibleGroupTable";
import DonutChartCard from "./DonutChartCard";
import { Card, CardHeader, CardContent } from '@mui/material';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, BarChart, Bar } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import TotalLineCard from '../Widget/Chart/card/TotalLineCard';
import { prepareSparklineData } from '../../utils/prepareSparklineData';
import { loadCSVData } from '../../utils/csvLoader';

// Vite fix: use direct path for public assets
const csvUrl = '/data/platform_metrics.csv';

const initialFilters = {
  channel: [],
  campaign: [],
  adSet: [],
  adName: [],
  dateRange: [dayjs().subtract(29, 'day'), dayjs()]
};

const METRICS = [
  { key: 'Spend', label: 'Total Spend', isMoney: true, color: '#1976d2' }, // Blue
  { key: 'Impressions', label: 'Total Impressions', color: '#43a047' }, // Green
  { key: 'Clicks', label: 'Total Clicks', color: '#e53935' }, // Red
  { key: 'Conversions', label: 'Total Conversions', color: '#9c27b0' }, // Purple
  { key: 'Reach', label: 'Total Reach', color: '#ff9800' }, // Orange
  { key: 'CPC', label: 'Avg. CPC', isMoney: true, color: '#00bcd4' }, // Cyan
  { key: 'CPM', label: 'CPM', isMoney: true, color: '#673ab7' }, // Deep Purple
  { key: 'CostPerConversion', label: 'Cost Per Conv.', isMoney: true, color: '#3f51b5' }, // Indigo
  { key: 'CTR', label: 'CTR', isPercent: true, color: '#009688' }, // Teal
  { key: 'ConversionRate', label: 'Conversion Rate', isPercent: true, color: '#ff5722' } // Deep Orange
];

const PlatformMetrics = () => {
  const theme = useTheme();
  // All hooks at the top
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState([]);
  // New filter state for PlatformMetricsFilters
  const [selectedChannel, setSelectedChannel] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState([]);
  const [selectedAdSet, setSelectedAdSet] = useState([]);
  const [selectedAdName, setSelectedAdName] = useState([]);
  const [dateRange, setDateRange] = useState([dayjs().subtract(29, 'day'), dayjs()]);

  // Extract unique filter options for cascading logic
  const channels = useMemo(() => [...new Set(data.map(row => row.Channel).filter(Boolean))], [data]);
  const campaigns = useMemo(() => data.filter(row =>
    !filters.channel.length || filters.channel.includes(row.Channel)
  ).map(row => row['Campaign Name']).filter(Boolean), [data, filters.channel]);
  const uniqueCampaigns = useMemo(() => [...new Set(campaigns)], [campaigns]);
  const adSets = useMemo(() => data.filter(row =>
    (!filters.channel.length || filters.channel.includes(row.Channel)) &&
    (!filters.campaign.length || filters.campaign.includes(row['Campaign Name']))
  ).map(row => row['Ad Set Name']).filter(Boolean), [data, filters.channel, filters.campaign]);
  const uniqueAdSets = useMemo(() => [...new Set(adSets)], [adSets]);
  const adNames = useMemo(() => data.filter(row =>
    (!filters.channel.length || filters.channel.includes(row.Channel)) &&
    (!filters.campaign.length || filters.campaign.includes(row['Campaign Name'])) &&
    (!filters.adSet.length || filters.adSet.includes(row['Ad Set Name']))
  ).map(row => row['Ad Name']).filter(Boolean), [data, filters.channel, filters.campaign, filters.adSet]);
  const uniqueAdNames = useMemo(() => [...new Set(adNames)], [adNames]);

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

  // Filter data based on filters, skip invalid dates
  useEffect(() => {
    if (!data.length) return;
    
    // Helper function to normalize dates for comparison - truncates to date only for fair comparison
    const normalizeDate = (date) => {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      return d;
    };
    
    // Get normalized date range bounds
    const startDate = filters.dateRange[0] ? normalizeDate(filters.dateRange[0].toDate()) : null;
    const endDate = filters.dateRange[1] ? normalizeDate(filters.dateRange[1].toDate()) : null;
    
    let filtered = data.filter(row => {
      try {
        // Date filter
        if (startDate && endDate) {
          const rowDate = normalizeDate(row.Date);
          if (isNaN(rowDate.getTime())) return false;
          if (rowDate < startDate || rowDate > endDate) return false;
        }
        
        // Channel
        if (filters.channel.length && !filters.channel.includes(row.Channel)) return false;
        // Campaign
        if (filters.campaign.length && !filters.campaign.includes(row['Campaign Name'])) return false;
        // Ad Set
        if (filters.adSet.length && !filters.adSet.includes(row['Ad Set Name'])) return false;
        // Ad Name
        if (filters.adName.length && !filters.adName.includes(row['Ad Name'])) return false;
        
        return true;
      } catch (error) {
        console.error("Error filtering row:", error, row);
        return false;
      }
    });
    
    setFilteredData(filtered);
  }, [data, filters]);

  // Sync new filter state with old filters for backward compatibility
  useEffect(() => {
    setFilters({
      channel: selectedChannel,
      campaign: selectedCampaign,
      adSet: selectedAdSet,
      adName: selectedAdName,
      dateRange: dateRange
    });
  }, [selectedChannel, selectedCampaign, selectedAdSet, selectedAdName, dateRange]);

  // Check if selections are still valid after cascading filters
  useEffect(() => {
    // Check and update campaign selection
    if (selectedCampaign.length) {
      const validCampaigns = selectedCampaign.filter(campaign => uniqueCampaigns.includes(campaign));
      if (validCampaigns.length !== selectedCampaign.length) {
        setSelectedCampaign(validCampaigns);
      }
    }
    
    // Check and update ad set selection
    if (selectedAdSet.length) {
      const validAdSets = selectedAdSet.filter(adSet => uniqueAdSets.includes(adSet));
      if (validAdSets.length !== selectedAdSet.length) {
        setSelectedAdSet(validAdSets);
      }
    }
    
    // Check and update ad name selection
    if (selectedAdName.length) {
      const validAdNames = selectedAdName.filter(adName => uniqueAdNames.includes(adName));
      if (validAdNames.length !== selectedAdName.length) {
        setSelectedAdName(validAdNames);
      }
    }
  }, [uniqueCampaigns, uniqueAdSets, uniqueAdNames, selectedCampaign, selectedAdSet, selectedAdName]);

  // Aggregate metrics for scorecards and sparklines
  const aggregateMetric = (key) => {
    if (!filteredData.length) return 0;
    if (key === 'CPC') {
      let totalSpend = 0, totalClicks = 0;
      filteredData.forEach(row => {
        const spend = parseFloat(row.Spend) || 0;
        const clicks = parseInt(row.Clicks) || 0;
        totalSpend += spend;
        totalClicks += clicks;
      });
      return totalClicks ? (totalSpend / totalClicks) : 0;
    }
    if (key === 'CPM') {
      let totalSpend = 0, totalImpressions = 0;
      filteredData.forEach(row => {
        totalSpend += parseFloat(row.Spend) || 0;
        totalImpressions += parseInt(row.Impressions) || 0;
      });
      return totalImpressions ? ((totalSpend / totalImpressions) * 1000) : 0;
    }
    if (key === 'CostPerConversion') {
      let totalSpend = 0, totalConversions = 0;
      filteredData.forEach(row => {
        totalSpend += parseFloat(row.Spend) || 0;
        totalConversions += parseInt(row.Conversions) || 0;
      });
      return totalConversions ? (totalSpend / totalConversions) : 0;
    }
    if (key === 'CTR') {
      let totalClicks = 0, totalImpressions = 0;
      filteredData.forEach(row => {
        totalClicks += parseInt(row.Clicks) || 0;
        totalImpressions += parseInt(row.Impressions) || 0;
      });
      return totalImpressions ? (totalClicks / totalImpressions) * 100 : 0;
    }
    if (key === 'ConversionRate') {
      let totalConversions = 0, totalClicks = 0;
      filteredData.forEach(row => {
        totalConversions += parseInt(row.Conversions) || 0;
        totalClicks += parseInt(row.Clicks) || 0;
      });
      return totalClicks ? (totalConversions / totalClicks) * 100 : 0;
    }
    return filteredData.reduce((sum, row) => sum + (parseFloat(row[key]) || 0), 0);
  };

  // Format metric value for display
  const formatMetricValue = (value, isPercent, isMoney) => {
    if (isMoney) return `$${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (isPercent) return `${Number(value).toFixed(2)}%`;
    return Number(value).toLocaleString();
  };

  // Generate additional info for metrics
  const getAdditionalInfo = (metric, value) => {
    if (metric.key === 'Clicks' && aggregateMetric('Impressions') > 0) {
      return `${(aggregateMetric('CTR')).toFixed(2)}% CTR`;
    }
    if (metric.key === 'Conversions' && aggregateMetric('Clicks') > 0) {
      return `${(aggregateMetric('ConversionRate')).toFixed(2)}% rate`;
    }
    if (metric.key === 'Spend') {
      return `${filteredData.length} records`;
    }
    if (metric.key === 'CPC' && aggregateMetric('Clicks') > 0) {
      return `${aggregateMetric('Clicks')} clicks`;
    }
    if (metric.key === 'CostPerConversion' && aggregateMetric('Conversions') > 0) {
      return `${aggregateMetric('Conversions')} convs`;
    }
    return '';
  };

  // Prepare chart data (line chart: daily aggregates)
  const chartData = (() => {
    const dateMap = {};
    filteredData.forEach(row => {
      const d = row.Date;
      if (!dateMap[d]) dateMap[d] = { date: d, Spend: 0, Impressions: 0, Clicks: 0, Conversions: 0 };
      dateMap[d].Spend += parseFloat(row.Spend) || 0;
      dateMap[d].Impressions += parseInt(row.Impressions) || 0;
      dateMap[d].Clicks += parseInt(row.Clicks) || 0;
      dateMap[d].Conversions += parseInt(row.Conversions) || 0;
    });
    return Object.values(dateMap).sort((a, b) => new Date(a.date) - new Date(b.date));
  })();

  // Prepare bar chart data (Spend by Channel)
  const barData = (() => {
    const channelMap = {};
    filteredData.forEach(row => {
      const c = row.Channel;
      if (!channelMap[c]) channelMap[c] = { channel: c, Spend: 0 };
      channelMap[c].Spend += parseFloat(row.Spend) || 0;
    });
    return Object.values(channelMap);
  })();

  // Prepare table data: daily aggregates with details
  const tableData = (() => {
    const dateMap = {};
    filteredData.forEach(row => {
      const d = row.Date;
      if (!dateMap[d]) dateMap[d] = {
        date: d,
        Spend: 0,
        Impressions: 0,
        Clicks: 0,
        Conversions: 0,
        Reach: 0,
        details: []
      };
      dateMap[d].Spend += parseFloat(row.Spend) || 0;
      dateMap[d].Impressions += parseInt(row.Impressions) || 0;
      dateMap[d].Clicks += parseInt(row.Clicks) || 0;
      dateMap[d].Conversions += parseInt(row.Conversions) || 0;
      dateMap[d].Reach += parseInt(row.Reach) || 0;
      dateMap[d].details.push(row);
    });
    return Object.values(dateMap).sort((a, b) => new Date(b.date) - new Date(a.date));
  })();

  if (loading) {
    return <Typography>Loading platform metrics...</Typography>;
  }

  const handleRefreshFilters = () => {
    setSelectedChannel([]);
    setSelectedCampaign([]);
    setSelectedAdSet([]);
    setSelectedAdName([]);
    setDateRange([dayjs().subtract(29, 'day'), dayjs()]);
  };

  return (
    <Box sx={{ p: 3, pt: 0.3 }}>
      {/* Filter bar */}
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item xs={12} md={8}>
          <PlatformMetricsFilters
            channels={channels}
            campaigns={uniqueCampaigns}
            adSets={uniqueAdSets}
            adNames={uniqueAdNames}
            selectedChannel={selectedChannel}
            selectedCampaign={selectedCampaign}
            selectedAdSet={selectedAdSet}
            selectedAdName={selectedAdName}
            onChannelChange={e => setSelectedChannel(e.target.value)}
            onCampaignChange={e => setSelectedCampaign(e.target.value)}
            onAdSetChange={e => setSelectedAdSet(e.target.value)}
            onAdNameChange={e => setSelectedAdName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
          <CustomDateRangePicker
            value={dateRange}
            onChange={(newRange) => {
              // Ensure we have proper Date objects
              if (newRange && newRange.length === 2) {
                const startDate = dayjs.isDayjs(newRange[0]) ? newRange[0] : dayjs(newRange[0]);
                const endDate = dayjs.isDayjs(newRange[1]) ? newRange[1] : dayjs(newRange[1]);
                setDateRange([startDate, endDate]);
              } else {
                setDateRange([dayjs().subtract(29, 'day'), dayjs()]);
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
          const displayValue = formatMetricValue(value, metric.isPercent, metric.isMoney);
          const additionalInfo = getAdditionalInfo(metric, value);
          
          return (
            <Grid item xs={12} sm={6} md={2.4} key={metric.key} sx={{ height: '100%' }}>
              <TotalLineCard
                chartData={prepareSparklineData(filteredData, metric.key, dateRange)}
                value={displayValue}
                title={metric.label}
                percentage={additionalInfo}
                bgColor={metric.color}
              />
            </Grid>
          );
        })}
      </Grid>
      
      {/* Charts Section: Two separate cards */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '2px solid black', borderTop: 'none', borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
            <CardHeader
              title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700 }}>Conversions and Click Trends</span>}
              sx={{ backgroundColor: 'black', textAlign: 'center', borderRadius: 0, p: 2 }}
            />
            <CardContent>
              <ResponsiveContainer width="100%" height={440}>
                <LineChart data={chartData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Clicks" stroke="#1976d2" strokeWidth={4} dot={false} />
                  <Line type="monotone" dataKey="Conversions" stroke="#d32f2f" strokeWidth={4} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '2px solid black', borderTop: 'none', borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
            <CardHeader
              title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700 }}>Spend by Channel</span>}
              sx={{ backgroundColor: 'black', textAlign: 'center', borderRadius: 0, p: 2 }}
            />
            <CardContent>
              <ResponsiveContainer width="100%" height={440}>
                <BarChart data={barData.map(d => ({ ...d, channel: d.channel === 'Google Organic' ? 'Organic' : d.channel }))} margin={{ left: 0, right: 0, top: 0, bottom: 30 }}>
                  <XAxis dataKey="channel" angle={-20} textAnchor="end" interval={0} height={60} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Spend" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tables Section: Full width */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12}>
          <CollapsibleGroupTable
            data={filteredData}
            groupBy="Campaign Name"
            groupLabel="Campaign Stats"
            columns={[
              { key: 'Campaign Name', label: 'Campaign' },
              { key: 'Spend', label: 'Spend' },
              { key: 'Impressions', label: 'Impressions' },
              { key: 'Clicks', label: 'Clicks' },
              { key: 'Conversions', label: 'Conversions' },
              { key: 'Reach', label: 'Reach' }
            ]}
          />
          <CollapsibleGroupTable
            data={filteredData}
            groupBy="Ad Set Name"
            groupLabel="Ad Set Stats"
            columns={[
              { key: 'Ad Set Name', label: 'Ad Set' },
              { key: 'Spend', label: 'Spend' },
              { key: 'Impressions', label: 'Impressions' },
              { key: 'Clicks', label: 'Clicks' },
              { key: 'Conversions', label: 'Conversions' },
              { key: 'Reach', label: 'Reach' }
            ]}
          />
          <CollapsibleGroupTable
            data={filteredData}
            groupBy="Ad Name"
            groupLabel="Ad Stats"
            columns={[
              { key: 'Ad Name', label: 'Ad' },
              { key: 'Spend', label: 'Spend' },
              { key: 'Impressions', label: 'Impressions' },
              { key: 'Clicks', label: 'Clicks' },
              { key: 'Conversions', label: 'Conversions' },
              { key: 'Reach', label: 'Reach' }
            ]}
          />
        </Grid>
      </Grid>
      {loading && <CircularProgress sx={{ mt: 4 }} />}
    </Box>
  );
};

export default PlatformMetrics; 