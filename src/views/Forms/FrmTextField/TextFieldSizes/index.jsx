import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

// ==============================|| TEXT FIELD SIZE ||============================== //

export default function TextFieldSizes() {
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
        <TextField label="Size" variant="standard" id="standard-size-small" defaultValue="Small" size="small" />
        <TextField label="Size" variant="standard" id="standard-size-normal" defaultValue="Normal" />

        <TextField label="Size" id="filled-size-small" defaultValue="Small" variant="filled" size="small" />
        <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" />

        <TextField label="Size" id="outlined-size-small" defaultValue="Small" variant="outlined" size="small" />
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" variant="outlined" />
      </Box>
    </form>
  );
}
