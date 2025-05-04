import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

// Add the plugins to dayjs
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Card, CardHeader, CardContent } from '@mui/material';

// project imports
import TotalLineCard from 'views/Widget/Chart/card/TotalLineCard';
import SalesLineCard from 'views/Widget/Chart/card/SalesLineCard';
import RevenuChartCard from 'views/Widget/Chart/card/RevenuChartCard';
import DailySummaryTable from './DailySummaryTable';
import WorldMap from './WorldMap';
import { gridSpacing } from 'config.js';
import DimensionFilters from '../../../component/DimensionFilters';
import { loadCSVData } from '../../../utils/csvLoader';
import CustomDateRangePicker from '../../../component/CustomDateRangePicker';
import Chart from 'react-apexcharts';
import { prepareSparklineData } from '../../../utils/prepareSparklineData';

// assets
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

// Colors for each card - moved to the top so other functions can access
const cardColors = {
    sales: '#1976d2',    // Blue
    leads: '#43a047',    // Green
    downloads: '#ff9800', // Orange
    calls: '#e53935'     // Red
};

const Dashboard = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedChannels, setSelectedChannels] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [dateRange, setDateRange] = useState([dayjs().subtract(29, 'day'), dayjs()]);

    // Extract unique values for filters
    const channels = Array.from(new Set(data.map(item => item.Channel).filter(Boolean)));
    const countries = Array.from(new Set(data.map(item => item.Country).filter(Boolean)));
    // Only show cities relevant to selected countries
    const filteredCities = selectedCountries.length > 0
        ? Array.from(new Set(data.filter(item => selectedCountries.includes(item.Country)).map(item => item.City).filter(Boolean)))
        : Array.from(new Set(data.map(item => item.City).filter(Boolean)));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await loadCSVData('/data/summary.csv');
                setData(result);
                setFilteredData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error loading CSV data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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
        
        let filtered = [...data];

        try {
            // Apply filters
            if (selectedChannels.length > 0) {
                filtered = filtered.filter(item => selectedChannels.includes(item.Channel));
            }
            if (selectedCountries.length > 0) {
                filtered = filtered.filter(item => selectedCountries.includes(item.Country));
            }
            if (selectedCities.length > 0) {
                filtered = filtered.filter(item => selectedCities.includes(item.City));
            }
            if (startDate && endDate) {
                filtered = filtered.filter(item => {
                    try {
                        const itemDate = normalizeDate(item.Date);
                        if (isNaN(itemDate.getTime())) return false;
                        return itemDate >= startDate && itemDate <= endDate;
                    } catch (error) {
                        console.warn('Invalid date in row:', item);
                        return false;
                    }
                });
            }
        } catch (error) {
            console.error('Error applying filters:', error);
        }

        setFilteredData(filtered);
    }, [data, selectedChannels, selectedCountries, selectedCities, dateRange]);
    
    // Ensure selected cities are valid based on selected countries
    useEffect(() => {
        if (selectedCities.length && selectedCountries.length) {
            const validCities = selectedCities.filter(city => 
                filteredCities.includes(city)
            );
            if (validCities.length !== selectedCities.length) {
                setSelectedCities(validCities);
            }
        }
    }, [filteredCities, selectedCities, selectedCountries]);

    const calculateMetrics = () => {
        if (!filteredData.length) return { totalSales: 0, totalLeads: 0, totalDownloads: 0, totalCalls: 0 };
        return filteredData.reduce((acc, curr) => ({
            totalSales: acc.totalSales + Number(curr.Sales || 0),
            totalLeads: acc.totalLeads + Number(curr.Leads || 0),
            totalDownloads: acc.totalDownloads + Number(curr.Downloads || 0),
            totalCalls: acc.totalCalls + Number(curr['Phone Enquiries'] || curr.Calls || 0)
        }), { totalSales: 0, totalLeads: 0, totalDownloads: 0, totalCalls: 0 });
    };

    // Helper to generate sparkline data for a metric (uses filteredData only)
    const prepareSparklineDataForDashboard = (metric) => {
        return prepareSparklineData(filteredData, metric, dateRange);
    };

    const metrics = calculateMetrics();
    const trendsChartData = prepareTrendsChartData();
    const trafficSourceData = prepareTrafficSourceData();
    const dailySummaryData = prepareDailySummaryData();
    const leadsByChannelData = prepareLeadsByChannelData();

    // Format metric values
    const formatMetricValue = (value) => Number(value).toLocaleString();

    // Generate additional info for metrics
    const getAdditionalInfo = (metric) => {
        if (metric === 'sales') {
            return `${filteredData.length} records`;
        }
        if (metric === 'leads' && metrics.totalSales > 0) {
            const leadsToSalesRatio = (metrics.totalLeads / metrics.totalSales).toFixed(2);
            return `${leadsToSalesRatio} leads per sale`;
        }
        if (metric === 'downloads' && metrics.totalLeads > 0) {
            const conversionRate = ((metrics.totalLeads / metrics.totalDownloads) * 100).toFixed(1);
            return `${conversionRate}% converted`;
        }
        return '';
    };

    // Function to prepare trends chart data from filtered data
    function prepareTrendsChartData() {
        if (!filteredData.length) return { series: [], options: {} };

        const dailyData = filteredData.reduce((acc, curr) => {
            const dateObj = new Date(curr.Date);
            if (isNaN(dateObj.getTime())) return acc;
            const date = dateObj.toISOString().split('T')[0];
            if (!acc[date]) {
                acc[date] = { sales: 0, leads: 0, downloads: 0, calls: 0 };
            }
            acc[date].sales += Number(curr.Sales || 0);
            acc[date].leads += Number(curr.Leads || 0);
            acc[date].downloads += Number(curr.Downloads || 0);
            acc[date].calls += Number(curr['Phone Enquiries'] || curr.Calls || 0);
            return acc;
        }, {});

        const dates = Object.keys(dailyData).sort();
        const salesData = dates.map(date => dailyData[date].sales);
        const leadsData = dates.map(date => dailyData[date].leads);
        const downloadsData = dates.map(date => dailyData[date].downloads);
        const callsData = dates.map(date => dailyData[date].calls);

        return {
            series: [
                { name: 'Sales', data: salesData, color: cardColors.sales },
                { name: 'Leads', data: leadsData, color: cardColors.leads },
                { name: 'Downloads', data: downloadsData, color: cardColors.downloads },
                { name: 'Calls', data: callsData, color: cardColors.calls }
            ],
            options: {
                chart: {
                    type: 'line',
                    height: 350,
                    toolbar: { show: false }
                },
                colors: [cardColors.sales, cardColors.leads, cardColors.downloads, cardColors.calls],
                stroke: {
                    curve: 'smooth',
                    width: [3, 3, 3, 3]
                },
                xaxis: {
                    categories: dates,
                    type: 'datetime'
                },
                yaxis: [
                    {
                        title: { text: 'Value' },
                        labels: {
                            formatter: (value) => value.toLocaleString()
                        }
                    }
                ],
                tooltip: {
                    theme: theme.palette.mode === 'dark' ? 'dark' : 'light'
                },
                grid: {
                    padding: {
                        bottom: 20
                    }
                },
                legend: {
                    show: true,
                    position: 'top',
                    horizontalAlign: 'center'
                }
            }
        };
    }

    // Function to prepare traffic source data from filtered data
    function prepareTrafficSourceData() {
        if (!filteredData.length) return { series: [], options: {} };

        const channelData = filteredData.reduce((acc, curr) => {
            const channel = curr.Channel || 'Unknown';
            acc[channel] = (acc[channel] || 0) + Number(curr.Sales || 0);
            return acc;
        }, {});

        // Remove 'Unknown' channel if present
        if (channelData['Unknown']) {
            delete channelData['Unknown'];
        }

        const categories = Object.keys(channelData);
        const data = Object.values(channelData);

        return {
            series: [{ name: 'Sales', data }],
            options: {
                chart: {
                    type: 'bar',
                    height: 400,
                    toolbar: { show: false },
                    padding: { top: 0, bottom: -10, left: 0, right: 0 },
                    offsetY: -10
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        borderRadius: 4,
                        barHeight: '90%'
                    }
                },
                dataLabels: { enabled: false },
                xaxis: {
                    categories,
                    axisBorder: { show: true },
                    axisTicks: { show: true }
                },
                yaxis: {
                    labels: {
                        formatter: value => '$' + value.toLocaleString()
                    }
                },
                legend: { show: false },
                colors: [theme.palette.primary.main],
                grid: { padding: { top: 0, bottom: -10, left: 0, right: 0 } }
            }
        };
    }

    // Function to prepare leads by channel data from filtered data
    function prepareLeadsByChannelData() {
        if (!filteredData.length) return { series: [], options: {} };

        const channelData = filteredData.reduce((acc, curr) => {
            const channel = curr.Channel || 'Unknown';
            acc[channel] = (acc[channel] || 0) + Number(curr.Leads || 0);
            return acc;
        }, {});

        // Remove 'Unknown' channel if present
        if (channelData['Unknown']) {
            delete channelData['Unknown'];
        }

        const categories = Object.keys(channelData);
        const data = Object.values(channelData);

        return {
            series: [{ name: 'Leads', data }],
            options: {
                chart: {
                    type: 'bar',
                    height: 400,
                    toolbar: { show: false },
                    padding: { top: 0, bottom: -10, left: 0, right: 0 },
                    offsetY: -10
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        borderRadius: 4,
                        barHeight: '90%'
                    }
                },
                dataLabels: { enabled: false },
                xaxis: {
                    categories,
                    axisBorder: { show: true },
                    axisTicks: { show: true }
                },
                yaxis: {
                    labels: {
                        formatter: value => value.toLocaleString()
                    }
                },
                legend: { show: false },
                colors: ['#6f42c1'],
                grid: { padding: { top: 0, bottom: -10, left: 0, right: 0 } }
            }
        };
    }

    // Function to prepare daily summary data from filtered data
    function prepareDailySummaryData() {
        if (!filteredData.length) return [];

        const dailyData = filteredData.reduce((acc, curr) => {
            const date = new Date(curr.Date);
            if (isNaN(date.getTime())) return acc;
            
            const dateStr = date.toISOString().split('T')[0];
            if (!acc[dateStr]) {
                acc[dateStr] = {
                    date: dateStr,
                    sales: 0,
                    leads: 0,
                    downloads: 0,
                    phoneEnquiries: 0
                };
            }
            
            acc[dateStr].sales += Number(curr.Sales || 0);
            acc[dateStr].leads += Number(curr.Leads || 0);
            acc[dateStr].downloads += Number(curr.Downloads || 0);
            acc[dateStr].phoneEnquiries += Number(curr['Phone Enquiries'] || curr.Calls || 0);
            
            return acc;
        }, {});

        return Object.values(dailyData).sort((a, b) => b.date.localeCompare(a.date));
    }

    // Function to prepare downloads per channel data
    function prepareDownloadsPerChannelData() {
        if (!filteredData.length) return { series: [], options: {} };

        const channelData = filteredData.reduce((acc, curr) => {
            const channel = curr.Channel || 'Unknown';
            acc[channel] = (acc[channel] || 0) + Number(curr.Downloads || 0);
            return acc;
        }, {});

        // Remove 'Unknown' channel if present
        if (channelData['Unknown']) {
            delete channelData['Unknown'];
        }

        const categories = Object.keys(channelData);
        const data = Object.values(channelData);

        return {
            series: [{ name: 'Downloads', data }],
            options: {
                chart: {
                    type: 'bar',
                    height: 400,
                    toolbar: { show: false },
                    padding: { top: 0, bottom: -10, left: 0, right: 0 },
                    offsetY: -10
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        borderRadius: 4,
                        barHeight: '90%'
                    }
                },
                dataLabels: { enabled: false },
                xaxis: {
                    categories,
                    axisBorder: { show: true },
                    axisTicks: { show: true }
                },
                yaxis: {
                    labels: {
                        formatter: value => value.toLocaleString()
                    }
                },
                legend: { show: false },
                colors: [cardColors.downloads],
                grid: { padding: { top: 0, bottom: -10, left: 0, right: 0 } }
            }
        };
    }
    
    // Function to prepare phone calls per channel data
    function preparePhoneCallsPerChannelData() {
        if (!filteredData.length) return { series: [], options: {} };

        const channelData = filteredData.reduce((acc, curr) => {
            const channel = curr.Channel || 'Unknown';
            acc[channel] = (acc[channel] || 0) + Number(curr['Phone Enquiries'] || 0);
            return acc;
        }, {});

        // Remove 'Unknown' channel if present
        if (channelData['Unknown']) {
            delete channelData['Unknown'];
        }

        const categories = Object.keys(channelData);
        const data = Object.values(channelData);

        return {
            series: [{ name: 'Phone Calls', data }],
            options: {
                chart: {
                    type: 'bar',
                    height: 400,
                    toolbar: { show: false },
                    padding: { top: 0, bottom: -10, left: 0, right: 0 },
                    offsetY: -10
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        borderRadius: 4,
                        barHeight: '90%'
                    }
                },
                dataLabels: { enabled: false },
                xaxis: {
                    categories,
                    axisBorder: { show: true },
                    axisTicks: { show: true }
                },
                yaxis: {
                    labels: {
                        formatter: value => value.toLocaleString()
                    }
                },
                legend: { show: false },
                colors: [cardColors.calls],
                grid: { padding: { top: 0, bottom: -10, left: 0, right: 0 } }
            }
        };
    }

    useEffect(() => {
        if (filteredData.length && !filteredData.some(row => row.Country)) {
            console.warn('No valid Country data for WorldMap.');
        }
    }, [filteredData]);

    if (loading) {
        return <Typography>Loading dashboard data...</Typography>;
    }

    const handleRefresh = () => {
        setSelectedChannels([]);
        setSelectedCountries([]);
        setSelectedCities([]);
        setDateRange([dayjs().subtract(29, 'day'), dayjs()]);
    };

    return (
        <>
            {/* Sticky filter bar outside scrollable content */}
            <Grid container spacing={gridSpacing} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Grid item xs={12} md={8}>
                    <DimensionFilters
                        channels={channels}
                        countries={countries}
                        cities={filteredCities}
                        selectedChannel={selectedChannels}
                        selectedCountry={selectedCountries}
                        selectedCity={selectedCities}
                        onChannelChange={(e) => setSelectedChannels(e.target.value)}
                        onCountryChange={(e) => setSelectedCountries(e.target.value)}
                        onCityChange={(e) => setSelectedCities(e.target.value)}
                        data={data}
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
                    <CustomDateRangePicker
                        value={dateRange}
                        onChange={(newRange) => {
                            // Ensure we have proper Date objects
                            if (newRange && newRange.length === 2) {
                                // If newRange is already dayjs, keep as is
                                // If it's Date objects or something else, convert to dayjs
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
                        onClick={handleRefresh}
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
            {/* Main dashboard content below */}
            <Grid container spacing={gridSpacing}>
                {/* Scorecards */}
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={3}>
                            <TotalLineCard
                                bgColor={cardColors.sales}
                                chartData={prepareSparklineDataForDashboard('Sales')}
                                value={formatMetricValue(metrics.totalSales)}
                                title="Total Sales"
                                percentage={getAdditionalInfo('sales')}
                                hidePercentage={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TotalLineCard
                                bgColor={cardColors.leads}
                                chartData={prepareSparklineDataForDashboard('Leads')}
                                value={formatMetricValue(metrics.totalLeads)}
                                title="Total Leads"
                                percentage={getAdditionalInfo('leads')}
                                hidePercentage={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TotalLineCard
                                bgColor={cardColors.downloads}
                                chartData={prepareSparklineDataForDashboard('Downloads')}
                                value={formatMetricValue(metrics.totalDownloads)}
                                title="Total Downloads"
                                percentage={getAdditionalInfo('downloads')}
                                hidePercentage={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TotalLineCard
                                bgColor={cardColors.calls}
                                chartData={prepareSparklineDataForDashboard('Phone Enquiries')}
                                value={formatMetricValue(metrics.totalCalls)}
                                title="Total Calls"
                                percentage=""
                                hidePercentage={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Charts Row */}
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <Card sx={{ border: '2px solid black' }}>
                                <CardHeader
                                    title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block' }}>Trends</span>}
                                    sx={{ backgroundColor: 'black', textAlign: 'center' }}
                                />
                                <CardContent>
                                    <Chart
                                        options={trendsChartData.options}
                                        series={trendsChartData.series}
                                        type="line"
                                        height={350}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ border: '2px solid black' }}>
                                <CardHeader
                                    title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block' }}>Revenue Per Channel</span>}
                                    sx={{ backgroundColor: 'black', textAlign: 'center' }}
                                />
                                <CardContent>
                                    <Chart
                                        options={trafficSourceData.options}
                                        series={trafficSourceData.series}
                                        type="bar"
                                        height={350}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                
                {/* Daily Summary and Charts Row */}
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <Card sx={{ border: '2px solid black' }}>
                                <CardHeader
                                    title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block' }}>Daily Summary</span>}
                                    sx={{ backgroundColor: 'black', textAlign: 'center' }}
                                />
                                <CardContent>
                                    <DailySummaryTable data={dailySummaryData} />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container direction="column" spacing={gridSpacing}>
                                <Grid item>
                                    <Card sx={{ border: '2px solid black' }}>
                                        <CardHeader
                                            title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block' }}>Leads Per Channel</span>}
                                            sx={{ backgroundColor: 'black', textAlign: 'center' }}
                                        />
                                        <CardContent>
                                            <Chart
                                                options={leadsByChannelData.options}
                                                series={leadsByChannelData.series}
                                                type="bar"
                                                height={350}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card sx={{ border: '2px solid black' }}>
                                        <CardHeader
                                            title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block' }}>Downloads Per Channel</span>}
                                            sx={{ backgroundColor: 'black', textAlign: 'center' }}
                                        />
                                        <CardContent>
                                            <Chart
                                                options={prepareDownloadsPerChannelData().options}
                                                series={prepareDownloadsPerChannelData().series}
                                                type="bar"
                                                height={350}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card sx={{ border: '2px solid black' }}>
                                        <CardHeader
                                            title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block' }}>Phone Calls Per Channel</span>}
                                            sx={{ backgroundColor: 'black', textAlign: 'center' }}
                                        />
                                        <CardContent>
                                            <Chart
                                                options={preparePhoneCallsPerChannelData().options}
                                                series={preparePhoneCallsPerChannelData().series}
                                                type="bar"
                                                height={350}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard; 