import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Visits from './components/Visits';
import TotalPageViews from './components/TotalPageViews';
import NewUsers from './components/NewUsers';
import BounceRate from './components/BounceRate';
import ABTestingAnalytics from './components/ABTestingAnalytics';
import SalesStatistic from './components/SalesStatistic';
import VisitorsSessions from './components/VisitorsSessions';
import BounceRateArea from './components/BounceRateArea';
import AudienceByCountry from './components/AudienceByCountry';
import BudgetStatistic from './components/BudgetStatistic';
import BestSellingRegions from './components/BestSellingRegions';
import GoalsCompletion from './components/GoalsCompletion';

export default class DefaultDashboard extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Dashboard Default</h3>
          </Col>
        </Row>
        <Row>
          <Visits/>
          <TotalPageViews/>
          <NewUsers/>
          <BounceRate/>
        </Row>
        <Row>
          <ABTestingAnalytics/>
          <BounceRateArea/>
          <VisitorsSessions/>
          <SalesStatistic/>
          <BudgetStatistic/>
          <AudienceByCountry/>
          <BestSellingRegions/>
          <GoalsCompletion/>
        </Row>
      </Container>
    )
  }
}

