import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardContent, CardHeader, Chip, Divider, Grid, Typography } from '@mui/material';
import MUIDataTable, { TableFilterList } from 'mui-datatables';

// project import
import { gridSpacing } from 'config.js';
import Breadcrumb from 'component/Breadcrumb';
import Button from 'component/Button';

const CustomChip = ({ label, onDelete }) => {
  return <Chip sx={{ m: '8px 8px 8px 0' }} color="secondary" label={label} onDelete={onDelete} />;
};

CustomChip.propTypes = {
  label: PropTypes.string,
  onDelete: PropTypes.func
};

// Here is the custom filter list component that will display
// the custom filter chips:
const CustomFilterList = (props) => {
  return <TableFilterList {...props} ItemComponent={CustomChip} />;
};

// ==============================|| COLUMN OPTION UPDATE ||============================== //

const Example = () => {
  let [state, setState] = useState();

  state = {
    filterList: [['Gabby George'], ['Business Analyst'], [], [], []],
    filterOptions: ['Franky Miles', 'this', 'test', 'is', 'working'],
    display: ['true', 'true', 'true', 'true', 'true'],
    data: [
      ['Gabby George', 'Business Analyst', 'Minneapolis', 30, 100000],
      ['Business Analyst', 'Business Consultant', 'Dallas', 55, 200000],
      ['Jaden Collins', 'Attorney', 'Santa Ana', 27, 500000],
      ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, 50000],
      ['Aaren Rose', 'Business Consultant', 'Toledo', 28, 75000],
      ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, 94000],
      ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, 210000],
      ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, 65000],
      ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, 77000],
      ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, 135000],
      ['Harper White', 'Attorney', 'Pittsburgh', 52, 420000],
      ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, 150000],
      ['Frankie Long', 'Industrial Analyst', 'Austin', 31, 170000],
      ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, 90000],
      ['Justice Mann', 'Business Consultant', 'Chicago', 24, 133000],
      ['Addison Navarro', 'Business Management Analyst', 'New York', 50, 295000],
      ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, 200000],
      ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, 400000],
      ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, 110000],
      ['Danny Leon', 'Computer Scientist', 'Newark', 60, 220000],
      ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, 180000],
      ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, 99000],
      ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, 90000],
      ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, 140000],
      ['Justice Mccarthy', 'Attorney', 'Tucson', 26, 330000],
      ['Silver Carey', 'Computer Scientist', 'Memphis', 47, 250000],
      ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, 190000],
      ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, 80000],
      ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, 45000],
      ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, 142000]
    ]
  };

  const handleFilterNameChange = () => {
    let string = prompt('Write a semicolon-separated string to change filter names in the first column!');
    if (string) setState({ filterOptions: string.split(';') });
  };

  const handleAddData = () => {
    const string = prompt(
      "Write a semicolon-separated string with values for 'Name'; 'Title'; 'Location'; 'Age' and 'Salary' to add a new row of data!"
    );
    if (string) setState({ data: [string.split(';'), ...state.data] });
  };

  const handleChangeDisplay = () => {
    const string = prompt(
      "Write a semicolon-separated string of display options for each of the 5 columns. Options are either 'true', 'false', or 'excluded'"
    );
    if (string) setState({ display: string.split(';') });
  };

  const { data, filterList, filterOptions } = state;

  const columns = [
    {
      name: 'Name',
      options: {
        filter: true,
        display: state.display[0],
        filterList: filterList[0].length ? filterList[0] : null,
        customFilterListOptions: { render: (v) => `Name: ${v}` },
        filterOptions: {
          names: filterOptions
        }
      }
    },
    {
      name: 'Title',
      options: {
        display: state.display[1],
        filter: true,
        filterList: filterList[1].length ? filterList[1] : null,
        customFilterListOptions: { render: (v) => `Title: ${v}` },
        filterType: 'textField' // set filterType's at the column level
      }
    },
    {
      name: 'Location',
      options: {
        display: state.display[2],
        filter: true,
        filterOptions: {
          fullWidth: true
        },
        filterList: filterList[2].length ? filterList[2] : null
      }
    },
    {
      name: 'Age',
      options: {
        display: state.display[3],
        filter: true,
        filterList: filterList[3].length ? filterList[3] : null,
        customFilterListOptions: { render: (v) => `Age: ${v}` }
      }
    },
    {
      name: 'Salary',
      options: {
        display: state.display[4],
        filter: true,
        filterList: filterList[4].length ? filterList[4] : null,
        customFilterListOptions: { render: (v) => `Salary: ${v}` },
        sort: false
      }
    }
  ];

  const options = {
    filter: true,
    onFilterChange: (changedColumn, newFilterList) => {
      setState({ filterList: newFilterList });
    },
    selectableRows: 'multiple',
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPage: 10
  };

  return (
    <>
      <Breadcrumb title="Column Options Update">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Tables
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Column Options Update
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  MUI Datatables
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      setState({
                        filterList: [['Franky Miles'], ['Business Analyst'], [], [], []]
                      })
                    }
                  >
                    Set starter filters!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleFilterNameChange}>
                    Change filter names for first column!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleAddData}>
                    Add row data!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleChangeDisplay}>
                    Change which columns are displayed!
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <MUIDataTable
            title={'Column Option Update'}
            data={data}
            columns={columns}
            options={options}
            components={{
              TableFilterList: CustomFilterList
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Example;
