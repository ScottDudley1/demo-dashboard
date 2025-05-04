import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  FormControlLabel,
  FormHelperText,
  Switch,
  SvgIcon,
  Grid,
  FormControl,
  RadioGroup,
  Radio
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// third party
import moment from 'moment';
import _ from 'lodash';
import * as Yup from 'yup';
import { Formik } from 'formik';

import ColorPalette from './ColorPalette';
// assets
import TrashIcon from '@mui/icons-material/Delete';
import value from 'assets/scss/_themes-vars.module.scss';

const getInitialValues = (event, range) => {
  if (event) {
    return _.merge(
      {},
      {
        allDay: false,
        color: value.primary,
        textColor: '',
        description: '',
        end: moment().add(30, 'minutes').toDate(),
        start: moment().toDate(),
        title: '',
        submit: null
      },
      event
    );
  }

  if (range) {
    return _.merge(
      {},
      {
        allDay: false,
        color: value.primary,
        textColor: '',
        description: '',
        end: new Date(range.end),
        start: new Date(range.start),
        title: '',
        submit: null
      },
      event
    );
  }

  return {
    allDay: false,
    color: value.primary,
    textColor: '',
    description: '',
    end: moment().add(30, 'minutes').toDate(),
    start: moment().toDate(),
    title: '',
    submit: null
  };
};

// ==============================|| MODAL EVENT FORM ||============================== //

const ModalEventFrom = ({ event, handleCreate, onCancel, handleUpdate, range, handleDelete }) => {
  const theme = useTheme();
  const isCreating = !event;

  const backgroundColor = [
    {
      value: theme.palette.primary.main,
      color: 'primary.main',
      label: 'Default'
    },
    {
      value: theme.palette.error.dark,
      color: 'error.dark'
    },
    {
      value: theme.palette.success.dark,
      color: 'success.dark'
    },
    {
      value: theme.palette.secondary.dark,
      color: 'secondary.dark'
    },
    {
      value: theme.palette.warning.dark,
      color: 'warning.dark'
    },
    {
      value: theme.palette.primary.dark,
      color: 'primary.dark'
    },
    {
      value: theme.palette.primary.light + 20,
      color: 'primary.light'
    },
    {
      value: theme.palette.error.light + 20,
      color: 'error.light'
    },
    {
      value: theme.palette.success.light + 20,
      color: 'success.light'
    },
    {
      value: theme.palette.grey[500] + 20,
      color: 'grey.500'
    },
    {
      value: theme.palette.warning.light + 20,
      color: 'warning.light'
    }
  ];

  const textColor = [
    {
      value: theme.palette.primary.dark,
      color: 'primary.dark',
      label: ''
    },
    {
      value: theme.palette.error.dark,
      color: 'error.dark',
      label: ''
    },
    {
      value: theme.palette.success.dark,
      color: 'success.dark',
      label: ''
    },
    {
      value: theme.palette.secondary.dark,
      color: 'secondary.dark',
      label: ''
    },
    {
      value: theme.palette.warning.dark,
      color: 'warning.dark',
      label: ''
    }
  ];

  return (
    <>
      <Formik
        initialValues={getInitialValues(event, range)}
        validationSchema={Yup.object().shape({
          allDay: Yup.bool(),
          description: Yup.string().max(5000),
          end: Yup.date().when('start', (start, schema) => start && schema.min(start, 'End date must be later than start date')),
          start: Yup.date(),
          title: Yup.string().max(255).required('Title is required'),
          color: Yup.string().max(255),
          textColor: Yup.string().max(255)
        })}
        onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
          try {
            const data = {
              allDay: values.allDay,
              color: values.color,
              textColor: values.textColor,
              description: values.description,
              end: values.end,
              start: values.start,
              title: values.title
            };
            if (event) {
              handleUpdate(event.id, data);
            } else {
              handleCreate(data);
            }
            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldTouched,
          getFieldProps,
          setFieldValue,
          touched,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <Box p={3}>
              <Typography align="center" gutterBottom variant="h3" color="textPrimary">
                {isCreating ? 'Add Event' : 'Edit Event'}
              </Typography>
            </Box>
            <Box p={3}>
              <TextField
                error={Boolean(touched.title && errors.title)}
                fullWidth
                helperText={touched.title && errors.title}
                label="Title"
                name="title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                variant="outlined"
              />
              <Box mt={2}>
                <TextField
                  error={Boolean(touched.description && errors.description)}
                  fullWidth
                  helperText={touched.description && errors.description}
                  label="Description"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  variant="outlined"
                />
              </Box>
              <Box mt={2}>
                <FormControlLabel control={<Switch checked={values.allDay} name="allDay" onChange={handleChange} />} label="All day" />
              </Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box mt={2}>
                  <DateTimePicker
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: 'outlined'
                      }
                    }}
                    name="start"
                    onClick={() => setFieldTouched('end')}
                    onChange={(date) => setFieldValue('start', date)}
                    value={new Date(values.start)}
                  />
                </Box>
                <Box mt={2}>
                  <DateTimePicker
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: 'outlined'
                      }
                    }}
                    label="End date"
                    name="end"
                    onClick={() => setFieldTouched('end')}
                    onChange={(date) => setFieldValue('end', date)}
                    value={new Date(values.end)}
                  />
                </Box>
              </LocalizationProvider>
              {Boolean(touched.end && errors.end) && (
                <Box mt={2}>
                  <FormHelperText error>{errors.end}</FormHelperText>
                </Box>
              )}
            </Box>
            <Box p={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Background Color</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-label="color"
                        {...getFieldProps('color')}
                        onChange={(e) => setFieldValue('color', e.target.value)}
                        name="color-radio-buttons-group"
                        sx={{ '& .MuiFormControlLabel-root': { mr: 0 } }}
                      >
                        {backgroundColor.map((item, index) => (
                          <ColorPalette key={index} value={item.value} color={item.color} label={item.label} />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Text Color</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="textColor"
                        {...getFieldProps('textColor')}
                        onChange={(e) => setFieldValue('textColor', e.target.value)}
                        name="text-color-radio-buttons-group"
                        sx={{ '& .MuiFormControlLabel-root': { mr: 0 } }}
                      >
                        <FormControlLabel value="" control={<Radio color="default" />} label="Default" sx={{ pr: 1 }} />
                        {textColor.map((item, index) => (
                          <ColorPalette key={index} value={item.value} color={item.color} label={item.label} />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <Divider />
            <Box p={2} display="flex" alignItems="center">
              {!isCreating && (
                <IconButton onClick={() => handleDelete(event.id)} size="large">
                  <SvgIcon>
                    <TrashIcon />
                  </SvgIcon>
                </IconButton>
              )}
              <Box flexGrow={1} />
              <Button onClick={onCancel}>Cancel</Button>
              <Button variant="contained" type="submit" disabled={isSubmitting} color="secondary" sx={{ marginLeft: theme.spacing(2) }}>
                Confirm
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

ModalEventFrom.propTypes = {
  event: PropTypes.object,
  handleCreate: PropTypes.func,
  onCancel: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
  range: PropTypes.object,
  id: PropTypes.object
};

export default ModalEventFrom;
