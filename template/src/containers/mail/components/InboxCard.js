import React, {PureComponent} from 'react';
import {Card, Col} from 'reactstrap';
import Inbox from '../../../components/inbox/Inbox';
import emails from './email-list';

export default class InboxCard extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <Inbox emails={emails}/>
        </Card>
      </Col>
    )
  }
}