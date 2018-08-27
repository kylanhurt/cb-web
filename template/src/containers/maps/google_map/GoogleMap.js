import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import BasicMap from './components/BasicMap';
import PinWithInfoWindow from './components/PinWithInfoWindow';
import MonochromeMap from './components/MonochromeMap';

export default class GoogleMap extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Google map</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <BasicMap/>
          <PinWithInfoWindow/>
          <MonochromeMap/>
        </Row>
      </Container>
    )
  }
}