// components/Scorecard.jsx
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Scorecard = ({ title, value, data, color = 'primary' }) => (
  <Card sx={{ p: 2, minWidth: 200 }}>
    <Typography variant="subtitle2" color="textSecondary">
      {title}
    </Typography>
    <Typography variant="h5" color={color}>
      {value}
    </Typography>
    <Box mt={1}>
      <Sparklines data={data} limit={10} width={100} height={20}>
        <SparklinesLine color={color} />
      </Sparklines>
    </Box>
  </Card>
);

export default Scorecard;
