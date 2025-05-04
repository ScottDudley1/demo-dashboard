import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';

// ==============================|| SIMPLE ZOOM ||============================== //

export default function SimpleZoom() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
      <Box sx={{ display: 'flex' }}>
        <Zoom in={checked}>
          <Paper sx={{ m: theme.spacing(1) }}>
            <svg style={{ width: 100, height: 100 }}>
              <polygon
                points="0,100 50,00, 100,100"
                style={{ fill: theme.palette.common.white, stroke: theme.palette.divider, strokeWidth: 1 }}
              />
            </svg>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} sx={{ m: theme.spacing(1) }}>
            <svg style={{ width: 100, height: 100 }}>
              <polygon
                points="0,100 50,00, 100,100"
                style={{ fill: theme.palette.common.white, stroke: theme.palette.divider, strokeWidth: 1 }}
              />
            </svg>
          </Paper>
        </Zoom>
      </Box>
    </Box>
  );
}
