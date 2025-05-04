import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

// assets
import CommentIcon from '@mui/icons-material/Comment';

// ==============================|| CHECKBOX LIST ||============================== //

export default function CheckboxList() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, backgroundColor: theme.palette.background.paper }}>
      {[0, 1, 2, 3, 4, 5].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItemButton key={value} role={undefined} dense onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                color="primary"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" size="large">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItemButton>
        );
      })}
    </List>
  );
}
