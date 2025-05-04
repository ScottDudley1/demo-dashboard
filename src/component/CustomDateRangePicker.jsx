import React, { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  Typography,
  Divider,
  Stack,
  TextField,
  Grid
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const now = dayjs();
const sameDayLastMonth = now.subtract(1, 'month').date(now.date());
const sameDayLastYear = now.subtract(1, 'year').date(now.date());

const presets = [
  { label: 'Yesterday', range: [now.subtract(1, 'day'), now.subtract(1, 'day')] },
  { label: 'Last 7 Days', range: [now.subtract(6, 'day'), now] },
  { label: 'Last 30 Days', range: [now.subtract(29, 'day'), now] },
  { label: 'Last 60 Days', range: [now.subtract(59, 'day'), now] },
  { label: 'Last 90 Days', range: [now.subtract(89, 'day'), now] },
  { label: 'This Month To Date', range: [now.startOf('month'), now] },
  { label: 'Last Month To Date', range: [now.subtract(1, 'month').startOf('month'), sameDayLastMonth] },
  { label: 'This Quarter To Date', range: [now.startOf('quarter'), now] },
  { label: 'This Year', range: [now.startOf('year'), now] },
  { label: 'Last Year To Date', range: [now.subtract(1, 'year').startOf('year'), sameDayLastYear] }
];

const CustomDateRangePicker = ({ value, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const defaultRange = [now.subtract(29, 'day'), now];
  
  // Convert regular Date objects to dayjs objects if needed
  const convertToDayjs = (dateRange) => {
    if (!dateRange || !dateRange[0] || !dateRange[1]) return defaultRange;
    
    return [
      dayjs.isDayjs(dateRange[0]) ? dateRange[0] : dayjs(dateRange[0]),
      dayjs.isDayjs(dateRange[1]) ? dateRange[1] : dayjs(dateRange[1])
    ];
  };
  
  const [tempRange, setTempRange] = useState(convertToDayjs(value));
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  React.useEffect(() => {
    setTempRange(convertToDayjs(value));
  }, [value]);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const applyRange = () => {
    onChange?.(tempRange);
    handleClose();
  };

  const cancelRange = () => {
    setTempRange(convertToDayjs(value));
    handleClose();
  };

  const handlePreset = ([start, end]) => {
    setTempRange([start, end]);
    onChange?.([start.toDate(), end.toDate()]);
    handleClose();
  };
  
  // Format date range for display
  const formattedDateRange = React.useMemo(() => {
    const range = convertToDayjs(value);
    return `${range[0].format('DD/MMM/YYYY')} - ${range[1].format('DD/MMM/YYYY')}`;
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Button
          variant="outlined"
          onClick={handleOpen}
          sx={{ textTransform: 'none', borderColor: '#000000', color: '#000000' }}
        >
          {formattedDateRange}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ px: 3, py: 2, width: 460 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Presets
            </Typography>
            <Box>
              <Stack
                direction="row"
                spacing={1}
                rowGap={1}
                flexWrap="wrap"
                justifyContent="flex-start"
                sx={{
                  '& > :nth-of-type(-n+4)': {
                    ml: '8px' // 🎯 just right amount of nudge
                  }
                }}
              >
                {presets.map(({ label, range }) => (
                  <Button
                    key={label}
                    variant="contained"
                    size="small"
                    onClick={() => handlePreset(range)}
                    sx={{
                      textTransform: 'none',
                      backgroundColor: '#000',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#222' },
                      fontSize: '0.75rem'
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Custom Range
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Box sx={{ position: 'relative' }}>
                  <DatePicker
                    label="Start Date"
                    value={tempRange[0]}
                    inputFormat="DD/MMM/YYYY"
                    open={openStart}
                    onOpen={() => setOpenStart(true)}
                    onClose={() => setOpenStart(false)}
                    onChange={(newVal) => setTempRange([newVal, tempRange[1]])}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        fullWidth
                        onClick={() => setOpenStart(true)}
                        sx={{
                          input: { color: '#000000' },
                          '& .MuiInputAdornment-root': { pointerEvents: 'none' }
                        }}
                      />
                    )}
                  />
                  <Box
                    onClick={() => setOpenStart(true)}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ position: 'relative' }}>
                  <DatePicker
                    label="End Date"
                    value={tempRange[1]}
                    inputFormat="DD/MMM/YYYY"
                    open={openEnd}
                    onOpen={() => setOpenEnd(true)}
                    onClose={() => setOpenEnd(false)}
                    onChange={(newVal) => setTempRange([tempRange[0], newVal])}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        fullWidth
                        onClick={() => setOpenEnd(true)}
                        sx={{
                          input: { color: '#000000' },
                          '& .MuiInputAdornment-root': { pointerEvents: 'none' }
                        }}
                      />
                    )}
                  />
                  <Box
                    onClick={() => setOpenEnd(true)}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: 'flex-end' }}>
              <Button onClick={cancelRange} sx={{ color: '#000000' }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={applyRange}
                sx={{ backgroundColor: '#000000' }}
              >
                Apply
              </Button>
            </Stack>
          </Box>
        </Menu>
      </Box>
    </LocalizationProvider>
  );
};

export default CustomDateRangePicker;