import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import {
  Grid,
  Typography,
  IconButton,
  MenuItem,
  Fab,
  Button,
  TextField,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import MUIDataTable from 'mui-datatables';

// project import
import Avatar from 'component/Avatar';
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import AddIcon from '@mui/icons-material/Add';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import GridOnTwoToneIcon from '@mui/icons-material/GridOnTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const dates = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '26', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
  { value: '31', label: '31' }
];

const months = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' }
];

const years = [
  { value: '1', label: '2021' },
  { value: '2', label: '2022' },
  { value: '3', label: '2023' },
  { value: '4', label: '2024' },
  { value: '5', label: '2025' },
  { value: '6', label: '2026' },
  { value: '7', label: '2027' },
  { value: '8', label: '2028' },
  { value: '9', label: '2029' }
];

// ==============================|| CONTACT LIST ||============================== //

const List = () => {
  const data = [
    ['Akshay Handge', 'Akshay@mail.com', 'Boston, USA', '+1 (070) 123-4562', 'AH', 'warning', 'Manager'],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '+1 (070) 123-4561', 'JW', 'error', 'Founder & CEO'],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '+1 (070) 123-4563', 'LD', 'primary', 'Founder'],
    ['Sara Soudein', 'Sara@mail.com', 'Sydney, Australia', '+1 (070) 123-4564', 'S', 'success', 'Director'],
    ['Joseph William', 'Joseph@mail.com', 'Los Angeles, USA ', '+1 (070) 123-4565', 'AH', 'info', 'Lead Developer'],
    ['Sara Handge', 'Handge@mail.com', 'Miami, USA  ', '+1 (070) 123-4566', 'SH', 'primary', 'Product Manager'],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '+1 (070) 123-4567', 'JW', 'error', 'Founder & CEO'],
    ['Akshay Handge', 'Akshay@mail.com', 'Boston, USA', '+1 (070) 123-4568', 'AH', 'warning', 'Manager'],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '+1 (070) 123-4569', 'LD', 'primary', 'Founder'],
    ['Sara Soudein', 'Sara@mail.com', 'Sydney, Australia', '+1 (070) 123-4560', 'S', 'success', 'Director'],
    ['Joseph William', 'Joseph@mail.com', 'Los Angeles, USA ', '+1 (070) 123-4517', 'AH', 'info', 'Lead Developer'],
    ['Sara Handge', 'Handge@mail.com', 'Miami, USA  ', '+1 (070) 123-4567', 'SH', 'primary', 'Product Manager'],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '+1 (070) 123-4527', 'JW', 'error', 'Founder & CEO'],
    ['Akshay Handge', 'Akshay@mail.com', 'Boston, USA', '+1 (070) 123-4537', 'AH', 'warning', 'Manager'],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '+1 (070) 123-4547', 'LD', 'primary', 'Founder'],
    ['Sara Soudein', 'Sara@mail.com', 'Sydney, Australia', '+1 (070) 123-4557', 'S', 'success', 'Director'],
    ['Joseph William', 'Joseph@mail.com', 'Los Angeles, USA ', '+1 (070) 123-4567', 'AH', 'info', 'Lead Developer'],
    ['Sara Handge', 'Handge@mail.com', 'Miami, USA  ', '+1 (070) 123-4577', 'SH', 'primary', 'Product Manager'],
    ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '+1 (070) 123-4587', 'JW', 'error', 'Founder & CEO'],
    ['Akshay Handge', 'Akshay@mail.com', 'Boston, USA', '+1 (070) 123-4597', 'AH', 'warning', 'Manager'],
    ['Lary Doe', 'Lary@mail.com', 'New York, USA', '+1 (070) 123-4507', 'LD', 'primary', 'Founder'],
    ['Sara Soudein', 'Sara@mail.com', 'Sydney, Australia', '+1 (070) 123-4167', 'S', 'success', 'Director'],
    ['Joseph William', 'Joseph@mail.com', 'Los Angeles, USA ', '+1 (070) 123-2567', 'AH', 'info', 'Lead Developer'],
    ['Sara Handge', 'Handge@mail.com', 'Miami, USA  ', '+1 (070) 123-3567', 'SH', 'primary', 'Product Manager']
  ];

  const columns = [
    {
      name: 'Name',
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar color={data[dataIndex][5]}>{data[dataIndex][4]}</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography align="left" component="div" variant="subtitle1">
                  {data[dataIndex][0]}
                </Typography>
                <Typography align="left" component="div" variant="subtitle2">
                  {data[dataIndex][6]}
                </Typography>
              </Grid>
            </Grid>
          );
        },
        customFilterListOptions: { render: (v) => `Name: ${v}` },
        filterOptions: {
          names: ['Joseph William', 'Sara Soudein', 'Sara Handge', 'Akshay Handge', 'Lary Doe']
        }
      }
    },
    {
      name: 'Email',
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Typography
              component="div"
              width={{ xs: 116, sm: 'auto' }}
              sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              {data[dataIndex][1]}
            </Typography>
          );
        },
        customFilterListOptions: { render: (v) => `Email: ${v}` },
        filterOptions: {
          names: ['Akshay@mail.com', 'Joseph@mail.com', 'Lary@mail.com', 'Sara@mail.com', 'Handge@mail.com']
        }
      }
    },
    {
      name: 'Location',
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][2];
        },
        customFilterListOptions: { render: (v) => `Location: ${v}` },
        filterOptions: {
          names: ['Boston, USA', 'Hong Kong, China', 'New York, USA', 'Sydney, Australia', 'Los Angeles, USA', 'Miami, USA']
        }
      }
    },
    {
      name: 'Phone',
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][3];
        }
      }
    },
    {
      name: 'Action',
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRenderLite: () => {
          return (
            <>
              <IconButton color="primary" aria-label="Visible" size="large">
                <VisibilityTwoToneIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="Edit" size="large">
                <EditTwoToneIcon />
              </IconButton>
            </>
          );
        }
      }
    }
  ];
  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    selectableRows: 'multiple',
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    rowsPerPage: 10
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpendialog = () => {
    setOpen(true);
  };
  const handleClosedialog = () => {
    setOpen(false);
  };
  const [date, setDate] = React.useState('16');
  const handleChangeselect = (event) => {
    setDate(event.target.value);
  };
  const [month, setMonth] = React.useState('12');
  const handleChangeselect1 = (event) => {
    setMonth(event.target.value);
  };
  const [year, setYear] = React.useState('1');
  const handleChangeselect2 = (event) => {
    setYear(event.target.value);
  };

  return (
    <>
      <Breadcrumb title="Contact List">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Contacts
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          List
        </Typography>
      </Breadcrumb>
      <Grid container wrap="nowrap" justifyContent="flex-end" sx={{ mb: 3 }} spacing={gridSpacing}>
        <Grid item>
          <Grid container wrap="nowrap" justifyContent="flex-end" spacing={1}>
            <Grid item>
              <IconButton color="secondary" aria-label="Card" component={Link} to="/application/contacts/card" size="large">
                <GridOnTwoToneIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="secondary" aria-label="List" component={Link} to="/application/contacts/list" size="large">
                <FormatListBulletedTwoToneIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Fab color="primary" aria-label="Add" size="small" onClick={handleClickOpendialog}>
            <AddIcon />
          </Fab>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClosedialog}
            sx={{
              '& .MuiDialog-container': {
                justifyContent: 'flex-end',
                '& .MuiDialog-paper': {
                  m: 0,
                  borderRadius: 0,
                  maxWidth: 450,
                  maxHeight: '100%',
                  height: '100vh'
                }
              }
            }}
          >
            <DialogTitle>{'New Contact'}</DialogTitle>
            <DialogContent>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <TextField sx={{ mt: 1 }} fullWidth label="First Name" variant="outlined" defaultValue="Joseph" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Last Name" variant="outlined" defaultValue="William" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="E-mail" variant="outlined" defaultValue="Joseph@mail.com" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Phone Number" variant="outlined" defaultValue="+1 (070) 123-4567" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Job Title" variant="outlined" defaultValue="Founder & CEO" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Address" variant="outlined" defaultValue="Hong Kong, China" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Date of Birth</Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField select label="Date" value={date} fullWidth variant="outlined" onChange={handleChangeselect}>
                    {dates.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField select label="Month" value={month} fullWidth variant="outlined" onChange={handleChangeselect1}>
                    {months.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField select label="Year" value={year} fullWidth variant="outlined" onChange={handleChangeselect2}>
                    {years.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    label="Notes"
                    variant="outlined"
                    defaultValue="Fundamentally redesigned and reengineered The Apple Watch display yet."
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                Add Contact
              </Button>
              <Button variant="text" onClick={handleClosedialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
      <MUIDataTable title="My Contact" data={data} columns={columns} options={options} />
    </>
  );
};

export default List;
