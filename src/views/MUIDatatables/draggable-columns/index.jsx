import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';

// project import
import Breadcrumb from 'component/Breadcrumb';

// ==============================|| DRAGGABLE COLUMN ||============================== //

const Example = () => {
  const columns = [
    {
      name: 'hidden',
      options: {
        display: 'excluded'
      }
    },
    'Name',
    'Title',
    'Location',
    {
      name: 'No Drag',
      options: {
        draggable: false
      }
    },
    'Phone'
  ];

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    draggableColumns: {
      enabled: true,
      transitionTime: '300'
    }
  };

  const data = [
    ['1', 'Gabby George', 'Business Analyst', 'Minneapolis', '1', '555-1234'],
    ['1', 'Aiden Lloyd', 'Business Consultant for an International Company', 'Dallas', '2', '555-1234'],
    ['1', 'Jaden Collins', 'Attorney', 'Santa Ana', '1', '555-5555'],
    ['1', 'Franky Rees', 'Business Analyst', 'St. Petersburg', '1', '555-3333'],
    ['1', 'Aaren Rose', null, 'Toledo', '1', '555-4444'],
    ['1', 'Johnny Jones', 'Business Analyst', 'St. Petersburg', '3', '555-2468'],
    ['1', 'Jimmy Johns', 'Business Analyst', 'Baltimore', '1', '555-1357'],
    ['1', 'Jack Jackson', 'Business Analyst', 'El Paso', '1', '555-4321'],
    ['1', 'Joe Jones', 'Computer Programmer', 'El Paso', '1', '555-4321'],
    ['1', 'Jacky Jackson', 'Business Consultant', 'Baltimore', '4', '555-1234'],
    ['1', 'Jo Jo', 'Software Developer', 'Washington DC', '4', '555-1122'],
    ['1', 'Donna Marie', 'Business Manager', 'Annapolis', '5', '555-5555']
  ];

  return (
    <>
      <Breadcrumb title="Draggable Column">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Tables
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Draggable Column
        </Typography>
      </Breadcrumb>
      <MUIDataTable title={'Draggable Columns Table'} data={data} columns={columns} options={options} />
    </>
  );
};

export default Example;
