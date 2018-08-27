import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Calendar from '../../../../components/Calendar';
import events from './events';

export default class BigCalendar extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={9}>
        <Card>
          <CardBody>
            <Calendar events={events}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}