// src/component/DimensionFilters.jsx
import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Chip,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Button,
  Stack
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RefreshIcon from '@mui/icons-material/Refresh';

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: '#ffffff'
    }
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};

const DimensionFilters = ({ 
  channels = [], 
  countries = [], 
  cities = [], 
  selectedChannel = [],
  selectedCountry = [],
  selectedCity = [],
  onChannelChange,
  onCountryChange,
  onCityChange,
  onRefresh // new prop for refresh handler
}) => {
  const theme = useTheme();

  const commonSelectStyles = {
    height: '36.5px',
    backgroundColor: 'transparent',
    color: '#000000',
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#000000',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000000',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000000',
    },
    '.MuiSelect-select': {
      color: '#000000',
      padding: '7px 14px',
    },
    '.MuiChip-root': {
      height: '24px',
      borderRadius: '12px',
      backgroundColor: '#000000',
      color: '#ffffff',
      '& .MuiChip-label': {
        color: '#ffffff',
      }
    },
    '& .MuiSvgIcon-root': {
      color: '#000000'
    }
  };

  const handleSelectAll = (items, currentSelected, onChange, event) => {
    event.preventDefault();
    event.stopPropagation();
    const newValue = currentSelected.length === items.length ? [] : [...items];
    onChange({ target: { value: newValue } });
  };

  const renderSelect = (label, items, selected, onChange) => (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <Select
        multiple
        value={selected}
        onChange={onChange}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span style={{ color: '#000000' }}>{label}</span>;
          }
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip 
                  key={value} 
                  label={value} 
                  size="small"
                  sx={{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    '& .MuiChip-label': {
                      color: '#ffffff',
                    }
                  }}
                />
              ))}
            </Box>
          );
        }}
        input={<OutlinedInput sx={commonSelectStyles} />}
        MenuProps={{
          ...MenuProps,
          PaperProps: {
            ...MenuProps.PaperProps,
            style: {
              ...MenuProps.PaperProps.style,
              backgroundColor: '#ffffff'
            }
          }
        }}
      >
        <MenuItem 
          sx={{ 
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            py: 1
          }}
        >
          <Button 
            fullWidth
            size="small"
            sx={{
              color: '#000000',
              borderColor: '#000000',
              '&:hover': {
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
            variant="outlined"
            onClick={(e) => handleSelectAll(items, selected, onChange, e)}
          >
            {selected.length === items.length ? 'Deselect All' : 'Select All'}
          </Button>
        </MenuItem>
        {items.map((item) => (
          <MenuItem 
            key={item} 
            value={item}
            sx={{
              backgroundColor: selected.includes(item) ? '#000000 !important' : 'inherit',
              color: selected.includes(item) ? '#ffffff' : 'inherit',
              '&:hover': {
                backgroundColor: selected.includes(item) ? '#333333 !important' : 'rgba(0, 0, 0, 0.04)'
              },
              '& .MuiCheckbox-root': {
                color: selected.includes(item) ? '#ffffff' : 'inherit'
              },
              '& .MuiTypography-root': {
                color: selected.includes(item) ? '#ffffff' : 'inherit'
              }
            }}
          >
            <Checkbox 
              checked={selected.includes(item)}
              sx={{
                color: selected.includes(item) ? '#ffffff' : 'inherit',
                '&.Mui-checked': {
                  color: selected.includes(item) ? '#ffffff' : 'inherit'
                }
              }}
            />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ display: 'flex', gap: 2 }}>
        {renderSelect('Channel', channels, selectedChannel, onChannelChange)}
        {renderSelect('Country', countries, selectedCountry, onCountryChange)}
        {renderSelect('City', cities, selectedCity, onCityChange)}
      </Box>
    </Stack>
  );
};

export default DimensionFilters;