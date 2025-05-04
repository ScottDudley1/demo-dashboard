import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Button, Card, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import Medal from 'assets/images/page/medal2.svg';

// ==============================|| PRICE 3 ||============================== //

const Price3 = () => {
  const theme = useTheme();

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
          Price 3
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ borderLeft: '1px solid' + theme.palette.background.default }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={7} md={8}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Typography
                        component="div"
                        variant="h6"
                        sx={{
                          fontSize: '20px',
                          fontWeight: '600',
                          position: 'relative',
                          color: theme.palette.primary.main,
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-15px',
                            left: '0px',
                            width: 50,
                            height: 4,
                            background: theme.palette.background.default,
                            borderRadius: '3px'
                          }
                        }}
                      >
                        Lifetime Premium Membership
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div" variant="body2">
                        For businesses wanting an out-of-the box payouts solution and API. Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div" variant="h6">
                        Premium Feature
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6}>
                          <List
                            sx={{
                              m: 0,
                              p: 0,
                              '& .MuiSvgIcon-root': {
                                fill: theme.palette.success.main
                              }
                            }}
                            component="ul"
                          >
                            <ListItem sx={{ py: 0.6, px: 0 }}>
                              <ListItemIcon>
                                <DoneAllRoundedIcon />
                              </ListItemIcon>
                              <ListItemText primary="Only 1 User uses" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ py: 0.6, px: 0 }}>
                              <ListItemIcon>
                                <DoneAllRoundedIcon />
                              </ListItemIcon>
                              <ListItemText primary="10 Projects for individuals" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ py: 0.6, px: 0 }}>
                              <ListItemIcon>
                                <DoneAllRoundedIcon />
                              </ListItemIcon>
                              <ListItemText primary="5GB of Storage" />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ display: { sm: 'none', xs: 'block' } }}>
                          <Divider />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <List
                            sx={{
                              m: 0,
                              p: 0,
                              '& .MuiSvgIcon-root': {
                                fill: theme.palette.success.main
                              }
                            }}
                            component="ul"
                          >
                            <ListItem sx={{ py: 0.6, px: 0 }}>
                              <ListItemIcon>
                                <DoneAllRoundedIcon />
                              </ListItemIcon>
                              <ListItemText primary="Unlimited Bandwitch" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ py: 0.6, px: 0 }}>
                              <ListItemIcon>
                                <DoneAllRoundedIcon />
                              </ListItemIcon>
                              <ListItemText primary="Unlimited Data" />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ py: 0.6, px: 0 }}>
                              <ListItemIcon>
                                <DoneAllRoundedIcon />
                              </ListItemIcon>
                              <ListItemText primary="Fully Security Suite" />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <CardContent
                    sx={{
                      background: '#cbe2ff',
                      textAlign: 'center',
                      borderRadius: '3px',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: 'inset 0 0 60px 0px rgba(157, 198, 251, .44)'
                    }}
                  >
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={12}>
                        <CardMedia component="img" image={Medal} title="Cover image" sx={{ width: 120, mx: 0, my: 'auto' }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          component="div"
                          variant="body2"
                          sx={{ fontSize: '45px', fontWeight: '700', color: theme.palette.primary.main }}
                        >
                          <sup>$</sup>25<span style={{ fontSize: '20px', fontWeight: '500' }}>/Month</span>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                          Order Now
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Price3;
