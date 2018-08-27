import React, {PureComponent} from 'react';
import RegisterForm from './components/RegisterForm';
import {Link} from 'react-router-dom';

export default class Register extends PureComponent {
  
  render() {
    return (
      <div className='account'>
        <div className='account__wrapper'>
          <div className='account__card'>
            <div className='account__head'>
              <h3 className='account__title'>Welcome to <span className='account__logo'>Easy<span
                className='account__logo-accent'>DEV</span></span></h3>
              <h4 className='account__subhead subhead'>Create an account</h4>
            </div>
            <RegisterForm onSubmit/>
            <div className='account__have-account'>
              <p>Already have an account? <Link to='/log_in'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}