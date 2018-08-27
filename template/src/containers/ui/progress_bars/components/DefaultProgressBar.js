import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Progress} from 'reactstrap';

export default class DefaultProgressBar extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Default progress bar</h5>
              <h5 className='subhead'>Use default progress</h5>
            </div>
            <div className='progress-wrap'>
              <Progress value={80}/>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}