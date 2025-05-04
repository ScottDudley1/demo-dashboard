import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography
} from '@mui/material';

const GoogleAnalyticsSourceMediumTable = ({ data = [] }) => {
  const sourceMediaData = useMemo(() => {
    if (!data || !data.length) return [];

    // Create a map of source/medium combinations
    const sourceMediaMap = {};

    data.forEach(row => {
      if (!row.Source || !row.Medium) return;
      
      const source = row.Source.trim();
      const medium = row.Medium.trim();
      const key = `${source}|${medium}`;
      
      if (!sourceMediaMap[key]) {
        sourceMediaMap[key] = {
          source,
          medium,
          sessions: 0,
          users: 0,
          pageviews: 0,
          bounceRate: 0,
          avgSessionDuration: 0,
          bounceRateCount: 0,
          durationCount: 0
        };
      }
      
      sourceMediaMap[key].sessions += Number(row.Sessions || 0);
      sourceMediaMap[key].users += Number(row.Users || 0);
      sourceMediaMap[key].pageviews += Number(row.Pageviews || 0);
      
      // For averages, we need to count and sum
      if (row.BounceRate) {
        sourceMediaMap[key].bounceRate += Number(row.BounceRate || 0);
        sourceMediaMap[key].bounceRateCount += 1;
      }
      
      if (row.AvgSessionDuration) {
        sourceMediaMap[key].avgSessionDuration += Number(row.AvgSessionDuration || 0);
        sourceMediaMap[key].durationCount += 1;
      }
    });
    
    // Convert map to array and calculate averages
    return Object.values(sourceMediaMap)
      .map(item => ({
        ...item,
        bounceRate: item.bounceRateCount ? (item.bounceRate / item.bounceRateCount) : 0,
        avgSessionDuration: item.durationCount ? (item.avgSessionDuration / item.durationCount) : 0
      }))
      .sort((a, b) => b.sessions - a.sessions); // Sort by sessions descending
  }, [data]);

  // Format time duration (seconds to min:sec)
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card sx={{ border: '2px solid black', borderRadius: 2, boxShadow: 'none', width: '100%' }}>
      <CardHeader
        title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 0.2 }}>Source/Medium Performance</span>}
        sx={{ backgroundColor: 'black', textAlign: 'center', p: 1.5 }}
      />
      <CardContent sx={{ p: 0 }}>
        <TableContainer component={Paper} sx={{ boxShadow: 'none', border: 'none' }}>
          <Table sx={{ minWidth: 650 }} aria-label="source medium table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><Typography fontWeight="bold">Source</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Medium</Typography></TableCell>
                <TableCell align="right"><Typography fontWeight="bold">Sessions</Typography></TableCell>
                <TableCell align="right"><Typography fontWeight="bold">Users</Typography></TableCell>
                <TableCell align="right"><Typography fontWeight="bold">Pageviews</Typography></TableCell>
                <TableCell align="right"><Typography fontWeight="bold">Pages/Session</Typography></TableCell>
                <TableCell align="right"><Typography fontWeight="bold">Bounce Rate</Typography></TableCell>
                <TableCell align="right"><Typography fontWeight="bold">Avg. Session Duration</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sourceMediaData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">No data available</TableCell>
                </TableRow>
              ) : (
                sourceMediaData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}
                  >
                    <TableCell component="th" scope="row">{row.source}</TableCell>
                    <TableCell>{row.medium}</TableCell>
                    <TableCell align="right">{row.sessions.toLocaleString()}</TableCell>
                    <TableCell align="right">{row.users.toLocaleString()}</TableCell>
                    <TableCell align="right">{row.pageviews.toLocaleString()}</TableCell>
                    <TableCell align="right">
                      {row.sessions > 0 ? (row.pageviews / row.sessions).toFixed(2) : "0.00"}
                    </TableCell>
                    <TableCell align="right">{row.bounceRate.toFixed(2)}%</TableCell>
                    <TableCell align="right">{formatDuration(row.avgSessionDuration)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

GoogleAnalyticsSourceMediumTable.propTypes = {
  data: PropTypes.array
};

export default GoogleAnalyticsSourceMediumTable; 