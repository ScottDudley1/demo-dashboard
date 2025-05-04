import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

// ==============================|| FROM PROPS TEXTFIELD ||============================== //

export default function FormPropsTextFields() {
  const theme = useTheme();
  return (
    <form noValidate autoComplete="off">
      <Box
        sx={{
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch'
          }
        }}
      >
        <TextField required id="standard-required" variant="standard" label="Required" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" variant="standard" label="Disabled" defaultValue="Hello World" />
        <TextField id="standard-password-input" variant="standard" label="Password" type="password" autoComplete="current-password" />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          variant="standard"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="standard-number"
          variant="standard"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField id="standard-search" variant="standard" label="Search field" type="search" />
        <TextField
          id="standard-helperText"
          variant="standard"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Box>
      <Box
        sx={{
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch'
          }
        }}
      >
        <TextField required id="filled-required" label="Required" defaultValue="Hello World" variant="filled" />
        <TextField disabled id="filled-disabled" label="Disabled" defaultValue="Hello World" variant="filled" />
        <TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled" />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
        <TextField id="filled-search" label="Search field" type="search" variant="filled" />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </Box>
      <Box
        sx={{
          '& .MuiTextField-root': {
            m: theme.spacing(1),
            width: '25ch'
          }
        }}
      >
        <TextField required id="outlined-required" label="Required" defaultValue="Hello World" variant="outlined" />
        <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" variant="outlined" />
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
        />
      </Box>
    </form>
  );
}
