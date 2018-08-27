import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DefaultModals from './components/DefaultModals';
import ColoredModals from './components/ColoredModals';
import HeaderModals from './components/HeaderModals';

export default class Modals extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Modals</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <DefaultModals/>
          <ColoredModals/>
          <HeaderModals/>
        </Row>
      </Container>
    )
  }
}

