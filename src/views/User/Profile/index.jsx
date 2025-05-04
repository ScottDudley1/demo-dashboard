import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  MenuItem,
  Switch,
  Tabs,
  Tab,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  TextField,
  Typography,
  ListItemButton,
  Paper
} from '@mui/material';

// project import
import { gridSpacing } from 'config.js';
import Breadcrumb from 'component/Breadcrumb';
import Alert from 'component/Alert';
import Avatar from 'component/Avatar';

// assets
import AlertTitle from '@mui/material/AlertTitle';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';

import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';

import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';

import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import Avatar3 from 'assets/images/users/avatar-3.jpg';

// custom style
const AccountTabs = styled((props) => (
  <Tabs indicatorColor="primary" textColor="primary" aria-label="simple tabs example" variant="scrollable" {...props} />
))(() => ({
  marginBottom: '24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  '.MuiButtonBase-root': {
    minWidth: '100px',
    minHeight: 'auto',
    '.MuiSvgIcon-root': {
      marginRight: '5px',
      marginBottom: '0 !important'
    }
  }
}));

const CardTitle = styled((props) => <Typography component="span" {...props} />)(() => ({
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center'
}));

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

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress aria-label="label" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Full Name', ':', 'Akshay Handge'),
  createData('Fathers Name', ':', 'Mr. Deepak Handge'),
  createData('Address', ':', 'Street 110-B Kalani Bag, Dewas, M.P. INDIA'),
  createData('Zip Code', ':', '12345'),
  createData('Phone', ':', '+0 123456789 , +0 123456789'),
  createData('Email', ':', 'support@example.com'),
  createData('Website', ':', 'http://example.com')
];

const currencies = [
  {
    value: 'Washington',
    label: 'Washington'
  },
  {
    value: 'India',
    label: 'India'
  },
  {
    value: 'Africa',
    label: 'Africa'
  },
  {
    value: 'New-York',
    label: 'New York'
  },
  {
    value: 'Malesia',
    label: 'Malesia'
  }
];
const experiences = [
  {
    value: 'Startup',
    label: 'Startup'
  },
  {
    value: '2-year',
    label: '2 year'
  },
  {
    value: '3-year',
    label: '3 year'
  },
  {
    value: '4-year',
    label: '4 year'
  },
  {
    value: '5-year',
    label: '5 year'
  }
];

// ==============================|| PROFILE ||============================== //

const Profile = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currency, setCurrency] = React.useState('Washington');
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  const [experience, setExperience] = React.useState('Startup');
  const handleChange2 = (event) => {
    setExperience(event.target.value);
  };

  const [state1, setState1] = React.useState({
    checkedA: true,
    checkedB: false
  });
  const [state2, setState2] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: true
  });
  const [state3, setState3] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false
  });
  const handleChangeswitch1 = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
  };
  const handleChangeswitch2 = (event) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });
  };
  const handleChangeswitch3 = (event) => {
    setState3({ ...state3, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true
  });
  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Breadcrumb title="User Profile" divider={false}>
            <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
              Home
            </Typography>
            <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
              User
            </Typography>
            <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
              Profile
            </Typography>
          </Breadcrumb>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <AccountTabs value={value} onChange={handleChange}>
            <Tab
              icon={<AccountCircleTwoToneIcon />}
              iconPosition="start"
              label={
                <Typography sx={{ textTransform: 'capitalize' }} component="span" variant="subtitle1">
                  Profile
                </Typography>
              }
              {...a11yProps(0)}
            />
            <Tab
              icon={<DescriptionTwoToneIcon />}
              iconPosition="start"
              label={
                <Typography sx={{ textTransform: 'capitalize' }} component="span" variant="subtitle1">
                  Personal Details
                </Typography>
              }
              {...a11yProps(1)}
            />
            <Tab
              icon={<LibraryBooksTwoToneIcon />}
              iconPosition="start"
              label={
                <Typography sx={{ textTransform: 'capitalize' }} component="span" variant="subtitle1">
                  My Account
                </Typography>
              }
              {...a11yProps(2)}
            />
            <Tab
              icon={<LockTwoToneIcon />}
              iconPosition="start"
              label={
                <Typography sx={{ textTransform: 'capitalize' }} component="span" variant="subtitle1">
                  Change Password
                </Typography>
              }
              {...a11yProps(3)}
            />
            <Tab
              icon={<MailTwoToneIcon />}
              iconPosition="start"
              label={
                <Typography sx={{ textTransform: 'capitalize' }} component="span" variant="subtitle1">
                  settings
                </Typography>
              }
              {...a11yProps(4)}
            />
          </AccountTabs>
          <TabPanel value={value} index={0}>
            <Grid container spacing={gridSpacing}>
              <Grid item lg={12} xs={12}>
                <Alert severity="error">
                  <AlertTitle>Email Verification</AlertTitle>
                  Your email is not confirmed. Please check your inbox{' '}
                  <Typography component={Link} to="#" color="inherit" variant="subtitle1">
                    Resend confirmation
                  </Typography>
                </Alert>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Card sx={{ width: '100%' }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar3} />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Typography align="left" variant="subtitle1">
                          Suzen
                        </Typography>
                        <Typography align="left" variant="subtitle2" color="inherit">
                          UI/UX Designer
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Chip size="small" label="Pro" color="primary" />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton>
                      <ListItemIcon>
                        <MailTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary={<Typography variant="subtitle1">Email</Typography>} />
                      <ListItemSecondaryAction>
                        <Typography variant="subtitle2" align="right">
                          demo@sample.com
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemIcon>
                        <PhonelinkRingTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary={<Typography variant="subtitle1">Phone</Typography>} />
                      <ListItemSecondaryAction>
                        <Typography variant="subtitle2" align="right">
                          (+99) 9999 999 999
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemIcon>
                        <PinDropTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary={<Typography variant="subtitle1">Location</Typography>} />
                      <ListItemSecondaryAction>
                        <Typography variant="subtitle2" align="right">
                          Melbourne
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </List>
                  <CardContent>
                    <Grid container spacing={0}>
                      <Grid item xs={4}>
                        <Typography align="center" variant="subtitle1">
                          37
                        </Typography>
                        <Typography align="center" variant="subtitle2">
                          Mails
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography align="center" variant="subtitle1">
                          2749
                        </Typography>
                        <Typography align="center" variant="subtitle2">
                          Followers
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography align="center" variant="subtitle1">
                          678
                        </Typography>
                        <Typography align="center" variant="subtitle2">
                          Following
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={8} xs={12}>
                <Grid container direction="column" spacing={gridSpacing} xs={12} item>
                  <Grid item xs={12} container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Card>
                        <CardHeader
                          title={
                            <CardTitle>
                              <AccountCircleTwoToneIcon sx={{ mr: 1 }} /> About me
                            </CardTitle>
                          }
                        />
                        <Divider />
                        <CardContent>
                          <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                              <Typography variant="subtitle2">
                                Hello,I’m Akshay Handge Creative Graphic Designer & User Experience Desiger based in Website, I create
                                digital Products a more Beautiful and usable place. Morbi accumsan ipsum velit. Nam nec tellus a odio
                                tincidunt.
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card>
                        <CardContent>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1">Personal Details</Typography>
                            <Divider />
                            <TableContainer component={Paper}>
                              <Table sx={{ '& td': { borderBottom: 'none' }, minWidth: 350 }}>
                                <TableBody>
                                  {rows.map((row) => (
                                    <TableRow key={row.name}>
                                      <TableCell variant="head">{row.name}</TableCell>
                                      <TableCell>{row.calories}</TableCell>
                                      <TableCell>{row.fat}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Card>
                      <CardHeader
                        title={
                          <CardTitle>
                            <AccountCircleTwoToneIcon sx={{ mr: 1 }} />
                            Education
                          </CardTitle>
                        }
                      />
                      <Divider />
                      <CardContent>
                        <Grid container direction="column" spacing={1}>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">2014-2017</Typography>
                                <Typography variant="subtitle2">Master Degree</Typography>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">Master Degree in Computer Application</Typography>
                                <Typography variant="subtitle2">University of Oxford, England</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
                            <Grid item xs={12}>
                              <Divider />
                            </Grid>
                          </Box>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">2011-2013</Typography>
                                <Typography variant="subtitle2">Bechelor</Typography>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">Bachelor Degree in Computer Engineering</Typography>
                                <Typography variant="subtitle2">Imperial College London</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
                            <Grid item xs={12}>
                              <Divider />
                            </Grid>
                          </Box>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">2009-2011</Typography>
                                <Typography variant="subtitle2">School</Typography>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">Higher Secondry Education</Typography>
                                <Typography variant="subtitle2">School of London, England</Typography>
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
                          <CardTitle>
                            <AccountCircleTwoToneIcon sx={{ mr: 1 }} />
                            Employment
                          </CardTitle>
                        }
                      />
                      <Divider />
                      <CardContent>
                        <Grid container direction="column" spacing={2}>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">Current</Typography>
                                <Typography variant="subtitle2">Senior</Typography>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">Senior UI/UX designer</Typography>
                                <Typography variant="subtitle2">
                                  Perform task related to project manager with the 100+ team under my observation. Team management is key
                                  role in this company.
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
                            <Grid item xs={12}>
                              <Divider />
                            </Grid>
                          </Box>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">2017-2019</Typography>
                                <Typography variant="subtitle2">Junior</Typography>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">Trainee cum Project Manager</Typography>
                                <Typography variant="subtitle2">Microsoft, TX, USA</Typography>
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
                          <CardTitle>
                            <AccountCircleTwoToneIcon sx={{ mr: 1 }} />
                            Skills
                          </CardTitle>
                        }
                      />
                      <Divider />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2">Junior</Typography>
                            <LinearProgressWithLabel color="primary" aria-label="junior" variant="determinate" value={70} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2">UX Researcher</Typography>
                            <LinearProgressWithLabel color="primary" aria-label="researcher" variant="determinate" value={80} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2">Wordpress</Typography>
                            <LinearProgressWithLabel color="secondary" aria-label="wordpress" variant="determinate" value={25} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2">Graphic Designer</Typography>
                            <LinearProgressWithLabel color="primary" aria-label="graphic designer" variant="determinate" value={80} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2">HTML</Typography>
                            <LinearProgressWithLabel color="secondary" aria-label="html" variant="determinate" value={45} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2">PHP</Typography>
                            <LinearProgressWithLabel color="primary" aria-label="php" variant="determinate" value={65} />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardHeader
                    title={
                      <CardTitle>
                        <AccountCircleTwoToneIcon sx={{ mr: 1 }} /> Personal Information
                      </CardTitle>
                    }
                  />
                  <Divider />
                  <CardContent>
                    <form noValidate autoComplete="off">
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={6}>
                          <TextField id="outlined-basic1" fullWidth label="Name" variant="outlined" defaultValue="Ashoka Tano" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="outlined-select-currency1"
                            select
                            fullWidth
                            label="Location"
                            value={currency}
                            onChange={handleChange1}
                            variant="outlined"
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="outlined-multiline-static1"
                            label="Bio"
                            multiline
                            fullWidth
                            rows={2}
                            defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="outlined-select-experience"
                            select
                            fullWidth
                            label="Experience"
                            value={experience}
                            onChange={handleChange2}
                            variant="outlined"
                          >
                            {experiences.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardHeader
                    title={
                      <CardTitle>
                        <PinDropTwoToneIcon sx={{ mr: 1 }} /> Contact Information
                      </CardTitle>
                    }
                  />
                  <Divider />
                  <CardContent>
                    <form noValidate autoComplete="off">
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="outlined-basic2"
                            fullWidth
                            label="Contact Phone"
                            variant="outlined"
                            defaultValue="(+99) 9999 999 999"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField id="outlined-basic3" fullWidth label="Email" variant="outlined" defaultValue="demo@sample.com" />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="outlined-basic4"
                            fullWidth
                            label="Portfolio Url"
                            variant="outlined"
                            defaultValue="https://demo.com"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="outlined-multiline-static2"
                            label="Address"
                            multiline
                            fullWidth
                            rows={2}
                            defaultValue="3379  Monroe Avenue, Fort Myers, Florida(33912)"
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardHeader
                    title={
                      <CardTitle>
                        <LanguageTwoToneIcon sx={{ mr: 1 }} /> Social Information
                      </CardTitle>
                    }
                  />
                  <Divider />
                  <CardContent>
                    <form noValidate autoComplete="off">
                      <Grid container alignItems="flex-end" spacing={gridSpacing}>
                        <Grid item>
                          <FacebookIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField variant="standard" fullWidth label="Facebook Profile Url" />
                        </Grid>
                        <Grid item>
                          <Button variant="contained" size="small" color="secondary">
                            Connect
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="flex-end" spacing={gridSpacing}>
                        <Grid item>
                          <TwitterIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField variant="standard" fullWidth label="Twitter Profile Url" />
                        </Grid>
                        <Grid item>
                          <Button variant="contained" size="small" color="secondary">
                            Connect
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="flex-end" spacing={gridSpacing}>
                        <Grid item>
                          <LinkedInIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField variant="standard" fullWidth label="LinkedIn Profile Url" />
                        </Grid>
                        <Grid item>
                          <Button variant="contained" size="small" color="secondary">
                            Connect
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={
                      <CardTitle>
                        <AccountCircleTwoToneIcon sx={{ mr: 1 }} /> General Settings
                      </CardTitle>
                    }
                  />
                  <Divider />
                  <CardContent>
                    <form noValidate autoComplete="off">
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="outlined-basic5"
                            fullWidth
                            label="Username"
                            helperText="Your Profile URL: https://pc.com/Ashoka_Tano_16"
                            variant="outlined"
                            defaultValue="Ashoka_Tano_16"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="outlined-basic6"
                            fullWidth
                            label="Account Email"
                            variant="outlined"
                            defaultValue="demo@sample.com"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="outlined-select-language"
                            select
                            fullWidth
                            label="Language"
                            value={currency}
                            onChange={handleChange1}
                            variant="outlined"
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="outlined-select-experience1"
                            select
                            fullWidth
                            label="Signin Using"
                            value={experience}
                            onChange={handleChange2}
                            variant="outlined"
                          >
                            {experiences.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={
                      <CardTitle>
                        <LibraryBooksTwoToneIcon sx={{ mr: 1 }} /> Advance Settings
                      </CardTitle>
                    }
                  />
                  <Divider />
                  <CardContent>
                    <Grid container direction="column" spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">Secure Browsing</Typography>
                        <FormControlLabel
                          control={<Switch checked={state1.checkedB} onChange={handleChangeswitch1} name="checkedB" color="primary" />}
                          label="Browsing Securely ( https ) when it's necessary"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">Login Notifications</Typography>
                        <FormControlLabel
                          control={<Switch checked={state2.checkedB} onChange={handleChangeswitch2} name="checkedB" color="primary" />}
                          label="Notify when login attemped from outher place"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">Login Approvals</Typography>
                        <FormControlLabel
                          control={<Switch checked={state3.checkedB} onChange={handleChangeswitch3} name="checkedB" color="primary" />}
                          label="Approvals is not required when login from unrecognized devices."
                        />
                      </Grid>
                      <Divider />
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">Recognized Devices</Typography>
                        <Grid container direction="column">
                          <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <DesktopWindowsTwoToneIcon />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography variant="subtitle1">
                                  Cett Desktop{' '}
                                  <Typography sx={{ fontSize: '90%', fontWeight: '400' }} component="span" variant="subtitle2">
                                    | 4351 Deans Lane, Elmsford
                                  </Typography>{' '}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    color: theme.palette.success.main
                                  }}
                                  variant="subtitle2"
                                >
                                  <FiberManualRecordIcon sx={{ width: '0.7em', height: '0.7em', mr: 0.6 }} />
                                  Current Active
                                  <IconButton size="large" aria-label="Current Active">
                                    <HighlightOffTwoToneIcon sx={{ width: '0.7em', height: '0.7em', mr: 0.6 }} />
                                  </IconButton>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <SmartphoneTwoToneIcon />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography variant="subtitle1">
                                  Imoon Tablet{' '}
                                  <Typography component="span" sx={{ fontSize: '90%', fontWeight: '400' }} variant="subtitle2">
                                    | 4185 Michigan Avenue, SHIPPINGPORT
                                  </Typography>{' '}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    color: theme.palette.grey[400]
                                  }}
                                  variant="subtitle2"
                                >
                                  <FiberManualRecordIcon sx={{ width: '0.7em', height: '0.7em', mr: 0.6 }} />
                                  Active 5 days ago
                                  <IconButton size="large" araia-label="Active 5 days ago">
                                    <HighlightOffTwoToneIcon sx={{ width: '0.7em', height: '0.7em', mr: 0.6 }} />
                                  </IconButton>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <PhoneIphoneTwoToneIcon />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography variant="subtitle1">
                                  Asbs Mobile{' '}
                                  <Typography component="span" sx={{ fontSize: '90%', fontWeight: '400' }} variant="subtitle2">
                                    | 3462 Fairfax Drive, Montclair
                                  </Typography>{' '}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    color: theme.palette.grey[400]
                                  }}
                                  variant="subtitle2"
                                >
                                  <FiberManualRecordIcon sx={{ width: '0.7em', height: '0.7em', mr: 0.6 }} />
                                  Active 1 month ago
                                  <IconButton size="large" aria-label="Active 1 month ago">
                                    <HighlightOffTwoToneIcon sx={{ width: '0.7em', height: '0.7em', mr: 0.6 }} />
                                  </IconButton>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider />
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">Active Sessions</Typography>
                        <Grid container direction="column">
                          <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <DesktopWindowsTwoToneIcon sx={{ color: theme.palette.success.main }} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography variant="subtitle1">
                                  Cett Desktop{' '}
                                  <Typography sx={{ fontSize: '90%', fontWeight: '400' }} component="span" variant="subtitle2">
                                    | 4351 Deans Lane, Elmsford
                                  </Typography>{' '}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Button variant="text">Logout</Button>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <SmartphoneTwoToneIcon sx={{ color: theme.palette.success.main }} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography variant="subtitle1">
                                  Imoon Tablet{' '}
                                  <Typography sx={{ fontSize: '90%', fontWeight: '400' }} component="span" variant="subtitle2">
                                    | 4185 Michigan Avenue, SHIPPINGPORT
                                  </Typography>{' '}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Button variant="text">Logout</Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Grid spacing={2} container justifyContent="flex-end">
                      <Grid item>
                        <Button variant="contained" color="primary">
                          Update Profile
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button>Clear</Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Alert severity="warning">
                  <AlertTitle>Alert!</AlertTitle>
                  Your Password will expire in every 3 months. So change it periodically.
                  <strong> Do not share your password</strong>
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={
                      <CardTitle>
                        <LockTwoToneIcon sx={{ mr: 1 }} /> Change Password
                      </CardTitle>
                    }
                  />
                  <CardContent>
                    <form noValidate autoComplete="off">
                      <Grid container spacing={gridSpacing}>
                        <Grid container spacing={gridSpacing} item>
                          <Grid item xs={12} md={6}>
                            <TextField
                              sx={{ p: 0.75 }}
                              type="password"
                              id="outlined-basic7"
                              fullWidth
                              label="Current Password"
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={gridSpacing} item>
                          <Grid item xs={12} md={6}>
                            <TextField
                              sx={{ p: 0.75 }}
                              type="password"
                              id="outlined-basic8"
                              fullWidth
                              label="New Password"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              sx={{ p: 0.75 }}
                              type="password"
                              id="outlined-basic9"
                              fullWidth
                              label="Confirm Password"
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                  <CardActions>
                    <Grid spacing={2} container justifyContent="flex-end">
                      <Grid item>
                        <Button variant="contained" color="primary">
                          Change Password
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button>Clear</Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Card>
              <CardHeader
                title={
                  <CardTitle>
                    <DraftsTwoToneIcon sx={{ mr: 1 }} /> Email Settings
                  </CardTitle>
                }
              />
              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item>
                        <Typography variant="subtitle1">Setup Email Notification</Typography>
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state1.checkedA} onChange={handleChangeswitch1} name="checkedA" color="primary" />}
                          label="Email Notification"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state1.checkedB} onChange={handleChangeswitch1} name="checkedB" color="primary" />}
                          label="Send Copy To Personal Email"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <CardTitle variant="h6">Activity Related Emails</CardTitle>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item>
                        <Typography variant="subtitle1">When to email?</Typography>
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state2.checkedA} onChange={handleChangeswitch2} name="checkedA" color="primary" />}
                          label="have new notifications"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state2.checkedB} onChange={handleChangeswitch2} name="checkedB" color="primary" />}
                          label="You're sent a direct message"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state2.checkedC} onChange={handleChangeswitch2} name="checkedC" color="primary" />}
                          label="Someone adds you as a connection"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item>
                        <Typography variant="subtitle1">When to escalate emails?</Typography>
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state3.checkedA} onChange={handleChangeswitch3} name="checkedA" color="primary" />}
                          label="Upon new order"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state3.checkedB} onChange={handleChangeswitch3} name="checkedB" color="primary" />}
                          label="New membership approval"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Switch checked={state3.checkedC} onChange={handleChangeswitch3} name="checkedC" color="primary" />}
                          label="Member registration"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <CardTitle variant="h6">Updates From System Notification</CardTitle>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item>
                        <Typography variant="subtitle1">Email you with?</Typography>
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedA} onChange={handleChangeState} name="checkedA" color="primary" />}
                          label="News about PCT-themes products and feature updates"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedB} onChange={handleChangeState} name="checkedB" color="primary" />}
                          label="Tips on getting more out of PCT-themes"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedC} onChange={handleChangeState} name="checkedC" color="primary" />}
                          label="Things you missed since you last logged into PCT-themes"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedD} onChange={handleChangeState} name="checkedD" color="primary" />}
                          label="News about products and other services"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={<Checkbox checked={state.checkedE} onChange={handleChangeState} name="checkedE" color="primary" />}
                          label="Tips and Document business products"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid spacing={2} container justifyContent="flex-end">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Update Change
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button>Clear</Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};

Profile.propTypes = {
  value: PropTypes.object
};

export default Profile;
