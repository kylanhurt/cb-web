import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '../../../../components/form/DropZoneMultiple';
import renderSelectField from '../../../../components/form/Select';

class ProductEditForm extends PureComponent {
  render() {
    const {handleSubmit, reset} = this.props;
    
    return (
      <form className='form product-edit' onSubmit={handleSubmit}>
        <div className='form__half'>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Product Name</label>
            <div className='form__form-group-field'>
              <Field
                name='name'
                component='input'
                type='text'
              />
            </div>
          </div>
          <div className='form__form-group-id-category'>
            <div className='form__form-group form__form-group-id'>
              <label className='form__form-group-label'>ID</label>
              <div className='form__form-group-field'>
                <Field
                  name='id'
                  component='input'
                  type='text'
                />
              </div>
            </div>
            <div className='form__form-group'>
              <label className='form__form-group-label'>Category</label>
              <div className='form__form-group-field'>
                <Field
                  name='category'
                  component={renderSelectField}
                  type='text'
                  options={[
                    {value: 'one', label: 'One'},
                    {value: 'two', label: 'Two'},
                  ]}
                />
              </div>
            </div>
          </div>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Short description <span>(300 characters max)</span></label>
            <div className='form__form-group-field'>
              <Field
                name='short_description'
                component='input'
                type='text'
              />
            </div>
          </div>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Full description</label>
            <div className='form__form-group-field'>
              <Field
                name='full_description'
                component='textarea'
                type='text'
              />
            </div>
          </div>
          
          <div className='card__title'>
            <h5 className='bold-text'>Pricing</h5>
          </div>
          <div className='form__form-group-price-discount'>
            <div className='form__form-group form__form-group-price'>
              <label className='form__form-group-label'>Price</label>
              <div className='form__form-group-field'>
                <div className='form__form-group-icon'>
                  <CurrencyUsdIcon/>
                </div>
                <Field
                  name='price'
                  component='input'
                  type='text'
                />
              </div>
            </div>
            <div className='form__form-group'>
              <label className='form__form-group-label'>Discount</label>
              <div className='form__form-group-field'>
                <div className='form__form-group-icon'>
                  <TagIcon/>
                </div>
                <Field
                  name='discount'
                  component='input'
                  type='text'
                />
              </div>
            </div>
          </div>
          
          <div className='card__title'>
            <h5 className='bold-text'>General information</h5>
          </div>
          <div className='form form--horizontal'>
            <div className='form__form-group'>
              <label className='form__form-group-label'>Brand Name</label>
              <div className='form__form-group-field'>
                <Field
                  name='brand'
                  component='input'
                  type='text'
                />
              </div>
            </div>
            <div className='form__form-group'>
              <label className='form__form-group-label'>Category</label>
              <div className='form__form-group-field'>
                <Field
                  name='general_category'
                  component='input'
                  type='text'
                />
              </div>
            </div>
            <div className='form__form-group'>
              <label className='form__form-group-label'>Delivery Condition</label>
              <div className='form__form-group-field'>
                <Field
                  name='delivery'
                  component='input'
                  type='text'
                />
              </div>
            </div>
            <div className='form__form-group'>
              <label className='form__form-group-label'>Weight</label>
              <div className='form__form-group-field'>
                <Field
                  name='weight'
                  component='input'
                  type='text'
                />
              </div>
            </div>
            <div className='form__form-group'>
              <label className='form__form-group-label'>Size</label>
              <div className='form__form-group-field'>
                <Field
                  name='size'
                  component='input'
                  type='text'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='form__half'>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Upload photo</label>
            <div className='form__form-group-field'>
              <Field
                name='files'
                component={renderDropZoneMultipleField}
              />
            </div>
          </div>
        </div>
        <ButtonToolbar className='form__button-toolbar'>
          <Button color='primary' type='submit'>Save</Button>
          <Button type='button' onClick={reset}>Cancel</Button>
        </ButtonToolbar>
      </form>
    )
  }
}

export default reduxForm({
  form: 'product_edit_form', // a unique identifier for this form
})(ProductEditForm);


//default values