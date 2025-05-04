import React from 'react';

// material-ui
import { IconButton, Button, Box } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

// assets
import CloseIcon from '@mui/icons-material/Close';

// ==============================|| NOTIFICATION SNACKBAR ||============================== //

export default function NotificationsSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box className="text-center">
      <Button className="m-2" size="large" color="primary" variant="contained" onClick={handleClick}>
        Top Centered Snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <>
            <Button color="primary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </Box>
  );
}
