import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';

export default class Blockquote extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Blockquote</h5>
              <h5 className='subhead'>Use default <span className='red-text'>blockquote</span></h5>
            </div>
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            </blockquote>
          </CardBody>
        </Card>
      </Col>
    )
  }
} 