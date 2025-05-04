import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MuiTooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import MUIDataTable, { TableFilterList } from 'mui-datatables';

// project import
// import TableViewCol from './TableViewCol';
import Breadcrumb from 'component/Breadcrumb';

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

const CustomTooltip = (props) => {
  return (
    <MuiTooltip title={props.title} interactive="true" TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} leaveDelay={250}>
      {props.children}
    </MuiTooltip>
  );
};

CustomTooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object
};

// ==============================|| CUSTOM COMPONENT ||============================== //

const Example = () => {
  const columns = [
    { name: 'Name' },
    {
      name: 'Company',
      options: {
        filter: true,
        filterType: 'custom',
        filterList: ['Test Corp'],
        customFilterListOptions: {
          render: (v) => {
            if (v.length !== 0) {
              return `Company: ${v[0]}`;
            }
            return false;
          },
          update: (filterList) => filterList
        },
        filterOptions: {
          names: [],
          logic(status, filter) {
            if (filter.length > 0) {
              return status !== filter[0];
            }
            return false;
          },
          display: (filterList, onChange, index, column) => (
            <Select
              onChange={(event) => {
                filterList[index][0] = event.target.value;
                onChange(filterList[index], index, column);
              }}
              value={filterList[index]}
            >
              <MenuItem value="Test Corp">{'Test Corp'}</MenuItem>
              <MenuItem value="Other Corp">{'Other Corp'}</MenuItem>
            </Select>
          )
        }
      }
    },
    { name: 'City', label: 'City Label', options: { filterList: ['Dallas'] } },
    { name: 'State' },
    {
      name: 'Empty',
      options: {
        empty: true,
        filterType: 'checkbox',
        filterOptions: {
          renderValue: (val) => (val ? val : '(Empty)')
        }
      }
    }
  ];

  const data = [
    ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
    ['John Walsh', 'Test Corp', 'Hartford', null],
    ['Bob Herm', 'Other Corp', 'Tampa', 'FL'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX']
  ];

  let options = {
    onFilterChipClose: (index, removedFilter, filterList) => {
      console.log(index, removedFilter, filterList);
    },
    selectableRows: 'single',
    selectToolbarPlacement: 'none'
  };

  return (
    <>
      <Breadcrumb title="Custom Component Table">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Tables
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Custom Component Table
        </Typography>
      </Breadcrumb>
      <MUIDataTable
        title={'Custom Components List'}
        data={data}
        columns={columns}
        options={options}
        components={{
          TableFilterList: CustomFilterList
          // Tooltip: CustomTooltip,
          // Checkbox: CustomCheckbox,
          // TableViewCol: TableViewCol
        }}
      />
    </>
  );
};

export default Example;
