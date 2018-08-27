import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import TimelineHistory from './components/TimelineHistory';

export default class Timeline extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Timeline</h3>
            <h3 className='page-subhead subhead'>This interface let you to see your activity history</h3>
          </Col>
        </Row>
        <Row>
          <TimelineHistory/>
        </Row>
      </Container>
    )
  }
}

