import React from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// assets
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustifyTwoTone';

// ==============================|| TOGGLE BUTTON SIZES ||============================== //

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
          <ToggleButton value="left" aria-label="left">
            <FormatAlignLeftIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center">
            <FormatAlignCenterIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right">
            <FormatAlignRightIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justify">
            <FormatAlignJustifyIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleChange}>
          <ToggleButton value="left" aria-label="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justify">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <ToggleButtonGroup size="large" value={alignment} exclusive onChange={handleChange}>
          <ToggleButton value="left" aria-label="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justify">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
