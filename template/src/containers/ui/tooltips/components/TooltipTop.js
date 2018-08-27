import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col, UncontrolledTooltip} from 'reactstrap';

export default class TooltipTop extends PureComponent {
  render() {
    return (
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Tooltip on Top</h5>
              <h5 className='subhead'>Use default tooltip with placement <span className='red-text'>top</span></h5>
            </div>
            <ButtonToolbar className='btn-toolbar--center'>
              <Button id='TooltipTop' outline>
                Tooltip on Top
              </Button>
              <UncontrolledTooltip placement='top' target='TooltipTop'>
                Do you like dragons?
              </UncontrolledTooltip>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}