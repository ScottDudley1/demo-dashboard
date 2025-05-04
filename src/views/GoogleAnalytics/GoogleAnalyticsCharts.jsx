import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';

const GoogleAnalyticsCharts = ({ chartData, barData }) => (
  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
    {/* Line Chart */}
    <Card sx={{ flex: 1, minWidth: 400, border: '2px solid #000', borderRadius: 3 }}>
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
    <Card sx={{ flex: 1, minWidth: 400, border: '2px solid #000', borderRadius: 3 }}>
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
  </div>
);

export default GoogleAnalyticsCharts; 