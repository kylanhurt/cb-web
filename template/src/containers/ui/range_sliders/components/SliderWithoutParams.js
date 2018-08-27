import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Slider from '../../../../components/range_slider/Slider';

export default class SliderWithoutParams extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Slider without params</h5>
              <h5 className='subhead'>Use default slider</h5>
            </div>
            <Slider min={0} max={100}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}