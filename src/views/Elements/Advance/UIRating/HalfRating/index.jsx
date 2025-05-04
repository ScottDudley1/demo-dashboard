import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';

// ==============================|| HALF RATING ||============================== //

export default function HalfRating() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} sx={{ mt: theme.spacing(1) }} precision={0.5} readOnly />
    </Box>
  );
}
