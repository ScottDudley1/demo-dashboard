import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// assets
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function ListItemLink(props) {
  return <ListItemButton component="a" {...props} />;
}

// ==============================|| SIMPLE LIST ||============================== //

export default function SimpleList() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', maxWidth: 360, backgroundColor: theme.palette.background.paper }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemButton>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemLink href="#">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </Box>
  );
}
