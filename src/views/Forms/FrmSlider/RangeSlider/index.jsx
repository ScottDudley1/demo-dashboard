import React from 'react';

// material-ui
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

// ==============================|| RANGE SLIDER ||============================== //

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider" getAriaValueText={valuetext} />
    </Box>
  );
}
