import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

// custom style
const GreenRadio = styled((props) => <Radio color="default" {...props} />)(() => ({
  color: green[400],
  '&.Mui-checked': {
    color: green[600]
  }
}));

// ==============================|| RADIO BUTTON ||============================== //

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        color="primary"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
      <Radio
        checked={selectedValue === 'd'}
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
      />
      <Radio
        checked={selectedValue === 'e'}
        onChange={handleChange}
        value="e"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
        size="small"
      />
    </>
  );
}
