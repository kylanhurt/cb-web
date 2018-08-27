import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import SimpleLineChart from './components/SimpleLineChart';
import DashedLineChart from './components/DashedLineChart';
import SimpleAreaChart from './components/SimpleAreaChart';
import StackedAreaChart from './components/StackedAreaChart';
import MultipleYAxesScatterChart from './components/MultipleYAxesScatterChart';
import SimpleRadialBarChart from './components/SimpleRadialBarChart';
import SimpleRadarChart from './components/SimpleRadarChart';
import TwoLevelPieChart from './components/TwoLevelPieChart';

export default class Recharts extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Recharts</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <SimpleLineChart/>
          <DashedLineChart/>
          <SimpleAreaChart/>
          <StackedAreaChart/>
          <MultipleYAxesScatterChart/>
          <SimpleRadialBarChart/>
          <SimpleRadarChart/>
          <TwoLevelPieChart/>
        </Row>
      </Container>
    )
  }
}