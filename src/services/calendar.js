// third party
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

// project import
import services from 'utils/services';

// assets
import value from 'assets/scss/_themes-vars.module.scss';

// ==============================|| SERVICES - CALENDAR ||============================== //

let events = [
  {
    id: '5e8882e440f6322fa399eeb8',
    allDay: true,
    color: value.success,
    textColor: '',
    description: 'Inform about new contract',
    start: moment().subtract(5, 'days').hours(6).minutes(12).toDate(),
    title: 'All Day Event'
  },
  {
    id: '5e8882eb5f8ec686220ff131',
    allDay: true,
    color: value.primary,
    textColor: '',
    description: 'Discuss about new partnership',
    end: moment().add(4, 'days').hours(15).minutes(30).toDate(),
    start: moment().add(2, 'days').hours(12).minutes(0).toDate(),
    title: 'Long Event'
  },
  {
    id: '5e8882f1f0c9216396e05a9b',
    allDay: false,
    color: value.warning,
    textColor: '',
    description: 'SCRUM Planning',
    start: moment().add(5, 'days').hours(8).minutes(0).toDate(),
    title: 'Repeating Event'
  },
  {
    id: '5e8882f1f0c9216396e05a9b',
    allDay: false,
    color: value.warning,
    textColor: '',
    description: 'SCRUM Planning',
    start: moment().add(12, 'days').hours(8).minutes(0).toDate(),
    title: 'Repeating Event'
  },
  {
    id: '5e8882fcd525e076b3c1542c',
    allDay: true,
    color: value.error,
    textColor: '',
    description: 'Sorry, John!',
    end: moment().add(5, 'days').hours(7).minutes(31).toDate(),
    start: moment().add(4, 'days').hours(7).minutes(30).toDate(),
    title: 'Conference'
  },
  {
    id: '5e888302e62149e4b49aa609',
    allDay: false,
    color: value.primary,
    textColor: '',
    description: 'Discuss about the new project',
    end: moment().subtract(6, 'days').hours(11).minutes(30).toDate(),
    start: moment().subtract(6, 'days').hours(9).minutes(0).toDate(),
    title: 'Meeting'
  },
  {
    id: '5e88830672d089c53c46ece3',
    allDay: false,
    color: value.success,
    textColor: '',
    description: 'Get a new quote for the payment processor',
    end: moment().hours(14).minutes(0).toDate(),
    start: moment().hours(13).minutes(0).toDate(),
    title: 'Lunch'
  },
  {
    id: '5e888302e62349e4b49aa609',
    allDay: false,
    color: value.primary,
    textColor: '',
    description: 'Discuss about the project launch',
    end: moment().add(6, 'days').hours(19).minutes(0).toDate(),
    start: moment().add(6, 'days').hours(14).minutes(30).toDate(),
    title: 'Meeting'
  },
  {
    id: '5e888302e62149e4b49ab609',
    allDay: false,
    color: value.primary,
    textColor: '',
    description: 'Discuss about the tour',
    end: moment().add(15, 'days').hours(15).minutes(45).toDate(),
    start: moment().add(15, 'days').hours(14).minutes(0).toDate(),
    title: 'Happy Hour'
  },
  {
    id: '5e888302e62149e4b49aa610',
    allDay: false,
    color: value.secondaryLight,
    textColor: '',
    description: "Let's Go",
    end: moment().add(7, 'days').hours(22).minutes(45).toDate(),
    start: moment().add(7, 'days').hours(20).minutes(30).toDate(),
    title: 'Dinner'
  },
  {
    id: '5e888302e62149e4b49aa709',
    allDay: false,
    color: value.info,
    textColor: '',
    description: "Let's Go",
    end: moment().add(25, 'days').hours(12).minutes(45).toDate(),
    start: moment().add(25, 'days').hours(10).minutes(30).toDate(),
    title: 'Birthday Party'
  }
];

services.onGet('/api/calendar/events').reply(200, { events });

services.onPost('/api/calendar/events/new').reply((request) => {
  try {
    const { allDay, description, end, start, color, textColor, title } = JSON.parse(request.data);
    const event = {
      id: uuidv4(),
      allDay,
      color,
      textColor,
      description,
      end,
      start,
      title
    };

    events = [...events, event];

    return [200, { event }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/calendar/events/update').reply((request) => {
  try {
    const { eventId, update } = JSON.parse(request.data);
    let event = null;

    events = _.map(events, (_event) => {
      if (_event.id === eventId) {
        _.assign(_event, { ...update });
        event = _event;
      }

      return _event;
    });

    return [200, { event }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/calendar/events/remove').reply((request) => {
  try {
    const { eventId } = JSON.parse(request.data);

    events = _.reject(events, { id: eventId });

    return [200, { eventId }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
