import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// assets
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import SaveIcon from '@mui/icons-material/SaveTwoTone';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import ShareIcon from '@mui/icons-material/ShareTwoTone';
import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' }
];

// ==============================|| OPEN ICON SPEED DIAL ||============================== //

export default function OpenIconSpeedDial() {
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
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: theme.spacing(2), right: theme.spacing(2) }}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
        ))}
      </SpeedDial>
    </Box>
  );
}
