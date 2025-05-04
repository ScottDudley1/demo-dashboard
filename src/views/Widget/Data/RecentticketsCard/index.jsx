import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import {
  Button,
  Chip,
  Card,
  CardHeader,
  Divider,
  TableContainer,
  CardContent,
  CardActions,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody
} from '@mui/material';

function createData(badgetext, badgetype, subject, dept, date) {
  return { badgetext, badgetype, subject, dept, date };
}
const rows = [
  createData('Open', 'default', 'Website down for one week', 'Support', 'Today 2:00'),
  createData('Progress', 'primary', 'Loosing control on server', 'Support', 'Yesterday'),
  createData('Closed', 'secondary', 'Authorizations keys', 'Support', '27, Aug'),
  createData('Open', 'default', 'Restoring default settings', 'Support', 'Today 9:00'),
  createData('Progress', 'primary', 'Loosing control on server', 'Support', 'Yesterday'),
  createData('Closed', 'secondary', 'Authorizations keys', 'Support', '27, Aug'),
  createData('Open', 'default', 'Restoring default settings', 'Support', 'Today 9:00'),
  createData('Closed', 'secondary', 'Authorizations keys', 'Support', '27, Aug')
];

// ==============================|| RECENT TICKET CARD ||============================== //

const RecentticketsCard = ({ title }) => {
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
      <CardContent sx={{ p: 0 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.dept}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Chip variant="outlined" color={row.badgetype} label={row.badgetext} size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Divider />
      <CardActions className="f-right">
        <Button variant="text" size="small" color="primary">
          View all Projects
        </Button>
      </CardActions>
    </Card>
  );
};

RecentticketsCard.propTypes = {
  title: PropTypes.string
};

export default RecentticketsCard;
