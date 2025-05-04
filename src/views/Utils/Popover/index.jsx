import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Divider, Box } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiPopover from '@mui/material/Popover';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

// project import
import Breadcrumb from 'component/Breadcrumb';

const inlineStyles = {
  anchorVertical: {
    top: {
      top: -5
    },
    center: {
      top: 'calc(50% - 5px)'
    },
    bottom: {
      bottom: -5
    }
  },
  anchorHorizontal: {
    left: {
      left: -5
    },
    center: {
      left: 'calc(50% - 5px)'
    },
    right: {
      right: -5
    }
  }
};

// ==============================|| POPOVER ||============================== //

function Popover() {
  const anchorRef = React.useRef();
  const theme = useTheme();

  const [state, setState] = React.useState({
    open: false,
    anchorOriginVertical: 'top',
    anchorOriginHorizontal: 'left',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
    positionTop: 200,
    positionLeft: 400,
    anchorReference: 'anchorEl'
  });

  const {
    open,
    anchorOriginVertical,
    anchorOriginHorizontal,
    transformOriginVertical,
    transformOriginHorizontal,
    positionTop,
    positionLeft,
    anchorReference
  } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleNumberInputChange = (key) => (event) => {
    setState({
      ...state,
      [key]: parseInt(event.target.value, 10)
    });
  };

  const handleClickButton = () => {
    setState({
      ...state,
      open: true
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false
    });
  };

  return (
    <>
      <Breadcrumb title="Popover">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Popover
        </Typography>
      </Breadcrumb>
      <Card>
        <CardHeader
          title={
            <Typography component="div" className="card-header">
              Popover
            </Typography>
          }
        />
        <Divider />
        <CardContent>
          <Grid container justifyContent="center">
            <Grid item sx={{ position: 'relative', marginBottom: theme.spacing(4) }}>
              <Button ref={anchorRef} variant="contained" color="secondary" onClick={handleClickButton}>
                Open Popover
              </Button>
              {anchorReference === 'anchorEl' && (
                <Box
                  sx={{
                    ...inlineStyles.anchorVertical[anchorOriginVertical],
                    ...inlineStyles.anchorHorizontal[anchorOriginHorizontal],
                    backgroundColor: green[500],
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    position: 'absolute'
                  }}
                />
              )}
            </Grid>
          </Grid>
          <MuiPopover
            open={open}
            anchorEl={anchorRef.current}
            anchorReference={anchorReference}
            anchorPosition={{ top: positionTop, left: positionLeft }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: anchorOriginVertical,
              horizontal: anchorOriginHorizontal
            }}
            transformOrigin={{
              vertical: transformOriginVertical,
              horizontal: transformOriginHorizontal
            }}
          >
            <Typography sx={{ m: theme.spacing(2) }}>The content of the Popover.</Typography>
          </MuiPopover>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">anchorReference</FormLabel>
                <RadioGroup row aria-label="anchor reference" name="anchorReference" value={anchorReference} onChange={handleChange}>
                  <FormControlLabel value="anchorEl" control={<Radio />} label="anchorEl" />
                  <FormControlLabel value="anchorPosition" control={<Radio />} label="anchorPosition" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ pb: 2 }}>
                <InputLabel htmlFor="position-top">anchorPosition.top</InputLabel>
                <Input id="position-top" type="number" value={positionTop} onChange={handleNumberInputChange('positionTop')} />
              </FormControl>
              &nbsp;
              <FormControl sx={{ pb: 2 }}>
                <InputLabel htmlFor="position-left">anchorPosition.left</InputLabel>
                <Input id="position-left" type="number" value={positionLeft} onChange={handleNumberInputChange('positionLeft')} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">anchorOrigin.vertical</FormLabel>
                <RadioGroup
                  aria-label="anchor origin vertical"
                  name="anchorOriginVertical"
                  value={anchorOriginVertical}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="top"
                    control={
                      <Radio
                        sx={{
                          color: green[600],
                          '&$checked': {
                            color: green[500]
                          }
                        }}
                      />
                    }
                    label="Top"
                  />
                  <FormControlLabel
                    value="center"
                    control={
                      <Radio
                        sx={{
                          color: green[600],
                          '&$checked': {
                            color: green[500]
                          }
                        }}
                      />
                    }
                    label="Center"
                  />
                  <FormControlLabel
                    value="bottom"
                    control={
                      <Radio
                        sx={{
                          color: green[600],
                          '&$checked': {
                            color: green[500]
                          }
                        }}
                      />
                    }
                    label="Bottom"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">transformOrigin.vertical</FormLabel>
                <RadioGroup
                  aria-label="transform origin vertical"
                  name="transformOriginVertical"
                  value={transformOriginVertical}
                  onChange={handleChange}
                >
                  <FormControlLabel value="top" control={<Radio color="primary" />} label="Top" />
                  <FormControlLabel value="center" control={<Radio color="primary" />} label="Center" />
                  <FormControlLabel value="bottom" control={<Radio color="primary" />} label="Bottom" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>
                <RadioGroup
                  row
                  aria-label="anchor origin horizontal"
                  name="anchorOriginHorizontal"
                  value={anchorOriginHorizontal}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="left"
                    control={
                      <Radio
                        sx={{
                          color: green[600],
                          '&$checked': {
                            color: green[500]
                          }
                        }}
                      />
                    }
                    label="Left"
                  />
                  <FormControlLabel
                    value="center"
                    control={
                      <Radio
                        sx={{
                          color: green[600],
                          '&$checked': {
                            color: green[500]
                          }
                        }}
                      />
                    }
                    label="Center"
                  />
                  <FormControlLabel
                    value="right"
                    control={
                      <Radio
                        sx={{
                          color: green[600],
                          '&$checked': {
                            color: green[500]
                          }
                        }}
                      />
                    }
                    label="Right"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">transformOrigin.horizontal</FormLabel>
                <RadioGroup
                  row
                  aria-label="transform origin horizontal"
                  name="transformOriginHorizontal"
                  value={transformOriginHorizontal}
                  onChange={handleChange}
                >
                  <FormControlLabel value="left" control={<Radio color="primary" />} label="Left" />
                  <FormControlLabel value="center" control={<Radio color="primary" />} label="Center" />
                  <FormControlLabel value="right" control={<Radio color="primary" />} label="Right" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Popover;
