import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Calendar from '../../../../components/Calendar';
import events from '../../../default_page/calendar/components/events';

export default class ProfileCalendar extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody className='profile__card--calendar'>
            <Calendar events={events} small/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}