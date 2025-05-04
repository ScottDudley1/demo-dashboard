import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 37,
    label: '37°C'
  },
  {
    value: 100,
    label: '100°C'
  }
];

function valuetext(value) {
  return `${value}°C`;
}

// ==============================|| TRACK INVERT SLIDER ||============================== //

export default function TrackInvertedSlider() {
  const theme = useTheme();

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="track-inverted-slider" gutterBottom>
        Inverted track
      </Typography>
      <Slider track="inverted" aria-labelledby="track-inverted-slider" getAriaValueText={valuetext} defaultValue={30} marks={marks} />
      <Box sx={{ height: theme.spacing(3) }} />
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[20, 37]}
        marks={marks}
      />
    </Box>
  );
}
