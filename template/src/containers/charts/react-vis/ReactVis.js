import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Plots from './components/Plots';
import LineSeriesCanvas from './components/LineSeriesCanvas';
import MarkSeriesCanvas from './components/MarkSeriesCanvas';
import LineSeries from './components/LineSeries';
import LineSeriesWithManyColors from './components/LineSeriesWithManyColors';
import Bar from './components/Bar';

export default class ReactVis extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>React-vis</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <Plots/>
          <LineSeriesCanvas/>
          <MarkSeriesCanvas/>
          <LineSeries/>
          <LineSeriesWithManyColors/>
          <Bar/>
        </Row>
      </Container>
    )
  }
}