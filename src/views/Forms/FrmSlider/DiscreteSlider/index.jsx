import React from 'react';

// material-ui
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

// ==============================|| DISCREATE SLIDER ||============================== //

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        sx={{ width: '90%' }}
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Typography id="discrete-slider2" gutterBottom>
        Disabled
      </Typography>
      <Slider
        sx={{ width: '90%' }}
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
        disabled
      />
    </Box>
  );
}
