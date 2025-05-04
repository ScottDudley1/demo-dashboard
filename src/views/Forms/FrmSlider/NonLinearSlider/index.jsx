import React from 'react';

// material-ui
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valueLabelFormat(value) {
  const [coefficient, exponent] = value
    .toExponential()
    .split('e')
    .map((item) => Number(item));
  return `${Math.round(coefficient)}e^${exponent}`;
}

// ==============================|| NON LINEAR SLIDER ||============================== //

export default function NonLinearSlider() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography id="non-linear-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        min={0}
        step={0.1}
        max={6}
        scale={(x) => x ** 10}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </>
  );
}
