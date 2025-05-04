import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  Box,
  TextField,
  MenuItem,
  Divider,
  CardHeader
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import Successicon from 'assets/images/page/success.svg';

// custom style
const AccountTabs = styled((props) => <Tabs {...props} />)(({ theme }) => ({
  marginBottom: '24px',
  overflowY: 'auto',
  width: '100%',
  borderBottom: '2px solid' + theme.palette.primary.main,
  '.MuiButtonBase-root': {
    minWidth: '100px',
    borderRadius: '5px 5px 0 0',
    '.Mui-selected': {
      color: '#fff',
      background: theme.palette.primary.main
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '70px',
      fontSize: '10px'
    }
  }
}));

function TabPanel({ children, value, index, ...other }) {
  return (
    <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
const currencies = [
  {
    value: '1',
    label: 'Iphone 12 Pro Max'
  },
  {
    value: '2',
    label: 'Iphone 11 Pro Max'
  },
  {
    value: '3',
    label: 'Nokia'
  },
  {
    value: '4',
    label: 'Samsung'
  }
];

// ==============================|| ADD PRODUCT ||============================== //

const AddProduct = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currency, setCurrency] = React.useState('');
  const handleChangeselect = (event) => {
    setCurrency(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Breadcrumb title="Add Product">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          E-commerce
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Add Product
        </Typography>
      </Breadcrumb>
      <Grid container alignContent="center" justifyContent="center" spacing={gridSpacing}>
        <Grid item xs={12} md={9} lg={8}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Add New Product
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <TextField id="outlined-basic1" fullWidth label="Product Name*" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic2" fullWidth multiline maxRows={4} label="Product Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select Category"
                    value={currency}
                    fullWidth
                    variant="outlined"
                    onChange={handleChangeselect}
                    helperText="Please select Category"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Price"
                    id="filled-start-adornment1"
                    type="number"
                    InputProps={{ inputProps: { min: 0 }, startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Discount"
                    id="filled-start-adornment2"
                    type="number"
                    InputProps={{ inputProps: { min: 0 }, startAdornment: <InputAdornment position="start">%</InputAdornment> }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <AccountTabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="simple tabs example"
                  >
                    <Tab label="Inventory" {...a11yProps(0)} />
                    <Tab label="Pricing" {...a11yProps(1)} />
                    <Tab label="Shipping" {...a11yProps(2)} />
                  </AccountTabs>
                  <TabPanel value={value} index={0}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={12}>
                        <TextField id="outlined-basic3" fullWidth label="SKU*" variant="outlined" />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                          id="outlined-basic4"
                          fullWidth
                          label="Quantity*"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField id="outlined-basic5" fullWidth label="Brand*" variant="outlined" />
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-basic6"
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                          fullWidth
                          label="Tax Rate"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                          id="outlined-basic7"
                          fullWidth
                          label="Compared Price"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item md={6} xs={12}>
                        <TextField id="outlined-basic8" fullWidth label="Depth" variant="outlined" />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          id="outlined-basic9"
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                          fullWidth
                          label="Weight"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="number"
                          id="outlined-basic10"
                          InputProps={{ inputProps: { min: 0 } }}
                          fullWidth
                          label="SKU"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </TabPanel>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Grid container justifyContent="flex-end" spacing={gridSpacing}>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Create
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <CardMedia component="img" image={Successicon} title="prodimage" sx={{ width: 55, height: 55, mx: 'auto', my: 2 }} />
                      <Typography component="div" variant="h5">
                        Product was added
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button color="primary">Add new product</Button>
                      <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
                <Grid item>
                  <Button variant="contained">Cancel</Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProduct;
