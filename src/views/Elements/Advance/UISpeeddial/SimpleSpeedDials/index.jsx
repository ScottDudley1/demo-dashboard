import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// assets
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import SaveIcon from '@mui/icons-material/SaveTwoTone';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import ShareIcon from '@mui/icons-material/ShareTwoTone';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' }
];

// ==============================|| SIMPLE SPEED DIAL ||============================== //

export default function SimpleSpeedDials() {
  const theme = useTheme();
  const [direction, setDirection] = React.useState('up');
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <FormControlLabel control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary" />} label="Hidden" />
      <FormLabel sx={{ margin: theme.spacing(1, 0) }} component="legend">
        Direction
      </FormLabel>
      <RadioGroup aria-label="direction" name="direction" value={direction} onChange={handleDirectionChange} row>
        <FormControlLabel value="up" control={<Radio />} label="Up" />
        <FormControlLabel value="right" control={<Radio />} label="Right" />
        <FormControlLabel value="down" control={<Radio />} label="Down" />
        <FormControlLabel value="left" control={<Radio />} label="Left" />
      </RadioGroup>
      <Box sx={{ position: 'relative', mt: theme.spacing(3), height: 350 }}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          sx={{
            position: 'absolute',
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
              bottom: theme.spacing(2),
              right: theme.spacing(1)
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
              top: theme.spacing(2),
              left: theme.spacing(1)
            }
          }}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
          ))}
        </SpeedDial>
      </Box>
    </Box>
  );
}
