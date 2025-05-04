import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Card,
  CardHeader,
  CardContent,
  Divider,
  LinearProgress,
  Button,
  useMediaQuery,
  Box
} from '@mui/material';

// project import
import Avatar from 'component/Avatar';
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import ReportCard from './ReportCard';
import RevenueCard from './RevenueCard';
import SocialactionCard from './SocialactionCard';
import FooterprogressCard from './FooterprogressCard';
import HoverdataCard from './HoverdataCard';
import UsernumCard from './UsernumCard';
import SideiconCard from './SideiconCard';
import EcommerceCard from './EcommerceCard';
import IconnumCard from './IconnumCard';
import SocialhoverCard from './SocialhoverCard';
import RoundiconCard from './RoundiconCard';
import ProjectnumCard from './ProjectnumCard';
import TicketCard from './TicketCard';
import RouniconbgCard from './RouniconbgCard';
import SocialprogressCard from './SocialprogressCard';
import DesignprogressCard from './DesignprogressCard';

// assets
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import ChildCareTwoToneIcon from '@mui/icons-material/ChildCareTwoTone';
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import RadioTwoToneIcon from '@mui/icons-material/RadioTwoTone';
import MoveToInboxTwoToneIcon from '@mui/icons-material/MoveToInboxTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import RouterTwoToneIcon from '@mui/icons-material/RouterTwoTone';
import LocalFloristTwoToneIcon from '@mui/icons-material/LocalFloristTwoTone';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import RadioButtonCheckedTwoToneIcon from '@mui/icons-material/RadioButtonCheckedTwoTone';
import PanToolTwoToneIcon from '@mui/icons-material/PanToolTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import SettingsInputComponentTwoToneIcon from '@mui/icons-material/SettingsInputComponentTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';

import Avatar1 from 'assets/images/users/avatar-1.jpg';
import Avatar2 from 'assets/images/users/avatar-2.jpg';
import Avatar3 from 'assets/images/users/avatar-3.jpg';
import Avatar4 from 'assets/images/users/avatar-4.jpg';
import Avatar5 from 'assets/images/users/avatar-5.jpg';

// custom style
const FlatCardBlock = styled((props) => <Grid item xs={12} sm={6} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid ' + theme.palette.background.default,
  borderBottom: '1px solid ' + theme.palette.background.default
}));

const FlatCardBlockSm = styled((props) => <Grid item lg={2} sm={4} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid ' + theme.palette.background.default,
  borderBottom: '1px solid ' + theme.palette.background.default
}));

// ==============================|| WIDGET STATISTICS ||============================== //

const WidgetStatistics = () => {
  const theme = useTheme();
  const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

  const [statesw, setStatesw] = React.useState({
    checkedA: true
  });
  const handleChangesw = (event) => {
    setStatesw({ ...statesw, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Breadcrumb title="Widget Statistic">
        <Typography component={RouterLink} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Widget
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Statistic
        </Typography>
      </Breadcrumb>
      <Box>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} lg={3} sm={6}>
            <ReportCard
              primary="$30200"
              secondary="All Earnings"
              color={theme.palette.warning.main}
              footerData="10% Increase"
              iconPrimary={AssessmentOutlinedIcon}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <ReportCard
              primary="145"
              secondary="Task"
              color={theme.palette.error.main}
              footerData="124 Task Remains"
              iconPrimary={CalendarTodayOutlinedIcon}
              iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <ReportCard
              primary="290+"
              secondary="Page Views"
              color={theme.palette.success.main}
              footerData="10K Last Month"
              iconPrimary={DescriptionOutlinedIcon}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <ReportCard
              primary="500"
              secondary="Downloads"
              color={theme.palette.primary.main}
              footerData="20 Remains"
              iconPrimary={ThumbDownAltOutlinedIcon}
              iconFooter={TrendingDownIcon}
            />
          </Grid>

          <Grid item xs={12} lg={4} md={12}>
            <RevenueCard
              primary="Revenue"
              secondary="$42,562"
              content="$50,032 Last Month"
              iconPrimary={MonetizationOnTwoToneIcon}
              color={theme.palette.warning.main}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <RevenueCard
              primary="Orders Received"
              secondary="486"
              content="20% Increase"
              iconPrimary={AccountCircleTwoTone}
              color={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <RevenueCard
              primary="Total Sales"
              secondary="1641"
              content="$1,055 Revenue Generated"
              iconPrimary={LocalMallTwoToneIcon}
              color={theme.palette.success.main}
            />
          </Grid>

          <Grid item xs={12} lg={4} sm={6}>
            <SocialactionCard
              iconPrimary={MailTwoToneIcon}
              primaryone=""
              primarytwo="10K Subscribers"
              secondary="4K Active"
              content="Manage List"
              color={theme.palette.primary.main}
              btncolor="primary"
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <SocialactionCard
              iconPrimary={ChildCareTwoToneIcon}
              primaryone="447"
              primarytwo="Followers"
              secondary="Share to increase your followers"
              content="Check them out"
              color={theme.palette.success.main}
              btncolor="secondary"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SocialactionCard
              iconPrimary={CardGiftcardTwoToneIcon}
              primaryone="750"
              primarytwo="Credit Remains"
              secondary="This is your current active plan"
              content="Upgrade to VIP"
              color={theme.palette.error.main}
              btncolor="secondary"
            />
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <FooterprogressCard
              title="Articles"
              primary={56}
              secondary="Total"
              color={theme.palette.primary.main}
              footerData="Draft Post: 22"
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <FooterprogressCard
              title="Categories"
              primary={14}
              secondary="Total"
              color={theme.palette.success.main}
              footerData="Used: 14"
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <FooterprogressCard title="Tickets" primary={85} secondary="Total" color={theme.palette.error.main} footerData="Open: 85" />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <FooterprogressCard
              title="Forums"
              primary={42}
              secondary="Total"
              color={theme.palette.warning.main}
              footerData="Unanswered: 42"
            />
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <HoverdataCard
              title="Total Paid Users"
              iconPrimary={ArrowDownwardIcon}
              primary={7652}
              secondary="8% less Last 3 Months"
              color={theme.palette.error.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <HoverdataCard
              title="Order Status"
              iconPrimary={ArrowUpwardIcon}
              primary={625}
              secondary="6% From Last 3 Months"
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <HoverdataCard
              title="Unique Visitors"
              iconPrimary={ArrowDownwardIcon}
              primary={6522}
              secondary="10% From Last 6 Months"
              color={theme.palette.error.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <HoverdataCard
              title="Monthly Earnings"
              iconPrimary={ArrowUpwardIcon}
              primary={5963}
              secondary="36% From Last 6 Months"
              color={theme.palette.success.main}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <UsernumCard primary="Daily user" secondary="1,658" iconPrimary={AccountCircleTwoTone} color={theme.palette.error.main} />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <UsernumCard primary="Daily page view" secondary="1K" iconPrimary={DescriptionTwoToneIcon} color={theme.palette.primary.main} />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <UsernumCard
              primary="Last month visitor"
              secondary="5,678"
              iconPrimary={EmojiEventsTwoToneIcon}
              color={theme.palette.warning.main}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} zeroMinWidth>
                    <Typography variant="h6">App Design And Development</Typography>
                    <Typography variant="subtitle2" color="primary">
                      Android
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" size="small">
                      Completed
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={4}>
                      <Grid item>
                        <Typography variant="h3">678</Typography>
                        <Typography variant="subtitle2">Question</Typography>
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Typography variant="h3">1,452</Typography>
                        <Typography variant="subtitle2">Comments</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} alignItems="center">
                      <Grid item>
                        <Typography variant="subtitle2">Team</Typography>
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Avatar variant="rounded" alt="User 1" src={Avatar1} />
                          </Grid>
                          <Grid item>
                            <Avatar variant="rounded" alt="User 2" src={Avatar2} />
                          </Grid>
                          <Grid item>
                            <Avatar variant="rounded" alt="User 3" src={Avatar3} />
                          </Grid>
                          <Grid item>
                            <Avatar variant="rounded" alt="User 4" src={Avatar4} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} zeroMinWidth>
                    <Typography variant="h6">Landing Page Design</Typography>
                    <Typography variant="subtitle2" color="primary">
                      Webdesign
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="secondary" size="small">
                      Pending
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={4}>
                      <Grid item>
                        <Typography variant="h3">271</Typography>
                        <Typography variant="subtitle2">Question</Typography>
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Typography variant="h3">816</Typography>
                        <Typography variant="subtitle2">Comments</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} alignItems="center">
                      <Grid item>
                        <Typography variant="subtitle2">Team</Typography>
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Avatar variant="rounded" alt="User 1" src={Avatar5} />
                          </Grid>
                          <Grid item>
                            <Avatar variant="rounded" alt="User 2" src={Avatar4} />
                          </Grid>
                          <Grid item>
                            <Avatar variant="rounded" alt="User 3" src={Avatar1} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item sm={5} xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h2">827</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">Total Request</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress aria-label="request" variant="determinate" value={56} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={7} xs={12}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography align="center" variant="h3">
                              3,452
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography align="center" variant="subtitle1">
                              Threats
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography align="center" variant="subtitle2">
                              +384
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography align="center" variant="h3">
                              5,173
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography align="center" variant="subtitle1">
                              Neutral
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography align="center" variant="subtitle2">
                              +384
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item container justifyContent="space-between">
                        <Grid item>
                          <Typography variant="h3">3,281</Typography>
                        </Grid>
                        <Grid item>
                          <ArrowDropDownIcon sx={{ color: theme.palette.error.main, width: 40, height: 40 }} />
                        </Grid>
                      </Grid>
                      <Grid item sm zeroMinWidth xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1">Standard scans</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress aria-label="Standard Scans" variant="determinate" value={70} color="primary" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item container justifyContent="space-between">
                        <Grid item>
                          <Typography variant="h3">3,281</Typography>
                        </Grid>
                        <Grid item>
                          <ArrowDropUpIcon sx={{ color: theme.palette.success.main, width: 40, height: 40 }} />
                        </Grid>
                      </Grid>
                      <Grid item sm zeroMinWidth xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1">Team scans</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress aria-label="Team scans" variant="determinate" value={40} color="secondary" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <SideiconCard
              iconPrimary={AccountCircleTwoTone}
              numtext="2,672"
              primary="Last week"
              primarysub="users"
              color={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SideiconCard
              iconPrimary={AccountBalanceWalletTwoToneIcon}
              numtext="$6391"
              primary="Total"
              primarysub="earning"
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SideiconCard
              iconPrimary={ShoppingCartTwoToneIcon}
              numtext="3,619"
              primary="New"
              primarysub="order"
              color={theme.palette.error.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SideiconCard
              iconPrimary={EmojiEmotionsTwoToneIcon}
              numtext="9,276"
              primary="Today"
              primarysub="visitors"
              color={theme.palette.warning.main}
            />
          </Grid>

          <Grid item xs={12} lg={4} sm={6}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Sales
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h3">$ 17,400</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Total revenue</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={6}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
                              472
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="subtitle2">Deals added</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress variant="determinate" aria-label="Deals Added" value={56} color="primary" />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.success.main }}>
                              472
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="subtitle2">Deals added</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LinearProgress variant="determinate" aria-label="Deals Added" value={56} color="secondary" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Customer satisfaction
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h3" align="center" sx={{ color: theme.palette.success.main }}>
                      89.73%
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <LinearProgress aria-label="Customer satisfaction" variant="determinate" value={67} color="primary" />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={4}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle2">previous</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h5">56.75</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle2">Change</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h5">+12.60</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle2">Trend</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h5">23.78</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Referrals
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h2">38.1%</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                      <Grid item>
                        <Typography variant="subtitle2" align="center">
                          March
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <LinearProgress variant="determinate" aria-label="March" value={56} color="primary" />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" align="center">
                          50.3%
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                      <Grid item>
                        <Typography variant="subtitle2" align="center">
                          February
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <LinearProgress variant="determinate" aria-label="February" value={36} color="secondary" />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" align="center">
                          42.7%
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                      <Grid item>
                        <Typography variant="subtitle2" align="center">
                          January
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <LinearProgress variant="determinate" aria-label="January" value={66} color="primary" />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" align="center">
                          78.4%
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4} sm={6}>
            <EcommerceCard
              cardtitle="Your balance"
              numtext="$167.20"
              btntext="Recharge now"
              subtext="Recharge of next month"
              numsubtext="$167.20"
              btncolor="primary"
              progressvalue={75}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <EcommerceCard
              cardtitle="Your Stock"
              numtext="95"
              btntext="Make order now"
              subtext="Order of next month"
              numsubtext="1697.95 kg"
              btncolor="secondary"
              progressvalue={25}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <EcommerceCard
              cardtitle="Your order"
              numtext="19,540 kg"
              btntext="Payment now"
              subtext="Payment of next month"
              numsubtext="$49,000.20"
              btncolor="primary"
              progressvalue={55}
            />
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <IconnumCard
              title="Visitors"
              numtext="6035"
              numtextcolor={theme.palette.primary.main}
              iconPrimary={AccountCircleTwoTone}
              progresscolor="primary"
              progressvalue={85}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <IconnumCard
              title="Invoices"
              numtext="19"
              numtextcolor={theme.palette.error.main}
              iconPrimary={DescriptionTwoToneIcon}
              progresscolor="secondary"
              progressvalue={25}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <IconnumCard
              title="Issues"
              numtext="63"
              numtextcolor={theme.palette.warning.main}
              iconPrimary={BugReportTwoToneIcon}
              progresscolor="primary"
              progressvalue={55}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <IconnumCard
              title="Projects"
              numtext="95%"
              numtextcolor={theme.palette.success.main}
              iconPrimary={FolderOpenTwoToneIcon}
              progresscolor="secondary"
              progressvalue={90}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card>
              <CardContent sx={{ p: '0 !important' }}>
                <Grid container alignItems="center" spacing={0}>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <VisibilityTwoToneIcon sx={{ color: theme.palette.success.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          10k
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          VISITORS
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <RadioTwoToneIcon sx={{ color: theme.palette.error.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          100%
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          VOLUME
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                </Grid>
                <Grid container alignItems="center" spacing={0}>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <DescriptionTwoToneIcon sx={{ color: theme.palette.primary.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          2000+
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          FILES
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <MoveToInboxTwoToneIcon sx={{ color: theme.palette.warning.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          120
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          MAILS
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card>
              <CardContent sx={{ p: '0 !important' }}>
                <Grid container alignItems="center" spacing={0}>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <LocalFloristTwoToneIcon sx={{ color: theme.palette.primary.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          1000
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          SHARES
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <RouterTwoToneIcon sx={{ color: theme.palette.primary.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          600
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          NETWORK
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                </Grid>
                <Grid container alignItems="center" spacing={0}>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <FilterVintageTwoToneIcon sx={{ color: theme.palette.primary.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          3550
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          RETURNS
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                  <FlatCardBlock>
                    <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                      <Grid item>
                        <LocalMallTwoToneIcon sx={{ color: theme.palette.primary.main, width: 40, height: 40 }} />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" align="center">
                          100%
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          ORDER
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlock>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4} md={12}>
            <Grid container alignItems="center" spacing={gridSpacing}>
              <Grid item xs={12} sm={6} lg={12}>
                <Card
                  sx={{
                    background: theme.palette.primary.main,
                    color: '#fff'
                  }}
                >
                  <CardContent sx={{ p: '0 !important' }}>
                    <Grid container alignItems="center" spacing={0}>
                      <Grid item>
                        <StarsTwoToneIcon
                          sx={{
                            p: 2.5,
                            width: 85,
                            height: 85,
                            display: 'flex',
                            background: theme.palette.primary.dark
                          }}
                        />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography sx={{ ml: 3 }} variant="h4" color="inherit">
                          4000 +
                        </Typography>
                        <Typography sx={{ ml: 3 }} variant="subtitle1" color="inherit">
                          Ratings Received
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <Card
                  sx={{
                    background: theme.palette.success.main,
                    color: '#fff'
                  }}
                >
                  <CardContent sx={{ p: '0 !important' }}>
                    <Grid container alignItems="center" spacing={0}>
                      <Grid item>
                        <EmojiEventsTwoToneIcon
                          sx={{
                            padding: 2.5,
                            width: 85,
                            height: 85,
                            display: 'flex',
                            background: theme.palette.success.dark
                          }}
                        />
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography sx={{ ml: 3 }} variant="h4" color="inherit">
                          17
                        </Typography>
                        <Typography sx={{ ml: 3 }} variant="subtitle1" color="inherit">
                          Achievements
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent sx={{ p: '0 !important' }}>
                <Grid container alignItems="center" spacing={0}>
                  <FlatCardBlockSm>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle2" align="left">
                          REALTY
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="right">
                          -0.99
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle2" align="left">
                          TELCOM
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                          +1.52
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle2" align="left">
                          CPSE
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                          +5.78
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle2" align="left">
                          INFRA
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="right">
                          -7.66
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle2" align="left">
                          TECK
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                          +4.56
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle2" align="left">
                          BASMTR
                        </Typography>
                      </Grid>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                          +0.78
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4} sm={6}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={1} justifyContent="space-between">
                          <Grid item sm zeroMinWidth>
                            <Typography variant="subtitle1" align="left">
                              Sales view
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h3" align="right">
                              1042
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={1} justifyContent="center">
                          <Grid item xs={4}>
                            <Typography variant="h4">
                              <FiberManualRecordIcon sx={{ color: theme.palette.success.main, width: 14, height: 14 }} /> 66%
                            </Typography>
                            <Typography variant="subtitle2">REALTY</Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant="h4">
                              <FiberManualRecordIcon sx={{ color: theme.palette.primary.main, width: 14, height: 14 }} /> 26%
                            </Typography>
                            <Typography variant="subtitle2">Tablet</Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant="h4">
                              <FiberManualRecordIcon sx={{ color: theme.palette.error.main, width: 14, height: 14 }} /> 8%
                            </Typography>
                            <Typography variant="subtitle2">Mobile</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={6} sm={6}>
                            <LinearProgress variant="determinate" aria-label="Mobile" value={100} color="secondary" />
                          </Grid>
                          <Grid item xs={4} sm={4}>
                            <LinearProgress variant="determinate" aria-label="Mobile" value={100} color="primary" />
                          </Grid>
                          <Grid item xs={2} sm={2}>
                            <LinearProgress variant="determinate" aria-label="Mobile" value={1} color="primary" />
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
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">New York , NY</Typography>
                        <Typography variant="subtitle2">Monday 2:00 PM</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0} justifyContent="space-around" alignItems="center">
                          <Grid item>
                            <Typography variant="h3">
                              <FilterDramaTwoToneIcon sx={{ width: 30, height: 30, opacity: '0.6' }} color="secondary" />
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h3">
                              23<sup>°</sup>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <FormControlLabel
                              control={<Switch checked={statesw.checkedA} onChange={handleChangesw} name="checkedA" color="primary" />}
                              label="°C / °F"
                            />
                            <Typography variant="subtitle2">Partly Cloudy</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="h3" align="left">
                              954
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1" align="right">
                              New Order
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <Typography variant="subtitle2">
                              <FiberManualRecordIcon sx={{ color: theme.palette.success.main, width: 14, height: 14 }} /> India
                            </Typography>
                            <Typography variant="subtitle2">
                              <FiberManualRecordIcon sx={{ color: theme.palette.error.main, width: 14, height: 14 }} /> France
                            </Typography>
                            <Typography variant="subtitle2">
                              <FiberManualRecordIcon sx={{ color: theme.palette.primary.main, width: 14, height: 14 }} /> Other
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="subtitle2">
                              <FiberManualRecordIcon sx={{ color: theme.palette.warning.main, width: 14, height: 14 }} /> United states
                            </Typography>
                            <Typography variant="subtitle2">
                              <FiberManualRecordIcon sx={{ color: theme.palette.primary.main, width: 14, height: 14 }} /> United Kingdom
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={0}>
                          <Grid item xs={3}>
                            <LinearProgress variant="determinate" aria-label="New order" value={100} color="secondary" />
                          </Grid>
                          <Grid item xs={3}>
                            <LinearProgress variant="determinate" aria-label="New order" value={50} color="secondary" />
                          </Grid>
                          <Grid item xs={2}>
                            <LinearProgress variant="determinate" aria-label="New order" value={100} color="primary" />
                          </Grid>
                          <Grid item xs={2}>
                            <LinearProgress variant="determinate" aria-label="New order" value={100} color="primary" />
                          </Grid>
                          <Grid item xs={2}>
                            <LinearProgress variant="determinate" aria-label="New order" value={10} color="primary" />
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
                        Overdue tasks
                      </Typography>
                    }
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="h3">
                          <ArrowUpwardIcon fontSize="small" sx={{ width: 30, height: 30, color: theme.palette.success.main, mr: 1.5 }} />
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h3">4</Typography>
                      </Grid>
                      <Grid item>
                        <Typography align="right" variant="subtitle1" sx={{ color: theme.palette.success.main }}>
                          15%
                        </Typography>
                        <Typography align="right" variant="subtitle2">
                          Last Month:6
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="h5" align="left">
                              Revenue
                            </Typography>
                          </Grid>
                          <Grid item></Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Revenue" value={70} color="primary" />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={6}>
                            <Typography variant="subtitle2">EARNING</Typography>
                            <Typography variant="h6">$6.455</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography align="right" variant="subtitle2">
                              EXPENSE
                            </Typography>
                            <Typography align="right" variant="h6">
                              $3,869
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={6}>
                            <Typography variant="subtitle2">BUDGET</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography align="right" variant="subtitle2">
                              EARNING
                            </Typography>
                            <Typography align="right" variant="h6">
                              $5,569 of $1,000
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Earning" value={55} color="secondary" />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent sx={{ p: '0 !important' }}>
                    <Grid container alignItems="center" spacing={0}>
                      <Grid item xs={6} sx={{ py: 3, px: 3 }}>
                        <Typography variant="h2" align="center">
                          19<sup>°</sup>
                        </Typography>
                        <Typography variant="subtitle2" align="center">
                          Sunny
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ py: 3, px: 3, background: theme.palette.primary.main }}>
                        <Typography variant="subtitle2" align="center">
                          <WbSunnyTwoToneIcon align="center" sx={{ width: 40, height: 40, color: '#fff' }} />
                        </Typography>
                        <Typography variant="subtitle2" align="center" sx={{ color: '#fff' }}>
                          New York , NY
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <SocialhoverCard primary="Facebook Users" secondary="1165 +" iconPrimary={FacebookIcon} color={theme.palette.primary.main} />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SocialhoverCard primary="Twitter Users" secondary="780 +" iconPrimary={TwitterIcon} color={theme.palette.info.main} />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SocialhoverCard primary="Linked In Users" secondary="998 +" iconPrimary={LinkedInIcon} color={theme.palette.primary.main} />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SocialhoverCard primary="Youtube Videos" secondary="650 +" iconPrimary={YouTubeIcon} color={theme.palette.error.main} />
          </Grid>

          <Grid item xs={12} lg={4} sm={6}>
            <RoundiconCard
              primary="Impressions"
              secondary="1,563"
              content="May 23 - June 01 (2018)"
              iconPrimary={RemoveRedEyeTwoToneIcon}
              color={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <RoundiconCard
              primary="Goal"
              secondary="30,564"
              content="May 28 - June 01 (2018)"
              iconPrimary={RadioButtonCheckedTwoToneIcon}
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} lg={4} md={12}>
            <RoundiconCard
              primary="Impact"
              secondary="42.6%"
              content="May 30 - June 01 (2018)"
              iconPrimary={PanToolTwoToneIcon}
              color={theme.palette.warning.main}
            />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent sx={{ p: '0 !important' }}>
                <Grid container alignItems="center" spacing={0}>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Support Requests
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowDownwardIcon sx={{ color: theme.palette.error.main, width: 24, height: 24 }} /> 25{' '}
                          <sup style={{ color: theme.palette.error.main, fontSize: 14, fontWeight: '400' }}>-11%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Agent Response
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowUpwardIcon sx={{ color: theme.palette.success.main, width: 24, height: 24 }} /> 8{' '}
                          <sup style={{ color: theme.palette.success.main, fontSize: 14, fontWeight: '400' }}>+6%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Support Resolved
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowDownwardIcon sx={{ color: theme.palette.error.main, width: 24, height: 24 }} /> 1{' '}
                          <sup style={{ color: theme.palette.error.main, fontSize: 14, fontWeight: '400' }}>-11%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Pending Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowUpwardIcon sx={{ color: theme.palette.success.main, width: 24, height: 24 }} /> 1.56{' '}
                          <sup style={{ color: theme.palette.success.main, fontSize: 14, fontWeight: '400' }}>+8%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Reopen Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowUpwardIcon sx={{ color: theme.palette.success.main, width: 24, height: 24 }} /> 5.7{' '}
                          <sup style={{ color: theme.palette.success.main, fontSize: 14, fontWeight: '400' }}>+4%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Return Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowDownwardIcon sx={{ color: theme.palette.error.main, width: 24, height: 24 }} /> 4{' '}
                          <sup style={{ color: theme.palette.error.main, fontSize: 14, fontWeight: '400' }}>-7%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                </Grid>
                <Grid container alignItems="center" spacing={0}>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Open Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowDownwardIcon sx={{ color: theme.palette.error.main, width: 24, height: 24 }} /> 29{' '}
                          <sup style={{ color: theme.palette.error.main, fontSize: 14, fontWeight: '400' }}>-11%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Running Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowDownwardIcon sx={{ color: theme.palette.error.main, width: 24, height: 24 }} /> 15{' '}
                          <sup style={{ color: theme.palette.error.main, fontSize: 14, fontWeight: '400' }}>-13%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Solved Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowUpwardIcon sx={{ color: theme.palette.success.main, width: 24, height: 24 }} /> 4{' '}
                          <sup style={{ color: theme.palette.success.main, fontSize: 14, fontWeight: '400' }}>+5%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Reassign Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowDownwardIcon sx={{ color: theme.palette.error.main, width: 24, height: 24 }} /> 2{' '}
                          <sup style={{ color: theme.palette.error.main, fontSize: 14, fontWeight: '400' }}>-11%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Close Ticket
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowUpwardIcon sx={{ color: theme.palette.success.main, width: 24, height: 24 }} /> 10{' '}
                          <sup style={{ color: theme.palette.success.main, fontSize: 14, fontWeight: '400' }}>+9%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                  <FlatCardBlockSm>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Satisfied Clients
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="left">
                          <ArrowDownwardIcon sx={{ color: theme.palette.error.main, width: 24, height: 24 }} /> 3{' '}
                          <sup style={{ color: theme.palette.error.main, fontSize: 14, fontWeight: '400' }}>+6%</sup>
                        </Typography>
                      </Grid>
                    </Grid>
                  </FlatCardBlockSm>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container alignItems="center" spacing={gridSpacing}>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Published Project
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" align="left">
                          532 <span style={{ color: theme.palette.error.main }}>+1.69%</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Published Project" value={40} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Completed Task
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" align="left">
                          4,569 <span style={{ color: theme.palette.primary.main }}>-0.5%</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Complete Task" value={70} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Successfull Task
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" align="left">
                          89% <span style={{ color: theme.palette.success.main }}>+0.99%</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Successfull task" value={30} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" align="left">
                          Ongoing Project
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" align="left">
                          365 <span style={{ color: theme.palette.warning.main }}>+0.35%</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Ongoing Project" value={86} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4} sm={6}>
            <ProjectnumCard
              primary="Ticket Answered"
              secondary="Live Update"
              secondary1="327"
              secondary2="10 Days"
              content="53%"
              iconPrimary={EventAvailableTwoToneIcon}
              color={theme.palette.error.main}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <ProjectnumCard
              primary="Project Launched"
              secondary="Live Update"
              secondary1="3 Year"
              secondary2="623"
              content="76%"
              iconPrimary={AccountBalanceTwoToneIcon}
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProjectnumCard
              primary="Unique Innovation"
              secondary="Live Update"
              secondary1="1 Month"
              secondary2="248"
              content="73%"
              iconPrimary={EmojiObjectsTwoToneIcon}
              color={theme.palette.warning.main}
            />
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <TicketCard
              iconPrimary={FolderOpenTwoToneIcon}
              content="Open Tickets"
              primary="128"
              secondary="Tickets"
              iconFooter={ArrowDropDownTwoToneIcon}
              secondary1="From Previous Month"
              color={theme.palette.error.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <TicketCard
              iconPrimary={HighlightOffTwoToneIcon}
              content="Close Tickets"
              primary="134"
              secondary="Tickets"
              iconFooter={ArrowDropUpTwoToneIcon}
              secondary1="From Previous Month"
              color={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <TicketCard
              iconPrimary={PeopleAltTwoToneIcon}
              content="New Clients"
              primary="307"
              secondary="Clients"
              iconFooter={ArrowDropUpTwoToneIcon}
              secondary1="From Previous Month"
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <TicketCard
              iconPrimary={LocalMallTwoToneIcon}
              content="New Orders"
              primary="231"
              secondary="Orders"
              iconFooter={ArrowDropUpTwoToneIcon}
              secondary1="From Previous Month"
              color={theme.palette.warning.main}
            />
          </Grid>

          <Grid item xs={12} lg={4} sm={6}>
            <RouniconbgCard
              primary="Total Sales"
              secondary="15,678"
              content="Total Income : $2,451"
              content2="10%"
              iconPrimary={LocalMallTwoToneIcon}
              iconFooter={ArrowDropUpTwoToneIcon}
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <RouniconbgCard
              primary="Total Users"
              secondary="1,678"
              content="Total Revenue : $2,451"
              content2="30%"
              iconPrimary={PeopleAltTwoToneIcon}
              iconFooter={ArrowDropDownTwoToneIcon}
              color={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <RouniconbgCard
              primary="Total Project"
              secondary="15,678"
              content="Active Projects : $2,451"
              content2="10%"
              iconPrimary={CardTravelTwoToneIcon}
              iconFooter={ArrowDropUpTwoToneIcon}
              color={theme.palette.error.main}
            />
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <SocialprogressCard
              cardtitle="Facebook Source"
              text1="Page Profile"
              progressvalue1={35}
              text2="Favorite"
              progressvalue2={93}
              text3="Like Story"
              progressvalue3={75}
              progresscolor="primary"
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SocialprogressCard
              cardtitle="Twitter Source"
              text1="Wall Profile"
              progressvalue1={78}
              text2="Favorite"
              progressvalue2={34}
              text3="Like Tweets"
              progressvalue3={66}
              progresscolor="secondary"
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SocialprogressCard
              cardtitle="Google+ Source"
              text1="Profile"
              progressvalue1={67}
              text2="Connect"
              progressvalue2={21}
              text3="Like News"
              progressvalue3={76}
              progresscolor="secondary"
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <SocialprogressCard
              cardtitle="Linkedin Source"
              text1="Profile"
              progressvalue1={56}
              text2="Connect"
              progressvalue2={78}
              text3="Like Story"
              progressvalue3={45}
              progresscolor="primary"
            />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container alignItems="center" spacing={gridSpacing}>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <BusinessCenterTwoToneIcon sx={{ width: 40, height: 40, verticalAlign: 'top' }} />
                          </Grid>
                          <Grid item>
                            <Typography variant="h3" align="right" sx={{ color: theme.palette.primary.main }}>
                              2476
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle2" color="inherit">
                              Total Product
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2" align="right" sx={{ color: theme.palette.primary.main }}>
                              <span>
                                <ArrowDropUpTwoToneIcon sx={{ verticalAlign: 'top', width: 20, height: 20 }} />
                              </span>{' '}
                              64%
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Total product" value={40} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <LocalOfferTwoToneIcon sx={{ width: 40, height: 40, verticalAlign: 'top' }} />
                          </Grid>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="h3" align="right" sx={{ color: theme.palette.error.main }}>
                              843
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle2" color="inherit">
                              New Orders
                            </Typography>
                          </Grid>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="subtitle2" align="right" sx={{ color: theme.palette.error.main }}>
                              <span>
                                <ArrowDropUpTwoToneIcon sx={{ verticalAlign: 'top', width: 20, height: 20 }} />
                              </span>{' '}
                              34%
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="New order" value={78} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <SettingsInputComponentTwoToneIcon sx={{ width: 40, height: 40, verticalAlign: 'top' }} />
                          </Grid>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="h3" align="right" sx={{ color: theme.palette.warning.main }}>
                              63%
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle2" color="inherit">
                              Conversion Rate
                            </Typography>
                          </Grid>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="subtitle2" align="right" sx={{ color: theme.palette.warning.main }}>
                              <span>
                                <ArrowDropUpTwoToneIcon sx={{ verticalAlign: 'top', width: 20, height: 20 }} />
                              </span>{' '}
                              64%
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Conversion rate" value={40} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <StoreTwoToneIcon sx={{ width: 40, height: 40, verticalAlign: 'top' }} />
                          </Grid>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="h3" align="right" sx={{ color: theme.palette.success.main }}>
                              41M
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle2" color="inherit">
                              Revenue
                            </Typography>
                          </Grid>
                          <Grid item sm zeroMinWidth>
                            <Typography variant="subtitle2" align="right" sx={{ color: theme.palette.success.main }}>
                              <span>
                                <ArrowDropDownTwoToneIcon sx={{ verticalAlign: 'top', width: 20, height: 20 }} />
                              </span>{' '}
                              54%
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Revenue" value={86} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <DesignprogressCard
              topvalue="$6,456"
              toptext="This Week"
              bottomvalue="$6,456"
              bottomtext="Previous Week"
              progressvalue={81}
              title="App design and development"
              color={theme.palette.primary.main}
              progresscolor="primary"
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <DesignprogressCard
              topvalue="$2,450"
              toptext="This Month"
              bottomvalue="$5,420"
              bottomtext="Previous Month"
              progressvalue={45}
              title="Landing page design"
              color={theme.palette.error.main}
              progresscolor="secondary"
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={6}>
            <DesignprogressCard
              topvalue="$8,360"
              toptext="This Month"
              bottomvalue="$9,400"
              bottomtext="Previous Month"
              progressvalue={65}
              title="Mockup design"
              color={theme.palette.success.main}
              progresscolor="secondary"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WidgetStatistics;
