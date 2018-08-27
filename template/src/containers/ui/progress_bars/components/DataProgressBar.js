import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Progress} from 'reactstrap';

export default class DataProgressBar extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Data progress bar </h5>
              <h5 className='subhead'>Use default progress with text</h5>
            </div>
            <div className='progress-wrap progress-wrap--middle'>
              <Progress value={70}>70%</Progress>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}