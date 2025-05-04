import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';

// project import
import Breadcrumb from 'component/Breadcrumb';

// ==============================|| RESIZABLE COLUMN ||============================== //

const Example = () => {
  const [counter, setCounter] = useState(1);
  const incrCount = () => {
    // We update an arbitrary value here to test table resizing on state updates
    setCounter(counter + 1);
  };

  const columns = [
    {
      name: 'Counter',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: () => <button onClick={incrCount}>+</button>
      }
    },
    {
      name: 'Name',
      options: {
        hint: '?',
        setCellProps: () => ({ style: { whiteSpace: 'nowrap' } })
      }
    },
    {
      name: 'Business Title',
      options: {
        hint: '?',
        customBodyRender: (val) => {
          let parentStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            boxSizing: 'border-box',
            display: 'block',
            width: '100%'
          };
          let cellStyle = {
            boxSizing: 'border-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          };
          return (
            <Box sx={{ position: 'relative', height: 20 }}>
              <Box sx={parentStyle}>
                <Box sx={cellStyle}>{val}</Box>
              </Box>
            </Box>
          );
        }
      }
    },
    'Location'
  ];

  const data = [
    ['Gabby George ', 'Business Analyst', 'Minneapolis'],
    ['Aiden Lloyd', 'Business Consultant', 'Dallas'],
    ['Jaden Collins', 'Attorney', 'Santa Ana'],
    ['Franky Rees', 'Business Analyst', 'St. Petersburg'],
    ['Aaren Rose', null, 'Toledo']
  ];

  const options = {
    filter: true,
    responsive: 'standard',
    filterType: 'dropdown',
    resizableColumns: true,
    selectableRows: 'multiple',
    draggableColumns: {
      enabled: true
    }
  };

  return (
    <>
      <Breadcrumb title="Resizable Columns">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Tables
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Resizable Columns
        </Typography>
      </Breadcrumb>
      <MUIDataTable title={'Resizable Columns'} data={data} columns={columns} options={options} />
    </>
  );
};

export default Example;
