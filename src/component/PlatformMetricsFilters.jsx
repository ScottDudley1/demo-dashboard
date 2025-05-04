import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  Button,
  Box
} from '@mui/material';
import CustomDateRangePicker from './CustomDateRangePicker';

const filterSx = {
  minWidth: 120,
  maxWidth: 160,
  background: 'transparent',
  border: '1.5px solid #000',
  borderRadius: 2,
  '.MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
  height: '40px',
};

const PlatformMetricsFilters = ({
  channels = [],
  campaigns = [],
  adSets = [],
  adNames = [],
  selectedChannel = [],
  selectedCampaign = [],
  selectedAdSet = [],
  selectedAdName = [],
  dateRange,
  onChannelChange,
  onCampaignChange,
  onAdSetChange,
  onAdNameChange,
  onDateRangeChange,
  onRefresh,
  availableCampaigns = [],
  availableAdSets = [],
  availableAdNames = []
}) => (
  <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2, mt: 0 }}>
    <Grid item xs={12} md={8}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl size="small" sx={filterSx}>
          <InputLabel>Channel</InputLabel>
          <Select
            multiple
            value={selectedChannel}
            onChange={onChannelChange}
            input={<OutlinedInput label="Channel" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {channels.map((c) => (
              <MenuItem key={c} value={c}>
                <Checkbox checked={selectedChannel.indexOf(c) > -1} />
                <ListItemText primary={c} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={filterSx}>
          <InputLabel>Campaign</InputLabel>
          <Select
            multiple
            value={selectedCampaign}
            onChange={onCampaignChange}
            input={<OutlinedInput label="Campaign" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {availableCampaigns.map((c) => (
              <MenuItem key={c} value={c}>
                <Checkbox checked={selectedCampaign.indexOf(c) > -1} />
                <ListItemText primary={c} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={filterSx}>
          <InputLabel>Ad Set</InputLabel>
          <Select
            multiple
            value={selectedAdSet}
            onChange={onAdSetChange}
            input={<OutlinedInput label="Ad Set" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {availableAdSets.map((c) => (
              <MenuItem key={c} value={c}>
                <Checkbox checked={selectedAdSet.indexOf(c) > -1} />
                <ListItemText primary={c} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={filterSx}>
          <InputLabel>Ad</InputLabel>
          <Select
            multiple
            value={selectedAdName}
            onChange={onAdNameChange}
            input={<OutlinedInput label="Ad" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {availableAdNames.map((c) => (
              <MenuItem key={c} value={c}>
                <Checkbox checked={selectedAdName.indexOf(c) > -1} />
                <ListItemText primary={c} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Grid>
    <Grid item xs={12} md={4}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
        <Box sx={{ ...filterSx, p: 0, height: '40px', display: 'flex', alignItems: 'center', minWidth: 180 }}>
          <CustomDateRangePicker value={dateRange} onChange={onDateRangeChange} />
        </Box>
        <Button
          variant="contained"
          sx={{
            background: '#1976d2',
            color: '#fff',
            fontWeight: 600,
            px: 3,
            borderRadius: 2,
            boxShadow: 'none',
            height: '40px',
            ml: 1,
            '&:hover': { background: '#000' }
          }}
          onClick={onRefresh}
        >
          Refresh Filters
        </Button>
      </Box>
    </Grid>
  </Grid>
);

export default PlatformMetricsFilters; 