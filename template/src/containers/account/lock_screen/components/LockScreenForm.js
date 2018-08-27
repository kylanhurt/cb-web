import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import {Link} from 'react-router-dom';

class AccountForm extends PureComponent {
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
          <div className='account__forgot-password'>
            <a href=''>Forgot a password?</a>
          </div>
        </div>
        <Link className='btn btn-primary account__btn' to='/dashboard_default'>Unlock</Link>
        <Link className='btn btn-outline-danger account__btn' to='/dashboard_default'>Logout</Link>
      </form>
    )
  }
}

export default reduxForm({
  form: 'account_lock_form', // a unique identifier for this form
})(AccountForm);
