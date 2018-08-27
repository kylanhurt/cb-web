import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col, UncontrolledTooltip} from 'reactstrap';

export default class TooltipLeft extends PureComponent {
  render() {
    return (
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Tooltip on Left</h5>
              <h5 className='subhead'>Use default tooltip with placement <span className='red-text'>left</span></h5>
            </div>
            <ButtonToolbar className='btn-toolbar--center'>
              <Button id='TooltipLeft' outline>
                Tooltip on Left
              </Button>
              <UncontrolledTooltip placement='left' target='TooltipLeft'>
                Do you like dragons?
              </UncontrolledTooltip>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}