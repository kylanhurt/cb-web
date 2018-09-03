import React, { Component } from 'react'
import { Col, Container, Row, Card, CardBody } from 'reactstrap'
import { SubmitBuyOrderConnector } from '../../redux/connectors/SubmitBuyOrderConnector.js'
import { OrderBookConnector } from '../../redux/connectors/OrderBookConnector.js'
export class HomepageComponent extends Component {
  render () {
    return (
      <Container className='dashboard'>
        <Row>
          <Col xs={12} md={12} lg={12} xl={12}>
            <h3 className='page-title'>Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} xl={6}>
            <Card>
              <CardBody className='trade-currencies-form'>
                <SubmitBuyOrderConnector />
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={12} xl={6}>
            <Card>
              <CardBody className='order-book-table'>
                <OrderBookConnector />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
