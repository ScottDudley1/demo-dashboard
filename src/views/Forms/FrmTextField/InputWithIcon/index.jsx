import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

// assets
import AccountCircle from '@mui/icons-material/AccountCircle';

// ==============================|| INPUT WITH ICON ||============================== //

export default function InputWithIcon() {
  const theme = useTheme();

  return (
    <Box>
      <FormControl sx={{ m: theme.spacing(1) }}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        sx={{ m: theme.spacing(1) }}
        id="input-with-icon-textfield"
        variant="standard"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
      <Box sx={{ m: theme.spacing(1) }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField variant="standard" id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
