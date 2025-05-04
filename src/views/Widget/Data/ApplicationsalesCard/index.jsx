import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import {
  Button,
  Card,
  CardHeader,
  Divider,
  CardContent,
  TableContainer,
  CardActions,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  useTheme
} from '@mui/material';

function createData(name, designation, product, date, badgetext, badgetype) {
  return { name, designation, product, date, badgetext, badgetype };
}

const rows = [
  createData('Materially', 'Powerful Admin Theme', '16,300', '$53', '$15,652'),
  createData('Photoshop', 'Design Software', '26,421', '$35', '$8,785'),
  createData('Guruable', 'Best Admin Template', '8,265', '$98', '$9,652'),
  createData('Flatable', 'Admin App', '10,652', '$20', '$7,856')
];

// ==============================|| APPLICATION SALES CARD ||============================== //

const ApplicationsalesCard = ({ title }) => {
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
      <CardContent sx={{ p: 0 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application</TableCell>
                <TableCell>Sales</TableCell>
                <TableCell>Avg. Price</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography align="left" component="div" variant="subtitle1">
                      {row.name}
                    </Typography>
                    <Typography align="left" component="div" variant="subtitle2">
                      {row.designation}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <span style={{ color: theme.palette.primary.main }}>{row.badgetext}</span>
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

ApplicationsalesCard.propTypes = {
  title: PropTypes.string
};

export default ApplicationsalesCard;
