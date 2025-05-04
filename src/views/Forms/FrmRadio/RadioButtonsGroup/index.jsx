import React from 'react';

// material-ui
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

// ==============================|| RADIO BUTTON GROUP ||============================== //

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <Grid container spacing={1}>
          <Grid item>
            <FormControlLabel value="female" control={<Radio color="default" />} label="Female" />
          </Grid>
          <Grid item>
            <FormControlLabel value="male" control={<Radio color="default" />} label="Male" />
          </Grid>
          <Grid item>
            <FormControlLabel value="other" control={<Radio color="default" />} label="Other" />
          </Grid>
          <Grid item>
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
