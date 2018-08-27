import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Table from './components/DataTable';

export default class DataTable extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Data Table</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <Table/>
        </Row>
      </Container>
    )
  }
}