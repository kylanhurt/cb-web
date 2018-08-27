import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';

import EyeIcon from 'mdi-react/EyeIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import MailRuIcon from 'mdi-react/MailRuIcon';
import WebIcon from 'mdi-react/WebIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import renderCheckBoxField from '../../../../components/form/CheckBox';

class VerticalFormWithIcons extends PureComponent {
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
    const {handleSubmit, reset} = this.props;
    
    return (
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Vertical form with icons</h5>
              <h5 className='subhead'>Labels are above fields and icons</h5>
            </div>
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
              <div className='form__form-group'>
                <label className='form__form-group-label'>Url</label>
                <div className='form__form-group-field'>
                  <div className='form__form-group-icon'>
                    <WebIcon/>
                  </div>
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
              <div className='form__form-group'>
                <div className='form__form-group-field'>
                  <Field
                    name='remember_me'
                    component={renderCheckBoxField}
                    label='Remember me'
                  />
                </div>
              </div>
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
  form: 'vertical_form_layout_with_icons', // a unique identifier for this form
})(VerticalFormWithIcons);
