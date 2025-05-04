import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

// ==============================|| CHECKBOX LIST SECONDARY ||============================== //

export default function CheckboxListSecondary() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState([1]);

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
    <List dense sx={{ width: '100%', maxWidth: 360, backgroundColor: theme.palette.background.paper }}>
      {[0, 1, 2, 3, 4, 5].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItemButton key={value}>
            <ListItemAvatar>
              <Avatar alt={`${value + 1} Avatar n°`} src={`/static/images/avatar/${value + 1}.jpg`} />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItemButton>
        );
      })}
    </List>
  );
}
