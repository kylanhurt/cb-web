import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderFileInputField from '../../../../components/form/FileInput';
import renderSelectField from '../../../../components/form/Select';
import renderMultiSelectField from '../../../../components/form/MultiSelect';

import EyeIcon from 'mdi-react/EyeIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';

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
  };
  
  render() {
    const {handleSubmit, reset} = this.props;
    
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Horizontal form</h5>
              <h5 className='subhead'>Labels are left from fields</h5>
            </div>
            <form className='form form--horizontal' onSubmit={handleSubmit}>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Default Label</label>
                <div className='form__form-group-field'>
                  <Field
                    name='defaultInput'
                    component='input'
                    type='text'
                    placeholder='Default Input'
                  />
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Disabled Field</label>
                <div className='form__form-group-field'>
                  <Field
                    name='disableInput'
                    component='input'
                    type='text'
                    placeholder='Disabled Input'
                    disabled
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
                <label className='form__form-group-label'>Icon Left</label>
                <div className='form__form-group-field'>
                  <div className='form__form-group-icon'>
                    <EmailIcon/>
                  </div>
                  <Field
                    name='leftIcon'
                    component='input'
                    type='email'
                    placeholder='Icon Left Input'
                  />
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Icon Right</label>
                <div className='form__form-group-field'>
                  <Field
                    name='rightIcon'
                    component='input'
                    type='text'
                    placeholder='Icon Right Input'
                  />
                  <div className='form__form-group-icon'>
                    <AccountSearchIcon/>
                  </div>
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Field with description</label>
                <div className='form__form-group-field'>
                  <Field
                    name='descriptionInput'
                    component='input'
                    type='text'
                  />
                </div>
                <span className='form__form-group-description'>
                  Zealously now pronounce existence add you instantly say offending.
                </span>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Dropdown</label>
                <div className='form__form-group-field'>
                  <Field
                    name='select'
                    component={renderSelectField}
                    options={[
                      {value: 'one', label: 'One'},
                      {value: 'two', label: 'Two'},
                    ]}
                  />
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Multiselect</label>
                <div className='form__form-group-field'>
                  <Field
                    name='multiSelect'
                    component={renderMultiSelectField}
                    options={[
                      {value: 'one', label: 'One'},
                      {value: 'two', label: 'Two'},
                    ]}
                  />
                </div>
              </div>
              <div className='form__form-group'>
                <div className='form__form-group-field'>
                  <Field
                    name='textarea'
                    component='textarea'
                    type='text'
                  />
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>
                  Add file
                </label>
                <div className='form__form-group-field'>
                  <Field
                    name='file'
                    component={renderFileInputField}
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
  form: 'horizontal_form', // a unique identifier for this form
})(HorizontalForm);
