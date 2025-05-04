import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Typography, FormControlLabel, Button, Switch, InputLabel, Card, CardContent } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

// custom style
const FeatureBlock = styled((props) => <CardContent {...props} />)(({ theme }) => ({
  borderLeft: '1px solid' + theme.palette.background.default,
  paddingTop: '12px',
  paddingBottom: '12px !important'
}));

// ==============================|| PRICE 2 ||============================== //

const Price2 = () => {
  const theme = useTheme();
  const [ccbccvalue, ccbccsetValue] = React.useState(0);
  const ccbcchandleChange = () => {
    ccbccsetValue((prev) => !prev);
  };
  const [mailinboxlistvalue, setmailinboxlist] = React.useState(1);

  const [view, setView] = React.useState('1');
  const handleChange = (event, nextView) => {
    setView(nextView);
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
          Price 2
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
        <Grid item xs={12}>
          <Card sx={{ display: { sm: 'none', xs: 'block' } }}>
            <CardContent>
              <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
                sx={{
                  width: '100%',
                  '& .MuiToggleButton-root': {
                    border: 'none',
                    borderRadius: '5px ​!important'
                  },
                  '& .MuiToggleButton-root.Mui-selected': {
                    background: theme.palette.background.default + '!important',
                    color: theme.palette.primary.main
                  }
                }}
              >
                <ToggleButton value="1" onClick={() => setmailinboxlist(1)}>
                  Starters
                </ToggleButton>
                <ToggleButton value="2" onClick={() => setmailinboxlist(2)}>
                  Scalability
                </ToggleButton>
                <ToggleButton value="3" onClick={() => setmailinboxlist(3)}>
                  Enterprise
                </ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ textAlign: 'center' }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    position: 'relative',
                    color: theme.palette.primary.main,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-15px',
                      left: 'calc(50% - 35px)',
                      width: 70,
                      height: 4,
                      background: theme.palette.background.default,
                      borderRadius: '3px'
                    }
                  }}
                  variant="h3"
                >
                  Packages
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <CardContent
                  sx={{
                    borderLeft: '1px solid' + theme.palette.background.default,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Typography
                        component="div"
                        variant="h6"
                        sx={{
                          fontSize: '20px',
                          fontWeight: '500',
                          position: 'relative',
                          color: theme.palette.primary.main,
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-15px',
                            left: 'calc(50% - 25px)',
                            width: 50,
                            height: 4,
                            background: theme.palette.background.default,
                            borderRadius: '3px'
                          }
                        }}
                      >
                        Starters
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {ccbccvalue ? (
                        <Typography component="div" variant="body2" sx={{ fontSize: '25px', fontWeight: '700' }}>
                          <sup>$</sup>225<span style={{ fontSize: '20px', fontWeight: '500' }}>/Year</span>
                        </Typography>
                      ) : (
                        <Typography component="div" variant="body2" sx={{ fontSize: '25px', fontWeight: '700' }}>
                          <sup>$</sup>25<span style={{ fontSize: '20px', fontWeight: '500' }}>/Month</span>
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="outlined" color="secondary">
                        Order Now
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <CardContent
                  sx={{
                    borderLeft: '1px solid' + theme.palette.background.default,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      background: theme.palette.secondary.main,
                      color: '#fff',
                      display: 'inline-block',
                      padding: '40px 40px 5px',
                      fontSize: '13px',
                      position: 'absolute',
                      top: '-24px',
                      right: '-55px',
                      transform: 'rotate(45deg)'
                    }}
                  >
                    Popular
                  </div>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Typography
                        component="div"
                        variant="h6"
                        sx={{
                          fontSize: '20px',
                          fontWeight: '500',
                          position: 'relative',
                          color: theme.palette.primary.main,
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-15px',
                            left: 'calc(50% - 25px)',
                            width: 50,
                            height: 4,
                            background: theme.palette.background.default,
                            borderRadius: '3px'
                          }
                        }}
                      >
                        Scalability
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {ccbccvalue ? (
                        <Typography component="div" variant="body2" sx={{ fontSize: '25px', fontWeight: '700' }}>
                          <sup>$</sup>825<span style={{ fontSize: '20px', fontWeight: '500' }}>/Year</span>
                        </Typography>
                      ) : (
                        <Typography component="div" variant="body2" sx={{ fontSize: '25px', fontWeight: '700' }}>
                          <sup>$</sup>125<span style={{ fontSize: '20px', fontWeight: '500' }}>/Month</span>
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="secondary">
                        Order Now
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <CardContent
                  sx={{
                    borderLeft: '1px solid' + theme.palette.background.default,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <Typography
                        component="div"
                        variant="h6"
                        sx={{
                          fontSize: '20px',
                          fontWeight: '500',
                          position: 'relative',
                          color: theme.palette.primary.main,
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-15px',
                            left: 'calc(50% - 25px)',
                            width: 50,
                            height: 4,
                            background: theme.palette.background.default,
                            borderRadius: '3px'
                          }
                        }}
                      >
                        Enterprise
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {ccbccvalue ? (
                        <Typography component="div" variant="body2" sx={{ fontSize: '25px', fontWeight: '700' }}>
                          <sup>$</sup>1025<span style={{ fontSize: '20px', fontWeight: '500' }}>/Year</span>
                        </Typography>
                      ) : (
                        <Typography component="div" variant="body2" sx={{ fontSize: '25px', fontWeight: '700' }}>
                          <sup>$</sup>225<span style={{ fontSize: '20px', fontWeight: '500' }}>/Month</span>
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="outlined" color="secondary">
                        Order Now
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
            <CardContent sx={{ background: theme.palette.background.default, textAlign: 'left', py: 1.5 }}>
              <Typography component="div" variant="h6">
                Features
              </Typography>
            </CardContent>
            <Grid container spacing={0} sx={{ borderBottom: '1px solid' + theme.palette.background.default }}>
              <Grid item xs={8} sm={6} md={3}>
                <FeatureBlock>
                  <Typography component="div" align="left" variant="body2">
                    Only 1 User uses
                  </Typography>
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ borderBottom: '1px solid' + theme.palette.background.default }}>
              <Grid item xs={8} sm={6} md={3}>
                <FeatureBlock>
                  <Typography component="div" align="left" variant="body2">
                    10 Projects for individuals
                  </Typography>
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ borderBottom: '1px solid' + theme.palette.background.default }}>
              <Grid item xs={8} sm={6} md={3}>
                <FeatureBlock>
                  <Typography component="div" align="left" variant="body2">
                    Unlimited Bandwitch
                  </Typography>
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ borderBottom: '1px solid' + theme.palette.background.default }}>
              <Grid item xs={8} sm={6} md={3}>
                <FeatureBlock>
                  <Typography component="div" align="left" variant="body2">
                    Unlimited Data
                  </Typography>
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
            </Grid>
            <CardContent sx={{ background: theme.palette.background.default, textAlign: 'left', py: 1.5 }}>
              <Typography component="div" variant="h6">
                Storage & Security
              </Typography>
            </CardContent>
            <Grid container spacing={0} sx={{ borderBottom: '1px solid' + theme.palette.background.default }}>
              <Grid item xs={8} sm={6} md={3}>
                <FeatureBlock>
                  <Typography component="div" align="left" variant="body2">
                    5GB of Storage
                  </Typography>
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ borderBottom: '1px solid' + theme.palette.background.default }}>
              <Grid item xs={8} sm={6} md={3}>
                <FeatureBlock>
                  <Typography component="div" align="left" variant="body2">
                    Fully Security Suite
                  </Typography>
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
                </FeatureBlock>
              </Grid>
              <Grid item xs={4} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <FeatureBlock>
                  <DoneAllRoundedIcon sx={{ color: theme.palette.success.main }} />
                </FeatureBlock>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} md={3}></Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 1 ? { xs: 'none', md: 'block' } : {} }}>
                <CardContent
                  sx={{
                    borderLeft: '1px solid' + theme.palette.background.default,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Button variant="outlined" color="secondary">
                    Order Now
                  </Button>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 2 ? { xs: 'none', md: 'block' } : {} }}>
                <CardContent
                  sx={{
                    borderLeft: '1px solid' + theme.palette.background.default,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Button variant="contained" color="secondary">
                    Order Now
                  </Button>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: mailinboxlistvalue !== 3 ? { xs: 'none', md: 'block' } : {} }}>
                <CardContent
                  sx={{
                    borderLeft: '1px solid' + theme.palette.background.default,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Button variant="outlined" color="secondary">
                    Order Now
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Price2;
