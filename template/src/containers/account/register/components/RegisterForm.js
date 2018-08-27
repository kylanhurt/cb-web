import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import MailRuIcon from 'mdi-react/MailRuIcon';
import {Link} from 'react-router-dom';

class RegisterForm extends PureComponent {
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
    const {handleSubmit} = this.props;
    
    return (
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Username</label>
          <div className='form__form-group-field'>
            <div className='form__form-group-icon'>
              <AccountOutlineIcon/>
            </div>
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
            <div className='form__form-group-icon'>
              <MailRuIcon/>
            </div>
            <Field
              name='email'
              component='input'
              type='email'
              placeholder='example@mail.com'
            />
          </div>
        </div>
        <div className='form__form-group form__form-group--forgot'>
          <label className='form__form-group-label'>Password</label>
          <div className='form__form-group-field'>
            <div className='form__form-group-icon'>
              <KeyVariantIcon/>
            </div>
            <Field
              name='password'
              component='input'
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <button className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                    onClick={(e) => this.showPassword(e)}><EyeIcon/></button>
          </div>
        </div>
        <Link className='btn btn-primary account__btn' to='/dashboard_default'>Sign Up</Link>
      </form>
    )
  }
}

export default reduxForm({
  form: 'register_form', // a unique identifier for this form
})(RegisterForm);
