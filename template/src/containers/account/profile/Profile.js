import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import ProfileMain from './components/ProfileMain';
import ProfileCalendar from './components/ProfileCalendar';
import ProfileTasks from './components/ProfileTasks';
import ProfileTabs from './components/ProfileTabs';

export default class Calendar extends PureComponent {
  render() {
    return (
      <Container>
        <div className='profile'>
          <Row>
            <Col md={12} lg={12} xl={4}>
              <Row>
                <ProfileMain/>
                <ProfileCalendar/>
                <ProfileTasks/>
              </Row>
            </Col>
            <ProfileTabs/>
          </Row>
        </div>
      </Container>
    )
  }
}