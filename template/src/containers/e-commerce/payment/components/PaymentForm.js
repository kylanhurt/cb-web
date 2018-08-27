import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import MaskedInput from 'react-text-mask';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import renderRadioButtonField from '../../../../components/form/RadioButton';

const MasterCard = process.env.PUBLIC_URL + '/img/for_store/cards/mc.svg';
const VisaCard = process.env.PUBLIC_URL + '/img/for_store/cards/visa.svg';
const PayPal = process.env.PUBLIC_URL + '/img/for_store/cards/paypal.svg';

const renderField = ({input, label, placeholder, type, meta: {touched, error}, mask}) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask}/>
);

class PaymentForm extends PureComponent {
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <form className='form payment__credit-cards' onSubmit={handleSubmit}>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Choose payment method:</label>
          <div className='form__form-group-field'>
            <div className='payment__credit-card'>
              <Field
                name='card'
                component={renderRadioButtonField}
                label={<div><img src={MasterCard} alt='mc'/><p className='payment__credit-name'>MasterCard</p></div>}
                radioValue='russian_post'
                defaultChecked
              />
            </div>
            <div className='payment__credit-card'>
              <Field
                name='card'
                component={renderRadioButtonField}
                label={<div><img src={VisaCard} alt='visa'/><p className='payment__credit-name'>Visa</p></div>}
                radioValue='dhl'
              />
            </div>
            <div className='payment__credit-card'>
              <Field
                name='card'
                component={renderRadioButtonField}
                label={<div><img src={PayPal} alt='paypal'/><p className='payment__credit-name'>PayPal</p></div>}
                radioValue='mail_priority'
              />
            </div>
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Card number</label>
          <div className='form__form-group-field'>
            <div className='form__form-group-icon'>
              <CreditCardIcon/>
            </div>
            <Field
              name='card_number'
              component={renderField}
              type='text'
              mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder='xxxx-xxxx-xxxx-xxxx'
            />
          </div>
        </div>
        <div className='form__form-group-date-cvc'>
          <div className='form__form-group form__form-group-date'>
            <label className='form__form-group-label'>Expiration Date</label>
            <div className='form__form-group-field'>
              <Field
                name='date'
                component={renderField}
                type='text'
                mask={[/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /\d/, /\d/]}
                placeholder='DD/MM/YY'
              />
            </div>
          </div>
          <div className='form__form-group form__form-group-cvc'>
            <label className='form__form-group-label'>CVC</label>
            <div className='form__form-group-field'>
              <Field
                name='cvc'
                component={renderField}
                type='text'
                mask={[/\d/, /\d/, /\d/]}
              />
            </div>
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Cardholder name</label>
          <div className='form__form-group-field'>
            <Field
              name='name'
              component='input'
              type='text'
              placeholder='Name and Surname'
            />
          </div>
        </div>
        <h4 className='payment__total'>Total Price: $348.00</h4>
        <ButtonToolbar className='form__button-toolbar'>
          <Button color='primary' type='submit'>Make Payment</Button>
        </ButtonToolbar>
      </form>
    )
  }
}

export default reduxForm({
  form: 'payment_form', // a unique identifier for this form
})(PaymentForm);
