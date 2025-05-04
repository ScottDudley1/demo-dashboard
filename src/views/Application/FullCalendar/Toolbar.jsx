import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Button, ButtonGroup, Grid, IconButton, Tooltip, Typography } from '@mui/material';

// third party
import moment from 'moment';

// assets
import ViewConfigIcon from '@mui/icons-material/ViewComfyOutlined';
import ViewWeekIcon from '@mui/icons-material/ViewWeekOutlined';
import ViewDayIcon from '@mui/icons-material/ViewDayOutlined';
import ViewAgendaIcon from '@mui/icons-material/ViewAgendaOutlined';

const viewOptions = [
  {
    label: 'Month',
    value: 'dayGridMonth',
    icon: ViewConfigIcon
  },
  {
    label: 'Week',
    value: 'timeGridWeek',
    icon: ViewWeekIcon
  },
  {
    label: 'Day',
    value: 'timeGridDay',
    icon: ViewDayIcon
  },
  {
    label: 'Agenda',
    value: 'listWeek',
    icon: ViewAgendaIcon
  }
];

// ==============================|| TOOLBAR ||============================== //

const Toolbar = ({ date, onDateNext, onDatePrev, onDateToday, onViewChange, view, ...rest }) => {
  return (
    <Grid alignItems="center" container justifyContent="space-between" spacing={3} {...rest}>
      <Grid item>
        <ButtonGroup size="small">
          <Button onClick={onDatePrev}>Prev</Button>
          <Button onClick={onDateToday}>Today</Button>
          <Button onClick={onDateNext}>Next</Button>
        </ButtonGroup>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h3" color="textPrimary">
          {moment(date).format('MMMM YYYY')}
        </Typography>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
        {viewOptions.map((viewOption) => {
          const Icon = viewOption.icon;

          return (
            <Tooltip key={viewOption.value} title={viewOption.label}>
              <IconButton
                color={viewOption.value === view ? 'secondary' : 'default'}
                onClick={() => onViewChange(viewOption.value)}
                size="large"
              >
                <Icon />
              </IconButton>
            </Tooltip>
          );
        })}
      </Grid>
    </Grid>
  );
};

Toolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  onDateNext: PropTypes.func,
  onDatePrev: PropTypes.func,
  onDateToday: PropTypes.func,
  onViewChange: PropTypes.func,
  view: PropTypes.oneOf(['dayGridMonth', 'timeGridWeek', 'timeGridDay', 'listWeek'])
};

export default Toolbar;
