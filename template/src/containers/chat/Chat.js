import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import ChatCard from './components/ChatCard';

export default class Chat extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Chat Application</h3>
          </Col>
        </Row>
        <Row>
          <ChatCard/>
        </Row>
      </Container>
    )
  }
}