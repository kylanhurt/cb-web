import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import PointSizes from './components/PointSizes';
import RandomAnimatedLine from './components/RandomAnimatedLine';
import RandomAnimatedBars from './components/RandomAnimatedBars';
import PolarArea from './components/PolarArea';
import DynamiclyRefreshedDoughnut from './components/DynamiclyRefreshedDoughnut';
import LegendHandlers from './components/LegendHandlers';

export default class ChartsJS extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>React Chartjs 2</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <PointSizes/>
          <RandomAnimatedLine/>
          <RandomAnimatedBars/>
          <PolarArea/>
          <DynamiclyRefreshedDoughnut/>
          <LegendHandlers/>
        </Row>
      </Container>
    )
  }
}