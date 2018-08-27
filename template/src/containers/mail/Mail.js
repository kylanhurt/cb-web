import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import InboxCard from './components/InboxCard';

export default class Mail extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Mail Application</h3>
            <h3 className='page-subhead subhead'>You can compose an email here</h3>
          </Col>
        </Row>
        <Row>
          <InboxCard/>
        </Row>
      </Container>
    )
  }
}