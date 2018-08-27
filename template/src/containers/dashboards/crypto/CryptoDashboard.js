import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import BTC from './components/BTC';
import ETH from './components/ETH';
import BCH from './components/BCH';
import XRP from './components/XRP';
import TradeHistory from './components/TradeHistory';
import BtcEth from './components/BtcEth';
import CryptotrendsToday from './components/CryptotrendsToday';
import TopTen from './components/TopTen';
import PlaceOrder from './components/PlaceOrder';

export default class CryptoDashboard extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Dashboard Cryptocurrencies</h3>
          </Col>
        </Row>
        <Row>
          <BTC/>
          <ETH/>
          <BCH/>
          <XRP/>
        </Row>
        <Row>
          <TradeHistory/>
          <BtcEth/>
          <CryptotrendsToday/>
          <PlaceOrder/>
          <TopTen/>
        </Row>
      </Container>
    )
  }
}
