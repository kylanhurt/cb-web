import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import showResults from './components/Show';
import Wizard from './components/WizardForm';

export default class WizardForm extends PureComponent {
  
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Wizard form</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Wizard onSubmit={showResults}/>
      </Container>
    )
  }
}

