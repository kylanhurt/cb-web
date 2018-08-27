import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';

class WizardFormOne extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
    
    this.showPassword = this.showPassword.bind(this);
  }
  
  showPassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    })
  }
  
  render() {
    const {handleSubmit, previousPage} = this.props;
    
    return (
      <form className='form form--horizontal wizard__form' onSubmit={handleSubmit}>
        <h3 className='wizard__title'>Fill your personal data</h3>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Username</label>
          <div className='form__form-group-field'>
            <Field
              name='username'
              component='input'
              type='text'
              placeholder='Name'
            />
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>E-mail</label>
          <div className='form__form-group-field'>
            <Field
              name='email'
              component='input'
              type='email'
              placeholder='example@mail.com'
            />
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Url</label>
          <div className='form__form-group-field'>
            <Field
              name='url'
              component='input'
              type='url'
              placeholder='https://themeforest.net'
            />
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Password</label>
          <div className='form__form-group-field'>
            <Field
              name='password'
              component='input'
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <button className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                    tabIndex='-1' onClick={(e) => this.showPassword(e)}><EyeIcon/></button>
          </div>
        </div>
        <ButtonToolbar className='form__button-toolbar wizard__toolbar'>
          <Button color='primary' type='button' disabled className='previous' onClick={previousPage}>Back</Button>
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
