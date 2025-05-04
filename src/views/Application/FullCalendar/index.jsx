import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery, Typography, Grid, Dialog, Card, CardContent } from '@mui/material';

// third-party
import _ from 'lodash';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';

// project-import
import Breadcrumb from 'component/Breadcrumb';
import axios from 'utils/axios';

import Header from './Header';
import Toolbar from './Toolbar';
import ModalEventForm from './ModalEventForm';

// custom style
const CalendarDiv = styled((props) => <div {...props} />)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2),
  '& .fc-unthemed .fc-head': {
    backgroundColor: theme.palette.background.dark
  },
  '& .fc-unthemed .fc-body': {
    backgroundColor: theme.palette.background.default
  },
  '& .fc-unthemed .fc-row': {
    borderColor: theme.palette.divider
  },
  '& .fc-unthemed .fc-axis': {
    ...theme.typography.body2
  },
  '& .fc-unthemed .fc-divider': {
    backgroundColor: theme.palette.background.dark,
    borderColor: theme.palette.divider
  },
  '& .fc-unthemed th': {
    borderColor: theme.palette.divider
  },
  '& .fc-unthemed td': {
    borderColor: theme.palette.divider
  },
  '& .fc-unthemed td.fc-today': {
    backgroundColor: theme.palette.background.dark
  },
  '& .fc-unthemed .fc-highlight': {
    backgroundColor: theme.palette.background.dark
  },
  '& .fc-unthemed .fc-event': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderWidth: 2,
    opacity: 0.9,
    '& .fc-time': {
      ...theme.typography.h6,
      color: 'inherit'
    },
    '& .fc-title': {
      ...theme.typography.body1,
      color: 'inherit'
    }
  },
  '& .fc-unthemed .fc-day-top': {
    ...theme.typography.body2
  },
  '& .fc-unthemed .fc-day-header': {
    ...theme.typography.subtitle2,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.dark
  },
  '& .fc-unthemed .fc-list-view': {
    borderColor: theme.palette.divider
  },
  '& .fc-unthemed .fc-list-empty': {
    ...theme.typography.subtitle1
  },
  '& .fc-unthemed .fc-list-heading td': {
    backgroundColor: theme.palette.background.dark,
    borderColor: theme.palette.divider
  },
  '& .fc-unthemed .fc-list-heading-main': {
    ...theme.typography.h6
  },
  '& .fc-unthemed .fc-list-heading-alt': {
    ...theme.typography.h6
  },
  '& .fc-unthemed .fc-list-item:hover td': {
    backgroundColor: theme.palette.background.dark
  },
  '& .fc-unthemed .fc-list-item-title': {
    ...theme.typography.body1
  },
  '& .fc-unthemed .fc-list-item-time': {
    ...theme.typography.body2
  }
}));

// ==============================|| FULL CALENDAR ||============================== //

const Calendar = () => {
  const calendarRef = React.useRef(null);

  const theme = useTheme();
  const matchSmDown = useMediaQuery(theme.breakpoints.down('md'));
  const [view, setView] = React.useState(matchSmDown ? 'listWeek' : 'dayGridMonth');

  const [date, setDate] = React.useState(moment().toDate());

  const [events, setEvents] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  //const [selectedEventId, setSelectedEventId] = React.useState(null);

  const [selectedRange, setSelectedRange] = React.useState(null);

  const getEvents = async () => {
    const response = await axios.get('/api/calendar/events');
    setEvents(response.data.events);
  };

  React.useEffect(() => {
    getEvents();
  }, []);

  React.useEffect(() => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = matchSmDown ? 'listWeek' : 'dayGridMonth';

      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [matchSmDown]);

  const handleEventSelect = (arg) => {
    //setSelectedEventId(arg.event.id);

    if (arg.event.id) {
      const selectEvent = events.find((_event) => _event.id === arg.event.id);
      setSelectedEvent(selectEvent);
    } else {
      setSelectedEvent(null);
    }
    setIsModalOpen(true);
  };

  const handleEventUpdate = async ({ event }) => {
    try {
      await axios.post('/api/calendar/events/update', {
        eventId: event.id,
        update: {
          allDay: event.allDay,
          start: event.start,
          end: event.end
        }
      });

      const newEvents = events.map((item) => {
        if (item.id === event.id) {
          return event;
        }
        return item;
      });

      setEvents(newEvents);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRangeSelect = (arg) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.unselect();
    }

    setIsModalOpen(true);
    setSelectedRange({
      start: arg.start.getTime(),
      end: arg.end.getTime()
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setSelectedRange(null);
  };

  const handleEventDelete = async (id) => {
    await axios.post('/api/calendar/events/remove', {
      id
    });

    const newEvent = _.reject(events, { id: id });
    setEvents(newEvent);
    handleModalClose();
  };

  const handleUpdateEvent = async (eventId, update) => {
    const response = await axios.post('/api/calendar/events/update', {
      eventId,
      update
    });

    const newEvents = events.map((item) => {
      if (item.id === eventId) {
        return response.data.event;
      }
      return item;
    });

    setEvents(newEvents);
    handleModalClose();
  };

  const handleEventCreate = async (data) => {
    const response = await axios.post('/api/calendar/events/new', data);

    setEvents([...events, response.data.event]);
    handleModalClose();
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  return (
    <>
      <Breadcrumb title="Full Calendar">
        <Typography component={RouterLink} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
          Application
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Full Calendar
        </Typography>
      </Breadcrumb>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Header onAddClick={handleAddClick} />
              <Toolbar
                date={date}
                onDateNext={handleDateNext}
                onDatePrev={handleDatePrev}
                onDateToday={handleDateToday}
                onViewChange={handleViewChange}
                view={view}
              />
              <CalendarDiv>
                <FullCalendar
                  allDayMaintainDuration
                  themeSystem="materia"
                  droppable
                  editable
                  events={events}
                  eventClick={handleEventSelect}
                  eventDrop={handleEventUpdate}
                  eventResizableFromStart
                  eventResize={handleEventUpdate}
                  headerToolbar={false}
                  height={800}
                  ref={calendarRef}
                  rerenderDelay={10}
                  select={handleRangeSelect}
                  selectable
                  weekends
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                />
              </CalendarDiv>
              <Dialog maxWidth="sm" fullWidth onClose={handleModalClose} open={isModalOpen}>
                {/* Dialog renders its body even if not open */}
                {isModalOpen && (
                  <ModalEventForm
                    event={selectedEvent}
                    range={selectedRange}
                    handleCreate={handleEventCreate}
                    onCancel={handleModalClose}
                    handleDelete={handleEventDelete}
                    handleUpdate={handleUpdateEvent}
                  />
                )}
              </Dialog>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Calendar;
