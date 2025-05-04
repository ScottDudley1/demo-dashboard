import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

// ==============================|| VALIDATION TEXTFIELDS ||============================== //

export default function ValidationTextFields() {
  const theme = useTheme();

  return (
    <form noValidate autoComplete="off">
      <Box
        sx={{
          '& .MuiTextField-root': {
            m: theme.spacing(1),
            width: 200
          }
        }}
      >
        <TextField error variant="standard" id="standard-error" label="Error" defaultValue="Hello World" />
        <TextField
          error
          variant="standard"
          color="secondary"
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />

        <TextField error id="filled-error" label="Error" defaultValue="Hello World" variant="filled" />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />

        <TextField error id="outlined-error" label="Error" defaultValue="Hello World" variant="outlined" />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </Box>
    </form>
  );
}
