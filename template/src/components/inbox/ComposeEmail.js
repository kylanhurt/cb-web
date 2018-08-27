import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, ButtonToolbar} from 'reactstrap';
import TextEditor from '../text-editor/TextEditor';

const renderTextEditor = ({input, meta: {touched, error}}) => (
  <TextEditor
    {...input}
  />
);

class ComposeEmail extends PureComponent {
  render() {
    const {handleSubmit, reset} = this.props;
    
    return (
      <form className='form inbox__content' onSubmit={handleSubmit}>
        <h5 className='inbox__compose-title bold-text'>Compose new message</h5>
        <div className='form__form-group'>
          <div className='form__form-group-field'>
            <Field
              name='to'
              component='input'
              type='text'
              placeholder='To:'
            />
          </div>
        </div>
        <div className='form__form-group'>
          <div className='form__form-group-field'>
            <Field
              name='subject'
              component='input'
              type='text'
              placeholder='Subject:'
            />
          </div>
        </div>
        <div className='form__form-group'>
          <Field
            name='text'
            component={renderTextEditor}
          />
        </div>
        <div className='form__form-group'>
          <Button outline onClick={(e) => {
            e.preventDefault()
          }} className='inbox__files-btn' size='sm'>Add files</Button>
        </div>
        <ButtonToolbar className='form__button-toolbar'>
          <Button color='primary' type='submit'>Send</Button>
          <Button type='button' onClick={reset}>Cancel</Button>
        </ButtonToolbar>
      </form>
    )
  }
}

export default reduxForm({
  form: 'compose_email_form', // a unique identifier for this form
})(ComposeEmail);
