import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import showResults from './components/Show';
import FileUploadDefault from './components/FileUploadDefault';
import FileUploadCustomHeight from './components/FileUploadCustomHeight';

export default class FileUpload extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>File Upload</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <FileUploadDefault onSubmit={showResults}/>
          <FileUploadCustomHeight onSubmit={showResults}/>
        </Row>
      </Container>
    )
  }
}

