import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Progress} from 'reactstrap';

export default class AnimatedMultisizedProgressBars extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Animated Multisized progress bars</h5>
              <h5 className='subhead'>Use default progress with combination of classes and property
                <span className='red-text'> animated</span>
              </h5>
            </div>
            <div className='progress-wrap'>
              <Progress animated value={20}/>
            </div>
            <div className='progress-wrap progress-wrap--small'>
              <Progress animated value={40}/>
            </div>
            <div className='progress-wrap progress-wrap--middle'>
              <Progress animated value={60}/>
            </div>
            <div className='progress-wrap progress-wrap--big'>
              <Progress animated value={80}/>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}