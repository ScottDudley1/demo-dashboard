import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import MUIDataTable from 'mui-datatables';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// ==============================|| SIMPLE TABLE ||============================== //

const Example = () => {
  const [responsive, setResponsive] = useState('vertical');
  const [tableBodyHeight, setTableBodyHeight] = useState('');
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [{ name: 'Name', options: { filterOptions: { fullWidth: true } } }, 'Title', 'Location'];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: 'dropdown',
    responsive,
    tableBodyHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = [
    ['Gabby George', 'Business Analyst', 'Minneapolis'],
    ['Aiden Lloyd', "Business Consultant for an International Company and CEO of Tony's Burger Palace", 'Dallas'],
    ['Jaden Collins', 'Attorney', 'Santa Ana'],
    ['Franky Rees', 'Business Analyst', 'St. Petersburg'],
    ['Aaren Rose', null, 'Toledo'],
    ['Johnny Jones', 'Business Analyst', 'St. Petersburg'],
    ['Jimmy Johns', 'Business Analyst', 'Baltimore'],
    ['Jack Jackson', 'Business Analyst', 'El Paso'],
    ['Joe Jones', 'Computer Programmer', 'El Paso'],
    ['Jacky Jackson', 'Business Consultant', 'Baltimore'],
    ['Jo Jo', 'Software Developer', 'Washington DC'],
    ['Donna Marie', 'Business Manager', 'Annapolis']
  ];

  return (
    <>
      <Breadcrumb title="Simple Table">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Tables
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Simple Table
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
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label1">Responsive Option</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select1"
                  value={responsive}
                  sx={{ width: 200, mb: 1.25, mr: 1.25 }}
                  onChange={(e) => setResponsive(e.target.value)}
                >
                  <MenuItem value={'vertical'}>vertical</MenuItem>
                  <MenuItem value={'standard'}>standard</MenuItem>
                  <MenuItem value={'simple'}>simple</MenuItem>

                  <MenuItem value={'scroll'}>scroll (deprecated)</MenuItem>
                  <MenuItem value={'scrollMaxHeight'}>scrollMaxHeight (deprecated)</MenuItem>
                  <MenuItem value={'stacked'}>stacked (deprecated)</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label2">Table Body Height</InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                  id="demo-simple-select2"
                  value={tableBodyHeight}
                  sx={{ width: 200, mb: 1.25, mr: 1.25 }}
                  onChange={(e) => setTableBodyHeight(e.target.value)}
                >
                  <MenuItem value={''}>[blank]</MenuItem>
                  <MenuItem value={'400px'}>400px</MenuItem>
                  <MenuItem value={'800px'}>800px</MenuItem>
                  <MenuItem value={'100%'}>100%</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label3">Search Button</InputLabel>
                <Select
                  labelId="demo-simple-select-label3"
                  id="demo-simple-select3"
                  value={searchBtn}
                  sx={{ width: 200, mb: 1.25, mr: 1.25 }}
                  onChange={(e) => setSearchBtn(e.target.value)}
                >
                  <MenuItem value={'true'}>{'true'}</MenuItem>
                  <MenuItem value={'false'}>{'false'}</MenuItem>
                  <MenuItem value={'disabled'}>disabled</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label4">Download Button</InputLabel>
                <Select
                  labelId="demo-simple-select-label4"
                  id="demo-simple-select4"
                  value={downloadBtn}
                  sx={{ width: 200, mb: 1.25 }}
                  onChange={(e) => setDownloadBtn(e.target.value)}
                >
                  <MenuItem value={'true'}>{'true'}</MenuItem>
                  <MenuItem value={'false'}>{'false'}</MenuItem>
                  <MenuItem value={'disabled'}>disabled</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label5">Print Button</InputLabel>
                <Select
                  labelId="demo-simple-select-label5"
                  id="demo-simple-select5"
                  value={printBtn}
                  sx={{ width: 200, mb: 1.25, mr: 1.25 }}
                  onChange={(e) => setPrintBtn(e.target.value)}
                >
                  <MenuItem value={'true'}>{'true'}</MenuItem>
                  <MenuItem value={'false'}>{'false'}</MenuItem>
                  <MenuItem value={'disabled'}>disabled</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label6">View Column Button</InputLabel>
                <Select
                  labelId="demo-simple-select-label6"
                  id="demo-simple-select6"
                  value={viewColumnBtn}
                  sx={{ width: 200, mb: 1.25, mr: 1.25 }}
                  onChange={(e) => setViewColumnBtn(e.target.value)}
                >
                  <MenuItem value={'true'}>{'true'}</MenuItem>
                  <MenuItem value={'false'}>{'false'}</MenuItem>
                  <MenuItem value={'disabled'}>disabled</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label7">Filter Button</InputLabel>
                <Select
                  labelId="demo-simple-select-label7"
                  id="demo-simple-select7"
                  value={filterBtn}
                  sx={{ width: 200, mb: 1.25 }}
                  onChange={(e) => setFilterBtn(e.target.value)}
                >
                  <MenuItem value={'true'}>{'true'}</MenuItem>
                  <MenuItem value={'false'}>{'false'}</MenuItem>
                  <MenuItem value={'disabled'}>disabled</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <MUIDataTable title="Employee list" data={data} columns={columns} options={options} />
        </Grid>
      </Grid>
    </>
  );
};

export default Example;
