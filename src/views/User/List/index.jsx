import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import { Typography, Grid, Chip, Box, Fab, Card, CardContent, Checkbox } from '@mui/material';
import MUIDataTable from 'mui-datatables';

// project import
import Breadcrumb from 'component/Breadcrumb';
import Avatar from 'component/Avatar';

// assets
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';
import Avatar5 from 'assets/images/users/avatar-5.jpg';

const initialData = [
  ['Gabby George', 'Support Lead', 'Edinburgh', 61, '2011/04/25', 'Active', Avatar3, 'GG@domain.com'],
  ['Garrett Winters', 'Accountant', 'Tokyo', 63, '2011/07/25', 'Disabled', Avatar2, 'GW@domain.com'],
  ['Ashton Cox', 'Technical Author', 'San Francisco', 66, '2009/01/12', 'Disabled', Avatar1, 'AC@domain.com'],
  ['Cedric Kelly', 'Javascript Developer', 'Edinburgh', 22, '2012/03/29', 'Active', Avatar4, 'CK@domain.com'],
  ['Airi Satou', 'Accountant', 'Tokyo', 33, '2008/11/28', 'Active', Avatar5, 'AS@domain.com'],
  ['Brielle Williamson', 'Integration Specialist', 'New York', 61, '2012/12/02', 'Disabled', Avatar1, 'BW@domain.com']
];

//custom style
const UserListTable = styled((props) => <MUIDataTable {...props} />)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  '.MuiTable-root': {
    borderSpacing: '0 10px',
    borderCollapse: 'separate'
  },
  '.MuiTableRow-root': {
    background: theme.palette.background.paper,
    boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  '.MuiTableRow-root:hover': {
    background: theme.palette.primary.main + '!important',
    '.MuiTableCell-root': {
      color: '#fff'
    },
    '.MuiTableCell-head': {
      color: '#000'
    }
  }
}));

// ==============================|| LIST ||============================== //

const List = () => {
  const [data] = useState(initialData);

  const columns = [
    {
      name: 'Name',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Box sx={{ pr: 2 }}>
              <Grid key={rowIndex} container spacing={2} alignItems="center" sx={{ pr: 5 }}>
                <Grid item>
                  <Avatar alt="User 1" src={data[rowIndex][6]} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography align="left" variant="h6" color="inherit">
                    {data[rowIndex][0]}
                  </Typography>
                  <Typography align="left" variant="body2" color="inherit">
                    {data[rowIndex][7]}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          );
        }
      }
    },
    {
      name: 'Position',
      options: {
        filter: true
      }
    },
    {
      name: 'Office',
      options: {
        filter: true
      }
    },
    {
      name: 'Age',
      options: {
        filter: true
      }
    },
    {
      name: 'Start date',
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
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Box
              component="span"
              m={1}
              sx={{
                position: 'relative',
                display: 'block',
                m: 0,
                '&:hover .MuiBox-root ': {
                  display: 'flex'
                }
              }}
            >
              {data[rowIndex][5] === 'Active' ? <Chip label="Primary" color="primary" /> : ''}
              {data[rowIndex][5] === 'Disabled' ? <Chip label="Disabled" color="secondary" /> : ''}
            </Box>
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
            <Box
              component="span"
              m={1}
              sx={{
                position: 'relative',
                display: 'block',
                m: 0,
                '.MuiBox-root': {
                  display: 'flex'
                }
              }}
            >
              <Box component="span">
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                  <DoneAllIcon />
                </Fab>
                <Fab variant="extended" size="small" color="secondary" aria-label="delete" sx={{ ml: 0.75 }}>
                  <DeleteOutlineIcon />
                </Fab>
              </Box>
            </Box>
          );
        }
      }
    }
  ];

  const CustomCheckbox = (props) => {
    let newProps = Object.assign({}, props);
    newProps.color = 'secondary';

    return <Checkbox {...newProps} />;
  };

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
    onChangeRowsPerPage: (numberOfRows) => console.log('numberOfRows: ', numberOfRows),
    onChangePage: (currentPage) => console.log('currentPage: ', currentPage)
  };

  return (
    <>
      <Breadcrumb title="User List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          User
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          List
        </Typography>
      </Breadcrumb>
      <Card>
        <CardContent>
          <UserListTable data={data} columns={columns} options={options} components={{ Checkbox: CustomCheckbox }} />
        </CardContent>
      </Card>
    </>
  );
};

export default List;
