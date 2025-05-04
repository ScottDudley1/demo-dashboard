import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// assets
import ImageIcon from '@mui/icons-material/ImageTwoTone';
import WorkIcon from '@mui/icons-material/WorkOffTwoTone';
import BeachAccessIcon from '@mui/icons-material/BeachAccessTwoTone';

// ==============================|| FOLDeR LIST ||============================== //

export default function FolderList() {
  const theme = useTheme();
  return (
    <List sx={{ width: '100%', maxWidth: 360, backgroundColor: theme.palette.background.paper }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
