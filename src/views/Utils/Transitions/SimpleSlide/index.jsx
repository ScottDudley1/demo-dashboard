import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

// ==============================|| SIMPLE SLIDE ||============================== //

export default function SimpleSlide() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <Box sx={{ width: 100 + theme.spacing(2) }}>
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} sx={{ width: 100, zIndex: 1, position: 'relative', m: theme.spacing(1) }}>
            <svg style={{ width: 100, height: 100 }}>
              <polygon
                points="0,100 50,00, 100,100"
                style={{ fill: theme.palette.common.white, stroke: theme.palette.divider, strokeWidth: 1 }}
              />
            </svg>
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
}
