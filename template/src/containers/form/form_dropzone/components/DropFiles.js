import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderDropZoneMultipleField from '../../../../components/form/DropZoneMultiple';

class DropFiles extends PureComponent {
  render() {
    const {handleSubmit, reset} = this.props;
    
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Drop files to upload</h5>
              <h5 className='subhead'>For multiply files upload</h5>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <Field
                name='files'
                component={renderDropZoneMultipleField}
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
  form: 'drop_files_form', // a unique identifier for this form
})(DropFiles);
