import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';

export class Homepage extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Homepage Example</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

