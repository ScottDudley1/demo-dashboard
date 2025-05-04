import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// assets
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import SaveIcon from '@mui/icons-material/SaveTwoTone';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import ShareIcon from '@mui/icons-material/ShareTwoTone';
import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' }
];
// ==============================|| SPEED DIAL TOOLTIP OPEN ||============================== //

export default function SpeedDialTooltipOpen() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: 380, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: theme.spacing(2), right: theme.spacing(2) }}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} tooltipOpen onClick={handleClose} />
        ))}
      </SpeedDial>
    </Box>
  );
}
