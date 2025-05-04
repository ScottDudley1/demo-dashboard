import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, Divider, Box } from '@mui/material';
import Modal from '@mui/material/Modal';

// ==============================|| SERVER MODAL ||============================== //

export default function ServerModal() {
  const theme = useTheme();
  const rootRef = React.useRef(null);

  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (MsHighContrast: none)': {
          display: 'none'
        }
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{ display: 'flex', padding: theme.spacing(1), alignItems: 'center', justifyContent: 'center' }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            width: 350,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            p: theme.spacing(2, 4, 3)
          }}
        >
          <Typography variant="subtitle1">Server Side Modal</Typography>
          <Divider sx={{ mt: theme.spacing(1), mb: theme.spacing(1) }} />
          <Typography variant="subtitle2">If you disable JavaScript, you will still see me.</Typography>
        </Box>
      </Modal>
    </Box>
  );
}
