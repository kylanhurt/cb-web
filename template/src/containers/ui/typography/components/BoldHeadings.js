import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';

export default class BoldHeadings extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Bold headings</h5>
              <h5 className='subhead'>Use tags <span className='red-text'>h1 to h6</span> with class
                <span className='red-text'> bold-text</span>
              </h5>
            </div>
            <div className='typography-card'>
              <h1 className='bold-text'>H1 Type something </h1>
              <h2 className='bold-text'>H2 Type something </h2>
              <h3 className='bold-text'>H3 Type something </h3>
              <h4 className='bold-text'>H4 Type something </h4>
              <h5 className='bold-text'>H5 Type something </h5>
              <h6 className='bold-text'>H6 Type something </h6>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}