import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';

class SellBTC extends PureComponent {
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <div className='dashboard__place-order-form'>
        <h5 className='bold-text'>Sell BTC</h5>
        <h5 className='dashboard__place-order-form-subhead subhead'>BTC Balance: 2.232344</h5>
        <form className='form form--horizontal' onSubmit={handleSubmit}>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Price</label>
            <div className='form__form-group-field'>
              <Field
                name='price'
                component='input'
                type='text'
                placeholder='$ 1322323,3'
              />
            </div>
          </div>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Amount</label>
            <div className='form__form-group-field'>
              <Field
                name='amount'
                component='input'
                type='text'
                placeholder='0,000334 BTC'
              />
            </div>
          </div>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Total</label>
            <div className='form__form-group-field'>
              <Field
                name='total'
                component='input'
                type='text'
                placeholder='$ 112,454'
              />
            </div>
          </div>
          <ButtonToolbar className='form__button-toolbar'>
            <Button color='success' type='submit'>Sell BTC</Button>
          </ButtonToolbar>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'sell_btc_form', // a unique identifier for this form
})(SellBTC);
