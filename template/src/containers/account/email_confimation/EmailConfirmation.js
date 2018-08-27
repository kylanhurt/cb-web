import React, {PureComponent} from 'react';
import {Container, Row} from 'reactstrap';
import EmailConfirmationCard from './components/EmailConfirmationCard';

export default class EmailConfirmation extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <EmailConfirmationCard/>
        </Row>
      </Container>
    )
  }
}