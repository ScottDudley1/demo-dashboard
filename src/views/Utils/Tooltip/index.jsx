import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Tooltip as MuiTooltip,
  IconButton,
  Fab,
  Button,
  ClickAwayListener,
  Fade,
  Zoom,
  Typography,
  tooltipClasses,
  Box
} from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// custom style
const LightTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}));

const BootstrapTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black
    }
  })
);

const HtmlTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}));

// ==============================|| TOOLTIP ||============================== //

function Tooltip() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

  return (
    <>
      <Breadcrumb title="Tooltip">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Tooltip
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Simple Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip title="Delete">
                    <IconButton aria-label="delete" size="large">
                      <DeleteIcon />
                    </IconButton>
                  </MuiTooltip>
                </Grid>
                <Grid item>
                  <MuiTooltip title="Add" aria-label="add">
                    <Fab color="primary" sx={{ m: theme.spacing(2) }}>
                      <AddIcon />
                    </Fab>
                  </MuiTooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Customized Tooltip
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <LightTooltip title="Add">
                    <Button color="primary">Light</Button>
                  </LightTooltip>
                </Grid>
                <Grid item>
                  <BootstrapTooltip title="Add">
                    <Button color="primary">Bootstrap</Button>
                  </BootstrapTooltip>
                </Grid>
                <Grid item>
                  <HtmlTooltip
                    title={
                      <>
                        <Typography color="inherit">Tooltip with HTML</Typography>
                        <em>{"And here's"}</em>{' '}
                        <Typography variant="subtitle1" component="span">
                          {'some'}
                        </Typography>{' '}
                        <u>{'amazing content'}</u>. {"It's very engaging. Right?"}
                      </>
                    }
                  >
                    <Button color="primary">HTML</Button>
                  </HtmlTooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Arrow Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip title="Add" arrow>
                    <Button color="primary">Arrow</Button>
                  </MuiTooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Delay Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip title="Add" enterDelay={500} leaveDelay={200}>
                    <Button color="primary">[500ms, 200ms]</Button>
                  </MuiTooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Disabled Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip title="You don't have permission to do this">
                    <span>
                      <Button color="primary" disabled>
                        A Disabled Button
                      </Button>
                    </span>
                  </MuiTooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Interactive Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip title="Add" interactive="true">
                    <Button color="primary">Interactive</Button>
                  </MuiTooltip>
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
                  Triggers/Controlled Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip disableFocusListener title="Add">
                    <Button color="primary">Hover or touch</Button>
                  </MuiTooltip>
                </Grid>
                <Grid item>
                  <MuiTooltip disableFocusListener disableTouchListener title="Add">
                    <Button color="primary">Hover</Button>
                  </MuiTooltip>
                </Grid>
                <Grid item>
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Box>
                      <MuiTooltip
                        PopperProps={{
                          disablePortal: true
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Add"
                      >
                        <Button color="primary" onClick={handleTooltipOpen}>
                          Click
                        </Button>
                      </MuiTooltip>
                    </Box>
                  </ClickAwayListener>
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
                  Transitions Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip title="Add">
                    <Button color="primary">Grow</Button>
                  </MuiTooltip>
                </Grid>
                <Grid item>
                  <MuiTooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
                    <Button color="primary">Fade</Button>
                  </MuiTooltip>
                </Grid>
                <Grid item>
                  <MuiTooltip TransitionComponent={Zoom} title="Add">
                    <Button color="primary">Zoom</Button>
                  </MuiTooltip>
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
                  Variable Width Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <MuiTooltip title={longText}>
                    <Button color="primary" sx={{ m: theme.spacing(1) }}>
                      Default Width [300px]
                    </Button>
                  </MuiTooltip>
                </Grid>
                <Grid item>
                  <MuiTooltip title={longText} sx={{ maxWidth: 500 }}>
                    <Button color="primary" sx={{ m: theme.spacing(1) }}>
                      Custom Width [500px]
                    </Button>
                  </MuiTooltip>
                </Grid>
                <Grid item>
                  <MuiTooltip title={longText} sx={{ maxWidth: 'none' }}>
                    <Button color="primary" sx={{ m: theme.spacing(1) }}>
                      No wrapping
                    </Button>
                  </MuiTooltip>
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
                  Positioned Tooltips
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container justifyContent="center">
                <Grid item>
                  <MuiTooltip title="Add" placement="top-start">
                    <Button color="primary">top-start</Button>
                  </MuiTooltip>
                  <MuiTooltip title="Add" placement="top">
                    <Button color="primary">top</Button>
                  </MuiTooltip>
                  <MuiTooltip title="Add" placement="top-end">
                    <Button color="primary">top-end</Button>
                  </MuiTooltip>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item xs={6}>
                  <MuiTooltip title="Add" placement="left-start">
                    <Button color="primary">left-start</Button>
                  </MuiTooltip>
                  <br />
                  <MuiTooltip title="Add" placement="left">
                    <Button color="primary">left</Button>
                  </MuiTooltip>
                  <br />
                  <MuiTooltip title="Add" placement="left-end">
                    <Button color="primary">left-end</Button>
                  </MuiTooltip>
                </Grid>
                <Grid item container xs={6} alignItems="flex-end" direction="column">
                  <Grid item>
                    <MuiTooltip title="Add" placement="right-start">
                      <Button color="primary">right-start</Button>
                    </MuiTooltip>
                  </Grid>
                  <Grid item>
                    <MuiTooltip title="Add" placement="right">
                      <Button color="primary">right</Button>
                    </MuiTooltip>
                  </Grid>
                  <Grid item>
                    <MuiTooltip title="Add" placement="right-end">
                      <Button color="primary">right-end</Button>
                    </MuiTooltip>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item>
                  <MuiTooltip title="Add" placement="bottom-start">
                    <Button color="primary">bottom-start</Button>
                  </MuiTooltip>
                  <MuiTooltip title="Add" placement="bottom">
                    <Button color="primary">bottom</Button>
                  </MuiTooltip>
                  <MuiTooltip title="Add" placement="bottom-end">
                    <Button color="primary">bottom-end</Button>
                  </MuiTooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Tooltip;
