import React from 'react';

// material-ui
import ToggleButton from '@mui/material/ToggleButton';

// assets
import CheckIcon from '@mui/icons-material/CheckTwoTone';

// ==============================|| STANDALONE TOGGLE BUTTON ||============================== //

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      aria-label="Format"
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
