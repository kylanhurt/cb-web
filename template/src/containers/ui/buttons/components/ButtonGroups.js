import React, {PureComponent} from 'react';
import {Button, ButtonGroup, ButtonToolbar, Card, CardBody, Col} from 'reactstrap';

export default class ButtonGroups extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Button groups</h5>
            </div>
            <h5 className='bold-text'>Icon group</h5>
            <div className='card__title'>
              <h5 className='subhead'>Use default button group with class <span
                className='red-text'>btn-group--icons</span></h5>
            </div>
            <ButtonToolbar>
              <ButtonGroup className='btn-group--icons'>
                <Button outline><span className='lnr lnr-pushpin'/></Button>
                <Button outline><span className='lnr lnr-heart-pulse'/></Button>
                <Button outline><span className='lnr lnr-cog'/></Button>
                <Button outline><span className='lnr lnr-magic-wand'/></Button>
              </ButtonGroup>
            </ButtonToolbar>
            <h5 className='bold-text'>Large buttons</h5>
            <div className='card__title'>
              <h5 className='subhead'>Use default button group</h5>
            </div>
            <ButtonToolbar>
              <ButtonGroup>
                <Button outline>Left</Button>
                <Button outline>Middle</Button>
                <Button outline>Right</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <h5 className='bold-text'>Justify buttons</h5>
            <div className='card__title'>
              <h5 className='subhead'>Use default button group with class <span
                className='red-text'>btn-group--justified</span></h5>
            </div>
            <ButtonToolbar>
              <ButtonGroup className='btn-group--justified'>
                <Button color='primary' href='#'>Left</Button>
                <Button color='primary' href='#'>Middle</Button>
                <Button color='primary' href='#'>Right</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}