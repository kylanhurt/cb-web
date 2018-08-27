import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Slider from '../../../../components/range_slider/Slider';

export default class SliderStartPoint extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Slider start point</h5>
              <h5 className='subhead'>Use default slider with value of property <span className='red-text'>value</span></h5>
            </div>
            <Slider min={0} max={129} value={34}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}