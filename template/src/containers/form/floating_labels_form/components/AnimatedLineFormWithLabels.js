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

class AnimatedLineFormWithLabels extends PureComponent {
  render() {
    const {handleSubmit, reset} = this.props;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>ANIMATED LINE INPUTS FORMS with floating lables</h5>
              <h5 className='subhead'>Material fields with a property <span className='red-text'>label</span></h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>
              <div>
                <Field
                  name='username'
                  component={renderTextField}
                  placeholder='Name'
                  label='Username'
                />
              </div>
              <div>
                <Field
                  name='email'
                  component={renderTextField}
                  placeholder='example@mail.com'
                  type='email'
                  label='Email'
                />
              </div>
              <div>
                <Field
                  name='url'
                  component={renderTextField}
                  placeholder='https://themeforest.net'
                  label='URL'
                  type='url'
                />
              </div>
              <div>
                <Field
                  name='password'
                  component={renderTextField}
                  type='password'
                  label='Password'
                />
              </div>
              <div>
                <Field
                  name='select'
                  component={renderTextField}
                  select
                  label='Select Option'
                >
                  <MenuItem className='material-form__option' value='one'>One</MenuItem>
                  <MenuItem className='material-form__option' value='two'>Two</MenuItem>
                </Field>
              </div>
              <div>
                <Field
                  name='textarea'
                  component={renderTextField}
                  placeholder='Type message here'
                  multiline
                  rowsMax='4'
                  label='Text Area'
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
  form: 'floating_labels_form', // a unique identifier for this form
})(AnimatedLineFormWithLabels);
