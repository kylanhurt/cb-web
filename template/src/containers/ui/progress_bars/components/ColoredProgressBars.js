import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Progress} from 'reactstrap';

export default class ColoredProgressBars extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Colored Progress Bars</h5>
              <h5 className='subhead'>Use default progress with class
                <span className='red-text'> progress-wrap--yellow</span>,
                <span className='red-text'> progress-wrap--violet</span>,
                <span className='red-text'> progress-wrap--pink</span>,
                <span className='red-text'> progress-wrap--blue</span>
              </h5>
            </div>
            <div className='progress-wrap'>
              <Progress value={20}/>
            </div>
            <div className='progress-wrap progress-wrap--yellow'>
              <Progress value={30}/>
            </div>
            <div className='progress-wrap progress-wrap--violet'>
              <Progress value={40}/>
            </div>
            <div className='progress-wrap progress-wrap--pink'>
              <Progress value={50}/>
            </div>
            <div className='progress-wrap progress-wrap--blue'>
              <Progress value={60}/>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}