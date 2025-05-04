import PropTypes from 'prop-types';
import React from 'react';
import { Link as ReactRouter } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Link,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Chip,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TextField,
  Avatar,
  Button,
  Card,
  CardMedia,
  CardHeader,
  Divider,
  CardContent,
  Tabs,
  Tab,
  Box
} from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import BillCard from './BillCard';

// assets
import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Imgvisa from 'assets/images/page/card-visa.png';
import Imgdiscover from 'assets/images/page/card-discover.png';
import Imgmastercard from 'assets/images/page/card-master.png';

function createData(tid, date, amount, badgetext, badgetype) {
  return { tid, date, amount, badgetext, badgetype };
}
const rows = [
  createData('12877227695', '26 Feb 2021 9:16 am', '$56.32', 'awaiting', 'secondary'),
  createData('12901477937', '30 Jan 2021 2:54 pm', '$75.56', 'Paid', 'primary'),
  createData('12767886919', '22 Jan 2021 12:01 pm', '$34.23', 'Paid', 'primary')
];

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

// ==============================|| ACCOUNT ||============================== //

const Account = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state1, setState1] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: false,
    checkedE: true,
    checkedF: false
  });
  const handleChangeState1 = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
  };
  const [state3, setState3] = React.useState({
    checkedA: true,
    checkedB: false
  });
  const handleChangeState3 = (event) => {
    setState3({ ...state3, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Breadcrumb title="User Account">
        <Typography component={ReactRouter} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          User
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Account
        </Typography>
      </Breadcrumb>
      <>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          onChange={handleChange}
          sx={{ mb: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', '& button': { minWidth: 100 } }}
          aria-label="simple tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Billing" {...a11yProps(1)} />
          <Tab label="Security" {...a11yProps(2)} />
          <Tab label="Notifications" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={4}>
              <Card>
                <CardHeader
                  title={
                    <Typography component="div" className="card-header">
                      Profile Picture
                    </Typography>
                  }
                />
                <Divider />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Avatar alt="User 1" src={Avatar1} sx={{ width: 100, height: 100, my: 0, mx: 'auto' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" align="center">
                        Upload/Change Your Profile Image
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary">
                        Upload new image
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} md={8}>
              <Card>
                <CardHeader
                  title={
                    <Typography component="div" className="card-header">
                      Edit Account Details
                    </Typography>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-basic1"
                        fullWidth
                        label="Name"
                        variant="outlined"
                        defaultValue="Josephine"
                        helperText="Helper text"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="outlined-basic6" fullWidth label="Email address" variant="outlined" defaultValue="name@example.com" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField id="outlined-basic4" fullWidth label="Company" variant="outlined" defaultValue="Materially Inc." />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField id="outlined-basic5" fullWidth label="Country" variant="outlined" defaultValue="USA" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField id="outlined-basic7" fullWidth label="Phone number" variant="outlined" defaultValue="4578-420-410 " />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField id="outlined-basic8" fullWidth label="Birthday" variant="outlined" defaultValue="31/01/2001" />
                    </Grid>

                    <Grid item xs={12}>
                      <Button variant="contained" color="primary">
                        Change Details
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4}>
              <BillCard primarytext="Bill Due" secondrytext="$150.00" linktext="Pay Now" color={theme.palette.error.main} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BillCard primarytext="Total Credits" secondrytext="1570 GB" linktext="Full Report" color={theme.palette.warning.main} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BillCard primarytext="Plan" secondrytext="Basic" linktext="Upgrade?" color={theme.palette.success.main} />
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={
                    <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                      <Grid item xs zeroMinWidth>
                        <Typography component="div" className="card-header">
                          Payment Methods
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" size="small" color="primary">
                          Add New Method
                        </Button>
                      </Grid>
                    </Grid>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <CardMedia component="img" image={Imgvisa} title="payment" />
                        </Grid>
                        <Grid item xs zeroMinWidth sx={{ minWidth: 'auto' }}>
                          <Typography variant="subtitle1">Visa card</Typography>
                          <Typography variant="subtitle2">Ending in 5269 07XX XXXX 8110</Typography>
                        </Grid>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Chip label="Default" size="small" />
                            </Grid>
                            <Grid item>
                              <Typography variant="subtitle2" sx={{ opacity: '.5' }}>
                                |
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Link href="#">Edit</Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ opacity: '.5' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <CardMedia component="img" image={Imgdiscover} title="payment" />
                        </Grid>
                        <Grid item xs zeroMinWidth sx={{ minWidth: 'auto' }}>
                          <Typography component="div" variant="subtitle1">
                            Discover
                          </Typography>
                          <Typography variant="subtitle2">Ending in 6109 07XX XXXX 8020</Typography>
                        </Grid>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Link href="#">Make Default</Link>
                            </Grid>
                            <Grid item>
                              <Typography variant="subtitle2" sx={{ opacity: '.5' }}>
                                |
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Link href="#">Edit</Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider sx={{ opacity: '.5' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <CardMedia component="img" image={Imgmastercard} title="payment" />
                        </Grid>
                        <Grid item xs zeroMinWidth sx={{ minWidth: 'auto' }}>
                          <Typography component="div" variant="subtitle1">
                            Mastercard
                          </Typography>
                          <Typography variant="subtitle2">Ending in 7278 07XX XXXX 4290</Typography>
                        </Grid>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Link href="#">Make Default</Link>
                            </Grid>
                            <Grid item>
                              <Typography variant="subtitle2" sx={{ opacity: '.5' }}>
                                |
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Link href="#">Edit</Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={
                    <Typography component="div" className="card-header">
                      Billing History
                    </Typography>
                  }
                />
                <Divider />
                <CardContent sx={{ p: 0, pb: 0, overflowX: 'auto' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order No.</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.tid}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.amount}</TableCell>
                          <TableCell>
                            <Chip color={row.badgetype} label={row.badgetext} size="small" />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={8}>
              <Grid container spacing={gridSpacing}>
                <Grid item>
                  <Card>
                    <CardHeader
                      title={
                        <Typography component="div" className="card-header">
                          Change Password
                        </Typography>
                      }
                    />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                          <TextField id="outlined-basic9" fullWidth type="password" label="Current password" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField id="outlined-basic10" fullWidth type="password" label="New Password" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField id="outlined-basic11" fullWidth type="password" label="Re-enter New Password" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                          <Button variant="contained" color="primary">
                            Change Password
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={gridSpacing}>
                <Grid item>
                  <Card>
                    <CardHeader
                      title={
                        <Typography component="div" className="card-header">
                          Delete Account
                        </Typography>
                      }
                    />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="subtitle2">
                            To deactivate your account, first delete its resources. If you are the only owner of any teams, either assign
                            another owner or deactivate the team.
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button variant="contained" size="small">
                            Deactivate Account
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={8}>
              <Grid container spacing={gridSpacing}>
                <Grid item>
                  <Card>
                    <CardHeader
                      title={
                        <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                          <Grid item xs zeroMinWidth>
                            <Typography component="div" className="card-header">
                              Subscription Preference Center
                            </Typography>
                          </Grid>
                        </Grid>
                      }
                    />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                          <Typography variant="subtitle1" align="left">
                            I would like to receive:
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup>
                            <Grid container spacing={0}>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={state1.checkedA} onChange={handleChangeState1} name="checkedA" color="primary" />
                                  }
                                  label="Product Announcements and Updates"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={state1.checkedB} onChange={handleChangeState1} name="checkedB" color="primary" />
                                  }
                                  label="Events and Meetups"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={state1.checkedC} onChange={handleChangeState1} name="checkedC" color="primary" />
                                  }
                                  label="User Research Surveys"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={state1.checkedD} onChange={handleChangeState1} name="checkedD" color="primary" />
                                  }
                                  label="Hatch Startup Program"
                                />
                              </Grid>
                            </Grid>
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Card>
                <CardHeader
                  title={
                    <Typography component="div" className="card-header">
                      Opt me out instead
                    </Typography>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormGroup>
                        <Grid container spacing={0}>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={<Checkbox onChange={handleChangeState3} name="checkedA" color="primary" />}
                              label="Unsubscribe me from all of the above"
                            />
                          </Grid>
                        </Grid>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" size="small" color="primary">
                        Update my preferences
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </>
    </>
  );
};

export default Account;
