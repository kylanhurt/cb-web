import React, {PureComponent} from 'react';
import LogInForm from './components/LogInForm';
import {Link} from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';

export default class LogIn extends PureComponent {
  
  render() {
    return (
      <div className='account'>
        <div className='account__wrapper'>
          <div className='account__card'>
            <div className='account__head'>
              <h3 className='account__title'>Welcome to <span className='account__logo'>Easy<span
                className='account__logo-accent'>DEV</span></span></h3>
              <h4 className='account__subhead subhead'>Start your business easily</h4>
            </div>
            <LogInForm onSubmit/>
            <div className='account__or'>
              <p>Or Easily Using</p>
            </div>
            <div className='account__social'>
              <Link className='account__social-btn account__social-btn--facebook'
                    to='/dashboard_default'><FacebookIcon/></Link>
              <Link className='account__social-btn account__social-btn--google'
                    to='/dashboard_default'><GooglePlusIcon/></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}