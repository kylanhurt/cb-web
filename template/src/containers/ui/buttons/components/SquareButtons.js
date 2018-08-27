import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';

export default class SquareButtons extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>square buttons</h5>
              <h5 className='subhead'>Use default button with class <span className='red-text'>square</span></h5>
            </div>
            <ButtonToolbar>
              <Button className='square' outline>Minimal</Button>
              <Button className='square'>Secondary</Button>
              <Button disabled className='square'>Disabled</Button>
              <Button color='primary' className='square'>Primary</Button>
              <Button color='success' className='square'>Success</Button>
              <Button color='warning' className='square'>Warning</Button>
              <Button color='danger' className='square'>Danger</Button>
              <Button color='primary' className='square' outline>Primary</Button>
              <Button color='success' className='square' outline>Success</Button>
              <Button color='warning' className='square' outline>Warning</Button>
              <Button color='danger' className='square' outline>Danger</Button>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}