import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

// ==============================|| LAYOUT TEXT FIELDS ||============================== //

export default function LayoutTextFields() {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <TextField
        id="standard-full-width"
        label="Label"
        variant="standard"
        sx={{ m: 1 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        label="None"
        variant="standard"
        id="margin-none"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
      />
      <TextField
        label="Dense"
        variant="standard"
        id="margin-dense"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        margin="dense"
      />
      <TextField
        label="Normal"
        variant="standard"
        id="margin-normal"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        margin="normal"
      />
      <TextField
        id="filled-full-width"
        label="Label"
        sx={{ m: 1 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        variant="filled"
      />
      <TextField
        label="None"
        id="filled-margin-none"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        variant="filled"
      />
      <TextField
        label="Dense"
        id="filled-margin-dense"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        margin="dense"
        variant="filled"
      />
      <TextField
        label="Normal"
        id="filled-margin-normal"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        margin="normal"
        variant="filled"
      />

      <TextField
        id="outlined-full-width"
        label="Label"
        sx={{ m: 1 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
      <TextField
        label="None"
        id="outlined-margin-none"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        variant="outlined"
      />
      <TextField
        label="Dense"
        id="outlined-margin-dense"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        margin="dense"
        variant="outlined"
      />
      <TextField
        label="Normal"
        id="outlined-margin-normal"
        defaultValue="Default Value"
        sx={{ ml: theme.spacing(1), mr: theme.spacing(1), width: '25ch' }}
        helperText="Some important text"
        margin="normal"
        variant="outlined"
      />
    </Box>
  );
}
