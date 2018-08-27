import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button} from 'reactstrap';

const paper_plane = process.env.PUBLIC_URL + '/img/pricing_cards/004-paper-plane.svg';

export default class CardBasic extends PureComponent {
  render() {
    return (
      <Col md={6} xl={3} sm={12}>
        <Card className='pricing-card pricing-card--primary'>
          <CardBody className='pricing-card__body'>
            <img className='pricing-card__img' src={paper_plane} alt=''/>
            <h3 className='pricing-card__plan'>Basic</h3>
            <hr/>
            <p className='pricing-card__price'>$0<span>/mo</span></p>
            <p className='pricing-card__feature'>2 Users</p>
            <p className='pricing-card__feature'>500 Gb storage</p>
            <p className='pricing-card__feature pricing-card__feature--inactive'>Monthly update</p>
            <p className='pricing-card__feature pricing-card__feature--inactive'>Free support</p>
            <Button className='pricing-card__button' color='primary'>Sign Up</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}