import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import TextEditor from '../../../../components/text-editor/TextEditor';

export default class Editor extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <TextEditor/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}