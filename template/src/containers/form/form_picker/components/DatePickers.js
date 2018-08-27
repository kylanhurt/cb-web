import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import TimetableIcon from 'mdi-react/TimetableIcon';
import renderIntervalDatePickerField from '../../../../components/form/IntervalDatePicker';
import renderDatePickerField from '../../../../components/form/DatePicker';
import renderDateTimePickerField from '../../../../components/form/DateTimePicker';

class DatePickers extends PureComponent {
  
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
              <h5 className='bold-text'>Date picker</h5>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Default Date Picker</label>
                <div className='form__form-group-field'>
                  <Field
                    name='default_date'
                    component={renderDatePickerField}
                  />
                  <div className='form__form-group-icon'>
                    <CalendarBlankIcon/>
                  </div>
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Date and Time Picker</label>
                <div className='form__form-group-field'>
                  <Field
                    name='date_time'
                    component={renderDateTimePickerField}
                  />
                  <div className='form__form-group-icon'>
                    <TimetableIcon/>
                  </div>
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Interval Date Picker</label>
                <div className='form__form-group-field'>
                  <Field
                    name='interval_date'
                    component={renderIntervalDatePickerField}
                  />
                </div>
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
  form: 'date_picker_form', // a unique identifier for this form
})(DatePickers);
