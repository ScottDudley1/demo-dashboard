import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import {
  FormGroup,
  FormLabel,
  FormControl,
  ListItemText,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  Box
} from '@mui/material';
import MUIDataTable from 'mui-datatables';

// project import
import Breadcrumb from 'component/Breadcrumb';

// ==============================|| CUSTOMIZE FILTER ||============================== //

const Example = () => {
  let [state, setState] = useState();

  state = {
    ageFilterChecked: false
  };

  const columns = [
    {
      name: 'Name',
      options: {
        filter: true,
        filterOptions: {
          renderValue: (v) => (v ? v.replace(/^(\w).* (.*)$/, '$1. $2') : '')
        },
        //display: 'excluded',
        filterType: 'dropdown'
      }
    },
    {
      label: 'Modified Title Label',
      name: 'Title',
      options: {
        filter: true,
        customFilterListOptions: {
          render: (v) => v.toLowerCase()
        }
      }
    },
    {
      label: 'Location',
      name: 'Location',
      options: {
        filter: true,
        display: 'true',
        filterType: 'custom',
        customFilterListOptions: {
          render: (v) => v.map((l) => l.toUpperCase()),
          update: (filterList, filterPos, index) => {
            filterList[index].splice(filterPos, 1);
            return filterList;
          }
        },
        filterOptions: {
          logic: (location, filters) => {
            if (filters.length) return !filters.includes(location);
            return false;
          },
          display: (filterList, onChange, index, column) => {
            const optionValues = [
              'Minneapolis',
              'Dallas',
              'Santa Ana',
              'St. Petersburg',
              'Toledo',
              'San Diego',
              'Jacksonville',
              'Omaha',
              'Los Angeles',
              'Oklahoma City',
              'Pittsburgh',
              'Laredo',
              'Austin',
              'Norfolk',
              'Chicago',
              'New York',
              'Seattle',
              'Long Beach',
              'Hartford',
              'Newark',
              'Cincinnati',
              'Baltimore',
              'Tampa',
              'Miami',
              'Tucson',
              'Memphis',
              'Buffalo',
              'Arlington',
              'Scottsdale',
              'San Francisco'
            ];
            return (
              <FormControl variant="standard">
                <InputLabel htmlFor="select-multiple-chip">Location</InputLabel>
                <Select
                  multiple
                  value={filterList[index]}
                  renderValue={(selected) => selected.join(', ')}
                  onChange={(event) => {
                    filterList[index] = event.target.value;
                    onChange(filterList[index], index, column);
                  }}
                >
                  {optionValues.map((item) => (
                    <MenuItem key={item} value={item}>
                      <Checkbox color="primary" checked={filterList[index].indexOf(item) > -1} />
                      <ListItemText primary={item} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          }
        }
      }
    },
    {
      name: 'Age',
      options: {
        filter: true,
        filterType: 'custom',

        // if the below value is set, these values will be used every time the table is rendered.
        // it's best to let the table internally manage the filterList
        //filterList: [25, 50],

        customFilterListOptions: {
          render: (v) => {
            if (v[0] && v[1] && state.ageFilterChecked) {
              return [`Min Age: ${v[0]}`, `Max Age: ${v[1]}`];
            } else if (v[0] && v[1] && !state.ageFilterChecked) {
              return `Min Age: ${v[0]}, Max Age: ${v[1]}`;
            } else if (v[0]) {
              return `Min Age: ${v[0]}`;
            } else if (v[1]) {
              return `Max Age: ${v[1]}`;
            }
            return [];
          },
          update: (filterList, filterPos, index) => {
            console.log('customFilterListOnDelete: ', filterList, filterPos, index);

            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, '');
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1);
            } else if (filterPos === -1) {
              filterList[index] = [];
            }

            return filterList;
          }
        },
        filterOptions: {
          names: [],
          logic(age, filters) {
            if (filters[0] && filters[1]) {
              return age < filters[0] || age > filters[1];
            } else if (filters[0]) {
              return age < filters[0];
            } else if (filters[1]) {
              return age > filters[1];
            }
            return false;
          },
          display: (filterList, onChange, index, column) => (
            <Box>
              <FormLabel>Age</FormLabel>
              <FormGroup row>
                <TextField
                  variant="standard"
                  label="min"
                  value={filterList[index][0] || ''}
                  onChange={(event) => {
                    filterList[index][0] = event.target.value;
                    onChange(filterList[index], index, column);
                  }}
                  sx={{ mt: 0.6, width: '45%', mr: 0.6 }}
                />
                <TextField
                  variant="standard"
                  label="max"
                  value={filterList[index][1] || ''}
                  onChange={(event) => {
                    filterList[index][1] = event.target.value;
                    onChange(filterList[index], index, column);
                  }}
                  sx={{ mt: 0.6, width: '45%' }}
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  control={
                    <Checkbox checked={state.ageFilterChecked} onChange={(event) => setState({ ageFilterChecked: event.target.checked })} />
                  }
                  label="Separate Values"
                  sx={{ ml: 0 }}
                />
              </FormGroup>
            </Box>
          )
        },
        print: false
      }
    },
    {
      name: 'Salary',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: {
          names: ['Lower wages', 'Average wages', 'Higher wages'],
          logic(salary, filterVal) {
            salary = salary.replace(/[^\d]/g, '');
            const show =
              (filterVal.indexOf('Lower wages') >= 0 && salary < 100000) ||
              (filterVal.indexOf('Average wages') >= 0 && salary >= 100000 && salary < 200000) ||
              (filterVal.indexOf('Higher wages') >= 0 && salary >= 200000);
            return !show;
          }
        },
        sort: false
      }
    }
  ];

  const data = [
    ['Gabby George', 'Business Analyst', 'Minneapolis', 30, '$100,000'],
    ['Aiden Lloyd', 'Business Consultant', 'Dallas', 55, '$200,000'],
    ['Jaden Collins', 'Attorney', 'Santa Ana', 27, '$500,000'],
    ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, '$50,000'],
    ['Aaren Rose', 'Business Consultant', 'Toledo', 28, '$75,000'],
    ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, '$94,000'],
    ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, '$210,000'],
    ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, '$65,000'],
    ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, '$77,000'],
    ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, '$135,000'],
    ['Harper White', 'Attorney', 'Pittsburgh', 52, '$420,000'],
    ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, '$150,000'],
    ['Frankie Long', 'Industrial Analyst', 'Austin', 31, '$170,000'],
    ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, '$90,000'],
    ['Justice Mann', 'Business Consultant', 'Chicago', 24, '$133,000'],
    ['Addison Navarro', 'Business Management Analyst', 'New York', 50, '$295,000'],
    ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, '$200,000'],
    ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, '$400,000'],
    ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, '$110,000'],
    ['Danny Leon', 'Computer Scientist', 'Newark', 60, '$220,000'],
    ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, '$180,000'],
    ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, '$99,000'],
    ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, '$90,000'],
    ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, '$140,000'],
    ['Justice Mccarthy', 'Attorney', 'Tucson', 26, '$330,000'],
    ['Silver Carey', 'Computer Scientist', 'Memphis', 47, '$250,000'],
    ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, '$190,000'],
    ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, '$80,000'],
    ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, '$45,000'],
    ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, '$142,000']
  ];

  const options = {
    filter: true,
    filterType: 'multiselect',
    responsive: 'standard',
    setFilterChipProps: () => {
      return {
        color: 'primary',
        variant: 'outlined',
        className: 'testClass123'
      };
    }
  };

  return (
    <>
      <Breadcrumb title="Customize Filter">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Tables
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Customize Filter
        </Typography>
      </Breadcrumb>
      <MUIDataTable title={'ACME Employee list - customizeFilter'} data={data} columns={columns} options={options} />
    </>
  );
};

export default Example;
