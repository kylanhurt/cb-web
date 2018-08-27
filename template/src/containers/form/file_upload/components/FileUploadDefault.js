import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderDropZoneField from '../../../../components/form/DropZone';

class FileUploadDefault extends PureComponent {
  
  render() {
    const {handleSubmit, reset} = this.props;
    
    return (
      <Col md={12} lg={6}>
        <Card className='card--not-full-height'>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>File upload default</h5>
              <h5 className='subhead'>For files upload</h5>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <Field
                name='files'
                component={renderDropZoneField}
              />
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Submit</Button>
                <Button type='button' onClick={reset}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'file_upload_default', // a unique identifier for this form
})(FileUploadDefault);
