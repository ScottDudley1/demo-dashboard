import React from 'react';

// material-ui
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

// ==============================|| FORM CONTROLMLABEL PLACEMENT ||============================== //

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel value="top" control={<Radio color="primary" />} label="Top" labelPlacement="top" />
        <FormControlLabel value="start" control={<Radio color="primary" />} label="Start" labelPlacement="start" />
        <FormControlLabel value="bottom" control={<Radio color="primary" />} label="Bottom" labelPlacement="bottom" />
        <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />
      </RadioGroup>
    </FormControl>
  );
}
