import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Grid,
  Link,
  Typography,
  Button,
  IconButton,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Slide,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Card,
  CardContent,
  TextField,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tabs,
  Tab
} from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

// third party
import ReactToPrint from 'react-to-print';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import logo from 'assets/images/logo-dark.svg';
import logoLight from 'assets/images/logo.svg';

// custom style
const InvoiceTable = styled((props) => <Table {...props} />)(({ theme }) => ({
  '& tr:last-child td': {
    borderBottom: 'none'
  },
  '& thead tr th': {
    borderBottom: 'none'
  },
  '& th:first-of-type, & td:first-of-type': {
    paddingLeft: '40px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '20px'
    }
  },
  '& th:last-child, & td:last-child': {
    paddingRight: '70px',
    [theme.breakpoints.down('md')]: {
      paddingRight: '50px'
    }
  }
}));

const AccountTabs = styled((props) => <Tabs {...props} />)(() => ({
  marginBottom: '24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  '.MuiButtonBase-root': {
    minWidth: '120px',
    minHeight: 'auto',
    '.MuiTouchRipple-root': {
      flexDirection: 'row',
      '.MuiSvgIcon-root': {
        marginRight: '10px',
        marginBottom: '0 !important'
      }
    }
  }
}));

const TimeLine = styled((props) => <Timeline {...props} />)(({ theme }) => ({
  '.MuiTimelineItem-root': {
    marginBottom: '14px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      '.MuiGrid-item': {
        paddingLeft: '0px',
        paddingRight: '0px'
      },
      '.MuiTypography-root': {
        textAlign: 'left'
      }
    }
  },
  [theme.breakpoints.down('md')]: {
    padding: '0px'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </div>
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
function createData(product, description, quantity, amount, total) {
  return { product, description, quantity, amount, total };
}
const rows = [
  createData('Logo Design', 'lorem ipsum dolor sit amet, consectetur adipisicing elit', '6', '$200.00', '$1200.00'),
  createData('Landing Page', 'lorem ipsum dolor sit amet, consectetur adipisicing elit', '7', '$100.00', '$700.00'),
  createData('Admin Template', 'lorem ipsum dolor sit amet, consectetur adipisicing elit', '5', '$150.00', '$750.00')
];

// ==============================|| ORDER DETAILS ||============================== //

const OrderDetails = () => {
  const componentRef = useRef();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpendialog = () => {
    setOpen(true);
  };
  const handleClosedialog = () => {
    setOpen(false);
  };
  return (
    <>
      <Breadcrumb title="Order Details">
        <Typography component={RouterLink} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          E-commerce
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Order Details
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <AccountTabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="simple tabs example">
            <Tab icon={<DescriptionTwoToneIcon />} iconPosition="start" label="Details" {...a11yProps(0)} />
            <Tab icon={<ReceiptTwoToneIcon />} iconPosition="start" label="Invoice" {...a11yProps(1)} />
            <Tab icon={<LocalShippingTwoToneIcon />} iconPosition="start" label="Status" {...a11yProps(2)} />
          </AccountTabs>
          <TabPanel value={value} index={0}>
            <Card>
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item sm zeroMinWidth>
                    <Typography component="div" variant="h5">
                      Customer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Placed on 12.07.2018 10:00</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Typography variant="subtitle2">
                          <CalendarTodayTwoToneIcon
                            sx={{
                              width: 15,
                              height: 15,
                              verticalAlign: 'text-top',
                              mr: 0.6,
                              mt: 0.25
                            }}
                          />{' '}
                          Sophia Hale
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          <PhoneAndroidTwoToneIcon
                            sx={{
                              width: 15,
                              height: 15,
                              verticalAlign: 'text-top',
                              mr: 0.6,
                              mt: 0.25
                            }}
                          />{' '}
                          070 123 4567
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          <EmailTwoToneIcon
                            sx={{
                              width: 15,
                              height: 15,
                              verticalAlign: 'text-top',
                              mr: 0.6,
                              mt: 0.25
                            }}
                          />{' '}
                          example@mail.com
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item sm={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="div" variant="h5">
                          Payment method
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="h6">
                              Credit Card
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Transaction ID : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                000001-TXHQ
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Amount : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                $2500
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="div" variant="h5">
                          Shipping method
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="h6">
                              Carrier
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Tracking Code : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                FX-012345-6
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Date : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                12.15.2018
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="div" variant="h5"></Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Fulfilment status : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Delivered
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Payment status : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Paid
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item sm={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="div" variant="h5">
                          Billing address
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              First name : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Joseph
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Last name : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                William
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Address : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                4898 Joanne Lane street
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              City : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Boston
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Country : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                United States
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              State : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Massachusetts
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Zip code : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                02110
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Phone : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                +1 (070) 123-4567
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="div" variant="h5">
                          Shipping address
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              First name : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Sara
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Last name : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Soudein
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Address : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                4898 Joanne Lane street
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              City : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Boston
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Country : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                United States
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              State : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                Massachusetts
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Zip code : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                02110
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                              Phone : &nbsp;
                              <Typography component="span" variant="subtitle2">
                                +1 (070) 123-4567
                              </Typography>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={{ overflowX: 'auto' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>DESCRIPTION</TableCell>
                          <TableCell align="right">QUANTITY</TableCell>
                          <TableCell align="right">AMOUNT</TableCell>
                          <TableCell align="right">TOTAL</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Typography component="div" align="left" variant="subtitle1">
                                {row.product}
                              </Typography>
                              <Typography component="div" align="left" variant="subtitle2">
                                {row.description}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                            <TableCell align="right">
                              <IconButton color="primary" ara-label="delete" size="large">
                                <DeleteTwoToneIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Grid>
              </Grid>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={gridSpacing}>
                      <Grid item sm={6} md={4}>
                        <Button variant="contained" color="primary">
                          Button
                        </Button>
                      </Grid>
                      <Grid item sm={6} md={4}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Grid container spacing={1}>
                              <Grid item xs={6}>
                                <Typography align="right" variant="subtitle1">
                                  Sub Total :
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography align="right" variant="subtitle2">
                                  $4725.00
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography align="right" variant="subtitle1">
                                  Taxes (10%) :
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography align="right" variant="subtitle2">
                                  $57.00
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography align="right" variant="subtitle1">
                                  Discount (5%) :
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography align="right" variant="subtitle2">
                                  $45.00
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider />
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container spacing={1}>
                              <Grid item xs={6}>
                                <Typography align="right" color="primary" component="div" variant="subtitle1">
                                  Total :
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography align="right" color="primary" component="div" variant="subtitle1">
                                  $4827.00
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Card
              sx={{
                maxWidth: 850,
                mx: 'auto',
                mb: 2.5,
                mt: 0,
                '& .MuiCardContent-root': {
                  py: { md: 5.5, xs: 3.75 },
                  px: { md: 5, xs: 2.5 }
                }
              }}
              ref={componentRef}
            >
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                      <Grid item>
                        <Typography component="div" variant="h4">
                          Invoice #125863478945
                        </Typography>
                      </Grid>
                      <Grid item>
                        {theme.palette.mode === 'light' && <img src={logo} alt="Materially" style={{ maxWidth: '100%', width: 120 }} />}
                        {theme.palette.mode === 'dark' && <img src={logoLight} alt="Materially" style={{ maxWidth: '100%', width: 120 }} />}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={0}>
                      <Grid item xs={12}>
                        <Typography component="div" variant="subtitle1">
                          Demo Company Inc.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="div" variant="body2">
                          1065 Mandan Road, Columbia MO,
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="div" variant="body2">
                          Missouri. (123)-65202
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="div" variant="body2">
                          <Link href="#">demo@gmail.com</Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="div" variant="body2">
                          (+91) 9999 999 999
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item sm={5}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="h6">
                              Customer :
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container spacing={0}>
                              <Grid item xs={12}>
                                <Typography component="div" variant="body2">
                                  JOSEPHIN VILLA
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography component="div" variant="body2">
                                  1065 Mandan Road, Columbia MO,
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography component="div" variant="body2">
                                  Missouri. (123)-65202
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography component="div" variant="body2">
                                  (+61) 9999 567 891
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography component="div" href="#" variant="body2">
                                  <Link href="#">demo@gmail.com</Link>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={4}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography component="div" variant="h6">
                              Order Details :
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container spacing={0}>
                              <Grid item xs={4}>
                                <Typography component="div" variant="body2">
                                  Date :
                                </Typography>
                              </Grid>
                              <Grid item xs={8}>
                                <Typography component="div" variant="body2">
                                  November 14
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Typography component="div" variant="body2">
                                  Status :
                                </Typography>
                              </Grid>
                              <Grid item xs={8}>
                                <Typography component="div" variant="body2">
                                  Pending
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Typography component="div" variant="body2">
                                  Id :
                                </Typography>
                              </Grid>
                              <Grid item xs={8}>
                                <Typography component="div" variant="body2">
                                  #146859
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={{ overflowX: 'auto' }}>
                    <InvoiceTable>
                      <TableHead>
                        <TableRow>
                          <TableCell>DESCRIPTION</TableCell>
                          <TableCell align="right">QUANTITY</TableCell>
                          <TableCell align="right">AMOUNT</TableCell>
                          <TableCell align="right">TOTAL</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Typography component="div" align="left" variant="subtitle1">
                                {row.product}
                              </Typography>
                              <Typography component="div" align="left" variant="subtitle2">
                                {row.description}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </InvoiceTable>
                  </Box>
                </Grid>
              </Grid>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        backgroundColor: theme.palette.background.default,
                        py: 3.1,
                        px: 3.75,
                        borderRadius: '4px'
                      }}
                    >
                      <Grid container justifyContent="flex-end" spacing={gridSpacing}>
                        <Grid item sm={6} md={4}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <Grid container spacing={1}>
                                <Grid item xs={6}>
                                  <Typography align="right" variant="body2">
                                    Sub Total :
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography align="right" variant="body2">
                                    $4725.00
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography align="right" variant="body2">
                                    Taxes (10%) :
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography align="right" variant="body2">
                                    $57.00
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography align="right" variant="body2">
                                    Discount (5%) :
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography align="right" variant="body2">
                                    $45.00
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Divider />
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container spacing={1}>
                                <Grid item xs={6}>
                                  <Typography align="right" color="primary" component="div" variant="h6">
                                    Total :
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography align="right" color="primary" component="div" variant="h6">
                                    $4827.00
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="div" variant="h6">
                          Terms and Condition :
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="div" variant="body2">
                          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Grid
              container
              spacing={1}
              justifyContent="flex-end"
              sx={{
                maxWidth: 850,
                mx: 'auto',
                mb: 2.5,
                mt: 0,
                '& .MuiCardContent-root': {
                  py: { md: 5.5, xs: 3.75 },
                  px: { md: 5, xs: 2.5 }
                }
              }}
            >
              <Grid item>
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained" color="primary">
                      Print
                    </Button>
                  )}
                  content={() => componentRef.current}
                />
              </Grid>
              <Grid item>
                <Button variant="text" color="primary">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    ORDER STATUS
                  </Typography>
                }
              />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              backgroundColor: theme.palette.background.default
                            }}
                          >
                            <Typography component="div" variant="h6">
                              Order Place Date
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography sx={{ mb: 1.25 }} variant="body2">
                              Order Place Date
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={2}>
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              backgroundColor: theme.palette.background.default
                            }}
                          >
                            <Typography component="div" variant="h6">
                              Order Status
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography sx={{ mb: 1.25 }} variant="body2">
                              Processing
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              backgroundColor: theme.palette.background.default
                            }}
                          >
                            <Typography component="div" variant="h6">
                              Delivery Option
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography sx={{ mb: 1.25 }} variant="body2">
                              Fedex Express Delivery
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              backgroundColor: theme.palette.background.default
                            }}
                          >
                            <Typography component="div" variant="h6">
                              Payment
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography sx={{ mb: 1.25 }} variant="body2">
                              Credit Card
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Grid container spacing={1}>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              backgroundColor: theme.palette.background.default
                            }}
                          >
                            <Typography component="div" variant="h6">
                              Order Amount
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography sx={{ mb: 1.25 }} variant="body2">
                              $90,020
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={8} lg={9}>
                    <TimeLine>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography component="div" variant="h6">
                            Order Placed
                          </Typography>
                          <Typography variant="body2">12 jun</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            color="primary"
                            sx={{
                              p: 0,
                              display: { xs: 'none', md: 'inherit' }
                            }}
                          >
                            <FiberManualRecordIcon sx={{ width: 14, height: 14 }} />
                          </TimelineDot>
                          <TimelineConnector sx={{ backgroundColor: theme.palette.primary.main }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ flex: '3' }}>
                          <List
                            component="div"
                            sx={{
                              backgroundColor: theme.palette.background.default,
                              pt: 0,
                              pb: 0
                            }}
                          >
                            <ListItem component="div">
                              <ListItemText primary="The order was validated." />
                            </ListItem>
                            <Divider />
                            <ListItem component="div">
                              <ListItemText primary="The order was placed." />
                            </ListItem>
                            <Divider />
                            <ListItem component="div">
                              <ListItemText primary="The order was placed." />
                            </ListItem>
                          </List>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography component="div" variant="h6">
                            Order Processing
                          </Typography>
                          <Typography variant="body2">14 jun</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            color="primary"
                            sx={{
                              p: 0,
                              display: { xs: 'none', md: 'inherit' }
                            }}
                          >
                            <FiberManualRecordIcon sx={{ width: 14, height: 14 }} />
                          </TimelineDot>
                          <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ flex: '3' }}>
                          <List
                            component="div"
                            sx={{
                              backgroundColor: theme.palette.background.default,
                              pt: 0,
                              pb: 0
                            }}
                          >
                            <ListItem component="div">
                              <ListItemText primary="Payment transaction [method: Credit Card, type: sale, amount: $90,020, status: Processing ]" />
                            </ListItem>
                          </List>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography component="div" variant="h6">
                            Order Shipping
                          </Typography>
                          <Typography variant="body2">16 Jun</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            color="secondary"
                            sx={{
                              p: 0,
                              display: { xs: 'none', md: 'inherit' }
                            }}
                          >
                            <FiberManualRecordIcon sx={{ width: 14, height: 14 }} />
                          </TimelineDot>
                          <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ flex: '3' }}>
                          <List
                            component="div"
                            sx={{
                              backgroundColor: theme.palette.background.default,
                              pt: 0,
                              pb: 0
                            }}
                          >
                            <ListItem component="div">
                              <ListItemText primary="Sent a notification to the client by e-mail." />
                            </ListItem>
                          </List>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography component="div" variant="h6">
                            Order Delivered
                          </Typography>
                          <Typography variant="body2">17 Jun</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            color="secondary"
                            sx={{
                              p: 0,
                              display: { xs: 'none', md: 'inherit' }
                            }}
                          >
                            <FiberManualRecordIcon sx={{ width: 14, height: 14 }} />
                          </TimelineDot>
                          <TimelineConnector sx={{ backgroundColor: theme.palette.secondary.main }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ flex: '3' }}>
                          <List
                            component="div"
                            sx={{
                              backgroundColor: theme.palette.background.default,
                              pt: 0,
                              pb: 0
                            }}
                          >
                            <ListItem component="div">
                              <ListItemText primary="Order Delivered" />
                            </ListItem>
                          </List>
                        </TimelineContent>
                      </TimelineItem>
                    </TimeLine>
                    <Grid container spacing={1} justifyContent="center">
                      <Grid item>
                        <Box sx={{ display: { md: 'none', xs: 'block' } }}>
                          <Button variant="contained" color="primary" onClick={handleClickOpendialog}>
                            Write a Review
                          </Button>
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
                                  borderRadius: '0px',
                                  maxWidth: 450,
                                  maxHeight: '100%',
                                  height: '100vh'
                                }
                              }
                            }}
                          >
                            <DialogContent>
                              <Grid container spacing={1}>
                                <Grid item xs={12}>
                                  <TextField id="outlined-basic1" fullWidth multiline rows={10} label="Write a Review" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}></Grid>
                              </Grid>
                            </DialogContent>
                            <DialogActions>
                              <Button variant="contained" color="primary">
                                Post Review
                              </Button>
                              <Button variant="text" onClick={handleClosedialog} color="secondary">
                                Close
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4} lg={3}>
                    <Grid container spacing={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                      <Grid item xs={12}>
                        <TextField id="outlined-basic2" fullWidth multiline rows={10} label="Write a Review" variant="outlined" />
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                          Post Review
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderDetails;
