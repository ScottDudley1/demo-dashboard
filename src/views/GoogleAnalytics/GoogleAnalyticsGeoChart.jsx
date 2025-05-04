import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, Box } from '@mui/material';
import { ResponsiveChoroplethCanvas } from '@nivo/geo';
import worldCountries from './world_countries.json';

// Sample color scale for the map
const COLOR_SCALE = [
  '#e6f2fd',
  '#c9e5fc', 
  '#a0d2fa',
  '#77c0f8',
  '#4eaef7', 
  '#2196f3',
  '#1976d2',
  '#1565c0',
  '#0d47a1',
  '#073079'
];

const GoogleAnalyticsGeoChart = ({ data = [] }) => {
  // Process data to find countries by users
  const getCountriesData = () => {
    if (!data || !data.length) {
      // Default sample data
      return [
        { id: "USA", value: 198904 },
        { id: "ZAF", value: 130701 },
        { id: "IND", value: 129399 },
        { id: "GBR", value: 117462 },
        { id: "AUS", value: 115427 },
        { id: "FRA", value: 114591 },
        { id: "DEU", value: 110238 },
        { id: "JPN", value: 102843 },
        { id: "CAN", value: 98753 },
        { id: "BRA", value: 90542 }
      ];
    }
    
    try {
      // Create country map
      const countryMap = {};
      
      // Map of country names to ISO codes
      const countryCodeMap = {
        'United States': 'USA',
        'South Africa': 'ZAF',
        'India': 'IND',
        'United Kingdom': 'GBR',
        'Australia': 'AUS',
        'France': 'FRA',
        'Germany': 'DEU',
        'Canada': 'CAN',
        'Japan': 'JPN',
        'Brazil': 'BRA',
        'China': 'CHN',
        'Mexico': 'MEX',
        'Spain': 'ESP',
        'Italy': 'ITA',
        'Russia': 'RUS',
        'Netherlands': 'NLD',
        'Sweden': 'SWE',
        'Switzerland': 'CHE',
        'Singapore': 'SGP'
      };
      
      data.forEach(row => {
        if (!row.Country) return;
        const countryName = row.Country.trim();
        const countryCode = countryCodeMap[countryName] || countryName;
        
        if (!countryMap[countryCode]) countryMap[countryCode] = 0;
        countryMap[countryCode] += Number(row.Users || 0);
      });
      
      // Convert to array format required by nivo
      return Object.entries(countryMap).map(([id, value]) => ({ id, value }));
    } catch (error) {
      console.error('Error processing geo data:', error);
      return [
        { id: "USA", value: 198904 },
        { id: "ZAF", value: 130701 },
        { id: "IND", value: 129399 },
        { id: "GBR", value: 117462 },
        { id: "AUS", value: 115427 },
        { id: "FRA", value: 114591 }
      ];
    }
  };
  
  const countriesData = getCountriesData();
  
  // Filter out Antarctica from the features
  const filteredFeatures = useMemo(() => {
    return worldCountries.features.filter(feature => 
      feature.properties.name !== "Antarctica"
    );
  }, []);
  
  // Find max value for the domain
  const maxValue = Math.max(...countriesData.map(d => d.value));
  
  return (
    <Card sx={{ border: '2px solid black', borderRadius: 2, boxShadow: 'none', height: 550 }}>
      <CardHeader
        title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 0.2 }}>Users by Country</span>}
        sx={{ backgroundColor: 'black', textAlign: 'center', p: 1.5 }}
      />
      <CardContent sx={{ p: 1, height: 'calc(100% - 56px)' }}>
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
          <ResponsiveChoroplethCanvas
            data={countriesData}
            features={filteredFeatures}
            margin={{ top: 50, right: 10, bottom: 45, left: 10 }}
            colors={COLOR_SCALE}
            domain={[0, maxValue]}
            unknownColor="#eaeaea"
            label="properties.name"
            valueFormat=".0f"
            projectionScale={100}
            projectionTranslation={[0.5, 0.6]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={true}
            graticuleLineColor="rgba(200, 200, 200, 0.2)"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -60,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 12,
                itemDirection: 'left-to-right',
                itemTextColor: 'rgba(0, 0, 0, 0.85)',
                itemOpacity: 0.85,
                symbolSize: 10,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

GoogleAnalyticsGeoChart.propTypes = {
  data: PropTypes.array
};

export default GoogleAnalyticsGeoChart; 