import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderRadioButtonField from '../../../../components/form/RadioButton';
import renderSelectField from '../../../../components/form/Select';

class VerticalFormHalf extends PureComponent {
  
  render() {
    const {handleSubmit, reset} = this.props;
    
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Vertical form</h5>
              <h5 className='subhead'>Labels are above fields, use div with class super
                <span className='red-text'> form__half</span></h5>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form__half'>
                <div className='form__form-group'>
                  <label className='form__form-group-label'>First Name</label>
                  <div className='form__form-group-field'>
                    <Field
                      name='first_name'
                      component='input'
                      type='text'
                      placeholder='Name'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <label className='form__form-group-label'>Last Name</label>
                  <div className='form__form-group-field'>
                    <Field
                      name='last_name'
                      component='input'
                      type='text'
                      placeholder='Last Name'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <label className='form__form-group-label'>Date of Birth</label>
                  <div className='form__form-group-field'>
                    <Field
                      name='birth'
                      component='input'
                      type='text'
                      placeholder='dd/mm/yyyy'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <label className='form__form-group-label'>Gender</label>
                  <div className='form__form-group-field'>
                    <Field
                      name='gender'
                      component={renderRadioButtonField}
                      label='Male'
                      radioValue='male'
                      defaultChecked
                    />
                    <Field
                      name='gender'
                      component={renderRadioButtonField}
                      label='Female'
                      radioValue='female'
                    />
                  </div>
                </div>
              </div>
              <div className='form__half'>
                <div className='form__form-group'>
                  <label className='form__form-group-label'>Select your country </label>
                  <div className='form__form-group-field'>
                    <Field
                      name='select'
                      component={renderSelectField}
                      type='text'
                      options={[
                        {value: 'one', label: 'One'},
                        {value: 'two', label: 'Two'},
                      ]}
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <label className='form__form-group-label'>City</label>
                  <div className='form__form-group-field'>
                    <Field
                      name='city'
                      component='input'
                      type='text'
                      placeholder='Your city name'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <label className='form__form-group-label'>ZIP Code</label>
                  <div className='form__form-group-field'>
                    <Field
                      name='zip'
                      component='input'
                      type='text'
                      placeholder='Enter your ZIP code'
                    />
                  </div>
                </div>
                <ButtonToolbar className='form__button-toolbar'>
                  <Button type='button' onClick={reset}>
                    Cancel
                  </Button>
                  <Button color='primary' type='submit'>Submit</Button>
                </ButtonToolbar>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'vertical_form_layout_half', // a unique identifier for this form
})(VerticalFormHalf);
