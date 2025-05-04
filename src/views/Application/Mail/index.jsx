import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Chip,
  Collapse,
  Menu,
  MenuItem,
  Dialog,
  FormControlLabel,
  LinearProgress,
  Switch,
  DialogContent,
  TextField,
  Drawer,
  InputBase,
  List,
  ListItemAvatar,
  CardMedia,
  Divider,
  ListItemIcon,
  ListItemText,
  Link,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
  Box,
  ListItemButton
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project import
import Avatar from 'component/Avatar';
import { gridSpacing } from 'config.js';

// assets
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';

import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppTwoTone';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

import Pdffile from 'assets/images/page/file-pdf.svg';
import Zipfile from 'assets/images/page/file-zip.svg';

// ==============================|| MAIL ||============================== //

const Mail = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [openmailsidebar, setOpenmailsidebar] = React.useState(true);

  React.useEffect(() => {
    setOpenmailsidebar(!matchDownSM);
  }, [matchDownSM]);

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClicksort = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosesort = () => {
    setAnchorEl(null);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpendialog = () => {
    setOpen1(true);
  };
  const handleClosedialog = () => {
    setOpen1(false);
  };

  const [ccbccvalue, ccbccsetValue] = React.useState(0);
  const ccbcchandleChange = () => {
    ccbccsetValue((prev) => !prev);
  };

  const handleDrawerOpen = () => {
    setOpenmailsidebar((prevState) => !prevState);
  };

  const [mailinboxlistvalue, setmailinboxlist] = React.useState(true);
  const handleviewmailinboxlist = () => {
    setmailinboxlist((prevState1) => !prevState1);
  };

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        p: 0,
        display: 'flex',
        my: { md: -5, xs: -3 },
        mx: { md: -5, xs: -3 }
      }}
    >
      <Drawer
        sx={{
          width: 260,
          flexShrink: 0,
          position: { md: 'relative', xs: 'absolute' },
          '& .MuiPaper-root': {
            width: 260,
            flexShrink: 0,
            position: { md: 'relative', xs: 'absolute' }
          }
        }}
        variant={matchDownSM ? 'temporary' : 'persistent'}
        anchor="left"
        open={openmailsidebar}
        ModalProps={{ keepMounted: true }}
        onClose={handleDrawerOpen}
      >
        <Box
          sx={{
            background: theme.palette.background.paper,
            flex: '260px',
            textAlign: 'center',
            boxShadow: '1px 0 1px 0 rgba(0, 0, 0, 0.12)',
            zIndex: '5',
            padding: '0px'
          }}
        >
          <PerfectScrollbar
            style={{
              padding: '25px 0px',
              height: 'calc(100vh - 65px)',
              '@media (maxWidth:899.95px)': {
                height: 'calc(100vh - 55px)'
              }
            }}
          >
            <Button variant="contained" color="primary" onClick={handleClickOpendialog}>
              Compose
            </Button>
            <Dialog open={open1} onClose={handleClosedialog}>
              <DialogContent>
                <Grid container spacing={gridSpacing} sx={{ mt: -1, mx: -1.5, mb: 0.6 }}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={0}>
                      <Grid item sm zeroMinWidth>
                        <Typography component="div" align="left" variant="h3">
                          New Message
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton
                          color={theme.palette.mode === 'dark' ? 'inherit' : 'secondary'}
                          aria-label="New message"
                          onClick={handleClosedialog}
                          size="large"
                        >
                          <HighlightOffTwoToneIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent="flex-end" spacing={0}>
                      <Grid item>
                        <FormControlLabel
                          value="start"
                          control={<Switch color="primary" onClick={ccbcchandleChange} />}
                          label="Show CC & BCC"
                          labelPlacement="start"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="To" variant="outlined" defaultValue="Joan Bates" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Subject" variant="outlined" defaultValue="review" />
                  </Grid>
                  {ccbccvalue ? (
                    <Grid item xs={12}>
                      <TextField fullWidth label="CC" variant="outlined" />
                    </Grid>
                  ) : (
                    ''
                  )}
                  {ccbccvalue ? (
                    <Grid item xs={12}>
                      <TextField fullWidth label="BCC" variant="outlined" />
                    </Grid>
                  ) : (
                    ''
                  )}
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" variant="outlined" multiline rows="4" />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                      <Grid item>
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
                            <Link href="#" color="primary">
                              <DeleteTwoToneIcon />
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item>
                            <CardMedia component="img" image={Zipfile} title="image" />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography align="left" component="div" variant="subtitle1">
                              portfolio.zip
                            </Typography>
                            <LinearProgress variant="determinate" aria-label="portfolio" value={60} color="primary" />
                          </Grid>
                          <Grid item>
                            <Link href="#" color="primary">
                              <HighlightOffTwoToneIcon />
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                      <Grid item xs zeroMinWidth>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item>
                            <Link href="#" aria-label="Attachment" color="primary">
                              <AttachmentTwoToneIcon />
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link href="#" aria-label="Emoji" color="primary">
                              <InsertEmoticonTwoToneIcon />
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary" startIcon={<ReplyRoundedIcon />} onClick={handleClosedialog}>
                          Reply
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
            <List component="div" sx={{ '& .MuiListItemButton-root': { pt: 1, pb: 1 } }}>
              <ListItemButton>
                <ListItemIcon>
                  <EmailTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      Inbox
                      <Chip label="22" color="primary" size="small" sx={{ float: 'right' }} />
                    </>
                  }
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <SendTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <InboxTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      Drafts
                      <Chip label="5" color="primary" size="small" sx={{ float: 'right' }} />
                    </>
                  }
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ErrorTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Important" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <StarsTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteSweepTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Deleted" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Labels" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" sx={{ '& .MuiListItemButton-root': { pt: 1, pb: 1 } }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ color: theme.palette.error.main, width: 12, height: 12, my: 0, mx: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Personal" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ color: theme.palette.primary.main, width: 12, height: 12, my: 0, mx: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Clients" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ color: theme.palette.success.main, width: 12, height: 12, my: 0, mx: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Events" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ color: theme.palette.warning.main, width: 12, height: 12, my: 0, mx: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Social" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ color: theme.palette.primary.main, width: 12, height: 12, my: 0, mx: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Work" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ color: theme.palette.success.main, width: 12, height: 12, my: 0, mx: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Update" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </PerfectScrollbar>
        </Box>
      </Drawer>
      <Box
        sx={{
          display: 'flex',
          ml: { md: !openmailsidebar ? -32.5 : 'unset', xs: !openmailsidebar ? 0 : 'unset' },
          flex: !openmailsidebar ? '100vw' : 'calc(100vw - 260px)',
          transition: !openmailsidebar
            ? theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
              })
            : theme.transitions.create(['flex'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
              })
        }}
      >
        <Box
          sx={{
            display: mailinboxlistvalue ? { xs: 'none', lg: 'block' } : {},
            background: theme.palette.background.paper,
            flex: 360,
            boxShadow: '1px 0 1px 0 rgba(0, 0, 0, 0.12)',
            zIndex: '4',
            p: 0
          }}
        >
          <Box sx={{ py: 0.6, px: 1.25, boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)' }}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item>
                <IconButton color="secondary" aria-label="Menu" onClick={handleDrawerOpen} size="large">
                  <MenuRoundedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    position: 'relative',
                    ml: theme.spacing(1),
                    mr: { md: theme.spacing(2), xs: 0 },
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
                        width: '65px'
                      }
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Box>
              </Grid>
              <Grid item sm zeroMinWidth></Grid>
              <Grid item>
                <Typography component="div" variant="body2">
                  Sort by:
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={handleClicksort} endIcon={<ExpandMoreRoundedIcon />} variant="text" size="small">
                  Date
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClosesort}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                  }}
                >
                  <MenuItem onClick={handleClosesort}>Name</MenuItem>
                  <MenuItem onClick={handleClosesort}>Date</MenuItem>
                  <MenuItem onClick={handleClosesort}>Ratting</MenuItem>
                  <MenuItem onClick={handleClosesort}>Unread</MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Box>
          <PerfectScrollbar style={{ height: 'calc(100vh - 120px)' }}>
            <List
              component="div"
              sx={{
                '& .MuiListItemButton-root': {
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  alignItems: 'flex-start',
                  '& .MuiListItemAvatar-root': {
                    marginTop: '0px',
                    marginBottom: '0px',
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
                  <Avatar color="primary">JD</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        John Doe
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.error.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        <AttachmentTwoToneIcon
                          sx={{
                            width: 16,
                            height: 16,
                            mr: 0.25,
                            verticalAlign: 'text-bottom'
                          }}
                        />{' '}
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="success">S</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        Sara Soudein
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.success.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        <AttachmentTwoToneIcon
                          sx={{
                            width: 16,
                            height: 16,
                            mr: 0.25,
                            verticalAlign: 'text-bottom'
                          }}
                        />{' '}
                        2 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="warning">JW</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        Joseph William
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.primary.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        {' '}
                        6 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="info">JD</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        John Doe
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.error.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        <AttachmentTwoToneIcon
                          sx={{
                            width: 16,
                            height: 16,
                            mr: 0.25,
                            verticalAlign: 'text-bottom'
                          }}
                        />{' '}
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
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
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        Sara Soudein
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.success.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        <AttachmentTwoToneIcon
                          sx={{
                            width: 16,
                            height: 16,
                            mr: 0.25,
                            verticalAlign: 'text-bottom'
                          }}
                        />{' '}
                        2 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="primary">JW</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        Joseph William
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.primary.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        {' '}
                        6 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="success">S</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        Sara Soudein
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.success.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        <AttachmentTwoToneIcon
                          sx={{
                            width: 16,
                            height: 16,
                            mr: 0.25,
                            verticalAlign: 'text-bottom'
                          }}
                        />{' '}
                        2 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="warning">JW</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        Joseph William
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.primary.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        {' '}
                        6 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="info">JD</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        John Doe
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.error.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        <AttachmentTwoToneIcon
                          sx={{
                            width: 16,
                            height: 16,
                            mr: 0.25,
                            verticalAlign: 'text-bottom'
                          }}
                        />{' '}
                        20 min
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
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
                      <Typography
                        component="div"
                        variant="subtitle1"
                        sx={{
                          display: 'inline-block'
                        }}
                      >
                        Sara Soudein
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.success.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        <AttachmentTwoToneIcon
                          sx={{
                            width: 16,
                            height: 16,
                            mr: 0.25,
                            verticalAlign: 'text-bottom'
                          }}
                        />{' '}
                        2 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleviewmailinboxlist}>
                <ListItemAvatar>
                  <Avatar color="primary">JW</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="div" variant="subtitle1" sx={{ display: 'inline-block' }}>
                        Joseph William
                        <FiberManualRecordIcon
                          sx={{
                            color: theme.palette.primary.main,
                            width: 12,
                            height: 12,
                            ml: 0.6
                          }}
                        />
                      </Typography>{' '}
                      <Typography component="div" variant="caption" sx={{ float: 'right' }}>
                        {' '}
                        6 hours
                      </Typography>
                    </>
                  }
                  secondary={<Typography variant="subtitle2">The Arts play a large role in beauty of my life...&ldquo;</Typography>}
                />
              </ListItemButton>
            </List>
          </PerfectScrollbar>
        </Box>
        <Box
          sx={{
            display: !mailinboxlistvalue ? { xs: 'none', lg: 'block' } : {},
            p: 0,
            zIndex: '3',
            flex: 'calc(100vw - 620px)',
            position: 'absolute'
          }}
        >
          <Box sx={{ py: 0.6, px: 1.25, boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)' }}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item sx={{ display: { lg: 'none', xs: 'block' } }}>
                <IconButton color="secondary" aria-label="Back" onClick={handleviewmailinboxlist} size="large">
                  <ArrowBackRoundedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="secondary" aria-label="Reply" size="large">
                  <ReplyAllRoundedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="secondary" aria-label="Reply" size="large">
                  <ReplyRoundedIcon />
                </IconButton>
              </Grid>
              <Grid item sm zeroMinWidth>
                <Grid container justifyContent="center" alignItems="center" spacing={0}>
                  <Grid item>
                    <IconButton color="secondary" aria-label="Nav" size="large">
                      <NavigateBeforeRoundedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography component="div" variant="body2">
                      1 of 200
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton aria-label="Next" color="secondary" size="large">
                      <NavigateNextRoundedIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton aria-label="Flag" color="secondary" size="large">
                  <EmojiFlagsTwoToneIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="secondary" aria-label="Print" size="large">
                  <PrintTwoToneIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="Delete" color="secondary" size="large">
                  <DeleteTwoToneIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <PerfectScrollbar style={{ height: 'calc(100vh - 120px)' }}>
            <Box sx={{ p: 3.1 }}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={gridSpacing}>
                    <Grid item xs zeroMinWidth>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Avatar color="primary">JD</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" component="div" variant="subtitle1">
                            David Jones
                          </Typography>
                          <Typography align="left" component="div" variant="subtitle2" color="primary">
                            david_jones@mail.com
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography align="left" component="div" variant="subtitle1">
                        30 Nov 2019
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" component="div" variant="subtitle1">
                    Hello, Mark!
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" component="div" variant="body1">
                    I am writing to introduce you to David Boyd. I know you have been looking hard for a candidate for that Creative
                    Director position and I believe David Boyd ﬁts the position.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" component="div" variant="body1">
                    David Boyd and I worked together at Apple company, Where they were the senior Creative Director. They did a terriﬁc job
                    there. David Boyd was responsible for completely restructuring both the public-facing and internal websites. They had be
                    a great ﬁt at Google company.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" component="div" variant="body1">
                    I&apos;ve attached David Boyd resume and portfolio for your review. You can contact David Boyd at{' '}
                    <Link href="#">david_boyd@mail.com</Link>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" component="div" variant="subtitle2">
                    Thanks for any help you can give.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" component="div" variant="body2">
                    Best regards,
                  </Typography>
                  <Typography align="left" component="div" variant="body1">
                    Joan Bates
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={gridSpacing}>
                    <Grid item>
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
                          <Link href="#" aria-label="Download" color="secondary">
                            <GetAppTwoToneIcon />
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <CardMedia component="img" image={Zipfile} title="image" />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Typography align="left" component="div" variant="subtitle1">
                            portfolio.zip
                          </Typography>
                          <Typography align="left" component="div" variant="subtitle2">
                            250 MB
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Link href="#" aria-label="Download" color="secondary">
                            <GetAppTwoToneIcon />
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <InputBase
                    placeholder="Reply..."
                    fullWidth
                    multiline
                    rows="3"
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
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={gridSpacing}>
                    <Grid item xs zeroMinWidth>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Link href="#" color="secondary">
                            <AttachmentTwoToneIcon />
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="#" color="secondary">
                            <InsertEmoticonTwoToneIcon />
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" startIcon={<ReplyRoundedIcon />}>
                        Reply
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </PerfectScrollbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Mail;
