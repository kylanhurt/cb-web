import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import moment from 'moment';

BigCalendar.momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

export default class CalendarComponent extends PureComponent {
  static propTypes = {
    events: PropTypes.array.isRequired,
    small: PropTypes.bool
  };
  
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
    };
    
    this.moveEvent = this.moveEvent.bind(this);
  }
  
  moveEvent({event, start, end}) {
    const {events} = this.state;
    
    const idx = events.indexOf(event);
    const updatedEvent = {...event, start, end};
    
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);
    
    this.setState({
      events: nextEvents
    });
  }
  
  eventStyleGetter(event) {
    let color;
    
    switch (event.priority) {
      case 'high':
        color = '#fa697d';
        break;
      
      case 'family':
        color = '#4ce1b6';
        break;
      
      case 'non':
        color = '#70bbfd';
        break;
      default:
        color = '$color-additional';
        break;
    }
    
    const style = {
      backgroundColor: color,
      border: 'none'
    };
    
    return {
      style: style
    };
  }
  
  render() {
    return (
      <div className={`calendar${this.props.small ? ' calendar--small' : ''}`}>
        <DragAndDropCalendar
          events={this.state.events}
          views={['month', 'week', 'day']}
          popup
          step={60}
          timeslots={1}
          showMultiDayTimes
          onEventDrop={this.moveEvent}
          defaultDate={new Date(2018, 3, 1)}
          eventPropGetter={(this.eventStyleGetter)}
          messages={{
            previous: <span className='lnr lnr-chevron-left'/>,
            next: <span className='lnr lnr-chevron-right'/>,
            today: <span className='lnr lnr-calendar-full'/>
          }}
        />
      </div>
    )
  }
};