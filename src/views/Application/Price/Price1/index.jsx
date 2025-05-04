import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Typography,
  FormControlLabel,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  InputLabel,
  Card,
  CardContent
} from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AirportShuttleTwoToneIcon from '@mui/icons-material/AirportShuttleTwoTone';
import DirectionsBoatTwoToneIcon from '@mui/icons-material/DirectionsBoatTwoTone';

// ==============================|| PRICE 1 ||============================== //

const Price1 = () => {
  const theme = useTheme();
  const [ccbccvalue, ccbccsetValue] = React.useState(0);
  const ccbcchandleChange = () => {
    ccbccsetValue((prev) => !prev);
  };

  return (
    <>
      <Breadcrumb title="Pricing Plan">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Price
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Price 1
        </Typography>
      </Breadcrumb>
      <Grid container justifyContent="center" alignItems="center" spacing={gridSpacing}>
        <Grid item>
          <InputLabel htmlFor="changeplan">Monthly</InputLabel>
        </Grid>
        <Grid item>
          <FormControlLabel value="start" control={<Switch color="primary" id="changeplan" onClick={ccbcchandleChange} />} />
        </Grid>
        <Grid item>
          <InputLabel htmlFor="changeplan">Annual</InputLabel>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: 'center', position: 'relative' }}>
            <CardContent sx={{ pt: 2 }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      background: '#eaf2fe',
                      color: theme.palette.primary.main
                    }}
                  >
                    <MenuBookTwoToneIcon sx={{ width: 35, height: 35 }} />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{
                      fontSize: '25px',
                      fontWeight: '500',
                      position: 'relative',
                      mb: 2,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-15px',
                        left: 'calc(50% - 25px)',
                        width: 50,
                        height: 4,
                        background: theme.palette.primary.main,
                        borderRadius: '3px'
                      }
                    }}
                  >
                    Starters
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="div" variant="body2">
                    For businesses wanting an out-of-the box payouts solution and API.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {ccbccvalue ? (
                    <Typography component="div" variant="body2" sx={{ fontSize: '35px', fontWeight: '700' }}>
                      <sup>$</sup>225<span style={{ fontSize: '20px', fontWeight: '500' }}>/Year</span>
                    </Typography>
                  ) : (
                    <Typography component="div" variant="body2" sx={{ fontSize: '35px', fontWeight: '700' }}>
                      <sup>$</sup>25<span style={{ fontSize: '20px', fontWeight: '500' }}>/Month</span>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <List sx={{ m: 0, p: 0 }} component="ul">
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="Only 1 User uses" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="10 Projects for individuals" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ opacity: '0.4' }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.secondary.light }} />
                      </ListItemIcon>
                      <ListItemText primary="5GB of Storage" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ opacity: '0.4' }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.secondary.light }} />
                      </ListItemIcon>
                      <ListItemText primary="Unlimited Bandwitch" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ opacity: '0.4' }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.secondary.light }} />
                      </ListItemIcon>
                      <ListItemText primary="Unlimited Data" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ opacity: '0.4' }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.secondary.light }} />
                      </ListItemIcon>
                      <ListItemText primary="Fully Security Suite" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" color="primary">
                    Order Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: 'center', position: 'relative' }}>
            <CardContent sx={{ pt: 2 }}>
              <div
                style={{
                  background: theme.palette.secondary.main,
                  color: '#fff',
                  display: 'inline-block',
                  padding: '40px 40px 5px',
                  fontSize: '16px',
                  position: 'absolute',
                  top: '-10px',
                  right: '-55px',
                  transform: 'rotate(45deg)',
                  textTransform: 'uppercase'
                }}
              >
                Popular
              </div>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      background: '#eaf2fe',
                      color: theme.palette.primary.main
                    }}
                  >
                    <AirportShuttleTwoToneIcon sx={{ width: 35, height: 35 }} />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{
                      fontSize: '25px',
                      fontWeight: '500',
                      position: 'relative',
                      mb: 2,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-15px',
                        left: 'calc(50% - 25px)',
                        width: 50,
                        height: 4,
                        background: theme.palette.primary.main,
                        borderRadius: '3px'
                      }
                    }}
                  >
                    Scalability
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="div" variant="body2">
                    For companies needing to important a payments platform as they continue to grow.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {ccbccvalue ? (
                    <Typography component="div" variant="body2" sx={{ fontSize: '35px', fontWeight: '700' }}>
                      <sup>$</sup>825<span style={{ fontSize: '20px', fontWeight: '500' }}>/Year</span>
                    </Typography>
                  ) : (
                    <Typography component="div" variant="body2" sx={{ fontSize: '35px', fontWeight: '700' }}>
                      <sup>$</sup>125<span style={{ fontSize: '20px', fontWeight: '500' }}>/Month</span>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <List sx={{ m: 0, p: 0 }} component="ul">
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="Only 1 User uses" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="10 Projects for individuals" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="5GB of Storage" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ opacity: '0.4' }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.secondary.light }} />
                      </ListItemIcon>
                      <ListItemText primary="Unlimited Bandwitch" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ opacity: '0.4' }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.secondary.light }} />
                      </ListItemIcon>
                      <ListItemText primary="Unlimited Data" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ opacity: '0.4' }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.secondary.light }} />
                      </ListItemIcon>
                      <ListItemText primary="Fully Security Suite" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary">
                    Order Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: 'center', position: 'relative' }}>
            <CardContent sx={{ pt: 2 }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      background: '#eaf2fe',
                      color: theme.palette.primary.main
                    }}
                  >
                    <DirectionsBoatTwoToneIcon sx={{ width: 35, height: 35 }} />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{
                      fontSize: '25px',
                      fontWeight: '500',
                      position: 'relative',
                      mb: 2,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-15px',
                        left: 'calc(50% - 25px)',
                        width: 50,
                        height: 4,
                        background: theme.palette.primary.main,
                        borderRadius: '3px'
                      }
                    }}
                  >
                    Enterprise
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="div" variant="body2">
                    For established businesses needing a sophisticated payments partner.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {ccbccvalue ? (
                    <Typography component="div" variant="body2" sx={{ fontSize: '35px', fontWeight: '700' }}>
                      <sup>$</sup>1025<span style={{ fontSize: '20px', fontWeight: '500' }}>/Year</span>
                    </Typography>
                  ) : (
                    <Typography component="div" variant="body2" sx={{ fontSize: '35px', fontWeight: '700' }}>
                      <sup>$</sup>225<span style={{ fontSize: '20px', fontWeight: '500' }}>/Month</span>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <List sx={{ m: 0, p: 0 }} component="ul">
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="Only 1 User uses" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="10 Projects for individuals" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="5GB of Storage" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="Unlimited Bandwitch" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="Unlimited Data" />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 0.6, px: 0 }}>
                      <ListItemIcon>
                        <DoneAllRoundedIcon sx={{ fill: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary="Fully Security Suite" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" color="primary">
                    Order Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Price1;
