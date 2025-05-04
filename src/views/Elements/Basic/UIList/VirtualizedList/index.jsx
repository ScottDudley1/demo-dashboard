import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

// third party
import { FixedSizeList } from 'react-window';

function renderRow({ index, style }) {
  return (
    <ListItemButton sx={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItemButton>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

// ==============================|| VIRTUALIZED LIST ||============================== //

export default function VirtualizedList() {
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', height: 300, maxWidth: 300, backgroundColor: theme.palette.background.paper }}>
      <FixedSizeList height={300} width="auto" itemSize={46} itemCount={200}>
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
