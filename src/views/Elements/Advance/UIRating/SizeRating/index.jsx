import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';

// ==============================|| SIZE RATING ||============================== //

export default function SizeRating() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" sx={{ my: theme.spacing(1) }} defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Box>
  );
}
