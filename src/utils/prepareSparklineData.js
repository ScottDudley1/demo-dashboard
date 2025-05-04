/**
 * Prepares sparkline data for TotalLineCard component based on filtered data
 * @param {Array} filteredData - Array of filtered data rows
 * @param {String} key - Metric key to extract
 * @param {Array} dateRange - Array with [startDate, endDate] as dayjs objects
 * @param {Object} customOptions - Additional chart options
 * @returns {Object} Chart data object for TotalLineCard
 */
export const prepareSparklineData = (filteredData, key, dateRange, customOptions = {}) => {
  if (!filteredData || !filteredData.length) {
    return { 
      series: [{ name: key, data: [0] }],
      options: {
        chart: { sparkline: { enabled: true } },
        fill: { opacity: 0.4 },
        stroke: { curve: 'smooth', width: 2 },
        colors: ['#fff']
      }
    };
  }
    
  // Create a map of all dates in the range
  const dateMap = {};
    
  // If we have a date range, create entries for each day in the range
  if (dateRange && dateRange[0] && dateRange[1]) {
    const start = dateRange[0].toDate();
    const end = dateRange[1].toDate();
      
    // Create entries for every day in the range (even if no data)
    for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
      const dateStr = day.toISOString().split('T')[0];
      dateMap[dateStr] = 0;
    }
  }
    
  // Add data from filteredData
  filteredData.forEach(row => {
    if (!row.Date) return;
    try {
      const dateStr = new Date(row.Date).toISOString().split('T')[0];
      if (!dateMap[dateStr]) dateMap[dateStr] = 0;
      
      // Handle calculated metrics
      if (key === 'CPC' && row.Clicks && row.Spend) {
        const clicks = parseFloat(row.Clicks);
        const spend = parseFloat(row.Spend);
        if (clicks > 0) dateMap[dateStr] += spend / clicks;
      } else if (key === 'CPM' && row.Impressions && row.Spend) {
        const impressions = parseFloat(row.Impressions);
        const spend = parseFloat(row.Spend);
        if (impressions > 0) dateMap[dateStr] += (spend / impressions) * 1000;
      } else if (key === 'CTR' && row.Clicks && row.Impressions) {
        const clicks = parseFloat(row.Clicks);
        const impressions = parseFloat(row.Impressions);
        if (impressions > 0) dateMap[dateStr] += (clicks / impressions) * 100;
      } else if (key === 'ConversionRate' && row.Conversions && row.Clicks) {
        const conversions = parseFloat(row.Conversions);
        const clicks = parseFloat(row.Clicks);
        if (clicks > 0) dateMap[dateStr] += (conversions / clicks) * 100;
      } else if (key === 'CostPerConversion' && row.Conversions && row.Spend) {
        const conversions = parseFloat(row.Conversions);
        const spend = parseFloat(row.Spend);
        if (conversions > 0) dateMap[dateStr] += spend / conversions;
      } else if (key === 'AvgSessionDuration' && row.AvgSessionDuration) {
        // Simply add the average for this row - will be averaged later
        dateMap[dateStr] += parseFloat(row.AvgSessionDuration) || 0;
      } else {
        // Standard metrics just add up
        dateMap[dateStr] += parseFloat(row[key]) || 0;
      }
    } catch (e) {
      console.error("Error processing date", e, row.Date);
    }
  });
    
  // Sort dates and convert to array
  const sortedDates = Object.keys(dateMap).sort();
  let values = sortedDates.map(date => dateMap[date]);
    
  // Ensure we have data
  if (!values.length) values = [0];
    
  // Calculate min and max for better scaling
  const max = Math.max(...values.filter(v => !isNaN(v) && isFinite(v)));
  const min = Math.min(...values.filter(v => !isNaN(v) && isFinite(v)));
    
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
      colors: ['#fff'], // Use white for line color
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
      },
      ...customOptions
    },
    series: [
      {
        name: key,
        data: values
      }
    ]
  };
}; 