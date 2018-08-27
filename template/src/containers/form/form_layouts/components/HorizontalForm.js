import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';

import EyeIcon from 'mdi-react/EyeIcon';
import renderCheckBoxField from '../../../../components/form/CheckBox';

class HorizontalForm extends PureComponent {
  
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
              <h5 className='bold-text'>Horizontal form</h5>
              <h5 className='subhead'>Labels are left from fields</h5>
            </div>
            <form className='form form--horizontal' onSubmit={handleSubmit}>
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
                    type='text'
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
  form: 'horizontal_form_layout', // a unique identifier for this form
})(HorizontalForm);
