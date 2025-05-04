// src/views/Dashboard/Default/DimensionFilters.jsx
import React, { useMemo } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Chip,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
      width: 250
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
  channels, 
  countries, 
  cities, 
  selectedChannel,
  selectedCountry,
  selectedCity,
  onChannelChange,
  onCountryChange,
  onCityChange,
  rawData
}) => {
  const theme = useTheme();

  const availableCities = useMemo(() => {
    if (selectedCountry.length === 0) return cities;
    return [...new Set(rawData
      .filter(item => selectedCountry.includes(item.Country))
      .map(item => item.City))]
      .sort();
  }, [selectedCountry, rawData, cities]);

  const availableCountries = useMemo(() => {
    if (selectedCity.length === 0) return countries;
    return [...new Set(rawData
      .filter(item => selectedCity.includes(item.City))
      .map(item => item.Country))]
      .sort();
  }, [selectedCity, rawData, countries]);

  const commonSelectStyles = {
    height: '36.5px',
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
      backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#e0e0e0',
      color: '#000000',
    }
  };

  const handleSelectAll = (type, items, currentSelected, onChange, event) => {
    if (event) {
      event.stopPropagation();
    }
    const newValue = currentSelected.length === items.length ? [] : [...items];
    onChange({ target: { value: newValue } });
  };

  const renderSelect = (type, items, selected, onChange, label, availableItems = null) => (
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
                    color: '#ffffff'
                  }}
                />
              ))}
            </Box>
          );
        }}
        input={<OutlinedInput sx={commonSelectStyles} />}
        MenuProps={MenuProps}
        sx={{
          '& .MuiSelect-select:empty': {
            color: '#000000',
            opacity: 1
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
            onClick={(e) => handleSelectAll(type, items, selected, onChange, e)}
          >
            {selected.length === items.length ? 'Deselect All' : 'Select All'}
          </Button>
        </MenuItem>
        {items.map((item) => (
          <MenuItem 
            key={item} 
            value={item}
            disabled={availableItems && !availableItems.includes(item)}
            sx={{
              py: 0.5,
              backgroundColor: selected.includes(item) ? '#000000 !important' : 'inherit',
              color: selected.includes(item) ? '#ffffff' : '#000000',
              '&:hover': {
                backgroundColor: selected.includes(item) ? '#333333 !important' : 'rgba(0, 0, 0, 0.04)'
              },
              '& .MuiCheckbox-root': {
                color: selected.includes(item) ? '#ffffff' : '#000000',
                padding: '4px'
              }
            }}
          >
            <Checkbox 
              checked={selected.indexOf(item) > -1}
              size="small"
            />
            <ListItemText 
              primary={item}
              primaryTypographyProps={{ fontSize: '0.875rem' }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {renderSelect('channel', channels, selectedChannel, onChannelChange, 'Channel')}
      {renderSelect('country', countries, selectedCountry, onCountryChange, 'Country', availableCountries)}
      {renderSelect('city', cities, selectedCity, onCityChange, 'City', availableCities)}
    </Box>
  );
};

export default DimensionFilters;