import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import ProductEditForm from './ProductEditForm';

export default class PaymentCard extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Main Information</h5>
            </div>
            <ProductEditForm onSubmit/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

