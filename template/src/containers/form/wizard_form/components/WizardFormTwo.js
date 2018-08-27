import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderSelectField from '../../../../components/form/Select';

class WizardFormOne extends PureComponent {
  
  render() {
    const {handleSubmit, previousPage} = this.props;
    
    return (
      
      <form className='form form--horizontal wizard__form' onSubmit={handleSubmit}>
        <h3 className='wizard__title'>What’s your address</h3>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Country</label>
          <div className='form__form-group-field'>
            <Field
              name='country'
              component={renderSelectField}
              type='text'
              options={[
                {value: 'one', label: 'One'},
                {value: 'two', label: 'Two'},
              ]}
              placeholder='Select country'
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
              placeholder='City name'
            />
          </div>
        </div>
        <div className='form__form-group form__form-group--address'>
          <label className='form__form-group-label'>Address</label>
          <div className='form__form-group-field'>
            <Field
              name='street_name'
              component='input'
              type='text'
              placeholder='Street name'
            />
            <Field
              name='building'
              component='input'
              type='text'
              placeholder='Building'
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
            />
          </div>
        </div>
        <ButtonToolbar className='form__button-toolbar wizard__toolbar'>
          <Button color='primary' type='button' className='previous' onClick={previousPage}>Back</Button>
          <Button color='primary' type='submit' className='next'>Next</Button>
        </ButtonToolbar>
      </form>
    )
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
