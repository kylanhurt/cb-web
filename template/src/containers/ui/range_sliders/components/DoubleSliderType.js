import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Range from '../../../../components/range_slider/Range';

export default class DoubleSliderType extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Double slider type</h5>
              <h5 className='subhead'>Use default range</h5>
            </div>
            <Range min={0} max={1000} value={[350, 635]} tipFormatter={value => `$${value}`}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}