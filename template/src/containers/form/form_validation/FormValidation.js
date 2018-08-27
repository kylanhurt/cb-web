import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import HorizontalFormTwo from './components/HorizontalFormTwo';
import VerticalForm from './components/VerticalForm';
import VerticalFormTwo from './components/VerticalFormTwo';
import showResults from './components/Show';

export default class FormValidation extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Form Validation</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <HorizontalForm onSubmit={showResults}/>
          <HorizontalFormTwo onSubmit={showResults}/>
          <VerticalForm onSubmit={showResults}/>
          <VerticalFormTwo onSubmit={showResults}/>
        </Row>
      </Container>
    )
  }
}

