import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Grid,
  Chip,
  InputBase,
  List,
  ListItemAvatar,
  CardMedia,
  Divider,
  ListItemText,
  Link,
  Fab,
  Typography,
  IconButton,
  Box,
  ListItemButton
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project import
import Avatar from 'component/Avatar';
import { gridSpacing } from 'config.js';

// assets
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppTwoTone';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import Pdffile from 'assets/images/page/file-pdf.svg';
import Imgprod1 from 'assets/images/widget/prod1.jpg';
import Imgprod2 from 'assets/images/widget/prod2.jpg';
import Imgprod3 from 'assets/images/widget/prod3.jpg';
import Imgprod4 from 'assets/images/widget/prod4.jpg';

// custom style
const OnlineBadge = styled((props) => <span {...props} />)(({ theme }) => ({
  width: '8px',
  height: '8px',
  background: theme.palette.success.main,
  borderRadius: '50%',
  position: 'absolute',
  left: '44px',
  top: '44px',
  boxShadow: '0 0 0 3px #fff'
}));

// ==============================|| CHAT ||============================== //

const Chat = () => {
  const theme = useTheme();
  const [mailinboxlistvalue, setmailinboxlist] = React.useState(false);
  const handleviewmailinboxlist = () => {
    setmailinboxlist((prevState1) => !prevState1);
  };

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        p: 0,
        display: 'flex',
        m: { md: -5, xs: -3 }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '100vw',
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          })
        }}
      >
        <Box
          sx={{
            display: mailinboxlistvalue ? { xs: 'none', md: 'block' } : {},
            background: theme.palette.background.paper,
            flex: '360px',
            boxShadow: '1px 0 1px 0 rgba(0, 0, 0, 0.12)',
            zIndex: '4',
            p: 0
          }}
        >
          <Box sx={{ p: 1.25, boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)' }}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item>
                <Box
                  sx={{
                    position: 'relative',
                    ml: { md: theme.spacing(1), xs: 0 },
                    mr: theme.spacing(2),
                    width: 'auto'
                  }}
                >
                  <Box
                    sx={{
                      p: theme.spacing(0, 2),
                      height: '100%',
                      position: 'absolute',
                      pointerEvents: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <SearchTwoToneIcon />
                  </Box>
                  <InputBase
                    placeholder="Search…"
                    sx={{
                      '& .MuiInputBase-input': {
                        color: 'inherit',
                        p: theme.spacing(1, 1, 1, 0),
                        pl: `calc(1em + ${theme.spacing(4)})`,
                        transition: theme.transitions.create('width'),
                        width: 65
                      }
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Box>
              </Grid>
              <Grid item xs zeroMinWidth></Grid>
              <Grid item>
                <IconButton color="secondary" size="large">
                  <ControlPointTwoToneIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <PerfectScrollbar style={{ height: 'calc(100vh - 130px)' }}>
            <List
              sx={{
                '& .MuiListItemButton-root': {
                  pt: 1.5,
                  pb: 1.5,
                  alignItems: 'flex-start',
                  '& .MuiListItemAvatar-root': {
                    mt: 0,
                    mb: 0,
                    minWidth: 56
                  },
                  '& .MuiListItemText-root': {
                    m: 0
                  }
                }
              }}
            >
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <>
                    <Avatar color="primary">JD</Avatar>
                    <OnlineBadge></OnlineBadge>
                  </>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        John Doe
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          The Arts play a large role in...
                        </Typography>
                      </Grid>
                      <Grid item component="span">
                        <Chip
                          sx={{
                            width: 18,
                            height: 18,
                            background: theme.palette.error.main,
                            '& span': {
                              padding: '0',
                              fontSize: '0.7125rem',
                              color: '#fff'
                            }
                          }}
                          component="span"
                          label="2"
                          size="small"
                        ></Chip>
                      </Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <>
                    <Avatar color="success">S</Avatar>
                    <OnlineBadge></OnlineBadge>
                  </>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        Sara Soudein
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          I am writing to introduce you to...
                        </Typography>
                      </Grid>
                      <Grid item component="span">
                        <Chip
                          sx={{
                            width: 18,
                            height: 18,
                            background: theme.palette.error.main,
                            '& span': {
                              padding: '0',
                              fontSize: '0.7125rem',
                              color: '#fff'
                            }
                          }}
                          component="span"
                          label="2"
                          size="small"
                        ></Chip>
                      </Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="info">JW</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        Joseph William
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          We use the Arts as a means of...
                        </Typography>
                      </Grid>
                      <Grid item component="span"></Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <>
                    <Avatar color="warning">JD</Avatar>
                    <OnlineBadge></OnlineBadge>
                  </>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        John Doe
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          The arts allow us to be as specific or...
                        </Typography>
                      </Grid>
                      <Grid item component="span">
                        <Chip
                          sx={{
                            width: 18,
                            height: 18,
                            background: theme.palette.error.main,
                            '& span': {
                              padding: '0',
                              fontSize: '0.7125rem',
                              color: '#fff'
                            }
                          }}
                          component="span"
                          label="2"
                          size="small"
                        ></Chip>
                      </Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="error">S</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        Sara Soudein
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          From dance and music to abstract...
                        </Typography>
                      </Grid>
                      <Grid item component="span"></Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <>
                    <Avatar color="primary">JD</Avatar>
                    <OnlineBadge></OnlineBadge>
                  </>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        John Doe
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          The Arts play a large role in...
                        </Typography>
                      </Grid>
                      <Grid item component="span"></Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <>
                    <Avatar color="success">S</Avatar>
                    <OnlineBadge></OnlineBadge>
                  </>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        Sara Soudein
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          I am writing to introduce you to...
                        </Typography>
                      </Grid>
                      <Grid item component="span"></Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="info">JW</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        Joseph William
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          We use the Arts as a means of...
                        </Typography>
                      </Grid>
                      <Grid item component="span"></Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <>
                    <Avatar color="warning">JD</Avatar>
                    <OnlineBadge></OnlineBadge>
                  </>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        John Doe
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          The arts allow us to be as specific or...
                        </Typography>
                      </Grid>
                      <Grid item component="span"></Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="error">S</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="h6" sx={{ display: 'inline-block' }}>
                        Sara Soudein
                      </Typography>{' '}
                      <Typography component="div" variant="body1" sx={{ float: 'right' }}>
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={
                    <Grid container spacing={1} component="span">
                      <Grid item xs zeroMinWidth component="span">
                        <Typography component="span" variant="body2" sx={{ display: 'inline-block' }}>
                          From dance and music to abstract...
                        </Typography>
                      </Grid>
                      <Grid item component="span"></Grid>
                    </Grid>
                  }
                />
              </ListItemButton>
            </List>
          </PerfectScrollbar>
        </Box>
        <Box sx={{ display: !mailinboxlistvalue ? { xs: 'none', lg: 'block' } : {}, p: 0, zIndex: '3', flex: 'calc(100vw - 620px)' }}>
          <Box sx={{ p: 1.25, boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)' }}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item sx={{ display: { lg: 'none', xs: 'block' } }}>
                <IconButton aria-label="Back" color="secondary" onClick={handleviewmailinboxlist} size="large">
                  <ArrowBackRoundedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar color="primary">JD</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" component="div" variant="subtitle1">
                      David Jones
                    </Typography>
                    <Typography align="left" component="div" variant="subtitle2">
                      Active 1 min ago
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs zeroMinWidth></Grid>
              <Grid item>
                <IconButton aria-label="More" color="secondary" size="large">
                  <MoreHorizTwoToneIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <PerfectScrollbar style={{ height: 'calc(100vh - 206px)' }}>
            <Box sx={{ p: 3.1 }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <Avatar color="error">D</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Box
                            sx={{
                              background: theme.palette.primary.main,
                              color: '#fff',
                              py: 1.25,
                              px: 2.5,
                              borderRadius: '20px 20px 20px 0px'
                            }}
                          >
                            <Typography align="left" component="div" variant="body2">
                              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Typography align="right" component="div" variant="body1">
                        1 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0} justifyContent="flex-end">
                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <IconButton aria-label="More" color="secondary" size="large">
                            <MoreHorizTwoToneIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Box
                            sx={{
                              background: theme.palette.background.default,
                              py: 1.25,
                              px: 2.5,
                              borderRadius: '20px 20px 0px 20px'
                            }}
                          >
                            <Typography align="left" component="div" variant="body2">
                              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Avatar color="warning">AW</Avatar>
                        </Grid>
                      </Grid>
                      <Typography align="left" component="div" variant="body1">
                        2 min ago
                      </Typography>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <CardMedia
                            component="img"
                            image={Imgprod1}
                            title="image"
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '10px',
                              boxShadow: '0px 4px 4px rgba(169, 194, 209, 0.05), 0px 8px 16px rgba(169, 194, 209, 0.1)'
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <CardMedia
                            component="img"
                            image={Imgprod2}
                            title="image"
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '10px',
                              boxShadow: '0px 4px 4px rgba(169, 194, 209, 0.05), 0px 8px 16px rgba(169, 194, 209, 0.1)'
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <CardMedia
                            component="img"
                            image={Imgprod3}
                            title="image"
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '10px',
                              boxShadow: '0px 4px 4px rgba(169, 194, 209, 0.05), 0px 8px 16px rgba(169, 194, 209, 0.1)'
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <CardMedia
                            component="img"
                            image={Imgprod4}
                            title="image"
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '10px',
                              boxShadow: '0px 4px 4px rgba(169, 194, 209, 0.05), 0px 8px 16px rgba(169, 194, 209, 0.1)'
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Link href="#">
                            <Avatar color="primary">+3</Avatar>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <Avatar color="error">D</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Box
                            sx={{
                              background: theme.palette.primary.main,
                              color: '#fff',
                              py: 1.25,
                              px: 2.5,
                              borderRadius: '20px 20px 20px 0px'
                            }}
                          >
                            <Typography align="left" component="div" variant="body2">
                              voluptatem sequi nesciunt neque porro obcaecati cupiditate. non provident similique sunt.
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Typography align="right" component="div" variant="body1">
                        3 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{
                      position: 'relative',
                      textAlign: 'center',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: 1,
                        top: '50%',
                        left: '0',
                        background: theme.palette.background.default
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        position: 'relative',
                        background: theme.palette.background.paper,
                        display: 'inline-block',
                        zIndex: '1',
                        py: 0,
                        px: 1.25
                      }}
                      align="left"
                      component="div"
                      variant="body2"
                    >
                      Today
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0} justifyContent="flex-end">
                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <IconButton aria-label="More" color="secondary" size="large">
                            <MoreHorizTwoToneIcon />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton aria-label="Delete" color="secondary" size="large">
                            <DeleteTwoToneIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <div
                            style={{
                              background: theme.palette.background.default,
                              padding: '10px 20px',
                              borderRadius: '20px 20px 0px 20px'
                            }}
                          >
                            <Typography align="left" component="div" variant="body2">
                              Excepteur sint occaecat cupidatat non proident, quia voluptas sit, aspernatur aut odit aut fugit.
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item>
                          <Avatar color="warning">AW</Avatar>
                        </Grid>
                      </Grid>
                      <Typography align="left" component="div" variant="body1">
                        4 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <Avatar color="error">D</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <div
                            style={{
                              background: theme.palette.primary.main,
                              color: '#fff',
                              padding: '10px 20px',
                              borderRadius: '20px 20px 20px 0px'
                            }}
                          >
                            <Typography align="left" component="div" variant="body2">
                              Itaque earum rerum hic tenetur a sapiente delectus quia voluptas sit, aspernatur aut odit aut fugit sed.
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <Typography align="right" component="div" variant="body1">
                        5 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0} justifyContent="flex-end">
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <IconButton aria-label="More" color="secondary" size="large">
                            <MoreHorizTwoToneIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <div
                            style={{
                              background: theme.palette.background.default,
                              padding: '10px, 20px',
                              borderRadius: '20px 20px 0px 20px'
                            }}
                          >
                            <Grid container spacing={2} alignItems="center">
                              <Grid item>
                                <CardMedia component="img" image={Pdffile} title="image" />
                              </Grid>
                              <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                  resume.pdf
                                </Typography>
                                <Typography align="left" component="div" variant="subtitle2">
                                  570 KB
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Link aria-label="Download" href="#" color="secondary">
                                  <GetAppTwoToneIcon />
                                </Link>
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                        <Grid item>
                          <Avatar color="warning">AW</Avatar>
                        </Grid>
                      </Grid>
                      <Typography align="left" component="div" variant="body1">
                        4 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </PerfectScrollbar>
          <Box sx={{ p: 1.25, boxShadow: '0 -1px 0 0 rgba(0, 0, 0, 0.12)' }}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <IconButton aria-label="Attachment" color="secondary" size="large">
                  <AttachmentTwoToneIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="Emoji" color="secondary" size="large">
                  <InsertEmoticonTwoToneIcon />
                </IconButton>
              </Grid>
              <Grid item xs zeroMinWidth>
                <InputBase
                  placeholder="Write a Message..."
                  fullWidth
                  sx={{
                    '& .MuiInputBase-input': {
                      py: 2.5,
                      px: 2,
                      background: theme.palette.background.default,
                      borderRadius: '4px'
                    }
                  }}
                />
              </Grid>
              <Grid item>
                <Fab color="primary" size="medium">
                  <ReplyRoundedIcon />
                </Fab>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
