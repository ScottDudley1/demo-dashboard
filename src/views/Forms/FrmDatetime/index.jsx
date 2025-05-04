import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// assets
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';

// ==============================|| FORM DATE TIME ||============================== //

const FrmDatetime = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Breadcrumb title="Form Datetime">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Forms
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Datetime
        </Typography>
      </Breadcrumb>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Basic Date Picker
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container justifyContent="space-around">
                  <DatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    slotProps={{
                      textField: {
                        fullWidth: true
                      }
                    }}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                    keyboardIcon={<EventTwoToneIcon />}
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Date Picker Dialog
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container justifyContent="space-around">
                  <MobileDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    slotProps={{
                      textField: {
                        fullWidth: true
                      }
                    }}
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                    keyboardIcon={<EventTwoToneIcon />}
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Time Picker Dialog
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container justifyContent="space-around">
                  <MobileTimePicker
                    margin="normal"
                    id="time-picker"
                    slotProps={{
                      textField: {
                        fullWidth: true
                      }
                    }}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change time'
                    }}
                    keyboardIcon={<EventTwoToneIcon />}
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Native Picker
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container justifyContent="space-around">
                  <form noValidate>
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </form>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Date & Time Picker
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container justifyContent="space-around">
                  <form noValidate>
                    <TextField
                      id="datetime-local"
                      label="Next appointment"
                      type="date-local"
                      defaultValue="2017-05-24T10:30"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </form>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Time Picker
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container justifyContent="space-around">
                  <form noValidate>
                    <TextField
                      id="time"
                      label="Alarm clock"
                      type="time"
                      defaultValue="07:30"
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300
                      }}
                    />
                  </form>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
};

export default FrmDatetime;
