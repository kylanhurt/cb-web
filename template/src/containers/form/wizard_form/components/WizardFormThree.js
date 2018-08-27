import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderToggleButtonField from '../../../../components/form/ToggleButton';
import renderSelectField from '../../../../components/form/Select';

class WizardFormOne extends PureComponent {
  render() {
    const {handleSubmit, previousPage} = this.props;
    
    return (
      <form className='form form--horizontal wizard__form' onSubmit={handleSubmit}>
        <h3 className='wizard__title'>Set the preferences</h3>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Change Plan</label>
          <div className='form__form-group-field'>
            <Field
              name='plan'
              component={renderSelectField}
              type='text'
              options={[
                {value: 'one', label: 'One'},
                {value: 'two', label: 'Two'},
              ]}
              placeholder='Choose plan'
            />
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>E-Mail Notifications</label>
          <div className='form__form-group-field'>
            <Field
              name='email_notifications'
              component={renderToggleButtonField}
              defaultChecked
            />
          </div>
          <p className='wizard__description'>Agreement offending commanded my an. Change wholly say why eldest
            period.</p>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Phone Notifications</label>
          <div className='form__form-group-field'>
            <Field
              name='phone_notifications'
              component={renderToggleButtonField}
            />
          </div>
          <p className='wizard__description'>Are projection put celebrated particular unreserved joy unsatiable its. In
            then dare good am rose bred or.</p>
        </div>
        <ButtonToolbar className='form__button-toolbar wizard__toolbar'>
          <Button color='primary' type='button' className='previous' onClick={previousPage}>Back</Button>
          <Button color='primary' type='submit'>Submit</Button>
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
