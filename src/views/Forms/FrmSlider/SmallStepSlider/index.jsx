import React from 'react';

// material-ui
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

// ==============================|| SMALL STEP SLIDER ||============================== //

function valuetext(value) {
  return `${value}°C`;
}

export default function SmallStepSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Small steps
      </Typography>
      <Slider
        sx={{ width: '90%' }}
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        aria-label="Small step"
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
