import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Grid,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Fab,
  Select,
  Input,
  CircularProgress,
  CardMedia,
  InputLabel,
  Button,
  Chip,
  TextField,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import MUIDataTable from 'mui-datatables';
import InputAdornment from '@mui/material/InputAdornment';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import Imgprod1 from 'assets/images/widget/prod1.jpg';
import Imgprod2 from 'assets/images/widget/prod2.jpg';
import Imgprod3 from 'assets/images/widget/prod3.jpg';
import Imgprod4 from 'assets/images/widget/prod4.jpg';

// custom style
const UserAddDialog = styled((props) => <Dialog {...props} />)(() => ({
  '& .MuiDialog-container': {
    justifyContent: 'flex-end',
    '& .MuiDialog-paper': {
      margin: '0px',
      borderRadius: '0px',
      maxWidth: 450,
      maxHeight: '100%'
    }
  }
}));

const FileContainer = styled((props) => <InputLabel {...props} />)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: '30px 0',
  textAlign: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  marginBottom: '24px'
}));

const UploadImg = styled((props) => <div {...props} />)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '55px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.default
}));

const initialData = [
  ['#790841', 'Samsung TV  32” LED Retina', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Iphone 11 Pro Max', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Samsung TV  32” LED Retina', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Iphone 11 Pro Max', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Samsung TV  32” LED Retina', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Iphone 11 Pro Max', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Samsung TV  32” LED Retina', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Iphone 11 Pro Max', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Samsung TV  32” LED Retina', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Iphone 11 Pro Max', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Samsung TV  32” LED Retina', 'Television', '$2500', '12.07.2018', '3'],
  ['#790841', 'Iphone 11 Pro Max', 'Television', '$2500', '12.07.2018', '3']
];
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  chip: {
    margin: 2
  }
};

const names = ['Html', 'Scss', 'Js', 'React', 'Ionic', 'Angular', 'css', 'Php', 'View'];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

// ==============================|| PRODUCT ||============================== //

const Product = () => {
  const theme = useTheme();

  const [data] = useState(initialData);
  const columns = [
    {
      name: 'ID',
      options: {
        filter: true
      }
    },
    {
      name: 'Product Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Category',
      options: {
        filter: true
      }
    },
    {
      name: 'Price',
      options: {
        filter: true
      }
    },
    {
      name: 'Date',
      options: {
        filter: true
      }
    },
    {
      name: 'QTY',
      options: {
        filter: true
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
            <Box component="span" m={1}>
              <IconButton aria-controls="simple-menu" aria-label="More" aria-haspopup="true" size="large">
                <MoreHorizOutlinedIcon />
              </IconButton>
            </Box>
          );
        }
      }
    }
  ];
  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
    onChangeRowsPerPage: (numberOfRows) => console.log('numberOfRows: ', numberOfRows),
    onChangePage: (currentPage) => console.log('currentPage: ', currentPage)
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpendialog = () => {
    setOpen(true);
  };
  const handleClosedialog = () => {
    setOpen(false);
  };
  const [currency, setCurrency] = React.useState('2');
  const handleChangeselect = (event) => {
    setCurrency(event.target.value);
  };
  const [progress, setProgress] = React.useState(0);
  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
      } else {
        const diff = Math.random() * 10;
        setProgress(progress + diff);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [personName, setPersonName] = React.useState([]);

  const handleChangetagselect = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <>
      <Breadcrumb title="Product">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          E-commerce
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Product
        </Typography>
      </Breadcrumb>
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid item>
          <Fab color="primary" aria-label="Add" size="small" sx={{ mb: 3 }} onClick={handleClickOpendialog}>
            <AddIcon />
          </Fab>
          <UserAddDialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClosedialog}>
            <DialogTitle>{'Add Product'}</DialogTitle>
            <DialogContent>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <TextField
                    sx={{ mt: 0.75 }}
                    id="outlined-basic1"
                    fullWidth
                    label="Enter Product Name*"
                    variant="outlined"
                    defaultValue="Iphone 11 Pro Max"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic2"
                    fullWidth
                    multiline
                    maxRows={4}
                    label="Enter Product Details"
                    variant="outlined"
                    defaultValue="Fundamentally redesigned and reengineered The Apple Watch display yet."
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select Category*"
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
                <Grid item xs={12}>
                  <TextField id="outlined-basic3" fullWidth label="Barcode*" variant="outlined" defaultValue="8390590339828" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic4" fullWidth label="SKU*" variant="outlined" defaultValue="H8J702729P" />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Price*"
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
                <Grid item md={6} xs={12}>
                  <TextField
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    id="outlined-basic5"
                    fullWidth
                    label="Quantity*"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField id="outlined-basic6" fullWidth label="Brand*" variant="outlined" defaultValue="Samsung" />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Weight"
                    type="number"
                    InputProps={{ inputProps: { min: 0 }, endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    id="outlined-basic7"
                    fullWidth
                    label="Extra Shipping Free"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="body2" align="left">
                        Product Images*
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box>
                        <TextField type="file" id="fileupload" fullWidth label="Enter SKU" variant="outlined" sx={{ display: 'none' }} />
                        <FileContainer htmlFor="fileupload">
                          <CloudUploadIcon sx={{ verticalAlign: 'sub', mr: 0.6 }} /> Drop file here to upload
                        </FileContainer>
                      </Box>
                      <Grid container spacing={1}>
                        <Grid item>
                          <UploadImg>
                            <CardMedia component="img" sx={{ verticalAlign: 'sub', mr: 0.6 }} image={Imgprod1} title="prodimage" />
                          </UploadImg>
                        </Grid>
                        <Grid item>
                          <UploadImg>
                            <CardMedia component="img" sx={{ verticalAlign: 'sub', mr: 0.6 }} image={Imgprod2} title="prodimage" />
                          </UploadImg>
                        </Grid>
                        <Grid item>
                          <UploadImg>
                            <CardMedia component="img" sx={{ verticalAlign: 'sub', mr: 0.6 }} image={Imgprod3} title="prodimage" />
                          </UploadImg>
                        </Grid>
                        <Grid item>
                          <UploadImg>
                            <CardMedia component="img" sx={{ verticalAlign: 'sub', mr: 0.6 }} image={Imgprod4} title="prodimage" />
                            <CircularProgress
                              variant="determinate"
                              value={progress}
                              color="secondary"
                              sx={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                background: 'rgba(255, 255, 255, .8)',
                                width: '100% !important',
                                height: '100% !important',
                                p: 1.5
                              }}
                            />
                          </UploadImg>
                        </Grid>
                        <Grid item>
                          <UploadImg>
                            <Fab color="secondary" size="small">
                              <CloseIcon sx={{ verticalAlign: 'sub', mr: 0.6 }} />
                            </Fab>
                          </UploadImg>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="body2" align="left">
                        Tags
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box>
                        <Select
                          id="demo-mutiple-chip"
                          multiple
                          fullWidth
                          value={personName}
                          onChange={handleChangetagselect}
                          input={<Input id="select-multiple-chip" />}
                          renderValue={(selected) => (
                            <Box>
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name} sx={getStyles(name, personName, theme)}>
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary">
                Create
              </Button>
              <Button variant="text" onClick={handleClosedialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </UserAddDialog>
        </Grid>
      </Grid>
      <MUIDataTable title="Product List" data={data} columns={columns} options={options} />
    </>
  );
};

export default Product;
