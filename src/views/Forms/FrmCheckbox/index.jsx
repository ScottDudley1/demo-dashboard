import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Typography
} from '@mui/material';
import { green } from '@mui/material/colors';

// project import
import Breadcrumb from 'component/Breadcrumb';
import Checkbox from 'component/Checkbox';
import { gridSpacing } from 'config.js';

// assets
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

// custom style
const GreenCheckbox = styled((props) => <Checkbox {...props} />)(() => ({
  color: green[400],
  '&.Mui-checked': {
    color: green[600]
  }
}));

// ==============================|| FORM CHECKBOX ||============================== //

const FrmCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedF: true,
    checkedG: true
  });

  const [stateGroup, setStateGroup] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChangeGroup = (event) => {
    setStateGroup({ ...stateGroup, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = stateGroup;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Breadcrumb title="Form Checkbox">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Checkbox
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Basic Checkbox
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <Checkbox checked={checked} color="secondary" onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
                </Grid>
                <Grid item>
                  <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                </Grid>
                <Grid item>
                  <Checkbox color="secondary" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                </Grid>
                <Grid item>
                  <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                </Grid>
                <Grid item>
                  <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
                </Grid>
                <Grid item>
                  <Checkbox
                    checked={state.checkedC}
                    color="primary"
                    onChange={handleChangeState}
                    name="checkedC"
                    aria-label="Indeterminate"
                    indeterminate={state.checkedC}
                  />
                </Grid>
                <Grid item>
                  <Checkbox defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
                </Grid>
                <Grid item>
                  <Checkbox defaultChecked size="small" inputProps={{ 'aria-label': 'checkbox with small size' }} />
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
                  Checkbox with FormControl
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <FormGroup>
                <Grid container spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox color="secondary" checked={state.checkedA} onChange={handleChangeState} name="checkedA" />}
                      label="Secondary"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedB} onChange={handleChangeState} name="checkedB" color="default" />}
                      label="Primary"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                  </Grid>
                  <Grid item>
                    <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                  </Grid>
                  <Grid item>
                    <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedF}
                          color="primary"
                          onChange={handleChangeState}
                          name="checkedF"
                          indeterminate={state.checkedF}
                        />
                      }
                      label="Indeterminate"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<GreenCheckbox checked={state.checkedG} onChange={handleChangeState} name="checkedG" />}
                      label="Custom color"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox color="secondary" icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                      label="Custom icon"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                          name="checkedI"
                          color="secondary"
                        />
                      }
                      label="Custom size"
                    />
                  </Grid>
                </Grid>
              </FormGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Checkboxes with FormGroup
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <FormControl component="field-set">
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12}>
                        <FormLabel component="legend">Assign responsibility</FormLabel>
                        <FormHelperText>Be careful</FormHelperText>
                      </Grid>
                      <Grid item xs={12}>
                        <FormGroup>
                          <Grid container spacing={1}>
                            <Grid item>
                              <FormControlLabel
                                control={<Checkbox color="secondary" checked={gilad} onChange={handleChangeGroup} name="gilad" />}
                                label="Gilad Gray"
                              />
                            </Grid>
                            <Grid item>
                              <FormControlLabel
                                control={<Checkbox color="secondary" checked={jason} onChange={handleChangeGroup} name="jason" />}
                                label="Jason Killian"
                              />
                            </Grid>
                            <Grid item>
                              <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChangeGroup} name="antoine" color="secondary" />}
                                label="Antoine Llorca"
                              />
                            </Grid>
                          </Grid>
                        </FormGroup>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl required error={error} component="field-set">
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12}>
                        <FormLabel component="legend">Pick two</FormLabel>
                        <FormHelperText>You can display an error</FormHelperText>
                      </Grid>
                      <Grid item xs={12}>
                        <FormGroup>
                          <Grid container spacing={2}>
                            <Grid item>
                              <FormControlLabel
                                control={<Checkbox color="secondary" checked={gilad} onChange={handleChangeGroup} name="gilad" />}
                                label="Gilad Gray"
                              />
                            </Grid>
                            <Grid item>
                              <FormControlLabel
                                control={<Checkbox color="secondary" checked={jason} onChange={handleChangeGroup} name="jason" />}
                                label="Jason Killian"
                              />
                            </Grid>
                            <Grid item>
                              <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChangeGroup} name="antoine" color="secondary" />}
                                label="Antoine Llorca"
                              />
                            </Grid>
                          </Grid>
                        </FormGroup>
                      </Grid>
                    </Grid>
                  </FormControl>
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
                  Label Placement
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <FormControl component="fieldset">
                <FormGroup aria-label="position">
                  <Grid container spacing={2}>
                    <Grid item>
                      <FormControlLabel value="top" control={<Checkbox color="primary" />} label="Top" labelPlacement="top" />
                    </Grid>
                    <Grid item>
                      <FormControlLabel value="start" control={<Checkbox color="primary" />} label="Start" labelPlacement="start" />
                    </Grid>
                    <Grid item>
                      <FormControlLabel value="bottom" control={<Checkbox color="primary" />} label="Bottom" labelPlacement="bottom" />
                    </Grid>
                    <Grid item>
                      <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
                    </Grid>
                  </Grid>
                </FormGroup>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default FrmCheckbox;
