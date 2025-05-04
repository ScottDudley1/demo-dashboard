import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  List,
  ListItemIcon,
  Divider,
  ListItemText,
  ListItemButton
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| INCOMING REQUEST CARD ||============================== //

const IncomingrequestsCard = ({ title }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={
          <Typography component="div" className="card-header">
            {title}
          </Typography>
        }
      />
      <Divider />
      <CardContent sx={{ p: 0, pb: 0 }}>
        <PerfectScrollbar style={{ height: 300 }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.success.main }} />
              </ListItemIcon>
              <ListItemText secondary="Incoming requests" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.error.main }} />
              </ListItemIcon>
              <ListItemText secondary="You have 2 pending requests.." />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.warning.main }} />
              </ListItemIcon>
              <ListItemText secondary="You have 3 pending tasks" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText secondary="New order received" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.success.main }} />
              </ListItemIcon>
              <ListItemText secondary="Incoming requests" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.error.main }} />
              </ListItemIcon>
              <ListItemText secondary="You have 2 pending requests.." />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.warning.main }} />
              </ListItemIcon>
              <ListItemText secondary="You have 3 pending tasks" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ color: theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText secondary="New order received" />
            </ListItemButton>
          </List>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className="f-right">
        <Button variant="text" size="small" color="primary">
          Show more
        </Button>
      </CardActions>
    </Card>
  );
};

IncomingrequestsCard.propTypes = {
  title: PropTypes.string
};

export default IncomingrequestsCard;
