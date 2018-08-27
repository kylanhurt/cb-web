import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';

export default class RoundedButtons extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>rounded buttons</h5>
              <h5 className='subhead'>Use default button with class <span className='red-text'>rounded</span></h5>
            </div>
            <ButtonToolbar>
              <Button className='rounded' outline>Minimal</Button>
              <Button className='rounded'>Secondary</Button>
              <Button disabled className='rounded'>Disabled</Button>
              <Button color='primary' className='rounded'>Primary</Button>
              <Button color='success' className='rounded'>Success</Button>
              <Button color='warning' className='rounded'>Warning</Button>
              <Button color='danger' className='rounded'>Danger</Button>
              <Button color='primary' className='rounded' outline>Primary</Button>
              <Button color='success' className='rounded' outline>Success</Button>
              <Button color='warning' className='rounded' outline>Warning</Button>
              <Button color='danger' className='rounded' outline>Danger</Button>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}