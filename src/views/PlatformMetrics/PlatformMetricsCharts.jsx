import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';
import Box from '@mui/material/Box';

const PlatformMetricsCharts = ({ chartData, barData }) => (
  <Card sx={{ mt: 3, mb: 3, border: '2px solid black', borderRadius: 3 }}>
    <CardHeader
      title={<span style={{ color: 'white', textAlign: 'center', width: '100%', display: 'block', fontWeight: 700 }}>Trends & Spend by Channel</span>}
      sx={{ backgroundColor: 'black', textAlign: 'center', borderTopLeftRadius: 12, borderTopRightRadius: 12, p: 2 }}
    />
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', width: '100%' }}>
      {/* Line Chart */}
      <Card sx={{ flex: 1, minWidth: 400, border: 'none', borderRadius: 0, boxShadow: 'none' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            Trends Over Time
          </Typography>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={chartData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Spend" stroke="#1976d2" />
              <Line type="monotone" dataKey="Impressions" stroke="#43a047" />
              <Line type="monotone" dataKey="Clicks" stroke="#ffa000" />
              <Line type="monotone" dataKey="Conversions" stroke="#d32f2f" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      {/* Bar Chart */}
      <Card sx={{ flex: 1, minWidth: 400, border: 'none', borderRadius: 0, boxShadow: 'none' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            Spend by Channel
          </Typography>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <XAxis dataKey="channel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Spend" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  </Card>
);

export default PlatformMetricsCharts; 