import PropTypes from 'prop-types';
import React from 'react';
import { Link as ReactRouter } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
  Tabs,
  Tab,
  Box,
  IconButton,
  Menu,
  MenuItem,
  FormControlLabel,
  Badge,
  Button
} from '@mui/material';

// third-party
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// project Import
import Checkbox from 'component/Checkbox';
import Avatar from 'component/Avatar';
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

import Slider5 from 'assets/images/widget/slider5.jpg';
import Slider6 from 'assets/images/widget/slider6.jpg';
import Slider7 from 'assets/images/widget/slider7.jpg';

import Userblurimg from 'assets/images/widget/user-blur-bg.png';
import Userimground from 'assets/images/widget/img-round1.jpg';
import Profileperson1 from 'assets/images/widget/profile-person1.jpg';
import Blurbg from 'assets/images/widget/blur-bg.png';

import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';

import Imgavatar1 from 'assets/images/users/img-avatar-1.jpg';
import Imgavatar2 from 'assets/images/users/img-avatar-2.jpg';
import Imgavatar3 from 'assets/images/users/img-avatar-3.jpg';
import Cover from 'assets/images/users/cover.jpg';

// custom style
const UserAvatar = styled((props) => <Avatar {...props} />)(() => ({
  margin: '-44px auto 10px',
  width: 65,
  height: 65,
  boxShadow: '0 0 0 5px #fff'
}));

const UserAvatar4 = styled((props) => <Avatar {...props} />)(() => ({
  width: 150,
  height: 150
}));

const UserAvatar5 = styled((props) => <Avatar {...props} />)(() => ({
  width: 115,
  height: 115,
  margin: '-75px auto 10px',
  border: '1px solid #f1f1f1',
  background: '#f0f2f8'
}));

const UserAvatar6 = styled((props) => <Avatar {...props} />)(() => ({
  width: 105,
  height: 105,
  margin: '10px auto',
  border: '1px solid #f1f1f1',
  background: '#f0f2f8'
}));

const UserCardOverlay1 = styled((props) => <div {...props} />)(({ theme }) => ({
  minHeight: 410,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  backgroundImage: 'url(' + Profileperson1 + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '30px 20px',
  color: theme.palette.common.white
}));

const UserCardOverlay2 = styled((props) => <div {...props} />)(({ theme }) => ({
  minHeight: 450,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-end',
  backgroundImage: 'url(' + Blurbg + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.common.white
}));

const UserBadge4 = styled((props) => <Badge {...props} />)(() => ({
  '.MuiBadge-badge': {
    width: 35,
    height: 35,
    borderRadius: '50%',
    margin: '0 17px 17px 0',
    boxShadow: '0 0 0 4px #fff'
  }
}));

const SocialLink2 = styled((props) => <Grid item {...props} />)(() => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  ' .MuiSvgIcon-root': {
    marginLeft: '-100px',
    width: '25px',
    height: '25px',
    display: 'block',
    transition: 'all 0.2s ease-in-out'
  }
}));

const UserHoverCard = styled((props) => <Card {...props} />)(() => ({
  overflow: 'hidden',
  position: 'relative',
  '&:hover .custom-span': {
    transform: 'scale(1) !important'
  }
}));

const UserDivider = styled((props) => <Divider {...props} />)(() => ({
  borderWidth: 2,
  width: 80,
  height: '0.25rem',
  margin: '1.5rem auto'
}));

const UserSeperator = styled((props) => <Divider {...props} />)(() => ({
  border: 'none',
  margin: '1.5rem 0 0',
  background: 'transparent'
}));

const SocialHoverCard = styled((props) => <Card {...props} />)(() => ({
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&:hover .MuiSvgIcon-root': {
    marginLeft: '0px'
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

// ==============================|| USER CARD ||============================== //

const UserCard = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);

  const theme = useTheme();

  return (
    <>
      <Breadcrumb title="User Card">
        <Typography component={ReactRouter} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          User
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Card
        </Typography>
      </Breadcrumb>
      <>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          onChange={handleChange}
          sx={{ marginBottom: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.08)', '& button': { minWidth: 100 } }}
        >
          <Tab label="Simple" {...a11yProps(0)} />
          <Tab label="Clip image" {...a11yProps(1)} />
          <Tab label="Footer" {...a11yProps(2)} />
          <Tab label="Social" {...a11yProps(3)} />
          <Tab label="Other" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Simple
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    With option
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    aria-label="Rating"
                                    icon={<StarBorderTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    checkedIcon={<StarTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    color="primary"
                                    name="checkedH"
                                  />
                                }
                                label=""
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <UserAvatar alt="User 1" src={Avatar2} />
                            </Grid>
                            <Grid item xs={4}>
                              <IconButton
                                aria-controls="simple-menu"
                                aria-label="More"
                                aria-haspopup="true"
                                onClick={handleClick}
                                size="large"
                              >
                                <MoreHorizTwoToneIcon />
                              </IconButton>
                              <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center'
                                }}
                              >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                              </Menu>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Option selected
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider6} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    aria-label="Rating"
                                    icon={<StarBorderTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    checkedIcon={<StarTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    color="primary"
                                    name="checkedH"
                                    checked={checked1}
                                    onChange={() => setChecked1(!checked1)}
                                  />
                                }
                                label=""
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <UserAvatar alt="User 1" src={Avatar3} />
                            </Grid>
                            <Grid item xs={4}>
                              <IconButton
                                aria-controls="simple-menu2"
                                aria-label="More"
                                aria-haspopup="true"
                                onClick={handleClick1}
                                size="large"
                              >
                                <MoreHorizTwoToneIcon />
                              </IconButton>
                              <Menu
                                id="simple-menu2"
                                anchorEl={anchorEl1}
                                keepMounted
                                open={Boolean(anchorEl1)}
                                onClose={handleClose1}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center'
                                }}
                              >
                                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                                <MenuItem onClick={handleClose1}>My account</MenuItem>
                                <MenuItem onClick={handleClose1}>Logout</MenuItem>
                              </Menu>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Slider
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <Box sx={{ p: '0.5rem 0.5rem 0' }}>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false
                        }}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider6} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                      </Swiper>
                    </Box>
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    aria-label="Rating"
                                    icon={<StarBorderTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    checkedIcon={<StarTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    color="primary"
                                    name="checkedH"
                                    checked={checked2}
                                    onChange={() => setChecked2(!checked2)}
                                  />
                                }
                                label=""
                              />
                            </Grid>
                            <Grid item xs={4} sx={{ position: 'relative', zIndex: '2' }}>
                              <UserAvatar alt="User 1" src={Avatar3} />
                            </Grid>
                            <Grid item xs={4}>
                              <IconButton
                                aria-controls="simple-menu3"
                                aria-label="More"
                                aria-haspopup="true"
                                onClick={handleClick1}
                                size="large"
                              >
                                <MoreHorizTwoToneIcon />
                              </IconButton>
                              <Menu
                                id="simple-menu3"
                                anchorEl={anchorEl1}
                                keepMounted
                                open={Boolean(anchorEl1)}
                                onClose={handleClose1}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center'
                                }}
                              >
                                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                                <MenuItem onClick={handleClose1}>My account</MenuItem>
                                <MenuItem onClick={handleClose1}>Logout</MenuItem>
                              </Menu>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Certificated badge
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item xs={4}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    aria-label="Rating"
                                    icon={<StarBorderTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    checkedIcon={<StarTwoToneIcon sx={{ color: theme.palette.warning.main }} />}
                                    color="primary"
                                    name="checkedH"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                  />
                                }
                                label=""
                              />
                            </Grid>
                            <Grid item xs={4}>
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
                                <UserAvatar alt="User 1" src={Avatar1} />
                              </Badge>
                            </Grid>
                            <Grid item xs={4}>
                              <IconButton
                                aria-controls="simple-menu3"
                                aria-label="More"
                                aria-haspopup="true"
                                onClick={handleClick2}
                                size="large"
                              >
                                <MoreHorizTwoToneIcon />
                              </IconButton>
                              <Menu
                                id="simple-menu4"
                                anchorEl={anchorEl2}
                                keepMounted
                                open={Boolean(anchorEl2)}
                                onClose={handleClose2}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center'
                                }}
                              >
                                <MenuItem onClick={handleClose2}>Profile</MenuItem>
                                <MenuItem onClick={handleClose2}>My account</MenuItem>
                                <MenuItem onClick={handleClose2}>Logout</MenuItem>
                              </Menu>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Hover data
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <UserHoverCard>
                    <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
                    <span
                      className="custom-span"
                      style={{
                        background: 'rgba(57, 68, 73, 0.92)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: '#fff',
                        padding: '0 20px',
                        transform: 'scale(0)',
                        transition: 'transform .3s ease-in-out'
                      }}
                    >
                      <Typography variant="h4" align="center">
                        Hire Me?
                      </Typography>
                      <UserSeperator />
                      <Typography variant="body1" align="center">
                        Lorem Ipsum is simply dummy text been the industry standard
                      </Typography>
                      <UserSeperator />
                      <Grid container justifyContent="center" spacing={1}>
                        <Grid item>
                          <Button variant="contained" color="primary">
                            Primary
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" color="secondary">
                            Secondary
                          </Button>
                        </Grid>
                      </Grid>
                    </span>
                  </UserHoverCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Left
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia
                      component="img"
                      image={Slider5}
                      title="Slider5 image"
                      sx={{ padding: '0.5rem 0.5rem 0', clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 80%)' }}
                    />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Center
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia
                      component="img"
                      image={Slider6}
                      title="Slider5 image"
                      sx={{
                        padding: '0.5rem 0.5rem 0',
                        clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0% 80%)'
                      }}
                    />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar2} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Right
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia
                      component="img"
                      image={Slider6}
                      title="Slider5 image"
                      sx={{ padding: '0.5rem 0.5rem 0', clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 0% 100%)' }}
                    />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar2} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Left slider
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <Box sx={{ p: '0.5rem 0.5rem 0', clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 80%)' }}>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false
                        }}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider6} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                      </Swiper>
                    </Box>
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Center slider
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <div
                      style={{
                        padding: '0.5rem 0.5rem 0',
                        clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0% 80%)'
                      }}
                    >
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false
                        }}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider6} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Right slider
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <Box sx={{ p: '0.5rem 0.5rem 0', clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 0% 100%)' }}>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false
                        }}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider6} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <CardMedia component="img" image={Slider7} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                        </SwiperSlide>
                      </Swiper>
                    </Box>
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserDivider />
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
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Footer gray
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider5} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions sx={{ background: theme.palette.secondary.main }}>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6" sx={{ color: theme.palette.common.white }}>
                            37
                          </Typography>
                          <Typography align="center" variant="body2" sx={{ color: theme.palette.common.white }}>
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6" sx={{ color: theme.palette.common.white }}>
                            2749
                          </Typography>
                          <Typography align="center" variant="body2" sx={{ color: theme.palette.common.white }}>
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6" sx={{ color: theme.palette.common.white }}>
                            678
                          </Typography>
                          <Typography align="center" variant="body2" sx={{ color: theme.palette.common.white }}>
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Footer white
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider6} title="Slider5 image" sx={{ padding: '0.5rem 0.5rem 0' }} />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar alt="User 1" src={Avatar2} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Social link
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia
                      component="img"
                      image={Slider7}
                      title="Slider5 image"
                      sx={{ padding: '0.5rem 0.5rem 0', clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 0% 100%)' }}
                    />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Grid container spacing={2} alignItems="center" sx={{ mt: -6.25 }}>
                            <Grid item xs={4}>
                              <Avatar alt="User 1" src={Avatar3} sx={{ width: 80, height: 80, boxShadow: '0 0 0 5px #fff' }} />
                            </Grid>
                            <Grid item xs={8}>
                              <Typography variant="h6" color="inherit">
                                Josephin Doe
                              </Typography>
                              <Typography variant="body2" color="inherit">
                                UI/UX Designer
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="left" variant="body1">
                            Lorem Ipsum is simply dummy text been the industry standard
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item align="left">
                          <FacebookIcon sx={{ color: '#3C5A99', mr: 0.6, width: 25, height: 25 }} />
                          <TwitterIcon sx={{ color: '#42C0FB', mr: 0.6, width: 25, height: 25 }} />
                          <PinterestIcon sx={{ color: '#BF2131', mr: 0.6, width: 25, height: 25 }} />
                          <YouTubeIcon sx={{ color: '#E0291D', mr: 0.6, width: 25, height: 25 }} />
                          <LinkedInIcon sx={{ color: '#0077B5', mr: 0.6, width: 25, height: 25 }} />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={12}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Social profile
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia
                      component="img"
                      image={Cover}
                      title="Cover image"
                      sx={{ padding: '0.5rem 0.5rem 0', clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 0% 100%)' }}
                    />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Grid container wrap="nowrap" alignItems="center" sx={{ mt: -6.25 }} spacing={2}>
                            <Grid item>
                              <Avatar alt="User 1" src={Avatar3} sx={{ width: 100, height: 100, boxShadow: '0 0 0 5px #fff' }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                              <Typography align="left" variant="h6" color="inherit">
                                Josephin Doe
                              </Typography>
                              <Typography align="left" variant="body2" color="inherit">
                                UI/UX Designer
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Badge
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserBadge4
                            badgeContent={<VerifiedUserTwoToneIcon />}
                            color="primary"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          >
                            <UserAvatar4 alt="User 1" src={Imgavatar3} />
                          </UserBadge4>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Social link 1
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardContent>
                      <Grid>
                        <Grid item align="center">
                          <UserAvatar4 alt="User 1" src={Imgavatar1} />
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item align="center">
                          <FacebookIcon sx={{ color: '#3C5A99', mr: 0.6, width: 25, height: 25 }} />
                          <TwitterIcon sx={{ color: '#42C0FB', mr: 0.6, width: 25, height: 25 }} />
                          <PinterestIcon sx={{ color: '#BF2131', mr: 0.6, width: 25, height: 25 }} />
                          <YouTubeIcon sx={{ color: '#E0291D', mr: 0.6, width: 25, height: 25 }} />
                          <LinkedInIcon sx={{ color: '#0077B5', mr: 0.6, width: 25, height: 25 }} />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Social link 2 on hover
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <SocialHoverCard>
                    <CardContent>
                      <Grid>
                        <Grid item align="center">
                          <UserAvatar4 alt="User 1" src={Imgavatar2} />
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <SocialLink2 align="center">
                          <FacebookIcon sx={{ color: '#3C5A99', transitionDelay: '0.05s' }} />
                          <TwitterIcon sx={{ color: '#42C0FB', transitionDelay: '0.1s' }} />
                          <PinterestIcon sx={{ color: '#BF2131', transitionDelay: '0.15s' }} />
                          <YouTubeIcon sx={{ color: '#E0291D', transitionDelay: '0.2s' }} />
                          <LinkedInIcon sx={{ color: '#0077B5', transitionDelay: '0.25s' }} />
                        </SocialLink2>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </SocialHoverCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    User card 3
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardContent>
                      <Grid>
                        <Grid item align="center">
                          <UserAvatar4 alt="User 1" src={Imgavatar1} />
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    hover data
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <UserHoverCard>
                    <CardContent>
                      <Grid>
                        <Grid item align="center">
                          <UserAvatar4 alt="User 1" src={Imgavatar2} />
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                    <span
                      className="custom-span"
                      style={{
                        background: 'rgba(57, 68, 73, 0.92)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: '#fff',
                        padding: '0 20px',
                        transform: 'scale(0)',
                        transition: 'transform .3s ease-in-out'
                      }}
                    >
                      <Typography variant="h4" align="center">
                        Hire Me?
                      </Typography>
                      <UserSeperator />
                      <Typography variant="body1" align="center">
                        Lorem Ipsum is simply dummy text been the industry standard
                      </Typography>
                      <UserSeperator />
                      <Grid container justifyContent="center" spacing={1}>
                        <Grid item>
                          <Button variant="contained" color="primary">
                            Primary
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" color="secondary">
                            Secondary
                          </Button>
                        </Grid>
                      </Grid>
                    </span>
                  </UserHoverCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Badge
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserBadge4
                            badgeContent={<VerifiedUserTwoToneIcon />}
                            color="primary"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          >
                            <UserAvatar4 alt="User 1" src={Imgavatar3} />
                          </UserBadge4>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Social link
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardContent>
                      <Grid>
                        <Grid item align="center">
                          <UserAvatar4 alt="User 1" src={Imgavatar1} />
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item align="center">
                          <FacebookIcon sx={{ color: '#3C5A99', mr: 0.6, width: 25, height: 25 }} />
                          <TwitterIcon sx={{ color: '#42C0FB', mr: 0.6, width: 25, height: 25 }} />
                          <PinterestIcon sx={{ color: '#BF2131', mr: 0.6, width: 25, height: 25 }} />
                          <YouTubeIcon sx={{ color: '#E0291D', mr: 0.6, width: 25, height: 25 }} />
                          <LinkedInIcon sx={{ color: '#0077B5', mr: 0.6, width: 25, height: 25 }} />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Social link on hover
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <SocialHoverCard>
                    <CardContent>
                      <Grid>
                        <Grid item align="center">
                          <UserAvatar4 alt="User 1" src={Imgavatar3} />
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <SocialLink2 align="center">
                          <FacebookIcon sx={{ color: '#3C5A99', transitionDelay: '0.05s' }} />
                          <TwitterIcon sx={{ color: '#42C0FB', transitionDelay: '0.1s' }} />
                          <PinterestIcon sx={{ color: '#BF2131', transitionDelay: '0.15s' }} />
                          <YouTubeIcon sx={{ color: '#E0291D', transitionDelay: '0.20s' }} />
                          <LinkedInIcon sx={{ color: '#0077B5', transitionDelay: '0.25s' }} />
                        </SocialLink2>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            37
                          </Typography>
                          <Typography align="center" variant="body2">
                            Mails
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h6">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </SocialHoverCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    User card 4
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider7} title="Slider7 image" />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar5 alt="User 1" src={Userblurimg} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium recusandae beatae.
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            400
                          </Typography>
                          <Typography align="center" variant="body2">
                            Designs
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            90
                          </Typography>
                          <Typography align="center" variant="body2">
                            Projects
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            70
                          </Typography>
                          <Typography align="center" variant="body2">
                            Devlopment
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    User profile
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardMedia component="img" image={Slider5} title="Slider5 image" />
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <UserAvatar6 alt="User 1" src={Userimground} />
                        </Grid>
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            Web Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium recusandae beatae.
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    User profile 2
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <div
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'url(' + Slider5 + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '50px 0'
                      }}
                    >
                      <UserAvatar6 alt="User 1" src={Userimground} />
                    </div>
                    <CardContent>
                      <Grid>
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            Josephin Doe
                          </Typography>
                          <Typography align="center" variant="body2" color="inherit">
                            Web Designer
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium recusandae beatae.
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            400
                          </Typography>
                          <Typography align="center" variant="body2">
                            Designs
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            90
                          </Typography>
                          <Typography align="center" variant="body2">
                            Projects
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            70
                          </Typography>
                          <Typography align="center" variant="body2">
                            Devlopment
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Backround profile image
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <UserCardOverlay1>
                      <Grid>
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit" sx={{ fontWeight: '400' }}>
                            John Steve
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer at CreativesCastle Studio
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Button variant="contained" color="primary">
                            + Follow
                          </Button>
                        </Grid>
                      </Grid>
                    </UserCardOverlay1>
                    <CardActions>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            134
                          </Typography>
                          <Typography align="center" variant="body2">
                            Shots
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            13,227
                          </Typography>
                          <Typography align="center" variant="body2">
                            Shots
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography align="center" variant="h4">
                            488
                          </Typography>
                          <Typography align="center" variant="body2">
                            Shots
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={4}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Backround profile image
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <UserCardOverlay2>
                      <Grid sx={{ py: 3, px: 2.5 }}>
                        <Grid item>
                          <UserAvatar5 alt="User 1" src={Userblurimg} />
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="h3" color="inherit">
                            Linda Fox
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Typography align="center" variant="body2" color="inherit">
                            UI/UX Designer at CreativesCastle Studio
                          </Typography>
                        </Grid>
                        <UserSeperator />
                        <Grid item>
                          <Button variant="contained" color="primary">
                            + Follow
                          </Button>
                        </Grid>
                      </Grid>
                      <CardActions>
                        <Grid container spacing={1}>
                          <Grid item xs={4}>
                            <Typography align="center" variant="h4">
                              134
                            </Typography>
                            <Typography align="center" variant="body2">
                              Shots
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography align="center" variant="h4">
                              13,227
                            </Typography>
                            <Typography align="center" variant="body2">
                              Shots
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography align="center" variant="h4">
                              488
                            </Typography>
                            <Typography align="center" variant="body2">
                              Shots
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardActions>
                    </UserCardOverlay2>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={5}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    User settings
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ textAlign: 'center' }}>
                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Avatar
                            alt="User 1"
                            src={Avatar3}
                            sx={{
                              width: 60,
                              height: 60,
                              margin: '10px auto',
                              border: '1px solid #f1f1f1',
                              background: '#f0f2f8'
                            }}
                          />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" variant="h6" color="inherit">
                            Josephin Doe
                          </Typography>
                          <Typography align="left" variant="body2" color="inherit">
                            UI/UX Designer
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" color="primary">
                            Edit
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item md={3} sm={6}>
                          <Typography align="center" variant="h4">
                            69
                          </Typography>
                          <Typography align="center" variant="body2">
                            Shots
                          </Typography>
                        </Grid>
                        <Grid item md={3} sm={6}>
                          <Typography align="center" variant="h4">
                            2749
                          </Typography>
                          <Typography align="center" variant="body2">
                            Followers
                          </Typography>
                        </Grid>
                        <Grid item md={3} sm={6}>
                          <Typography align="center" variant="h4">
                            678
                          </Typography>
                          <Typography align="center" variant="body2">
                            Following
                          </Typography>
                        </Grid>
                        <Grid item md={3} sm={6}>
                          <Typography align="center" variant="h4">
                            78
                          </Typography>
                          <Typography align="center" variant="body2">
                            Like
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button variant="text" color="primary" startIcon={<MailTwoToneIcon />}>
                        Message
                      </Button>
                      <Button color="secondary" sx={{ marginLeft: 'auto !important' }}>
                        Follow
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </>
    </>
  );
};

export default UserCard;
