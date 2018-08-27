import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({input, label, meta: {touched, error}, defaultValue, children}) => (
  <TextField
    className='material-form__field'
    label={label}
    error={touched && error}
    {...input}
    children={children}
    value={defaultValue}
  />
);

class ProfileSettings extends PureComponent {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'Larry Boom',
      mail: 'boom@mail.com',
      textarea: 'Hello world!'
    };
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    const {handleSubmit, reset} = this.props;
    return (
      <form className='material-form' onSubmit={handleSubmit}>
        <div>
          <label className='material-form__label'>Full Name</label>
          <Field
            name='username'
            component={renderTextField}
            placeholder='Name'
            defaultValue={this.state.name}
            onChange={this.handleChange('name')}
          />
        </div>
        <div>
          <label className='material-form__label'>Email</label>
          <Field
            name='email'
            component={renderTextField}
            placeholder='example@mail.com'
            defaultValue={this.state.email}
            onChange={this.handleChange('name')}
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
          <Button color='primary' type='submit'>Update profile</Button>
          <Button type='button' onClick={reset}>
            Cancel
          </Button>
        </ButtonToolbar>
      </form>
    )
  }
}

export default reduxForm({
  form: 'profile_settings_form', // a unique identifier for this form
})(ProfileSettings);

