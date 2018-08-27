import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DatePickers from './components/DatePickers';
import TimePickers from './components/TimePickers';
import ColorPickers from './components/ColorPickers';
import showResults from './components/Show';

export default class FormPicker extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Form-picker</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <DatePickers onSubmit={showResults}/>
          <TimePickers onSubmit={showResults}/>
          <ColorPickers onSubmit={showResults}/>
        </Row>
      </Container>
    )
  }
}

