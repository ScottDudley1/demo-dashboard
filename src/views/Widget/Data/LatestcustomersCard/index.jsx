import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  TableContainer,
  CardActions,
  Typography,
  CardMedia,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import Flag1 from 'assets/images/widget/AUSTRALIA.jpg';
import Flag2 from 'assets/images/widget/BRAZIL.jpg';
import Flag3 from 'assets/images/widget/GERMANY.jpg';
import Flag4 from 'assets/images/widget/UK.jpg';
import Flag5 from 'assets/images/widget/USA.jpg';

function createData(image, subject, dept, date) {
  return { image, subject, dept, date };
}

const rows = [
  createData(Flag1, 'Germany', 'Anjalina Jolly', '56.23%'),
  createData(Flag2, 'USA', 'John Deo', '25.23%'),
  createData(Flag3, 'Australia', 'Jenifer Vintage', '12.45%'),
  createData(Flag4, 'United Kingdom', 'Lori Moore', '8.65%'),
  createData(Flag5, 'Brazil', 'Allina D’croze', '3.56%'),
  createData(Flag1, 'Australia', 'Jenifer Vintage', '12.45%'),
  createData(Flag3, 'USA', 'John Deo', '25.23%'),
  createData(Flag5, 'Australia', 'Jenifer Vintage', '12.45%'),
  createData(Flag2, 'United Kingdom', 'Lori Moore', '8.65%')
];

// ==============================|| LATEST CUSTOMER CARD ||============================== //

const LatestcustomersCard = ({ title }) => {
  return (
    <Card sx={{ p: 0 }}>
      <CardHeader
        title={
          <Typography component="div" className="card-header">
            {title}
          </Typography>
        }
      />
      <Divider />
      <CardContent sx={{ p: 0 }}>
        <PerfectScrollbar style={{ height: 345, padding: 0 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Average</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <CardMedia component="img" image={row.image} title="image" sx={{ width: 30, height: 'auto' }} />
                    </TableCell>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell>{row.dept}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className="f-right">
        <Button variant="text" size="small" color="primary">
          View all Latest Customers
        </Button>
      </CardActions>
    </Card>
  );
};

LatestcustomersCard.propTypes = {
  title: PropTypes.string
};

export default LatestcustomersCard;
