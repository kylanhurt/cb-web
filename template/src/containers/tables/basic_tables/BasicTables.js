import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import BasicTable from './components/BasicTable';
import BorderedTable from './components/BorderedTable';
import HeadAccentTable from './components/HeadAccentTable';
import ColoredStringTable from './components/ColoredStringTable';
import HoverColoredStringTable from './components/HoverColoredStringTable';
import InverseStyleTable from './components/InverseStyleTable';
import ResponsiveTable from './components/ResponsiveTable';

export default class BasicTables extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Basic Tables</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <BasicTable/>
          <BorderedTable/>
          <HeadAccentTable/>
          <ColoredStringTable/>
          <HoverColoredStringTable/>
          <InverseStyleTable/>
          <ResponsiveTable/>
        </Row>
      </Container>
    )
  }
}