import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// assets
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustifyTwoTone';
import FormatBoldIcon from '@mui/icons-material/FormatBoldTwoTone';
import FormatItalicIcon from '@mui/icons-material/FormatItalicTwoTone';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlinedTwoTone';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFillTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownTwoTone';

// custom style
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius
    }
  }
}));

// ==============================|| CUSTOMIZED DIVIDERS ||============================== //

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();

  return (
    <Paper elevation={0} sx={{ display: 'flex', border: `1px solid ${theme.palette.divider}`, flexWrap: 'wrap' }}>
      <StyledToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </StyledToggleButtonGroup>
      <Divider flexItem orientation="vertical" sx={{ margin: theme.spacing(1, 0.5) }} />
      <StyledToggleButtonGroup size="small" value={formats} onChange={handleFormat} aria-label="text formatting">
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Paper>
  );
}
