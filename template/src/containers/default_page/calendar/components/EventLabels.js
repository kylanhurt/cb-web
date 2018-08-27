import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar, ButtonGroup} from 'reactstrap';


export default class EventLabels extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={3}>
        <Card className='card--not-full-height'>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>event labels</h5>
              {/*<h5 className='subhead'>Use default progress with class <span className='red-text'>progress-bar</span></h5>*/}
            </div>
            <p><span className='calendar-label calendar-label--red'/> High Priority events</p>
            <p><span className='calendar-label calendar-label--green'/> Family events</p>
            <p><span className='calendar-label calendar-label--blue'/> Non-priority events</p>
            <ButtonToolbar>
              <ButtonGroup className='btn-group--justified'>
                <Button color='primary' href='#'>Create new event</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}