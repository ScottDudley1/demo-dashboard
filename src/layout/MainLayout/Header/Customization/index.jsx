import React, { useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Button, Tooltip, TextField, MenuItem, InputAdornment } from '@mui/material';

// third party
import { useSelector, useDispatch } from 'react-redux';

// project import
import * as actionTypes from 'store/actions';

// assets
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import TranslateIcon from '@mui/icons-material/Translate';

const currencies = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'fr',
    label: 'Français'
  },
  {
    value: 'ro',
    label: 'Română'
  },
  {
    value: 'zh',
    label: '中文'
  }
];

// ==============================|| CUSTOMIZATION ||============================== //

const Customization = () => {
  const customization = useSelector((state) => state.customization);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(customization.navType === 'light');

  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [currency, setCurrency] = React.useState(customization.locale);
  const handleChange = (event) => {
    setCurrency(event.target.value);
    dispatch({ type: actionTypes.THEME_LOCALE, locale: event.target.value });
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  if (customization.rtlLayout) {
    document.querySelector('body').setAttribute('dir', 'rtl');
  }

  useEffect(() => {
    dispatch({ type: actionTypes.MENU_TYPE, navType: open ? 'light' : 'dark' });
  }, [dispatch, open]);

  useEffect(() => {
    setCurrency(customization.locale);
  }, [customization]);

  return (
    <>
      <Box sx={{ width: 80, ml: matchDownSm ? 1 : 3, mr: matchDownSm ? 1 : 3 }}>
        <TextField
          id="outlined-select-currency"
          select
          variant="standard"
          value={currency}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <InputAdornment position="start" sx={{ mr: 0.5, color: '#fff !important', fontSize: '1.4rem' }}>
                  <TranslateIcon color="inherit" />
                </InputAdornment>
              </Box>
            ),
            disableUnderline: true
          }}
          sx={{
            '& .MuiSelect-select': {
              mt: 0.5,
              fontSize: { sm: '1rem', xs: '0.875rem' },
              color: '#fff !important'
            },
            '& .MuiSvgIcon-root': {
              color: '#fff !important'
            }
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Tooltip title={open ? 'Dark Layout' : 'Light Layout'}>
        <Button
          sx={{
            minWidth: { sm: 50, xs: 35 }
          }}
          onClick={handleToggle}
          color="inherit"
        >
          {!open && <Brightness6Icon sx={{ fontSize: '1.5rem' }} />}
          {open && <Brightness6OutlinedIcon sx={{ fontSize: '1.5rem' }} />}
        </Button>
      </Tooltip>
    </>
  );
};

export default Customization;
