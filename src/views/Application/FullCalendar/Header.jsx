import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, SvgIcon, Typography } from '@mui/material';

// assets
import PlusCircleIcon from '@mui/icons-material/AddCircle';

// ==============================|| HEADER ||============================== //

const Header = ({ onAddClick, ...rest }) => {
  const theme = useTheme();
  return (
    <Grid container justifyContent="space-between" spacing={3} {...rest}>
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          Your Event
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          onClick={onAddClick}
          sx={{
            mb: theme.spacing(1),
            '& + &': {
              ml: theme.spacing(1)
            }
          }}
          startIcon={
            <SvgIcon fontSize="small">
              <PlusCircleIcon />
            </SvgIcon>
          }
        >
          New Event
        </Button>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onAddClick: PropTypes.func
};

export default Header;
