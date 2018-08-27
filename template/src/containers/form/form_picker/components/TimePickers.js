import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderTimePickerField from '../../../../components/form/TimePicker';

class TimePickers extends PureComponent {
  render() {
    const {
      handleSubmit,
      // reset
    } = this.props;
    
    return (
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Time picker</h5>
            </div>
            <form className='form' onSubmit={handleSubmit} autoComplete='off'>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Default Time Picker</label>
                <Field
                  name='time'
                  component={renderTimePickerField}
                />
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Twelve hours mode</label>
                <Field
                  name='time_twelve'
                  component={renderTimePickerField}
                  timeMode
                />
              </div>
              {/*<ButtonToolbar className='form__button-toolbar'>*/}
              {/*<Button color='primary' type='submit'>Submit</Button>*/}
              {/*<Button type='button' onClick={reset}>*/}
              {/*Cancel*/}
              {/*</Button>*/}
              {/*</ButtonToolbar>*/}
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'time_picker_form', // a unique identifier for this form
})(TimePickers);
