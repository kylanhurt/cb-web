import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderSelectField from '../../../../components/form/Select';
import validate from './validate';

import EyeIcon from 'mdi-react/EyeIcon';

const renderField = ({input, label, placeholder, type, meta: {touched, error}}) => (
  <div className='form__form-group-input-wrap form__form-group-input-wrap--error-above'>
    <input {...input} placeholder={placeholder} type={type}/>
    {touched && error && <span className='form__form-group-error'>{error}</span>}
  </div>
);

class VerticalForm extends PureComponent {
  
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
    const {handleSubmit, pristine, reset, submitting} = this.props;
    
    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Vertical form validate 2</h5>
              <h5 className='subhead'>Errors are above fields, use class super
                <span className='red-text'> form__form-group-input-wrap--error-above</span>
              </h5>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Username</label>
                <div className='form__form-group-field'>
                  <Field
                    name='username'
                    component={renderField}
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
                    component={renderField}
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
                    component={renderField}
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
                    component={renderField}
                    type={this.state.showPassword ? 'text' : 'password'}
                    placeholder='Password'
                  />
                  <button className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                          tabIndex='-1' onClick={(e) => this.showPassword(e)}><EyeIcon/></button>
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Select Option</label>
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
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Validate</Button>
                <Button type='button' onClick={reset} disabled={pristine || submitting}>
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
  form: 'vertical_form_validation_two', // a unique identifier for this form
  validate,
})(VerticalForm);
