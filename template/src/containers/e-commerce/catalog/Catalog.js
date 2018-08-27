import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import CatalogItems from './components/CatalogItems';

export default class Catalog extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Catalog</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <CatalogItems/>
        </Row>
      </Container>
    )
  }
}