import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const colorMap = {
  Spend: '#43a047',
  Impressions: '#43a047',
  Clicks: '#43a047',
  Conversions: '#43a047',
  Reach: '#43a047',
  CPC: '#43a047',
  CPM: '#43a047',
  CostPerConversion: '#43a047',
  CTR: '#43a047',
  ConversionRate: '#43a047'
};

const PlatformMetricScorecard = ({ label, value, data, colorKey = 'Spend', large, bordered, sx = {} }) => {
  // Defensive: filter out all non-numbers, null, undefined, NaN, and empty slots
  let safeData = Array.isArray(data)
    ? data
        .map((n) => Number(n))
        .filter((n) => typeof n === 'number' && !isNaN(n))
    : [];

  if (safeData.length === 0) {
    safeData = [0];
  }

  return (
    <Card
      sx={{
        minWidth: large ? 260 : 220,
        minHeight: large ? 160 : 120,
        borderRadius: 3,
        p: large ? 3 : 2,
        background: colorMap['Spend'],
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: bordered ? '2px solid #000' : undefined,
        ...sx
      }}
    >
      <Typography variant={large ? 'h4' : 'h5'} sx={{ fontWeight: 700, fontSize: large ? 36 : 24 }}>
        {value}
      </Typography>
      <Typography variant={large ? 'h6' : 'subtitle1'} sx={{ opacity: 0.9, fontSize: large ? 20 : 16 }}>
        {label}
      </Typography>
      <Box mt={2} width={large ? 120 : 100}>
        <Sparklines data={safeData} width={large ? 120 : 100} height={large ? 32 : 24}>
          <SparklinesLine color="#fff" style={{ strokeWidth: 2, fill: 'none' }} />
        </Sparklines>
      </Box>
    </Card>
  );
};

export default PlatformMetricScorecard; 