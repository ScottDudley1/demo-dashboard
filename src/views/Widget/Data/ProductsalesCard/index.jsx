import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Card,
  TableContainer,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

function createData(sales, product, price, color) {
  return { sales, product, price, color };
}

// ==============================|| PRODUCT SALES CARD ||============================== //

const ProductsalesCard = ({ title }) => {
  const theme = useTheme();

  const rows = [
    createData('2136', 'HeadPhone', '$ 926.23', theme.palette.success.main),
    createData('2546', 'Iphone 6', '$ 485.85', theme.palette.error.main),
    createData('2681', 'Jacket', '$ 786.4', theme.palette.primary.main),
    createData('2756', 'HeadPhone', '$ 563.45', theme.palette.success.main),
    createData('8765', 'Sofa', '$ 769.45', theme.palette.error.main),
    createData('3652', 'Iphone 7', '$ 754.45', theme.palette.warning.main),
    createData('7456', 'Jacket', '$ 743.23', theme.palette.success.main),
    createData('6502', 'T-Shirt', '$ 642.23', theme.palette.error.main)
  ];

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
      <CardContent className="p-0">
        <Grid className="p-20" container direction="row" justifyContent="space-around" alignItems="center">
          <Grid item>
            <Grid container direction="column" spacing={1} alignItems="center" justifyContent="center">
              <Grid item>
                <Typography component="div" variant="subtitle2">
                  Earning Product
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="subtitle1">
                  20,569$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={1} alignItems="center" justifyContent="center">
              <Grid item>
                <Typography component="div" variant="subtitle2">
                  Yesterday
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="subtitle1">
                  580$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={1} alignItems="center" justifyContent="center">
              <Grid item>
                <Typography component="div" variant="subtitle2">
                  This Week
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="subtitle1">
                  5,789$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <PerfectScrollbar style={{ height: 338, padding: 0 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Last Sales</TableCell>
                  <TableCell>Name Product</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <span style={{ color: `${row.color}` }} className={row.colorclass}>
                        {row.sales}
                      </span>
                    </TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell>
                      <span style={{ color: `${row.color}` }}>{row.price}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

ProductsalesCard.propTypes = {
  title: PropTypes.string
};

export default ProductsalesCard;
