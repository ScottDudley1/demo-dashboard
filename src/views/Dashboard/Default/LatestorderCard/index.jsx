import React from 'react';

// material-ui
import { Card, CardHeader, Divider, Grid, CardContent, CardActions, Chip, IconButton, CardMedia, Typography, Button } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// project import
import { gridSpacing } from 'config.js';

// assets
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Phone1 from 'assets/images/widget/PHONE1.jpg';
import Phone2 from 'assets/images/widget/PHONE2.jpg';
import Phone3 from 'assets/images/widget/PHONE3.jpg';
import Phone4 from 'assets/images/widget/PHONE4.jpg';

function createData(customer, cid, photo, product, quantity, date, status, statuscolor) {
  return { customer, cid, photo, product, quantity, date, status, statuscolor };
}

const rows = [
  createData('John Deo', '#81412314', Phone1, 'Moto G5', '10', '17-2-2017', 'Pending', 'secondary'),
  createData('Jenny William', '#68457898', Phone2, 'iPhone 8', '16', '20-2-2017', 'Paid', 'primary'),
  createData('Lori Moore', '#45457898', Phone3, 'Redmi 4', '20', '17-2-2017', 'Success', 'secondary'),
  createData('Austin Pena', '#62446232', Phone4, 'Jio', '15', '25-4-2017', 'Failed', 'primary')
];

// ==============================|| LATEST ORDER CARD ||============================== //

export default function LatestorderCard() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={
              <Typography component="div" className="card-header">
                Latest Order
              </Typography>
            }
          />
          <Divider />
          <CardContent className="p-0">
            <TableContainer>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Order Id</TableCell>
                    <TableCell>Photo</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.customer}</TableCell>
                      <TableCell>{row.cid}</TableCell>
                      <TableCell>
                        <CardMedia component="img" image={row.photo} title="image" sx={{ width: 20, height: 'auto' }} />
                      </TableCell>
                      <TableCell>{row.product}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>
                        <Chip color={row.statuscolor} label={row.status} size="small" />
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" aria-label="Edit" size="large">
                          <EditOutlinedIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="Delete" size="large">
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions className="f-right">
            <Button variant="text" size="small" color="primary">
              View all Orders
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
