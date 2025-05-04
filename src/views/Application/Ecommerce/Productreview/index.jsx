import React, { useState } from 'react';

// material-ui
import {
  Grid,
  Link,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  CardContent,
  TextField,
  MenuItem,
  useTheme
} from '@mui/material';

import MUIDataTable from 'mui-datatables';
import Rating from '@mui/material/Rating';

// project import
import { gridSpacing } from 'config.js';
import Breadcrumb from 'component/Breadcrumb';

// assets
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const reviewstate = [
  {
    value: '1',
    label: 'Published'
  },
  {
    value: '2',
    label: 'Pending'
  },
  {
    value: '3',
    label: 'confirm'
  }
];

// ==============================|| PRODUCT REVIEW ||============================== //

const ProductReview = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClickOpendialog = () => {
    setOpen(true);
  };
  const handleClosedialog = () => {
    setOpen(false);
  };
  const initialData = [
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '4',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', theme.palette.primary.main],
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '2',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', theme.palette.primary.main],
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '4',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', theme.palette.primary.main],
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '2',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', theme.palette.primary.main],
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '4',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', theme.palette.primary.main],
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '2',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', theme.palette.primary.main],
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '4',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', theme.palette.primary.main],
    [
      'Apple Watch Series 4',
      'Joseph William',
      'The Series 4 is a significant step...',
      '2',
      '12.07.2018',
      'Published',
      theme.palette.success.main
    ],
    [
      'Apple Watch Series 4',
      'Akshay Handge',
      'The Series 4 is a significant step...',
      '5',
      '12.07.2018',
      'Pending',
      theme.palette.error.main
    ],
    ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', theme.palette.primary.main]
  ];
  const [data] = useState(initialData);

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    selectableRows: 'multiple',
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    rowsPerPage: 10,
    download: true,
    print: true,
    search: true,
    viewColumns: true
  };

  const columns = [
    {
      name: 'Product',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][0];
        }
      }
    },
    {
      name: 'Author',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][1];
        }
      }
    },
    {
      name: 'Review',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][2];
        }
      }
    },
    {
      name: 'Rating',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              {data[dataIndex][3] >= 1 ? (
                <StarOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              ) : (
                <StarBorderOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              )}
              {data[dataIndex][3] >= 2 ? (
                <StarOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              ) : (
                <StarBorderOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              )}
              {data[dataIndex][3] >= 3 ? (
                <StarOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              ) : (
                <StarBorderOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              )}
              {data[dataIndex][3] >= 4 ? (
                <StarOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              ) : (
                <StarBorderOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              )}
              {data[dataIndex][3] >= 5 ? (
                <StarOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              ) : (
                <StarBorderOutlinedIcon sx={{ color: theme.palette.warning.main }} />
              )}
            </>
          );
        }
      }
    },
    {
      name: 'Date',
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex][4];
        }
      }
    },
    {
      name: 'Status',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Typography align="left" component="div" variant="body2">
              <FiberManualRecordIcon sx={{ color: data[dataIndex][6], width: 15, height: 15, verticalAlign: 'text-top', mr: 0.6 }} />{' '}
              {data[dataIndex][5]}
            </Typography>
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
            <>
              <IconButton color="primary" size="large">
                <VisibilityTwoToneIcon />
              </IconButton>
              <IconButton color="secondary" onClick={handleClickOpendialog} size="large">
                <EditTwoToneIcon />
              </IconButton>
            </>
          );
        }
      }
    }
  ];

  const [currency, setCurrency] = React.useState('1');
  const handleChangeselect = (event) => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = React.useState(2);

  return (
    <>
      <Breadcrumb title="Product Reviews">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          E-commerce
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Product Reviews
        </Typography>
      </Breadcrumb>
      <Dialog
        open={open}
        onClose={handleClosedialog}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiDialog-paper': {
              maxWidth: 400
            }
          }
        }}
      >
        <DialogTitle>{'Edit Review'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={gridSpacing} sx={{ mt: 0, mb: 0 }}>
            <Grid item xs={12}>
              <TextField id="outlined-basic1" fullWidth label="Product " variant="outlined" defaultValue="Apple Watch Series 4" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic2" fullWidth label="Author " variant="outlined" defaultValue="Joseph William" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic3"
                fullWidth
                multiline
                rows={4}
                label="Text of review"
                variant="outlined"
                defaultValue="If you're coming from a Series 3, the choice is more difficult. The Series 4 is undoubtedly the better device. And if you care about fall detection, the ECG app, or a larger screen then upgrading makes sense. But I think most people will remain satisfied with their Series 3s."
              />
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" component="div" variant="body2">
                Rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-select-currency"
                select
                label="Status"
                value={currency}
                fullWidth
                variant="outlined"
                onChange={handleChangeselect}
              >
                {reviewstate.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
      </Dialog>
      <CardContent
        sx={{ '.tss-69kwe1-MUIDataTableToolbarSelect-root': { px: theme.direction === 'rtl' ? 3 : 0 } }}
        className="p-0 responsive-table-card"
      >
        <MUIDataTable
          title="Product Reviews"
          data={data}
          columns={columns}
          sx={{
            '& tr td:last-child': {
              pt: 0,
              pb: 0
            }
          }}
          options={options}
        />
      </CardContent>
    </>
  );
};

export default ProductReview;
