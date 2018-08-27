import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import TopSellingProducts from './components/TopSellingProducts';
import BasicCard from './components/BasicCard';
import SalesStatistic from './components/SalesStatistic';
import RecentOrders from './components/RecentOrders';
import ProductSales from './components/ProductSales';
import NewOrders from './components/NewOrders';
import SalesStatistisBar from './components/SalesStatistisBar';
import MyTodos from './components/MyTodos';
import Emails from './components/Emails';
import SalesReport from './components/SalesReport';
import ShortReminders from './components/ShortReminders';

export default class ECommerceDashboard extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Dashboard E-commerce</h3>
          </Col>
        </Row>
        <Row>
          <TotalProducts/>
          <TotalProfit/>
          <OrdersToday/>
          <Subscriptions/>
        </Row>
        <Row>
          <ProductSales/>
          <NewOrders/>
          <MyTodos/>
          <SalesStatistisBar/>
          <SalesReport/>
          <Emails/>
          <ShortReminders/>
          <TopSellingProducts/>
          <BasicCard/>
          <SalesStatistic/>
          <RecentOrders/>
        </Row>
      </Container>
    )
  }
}
