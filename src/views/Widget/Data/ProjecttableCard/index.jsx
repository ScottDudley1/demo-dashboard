import React from 'react';

// material-ui
import { Avatar, Chip, Grid, Typography, Table, TableRow, TableCell, TableHead, TableBody, TableContainer } from '@mui/material';

// assets
import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';

function createData(avtar, name, designation, product, date, badgetext, badgetype) {
  return { avtar, name, designation, product, date, badgetext, badgetype };
}
const rows = [
  createData(Avatar1, 'John Deo', 'Graphics Designer', 'Materially', 'Jun, 26', 'Low', 'secondary'),
  createData(Avatar2, 'Jenifer Vintage', 'Web Designer', 'Mashable', 'March, 31', 'High', 'primary'),
  createData(Avatar3, 'William Jem', 'Developer', 'Flatable', 'Aug, 02', 'Medium', 'secondary'),
  createData(Avatar4, 'David Jones', 'Developer', 'Guruable', 'Sep, 22', 'High', 'primary')
];

// ==============================|| PROJECT TABLE CARD ||============================== //

const ProjecttableCard = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Assigned</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell align="right">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar alt="User 1" src={row.avtar} />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography component="div" align="left" variant="subtitle1">
                      {row.name}
                    </Typography>
                    <Typography component="div" align="left" variant="subtitle2">
                      {row.designation}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">
                {' '}
                <Chip color={row.badgetype} label={row.badgetext} size="small" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjecttableCard;
