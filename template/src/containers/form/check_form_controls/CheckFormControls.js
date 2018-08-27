import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DefaultControls from './components/DefaultControls';
import ColoredControls from './components/ColoredControls';
import ColoredControlsOnClick from './components/ColoredControlsOnClick';
import ButtonTypeControls from './components/ButtonTypeControls';
import showResults from '../form_layouts/components/Show';

export default class CheckFormControls extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Check Form Controls</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <DefaultControls onSubmit={showResults}/>
          <ColoredControls onSubmit={showResults}/>
          <ColoredControlsOnClick onSubmit={showResults}/>
          <ButtonTypeControls onSubmit={showResults}/>
        </Row>
      </Container>
    )
  }
}

