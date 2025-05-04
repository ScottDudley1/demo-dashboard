import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material ui
import { useTheme } from '@mui/material/styles';
import { Typography, IconButton } from '@mui/material';
import MUIDataTable from 'mui-datatables';

// assets
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// project import
import Breadcrumb from 'component/Breadcrumb';

// ==============================|| ORDER LIST ||============================== //

const OrderList = () => {
  const theme = useTheme();
  const initialData = [
    ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', theme.palette.success.main],
    ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', theme.palette.primary.main],
    ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', theme.palette.error.main],
    ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', theme.palette.warning.main],
    ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', theme.palette.success.main],
    ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', theme.palette.primary.main],
    ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', theme.palette.error.main],
    ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', theme.palette.warning.main],
    ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', theme.palette.success.main],
    ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', theme.palette.primary.main],
    ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', theme.palette.error.main],
    ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', theme.palette.warning.main],
    ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', theme.palette.success.main],
    ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', theme.palette.primary.main],
    ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', theme.palette.error.main],
    ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', theme.palette.warning.main],
    ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', theme.palette.success.main],
    ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', theme.palette.primary.main],
    ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', theme.palette.error.main],
    ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', theme.palette.warning.main]
  ];
  const [data] = useState(initialData);

  const columns = [
    {
      name: 'Order ID',
      options: {
        filter: true
      }
    },
    {
      name: 'Customer Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Payment TyPE',
      options: {
        filter: true
      }
    },
    {
      name: 'Total',
      options: {
        filter: true
      }
    },
    {
      name: 'Date',
      options: {
        filter: true
      }
    },
    {
      name: 'QTY',
      options: {
        filter: true
      }
    },
    {
      name: 'Status',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Typography align="left" component="div" variant="body2">
              <FiberManualRecordIcon sx={{ color: data[dataIndex][7], width: 15, height: 15, verticalAlign: 'text-top', mr: 0.6 }} />{' '}
              {data[dataIndex][6]}
            </Typography>
          );
        }
      }
    },
    {
      name: 'Action',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: () => {
          return (
            <>
              <IconButton color="primary" aria-label="visible" size="large">
                <VisibilityTwoToneIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="edit" size="large">
                <EditTwoToneIcon />
              </IconButton>
            </>
          );
        }
      }
    }
  ];

  return (
    <>
      <Breadcrumb title="Order List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          E-commerce
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Order List
        </Typography>
      </Breadcrumb>
      <MUIDataTable
        title="Order List"
        data={data}
        columns={columns}
        sx={{
          '& tr td:last-child': {
            pt: 0,
            pb: 0
          },
          '.caption': {
            display: 'none'
          }
        }}
        options={{ download: false, print: false, search: false, filter: false, viewColumns: false }}
      />
    </>
  );
};

export default OrderList;
