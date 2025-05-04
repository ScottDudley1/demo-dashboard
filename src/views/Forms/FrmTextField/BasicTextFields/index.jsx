import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// ==============================|| BASIC TEXTFIELD ||============================== //

export default function BasicTextFields() {
  const theme = useTheme();

  return (
    <form noValidate autoComplete="off">
      <TextField sx={{ m: theme.spacing(1), width: '25ch' }} variant="standard" id="standard-basic" label="Standard" />
      <TextField sx={{ m: theme.spacing(1), width: '25ch' }} id="filled-basic" label="Filled" variant="filled" />
      <TextField sx={{ m: theme.spacing(1), width: '25ch' }} id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
