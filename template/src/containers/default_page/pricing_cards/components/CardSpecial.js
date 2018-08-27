import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button} from 'reactstrap';

const balloon = process.env.PUBLIC_URL + '/img/pricing_cards/002-hot-air-balloon.svg';

export default class CardSpecial extends PureComponent {
  render() {
    return (
      <Col md={6} xl={3} sm={12}>
        <Card className='pricing-card pricing-card--info'>
          <CardBody className='pricing-card__body'>
            <img className='pricing-card__img' src={balloon} alt=''/>
            <h3 className='pricing-card__plan'>Special</h3>
            <hr/>
            <p className='pricing-card__price'>$5<span>/mo</span></p>
            <p className='pricing-card__feature'>4 Users</p>
            <p className='pricing-card__feature'>1 Tb storage</p>
            <p className='pricing-card__feature'>Monthly update</p>
            <p className='pricing-card__feature pricing-card__feature--inactive'>Free support</p>
            <Button className='pricing-card__button' color='primary'>Sign Up</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}