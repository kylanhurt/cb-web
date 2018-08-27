import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Progress} from 'reactstrap';

export default class AnimatedProgressBar extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Animated progress bar</h5>
              <h5 className='subhead'>Use default progress with property <span className='red-text'>animated</span></h5>
            </div>
            <div className='progress-wrap progress-wrap--middle'>
              <Progress animated value={70}/>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}