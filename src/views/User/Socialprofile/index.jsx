import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Grid,
  Link,
  Typography,
  Chip,
  Checkbox,
  FormControl,
  Select,
  InputLabel,
  TextField,
  Radio,
  RadioGroup,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Tabs,
  Tab,
  Box,
  IconButton,
  MenuItem,
  FormControlLabel,
  Badge,
  Button
} from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// project import
import Avatar from 'component/Avatar';
import { gridSpacing } from 'config.js';

// assets
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';

import Slider5 from 'assets/images/widget/slider5.jpg';
import Slider6 from 'assets/images/widget/slider6.jpg';
import Slider7 from 'assets/images/widget/slider7.jpg';
import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';
import Avatar5 from 'assets/images/users/avatar-5.jpg';

import Cover from 'assets/images/users/cover.jpg';
import Imgbg1 from 'assets/images/users/bg-1.jpg';
import Imgbg2 from 'assets/images/users/bg-2.jpg';
import Imgbg3 from 'assets/images/users/bg-3.jpg';

import Imgbox1 from 'assets/images/light-box/sl1.jpg';
import Imgbox2 from 'assets/images/light-box/sl2.jpg';
import Imgbox3 from 'assets/images/light-box/sl3.jpg';
import Imgbox4 from 'assets/images/light-box/sl4.jpg';
import Imgbox5 from 'assets/images/light-box/sl5.jpg';
import Imgbox6 from 'assets/images/light-box/sl6.jpg';

// custom style
const UserProfileTabs = styled((props) => <Tabs {...props} />)(({ theme }) => ({
  '.MuiButtonBase-root': {
    minHeight: 'auto',
    minWidth: 'calc(100% / 4)',
    padding: '12px 16px'
  },
  '.Mui-selected': {
    color: theme.palette.primary.main
  },
  '.MuiTouchRipple-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '.MuiSvgIcon-root': {
    marginBottom: '0px !important',
    marginRight: '8px'
  }
}));

const TextActiveGrid = styled((props) => <Grid item {...props} />)(({ theme }) => ({
  color: theme.palette.success.main,
  '.MuiSvgIcon-root': {
    width: '14px',
    height: '14px'
  }
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

// ==============================|| SOCIAL PROFILE ||============================== //

const SocialProfile = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value1, setValue1] = React.useState('female');
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [age, setAge] = React.useState('Select Status');
  const handleageChange = (event) => {
    setAge(event.target.value);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false
  });
  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [uservalue, usersetValue] = React.useState(0);
  const [uservalue2, usersetValue2] = React.useState(0);
  const [uservalue3, usersetValue3] = React.useState(0);

  const userhandleChange = () => {
    usersetValue((prev) => !prev);
  };
  const userhandleChange2 = () => {
    usersetValue2((prev) => !prev);
  };
  const userhandleChange3 = () => {
    usersetValue3((prev) => !prev);
  };
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia component="img" image={Cover} title="Cover image" sx={{ padding: '0.5rem 0.5rem' }} />
              <CardContent sx={{ paddingBottom: '0 !important' }}>
                <Grid>
                  <Grid item>
                    <Grid container wrap="nowrap" spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                      <Grid item md={4} xs={12}>
                        <Avatar
                          alt="User 1"
                          src={Avatar3}
                          sx={{
                            width: 100,
                            height: 100,
                            boxShadow: '0 0 0 5px #fff',
                            margin: '-70px auto 0'
                          }}
                        />
                        <Typography align="center" variant="h6" color="inherit">
                          Josephin Doe
                        </Typography>
                        <Typography align="center" variant="body2" color="inherit">
                          UI/UX Designer
                        </Typography>
                      </Grid>
                      <Grid item md={8}>
                        <Grid container wrap="nowrap" spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                          <Grid item md={6} xs={12}>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Typography align="left" variant="body2" color="inherit">
                                  <LanguageTwoToneIcon />
                                </Typography>
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  www.phoenixcoded.net
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Typography align="left" variant="body2" color="inherit">
                                  <MailTwoToneIcon />
                                </Typography>
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  demo@domain.com
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Typography align="left" variant="body2" color="inherit">
                                  <CallTwoToneIcon />
                                </Typography>
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  +1 9999-999-999
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Grid container item wrap="nowrap" spacing={1} xs={12}>
                              <Grid item>
                                <Typography align="left" variant="body2" color="inherit">
                                  <PinDropTwoToneIcon />
                                </Typography>
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  {' '}
                                  4289 Calvin Street
                                </Typography>
                                <Typography align="left" variant="body2" color="inherit">
                                  Baltimore, near MD Tower Maryland,
                                </Typography>
                                <Typography align="left" variant="body2" color="inherit">
                                  Maryland (21201)
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <UserProfileTabs value={value} onChange={handleChange} variant="scrollable" scrollButtons={false}>
                            <Tab icon={<HomeTwoToneIcon />} iconPosition="start" label="Home" {...a11yProps(0)} />
                            <Tab icon={<AccountCircleTwoToneIcon />} iconPosition="start" label="Profile" {...a11yProps(1)} />
                            <Tab icon={<CallTwoToneIcon />} iconPosition="start" label="My Contacts" {...a11yProps(2)} />
                            <Tab icon={<PanoramaTwoToneIcon />} iconPosition="start" label="Gallery" {...a11yProps(4)} />
                          </UserProfileTabs>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs zeroMinWidth>
                        <Typography align="left" variant="h5" color="inherit">
                          Friends
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Chip size="small" label="100+" color="primary" />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar1} />
                      </Grid>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar2} />
                      </Grid>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar3} />
                      </Grid>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar4} />
                      </Grid>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar5} />
                      </Grid>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar1} />
                      </Grid>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar2} />
                      </Grid>
                      <Grid item>
                        <Avatar alt="User 1" src={Avatar3} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography align="left" variant="h5" color="inherit">
                      Message
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={12}>
                        <Grid container wrap="nowrap" spacing={1}>
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar1} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography align="left" variant="h6" color="inherit">
                              Alex Thompson
                            </Typography>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  Cheers!
                                </Typography>
                              </Grid>
                              <TextActiveGrid>
                                <FiberManualRecordIcon />
                              </TextActiveGrid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container wrap="nowrap" spacing={1}>
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar2} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography align="left" variant="h6" color="inherit">
                              John Doue
                            </Typography>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  stay hungry!
                                </Typography>
                              </Grid>
                              <TextActiveGrid>
                                <FiberManualRecordIcon />
                              </TextActiveGrid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container wrap="nowrap" spacing={1}>
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar3} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography align="left" variant="h6" color="inherit">
                              Alex Thompson
                            </Typography>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  Cheers!
                                </Typography>
                              </Grid>
                              <Grid item sx={{ color: theme.palette.grey[400] }}>
                                <Typography align="left" sx={{ fontSize: '80%' }} variant="body2" color="inherit">
                                  30 min ago
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container wrap="nowrap" spacing={1}>
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar4} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography align="left" variant="h6" color="inherit">
                              John Doue
                            </Typography>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  Cheers!
                                </Typography>
                              </Grid>
                              <Grid item sx={{ color: theme.palette.grey[400] }}>
                                <Typography align="left" sx={{ fontSize: '80%' }} variant="body2" color="inherit">
                                  10 min ago
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container wrap="nowrap" spacing={1}>
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar1} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography align="left" variant="h6" color="inherit">
                              Alex Thompson
                            </Typography>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  Cheers!
                                </Typography>
                              </Grid>
                              <TextActiveGrid>
                                <FiberManualRecordIcon />
                              </TextActiveGrid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container wrap="nowrap" spacing={1}>
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar2} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography align="left" variant="h6" color="inherit">
                              John Doue
                            </Typography>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="body2" color="inherit">
                                  stay hungry!
                                </Typography>
                              </Grid>
                              <TextActiveGrid>
                                <FiberManualRecordIcon />
                              </TextActiveGrid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={8}>
            <TabPanel value={value} index={0}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Grid container wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" variant="h5" color="inherit">
                            Josephin Doe posted on your timeline
                          </Typography>
                          <Typography align="left" variant="body2" color="inherit">
                            50 minutes ago
                          </Typography>
                        </Grid>
                        <TextActiveGrid>
                          <IconButton aria-label="delete" size="large">
                            <MoreHorizIcon />
                          </IconButton>
                        </TextActiveGrid>
                      </Grid>
                    </CardContent>
                    <CardMedia component="img" image={Imgbg1} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem' }} />
                    <CardContent>
                      <Typography align="left" variant="h5" color="inherit">
                        The new Lorem Ipsum is simply
                      </Typography>
                      <Typography align="left" variant="body2" color="inherit">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Button variant="text" color="primary" startIcon={<FavoriteTwoToneIcon />}>
                            Like
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<ChatTwoToneIcon />}
                          >
                            Comment
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<ShareTwoToneIcon />}
                          >
                            Share
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid container wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Button variant="text" color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>
                            Comment (50)
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="text" color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>
                            See All
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                          <Grid item xs={12}>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Avatar alt="User 1" src={Avatar3} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="h6" color="inherit">
                                  Alex Thompson
                                </Typography>
                                <Grid container wrap="nowrap" spacing={1}>
                                  <Grid item>
                                    <Typography align="left" variant="body2" color="inherit">
                                      Looking Very nice type and scrambled
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Link color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>Like</Link>
                                  </Grid>
                                  <Grid item>
                                    <Link color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>Comment</Link>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider />
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Avatar alt="User 1" src={Avatar2} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="h6" color="inherit">
                                  Alex Thompson
                                </Typography>
                                <Grid container wrap="nowrap" spacing={1}>
                                  <Grid item>
                                    <Typography align="left" variant="body2" color="inherit">
                                      Looking Very nice type and scrambled
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Link color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>Like</Link>
                                  </Grid>
                                  <Grid item>
                                    <Link color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>Comment</Link>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider />
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Avatar alt="User 1" src={Avatar1} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <TextField fullWidth label="Write comment hear !. . ." />
                              </Grid>
                              <Grid item>
                                <Button variant="contained" size="small" color="primary">
                                  Send
                                </Button>
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
                    <CardContent>
                      <Grid container wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" variant="h5" color="inherit">
                            Josephin Doe posted on your timeline
                          </Typography>
                          <Typography align="left" variant="body2" color="inherit">
                            50 minutes ago
                          </Typography>
                        </Grid>
                        <TextActiveGrid>
                          <IconButton aria-label="delete" size="large">
                            <MoreHorizIcon />
                          </IconButton>
                        </TextActiveGrid>
                      </Grid>
                    </CardContent>
                    <CardMedia component="img" image={Imgbg2} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem' }} />
                    <CardContent>
                      <Typography align="left" variant="h5" color="inherit">
                        The new Lorem Ipsum is simply
                      </Typography>
                      <Typography align="left" variant="body2" color="inherit">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<FavoriteTwoToneIcon />}
                          >
                            Like
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<ChatTwoToneIcon />}
                          >
                            Comment
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<ShareTwoToneIcon />}
                          >
                            Share
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid container wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Button variant="text" color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>
                            Comment (50)
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="text" color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>
                            See All
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                          <Grid item xs={12}>
                            <Grid container wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Avatar alt="User 1" src={Avatar2} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="h6" color="inherit">
                                  Alex Thompson
                                </Typography>
                                <Grid container wrap="nowrap" spacing={1}>
                                  <Grid item>
                                    <Typography align="left" variant="body2" color="inherit">
                                      Looking Very nice type and scrambled
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Link color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>Like</Link>
                                  </Grid>
                                  <Grid item>
                                    <Link color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>Comment</Link>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider />
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Avatar alt="User 1" src={Avatar1} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <TextField fullWidth label="Write comment hear !. . ." />
                              </Grid>
                              <Grid item>
                                <Button variant="contained" size="small" color="primary">
                                  Send
                                </Button>
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
                    <CardContent>
                      <Grid container wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" variant="h5" color="inherit">
                            Josephin Doe posted on your timeline
                          </Typography>
                          <Typography align="left" variant="body2" color="inherit">
                            50 minutes ago
                          </Typography>
                        </Grid>
                        <TextActiveGrid>
                          <IconButton aria-label="delete" size="large">
                            <MoreHorizIcon />
                          </IconButton>
                        </TextActiveGrid>
                      </Grid>
                    </CardContent>
                    <CardMedia component="img" image={Imgbg3} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem' }} />
                    <CardContent>
                      <Typography align="left" variant="h5" color="inherit">
                        The new Lorem Ipsum is simply
                      </Typography>
                      <Typography align="left" variant="body2" color="inherit">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<FavoriteTwoToneIcon />}
                          >
                            Like
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<ChatTwoToneIcon />}
                          >
                            Comment
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                            startIcon={<ShareTwoToneIcon />}
                          >
                            Share
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid container wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Button variant="text" color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>
                            Comment (0)
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="text" color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}>
                            See All
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                          <Grid item xs={12}>
                            <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                              <Grid item>
                                <Avatar alt="User 1" src={Avatar1} />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <TextField fullWidth label="Write comment hear !. . ." />
                              </Grid>
                              <Grid item>
                                <Button variant="contained" size="small" color="primary">
                                  Send
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" variant="h5" color="inherit">
                            Personal details
                          </Typography>
                        </Grid>
                        <Grid item>
                          <IconButton aria-label="delete" onClick={userhandleChange} size="large">
                            <EditTwoToneIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      {uservalue ? (
                        <Box>
                          <Grid container spacing={2}>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Full Name
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <TextField id="outlined-basic1" fullWidth label="Full Name" variant="outlined" defaultValue="Lary Doe" />
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Gender
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <RadioGroup aria-label="gender" name="gender1" value={value1} onChange={handleChange1}>
                                  <Grid container spacing={1}>
                                    <Grid item>
                                      <FormControlLabel color="primary" value="female" control={<Radio />} label="Female" />
                                    </Grid>
                                    <Grid item>
                                      <FormControlLabel color="primary" value="male" control={<Radio />} label="Male" />
                                    </Grid>
                                  </Grid>
                                </RadioGroup>
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Birth Date
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                  <DatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd-MMM-yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    slotProps={{
                                      textField: {
                                        fullWidth: true
                                      }
                                    }}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                      'aria-label': 'change date'
                                    }}
                                  />
                                </LocalizationProvider>
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Martail Status
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <FormControl variant="outlined">
                                  <InputLabel id="demo-simple-select-outlined-label">Marital Status</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={age}
                                    fullWidth
                                    onChange={handleageChange}
                                    label="Marital Status"
                                  >
                                    <MenuItem value="">
                                      <em>Select Marital Status</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Married</MenuItem>
                                    <MenuItem value={20}>Unmarried</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="flex-start" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Location
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <TextField
                                  id="outlined-multiline-static"
                                  label="Bio"
                                  multiline
                                  fullWidth
                                  rows={2}
                                  defaultValue="4289 Calvin Street, Baltimore, near MD Tower Maryland, Maryland (21201)"
                                  variant="outlined"
                                />
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="flex-start" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}></Grid>
                              <Grid item sm={9}>
                                <Button variant="contained" color="primary">
                                  Save
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      ) : (
                        <Box>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Full Name
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                Lary Doe
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Gender
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                Male
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Birth Date
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                16-12-1994
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Martail Status
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                Unmarried
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Location
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                4289 Calvin Street
                              </Typography>
                              <Typography align="left" variant="body2" color="inherit">
                                Baltimore, near MD Tower Maryland,
                              </Typography>
                              <Typography align="left" variant="body2" color="inherit">
                                Maryland (21201)
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" variant="h5" color="inherit">
                            Contact Information
                          </Typography>
                        </Grid>
                        <Grid item>
                          <IconButton aria-label="delete" onClick={userhandleChange2} size="large">
                            <EditTwoToneIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      {uservalue2 ? (
                        <Box>
                          <Grid container spacing={2}>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Mobile Number
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <TextField
                                  id="outlined-basic2"
                                  fullWidth
                                  label="Mobile Number"
                                  variant="outlined"
                                  defaultValue="+1 9999-999-999"
                                />
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Email Address
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <TextField
                                  id="outlined-basic3"
                                  fullWidth
                                  label="Email Address"
                                  variant="outlined"
                                  defaultValue="Demo@domain.com"
                                />
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Twitter
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <TextField id="outlined-basic4" fullWidth label="Twitter" variant="outlined" defaultValue="@phonixcoded" />
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}>
                                <Typography align="left" variant="h6" color="inherit">
                                  Skype
                                </Typography>
                              </Grid>
                              <Grid item sm={9}>
                                <TextField
                                  id="outlined-basic5"
                                  fullWidth
                                  label="Skype"
                                  variant="outlined"
                                  defaultValue="@phonixcoded demo"
                                />
                              </Grid>
                            </Grid>
                            <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                              <Grid item sm={3}></Grid>
                              <Grid item sm={9}>
                                <Button variant="contained" color="primary">
                                  Save
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      ) : (
                        <Box>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Mobile Number
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                +1 9999-999-999
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Email Address
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                Demo@domain.com
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Twitter
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                @phonixcoded
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Skype
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                @phonixcoded demo
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" variant="h5" color="inherit">
                            Other Information
                          </Typography>
                        </Grid>
                        <Grid item>
                          <IconButton aria-label="delete" onClick={userhandleChange3} size="large">
                            <EditTwoToneIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      {uservalue3 ? (
                        <Box>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Occupation
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <TextField id="outlined-basic6" fullWidth label="Occupation" variant="outlined" defaultValue="Designer" />
                            </Grid>
                          </Grid>
                          <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Skills
                              </Typography>
                            </Grid>
                            <Grid item sm={3}>
                              <Grid>
                                <Grid item>
                                  <FormControlLabel
                                    control={
                                      <Checkbox checked={state.checkedA} onChange={handleChangeState} name="checkedA" color="primary" />
                                    }
                                    label="C#"
                                  />
                                </Grid>
                                <Grid item>
                                  <FormControlLabel
                                    control={
                                      <Checkbox checked={state.checkedB} onChange={handleChangeState} name="checkedB" color="primary" />
                                    }
                                    label="Javascript"
                                  />
                                </Grid>
                                <Grid item>
                                  <FormControlLabel
                                    control={
                                      <Checkbox checked={state.checkedC} onChange={handleChangeState} name="checkedC" color="primary" />
                                    }
                                    label="Scss"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Jobs
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <TextField id="outlined-basic7" fullWidth label="Jobs" variant="outlined" defaultValue="Phoenixcoded" />
                            </Grid>
                          </Grid>
                          <Grid container item alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}></Grid>
                            <Grid item sm={9}>
                              <Button sx={{ mt: 2 }} variant="contained" color="primary">
                                Save
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      ) : (
                        <Box>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Occupation
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                Designer
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Skills
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                C#, Javascript, Scss
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item sm={3}>
                              <Typography align="left" variant="h6" color="inherit">
                                Jobs
                              </Typography>
                            </Grid>
                            <Grid item sm={9}>
                              <Typography align="left" variant="body2" color="inherit">
                                Phoenixcoded
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Avatar
                            alt="User 1"
                            src={Avatar1}
                            sx={{
                              margin: '-44px auto 10px',
                              width: 65,
                              height: 65,
                              boxShadow: '0 0 0 5px #fff'
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <Divider sx={{ margin: '1.5rem 0 0', background: 'transparent' }} />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <Divider sx={{ width: 80, height: '0.25rem', margin: '1.5rem auto' }} />
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                37
                              </Typography>
                              <Typography align="center" variant="body2">
                                Mails
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                2749
                              </Typography>
                              <Typography align="center" variant="body2">
                                Followers
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                678
                              </Typography>
                              <Typography align="center" variant="body2">
                                Following
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Badge
                            badgeContent={<StarsTwoToneIcon />}
                            sx={{
                              '.MuiBadge-badge': {
                                width: 25,
                                height: 25,
                                borderRadius: '50%',
                                m: 1,
                                boxShadow: '0 0 0 4px #fff'
                              }
                            }}
                            color="primary"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                          >
                            <Avatar
                              alt="User 1"
                              src={Avatar3}
                              sx={{
                                margin: '-44px auto 10px',
                                width: 65,
                                height: 65,
                                boxShadow: '0 0 0 5px #fff'
                              }}
                            />
                          </Badge>
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <Divider sx={{ margin: '1.5rem 0 0', background: 'transparent' }} />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <Divider sx={{ width: 80, height: '0.25rem', margin: '1.5rem auto' }} />
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                37
                              </Typography>
                              <Typography align="center" variant="body2">
                                Mails
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                2749
                              </Typography>
                              <Typography align="center" variant="body2">
                                Followers
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                678
                              </Typography>
                              <Typography align="center" variant="body2">
                                Following
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Badge
                            badgeContent={<StarsTwoToneIcon />}
                            sx={{
                              '.MuiBadge-badge': {
                                width: 25,
                                height: 25,
                                borderRadius: '50%',
                                m: 1,
                                boxShadow: '0 0 0 4px #fff'
                              }
                            }}
                            color="primary"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                          >
                            <Avatar
                              alt="User 1"
                              src={Avatar2}
                              sx={{
                                margin: '-44px auto 10px',
                                width: 65,
                                height: 65,
                                boxShadow: '0 0 0 5px #fff'
                              }}
                            />
                          </Badge>
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <Divider sx={{ margin: '1.5rem 0 0', background: 'transparent' }} />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <Divider sx={{ width: 80, height: '0.25rem', margin: '1.5rem auto' }} />
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                37
                              </Typography>
                              <Typography align="center" variant="body2">
                                Mails
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                2749
                              </Typography>
                              <Typography align="center" variant="body2">
                                Followers
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                678
                              </Typography>
                              <Typography align="center" variant="body2">
                                Following
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider6} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Avatar
                            alt="User 1"
                            src={Avatar3}
                            sx={{
                              margin: '-44px auto 10px',
                              width: 65,
                              height: 65,
                              boxShadow: '0 0 0 5px #fff'
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <Divider sx={{ margin: '1.5rem 0 0', background: 'transparent' }} />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <Divider sx={{ width: 80, height: '0.25rem', margin: '1.5rem auto' }} />
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                37
                              </Typography>
                              <Typography align="center" variant="body2">
                                Mails
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                2749
                              </Typography>
                              <Typography align="center" variant="body2">
                                Followers
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography align="center" variant="h6" color="inherit">
                                678
                              </Typography>
                              <Typography align="center" variant="body2">
                                Following
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid container spacing={gridSpacing}>
                <Grid item lg={3} md={4} sm={3}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Imgbox1} title="Imgbox1 image" sx={{ padding: '0.5rem 0.5rem' }} />
                  </Card>
                </Grid>
                <Grid item lg={3} md={4} sm={3}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Imgbox2} title="Imgbox1 image" sx={{ padding: '0.5rem 0.5rem' }} />
                  </Card>
                </Grid>
                <Grid item lg={3} md={4} sm={3}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Imgbox3} title="Imgbox1 image" sx={{ padding: '0.5rem 0.5rem' }} />
                  </Card>
                </Grid>
                <Grid item lg={3} md={4} sm={3}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Imgbox4} title="Imgbox1 image" sx={{ padding: '0.5rem 0.5rem' }} />
                  </Card>
                </Grid>
                <Grid item lg={3} md={4} sm={3}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Imgbox5} title="Imgbox1 image" sx={{ padding: '0.5rem 0.5rem' }} />
                  </Card>
                </Grid>
                <Grid item lg={3} md={4} sm={3}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Imgbox6} title="Imgbox1 image" sx={{ padding: '0.5rem 0.5rem' }} />
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SocialProfile;
