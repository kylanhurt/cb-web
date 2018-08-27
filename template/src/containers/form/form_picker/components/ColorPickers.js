import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderBlockColorPickerField from '../../../../components/form/BlockColorPicker';
import renderSketchColorPickerField from '../../../../components/form/SketchColorPicker';
import renderChromeColorPickerField from '../../../../components/form/ChromeColorPicker';

class ColorPickers extends PureComponent {
  
  render() {
    const {
      handleSubmit,
      // reset
    } = this.props;
    
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Color picker</h5>
            </div>
            <form className='form form--justify' onSubmit={handleSubmit}>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Sketch Color Picker</label>
                <div className='form__form-group-field'>
                  <Field
                    name='sketch_color'
                    component={renderSketchColorPickerField}
                  />
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Block Color Picker</label>
                <div className='form__form-group-field'>
                  <Field
                    name='block_color'
                    component={renderBlockColorPickerField}
                  />
                </div>
              </div>
              <div className='form__form-group'>
                <label className='form__form-group-label'>Chrome Color Picker</label>
                <div className='form__form-group-field'>
                  <Field
                    name='chrome_color'
                    component={renderChromeColorPickerField}
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
  form: 'color_picker_form', // a unique identifier for this form
})(ColorPickers);
