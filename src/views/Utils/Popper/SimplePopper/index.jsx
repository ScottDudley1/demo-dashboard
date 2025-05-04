import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';

// ==============================|| SIMPLE POPER ||============================== //

export default function SimplePopper() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Button variant="contained" color="primary" aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: '1px solid', p: theme.spacing(1), backgroundColor: theme.palette.background.paper }}>
          The content of the Popper.
        </Box>
      </Popper>
    </>
  );
}
