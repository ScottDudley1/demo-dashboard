import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// assets
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustifyTwoTone';
import LaptopIcon from '@mui/icons-material/LaptopTwoTone';
import TvIcon from '@mui/icons-material/TvTwoTone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroidTwoTone';

// ==============================|| TOGGLE BUTTON NOT EMPTY ||============================== //

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['phone']);

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ m: theme.spacing(2, 0) }}>
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ m: theme.spacing(2, 0) }}>
          <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="device">
            <ToggleButton value="laptop" aria-label="laptop">
              <LaptopIcon />
            </ToggleButton>
            <ToggleButton value="tv" aria-label="tv">
              <TvIcon />
            </ToggleButton>
            <ToggleButton value="phone" aria-label="phone">
              <PhoneAndroidIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>
    </Grid>
  );
}
