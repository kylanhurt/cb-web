import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const renderTextField = ({input, label, meta: {touched, error}, children, select}) => (
  <TextField
    className='material-form__field'
    label={label}
    error={touched && error}
    value={input.value}
    children={children}
    select={select}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

class AnimatedLine extends PureComponent {
  
  render() {
    const {handleSubmit, reset} = this.props;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>ANIMATED LINE INPUTS FORMS</h5>
              <h5 className='subhead'>Material design fields</h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>
              <div>
                <label className='material-form__label'>Username</label>
                <Field
                  name='username'
                  component={renderTextField}
                  placeholder='Name'
                />
              </div>
              <div>
                <label className='material-form__label'>Email</label>
                <Field
                  name='email'
                  component={renderTextField}
                  placeholder='example@mail.com'
                  type='email'
                />
              </div>
              <div>
                <label className='material-form__label'>URL</label>
                <Field
                  name='url'
                  component={renderTextField}
                  placeholder='https://themeforest.net'
                  type='url'
                />
              </div>
              <div>
                <label className='material-form__label'>Password</label>
                <Field
                  name='password'
                  component={renderTextField}
                  type='password'
                />
              </div>
              <div>
                <label className='material-form__label'>Select Option</label>
                <Field
                  name='select'
                  component={renderTextField}
                  select
                >
                  <MenuItem className='material-form__option' value='one'>One</MenuItem>
                  <MenuItem className='material-form__option' value='two'>Two</MenuItem>
                </Field>
              </div>
              <div>
                <label className='material-form__label'>Text Area</label>
                <Field
                  name='textarea'
                  component={renderTextField}
                  placeholder='Type message here'
                  multiline
                  rowsMax='4'
                />
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
  form: 'material_form', // a unique identifier for this form
})(AnimatedLine);
