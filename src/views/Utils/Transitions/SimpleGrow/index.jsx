import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';

// ==============================|| SIMPLE GROW ||============================== //

export default function SimpleGrow() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>
          <Paper elevation={4} sx={{ m: theme.spacing(1) }}>
            <svg style={{ width: 100, height: 100 }}>
              <polygon
                points="0,100 50,00, 100,100"
                style={{ fill: theme.palette.common.white, stroke: theme.palette.divider, strokeWidth: 1 }}
              />
            </svg>
          </Paper>
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={4} sx={{ m: theme.spacing(1) }}>
            <svg style={{ width: 100, height: 100 }}>
              <polygon
                points="0,100 50,00, 100,100"
                style={{ fill: theme.palette.common.white, stroke: theme.palette.divider, strokeWidth: 1 }}
              />
            </svg>
          </Paper>
        </Grow>
      </Box>
    </Box>
  );
}
