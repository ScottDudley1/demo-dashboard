import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const WorldMap = ({ data }) => {
  const theme = useTheme();
  const [salesByCountry, setSalesByCountry] = useState({});
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      // Aggregate sales by country
      const countryAggregates = data.reduce((acc, row) => {
        const country = row.Country || 'Unknown';
        acc[country] = (acc[country] || 0) + Number(row.Sales || 0);
        return acc;
      }, {});

      setSalesByCountry(countryAggregates);
      setMaxValue(Math.max(...Object.values(countryAggregates)));
    }
  }, [data]);

  const colorScale = scaleQuantile()
    .domain([0, maxValue])
    .range([
      theme.palette.primary[200],
      theme.palette.primary[300],
      theme.palette.primary[400],
      theme.palette.primary[500],
      theme.palette.primary[600],
      theme.palette.primary[700]
    ]);

  return (
    <Card>
      <CardHeader title="Sales by Geography" />
      <CardContent>
        <ComposableMap
          projectionConfig={{
            scale: 150,
            rotation: [-11, 0, 0]
          }}
          style={{ width: '100%', height: '300px' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={theme.palette.primary[200]}
                  stroke={theme.palette.background.paper}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: theme.palette.primary.light },
                    pressed: { outline: 'none' }
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        {/* Fallback static map image if the above map does not render */}
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" style={{ width: '100%', height: '300px', objectFit: 'contain' }} /> */}
      </CardContent>
    </Card>
  );
};

WorldMap.propTypes = {
  data: PropTypes.array
};

export default WorldMap; 