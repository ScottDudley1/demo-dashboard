import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// mterial-ui
import { Typography, IconButton, useTheme } from '@mui/material';
import MUIDataTable from 'mui-datatables';

// project import
import Breadcrumb from 'component/Breadcrumb';

// assets
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ==============================|| CUSTOMER LIST ||============================== //

const CustomerList = () => {
  const theme = useTheme();

  const initialData = [
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', theme.palette.success.main],
    ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', theme.palette.error.main],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', theme.palette.warning.main],
    ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', theme.palette.primary.main],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', theme.palette.success.main],
    ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', theme.palette.error.main],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', theme.palette.warning.main],
    ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', theme.palette.primary.main],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', theme.palette.success.main],
    ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', theme.palette.error.main],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', theme.palette.warning.main],
    ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', theme.palette.primary.main],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', theme.palette.success.main],
    ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', theme.palette.error.main],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', theme.palette.warning.main],
    ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', theme.palette.primary.main],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', theme.palette.success.main],
    ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', theme.palette.error.main],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', theme.palette.warning.main],
    ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', theme.palette.primary.main]
  ];
  const [data] = useState(initialData);

  const columns = [
    {
      name: 'Order ID',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <Typography align="left" component="div" variant="h6">
                {' '}
                {data[dataIndex][0]}
              </Typography>
              <Typography
                align="left"
                component="div"
                variant="body2"
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {' '}
                {data[dataIndex][1]}
              </Typography>
            </>
          );
        }
      }
    },
    {
      name: 'Location',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][2];
        }
      }
    },
    {
      name: 'Orders',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][3];
        }
      }
    },
    {
      name: 'Registered',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return <Typography sx={{ px: 2 }}>{data[dataIndex][4]}</Typography>;
        }
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
            <Typography align="left" component="div" variant="body2" sx={{ '& svg': {} }}>
              <FiberManualRecordIcon
                sx={{
                  color: data[dataIndex][6],
                  width: 15,
                  height: 15,
                  verticalAlign: 'text-top',
                  mr: 0.6
                }}
              />{' '}
              {data[dataIndex][5]}
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
              <IconButton color="primary" aria-label="Visibility" size="large">
                <VisibilityTwoToneIcon />
              </IconButton>
              <IconButton color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'} aria-label="edit" size="large">
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
      <Breadcrumb title="Customer List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          E-commerce
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Customer List
        </Typography>
      </Breadcrumb>

      <MUIDataTable
        title="Customer List"
        data={data}
        columns={columns}
        options={{ download: false, print: false, search: false, filter: false, viewColumns: false }}
      />
    </>
  );
};

export default CustomerList;
