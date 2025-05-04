import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, Divider, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute',
    width: 300,
    bgcolor: 'background.paper',
    padding: '24px'
  };
}

// ==============================|| SIMPLE MODAL ||============================== //

export default function SimpleModal() {
  const theme = useTheme();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box sx={modalStyle}>
      <Typography variant="subtitle1">Text in a modal</Typography>
      <Typography variant="subtitle2">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
      <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} />
      <SimpleModal />
    </Box>
  );

  return (
    <>
      <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </>
  );
}
