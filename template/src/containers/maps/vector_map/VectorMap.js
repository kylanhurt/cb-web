import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Map from './components/Map';

export default class VectorMap extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Vector map</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <Map/>
        </Row>
      </Container>
    )
  }
}