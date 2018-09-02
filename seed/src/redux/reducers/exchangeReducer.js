import {
  INPUT_CURRENCY_CODE,
  INPUT_CURRENCY_FIAT_RATE,
  OUTPUT_CURRENCY_CODE,
  OUTPUT_CURRENCY_FIAT_RATE,
  SHAPESHIFT_EXCHANGE_RATES,
  ORDER_FORM_PROCESSING,
  ORDER_FORM_FEEDBACK
} from '../actions/exchangeActions.js'
import { combineReducers } from 'redux'

export const shapeshiftExchangeRates = (state = [], action) => {
  const { data } = action
  switch (action.type) {
    case SHAPESHIFT_EXCHANGE_RATES:
      return data.shapeshiftExchangeRates
    default:
      return state
  }
}

export const inputCurrencyCode = (state = '', action) => {
  const { data } = action
  switch (action.type) {
    case INPUT_CURRENCY_CODE:
      return data.inputCurrencyCode
    default:
      return state
  }
}

export const inputCurrencyFiatRate = (state = null, action) => {
  const { data } = action
  switch (action.type) {
    case INPUT_CURRENCY_FIAT_RATE:
      return data.inputCurrencyFiatRate
    default:
      return state
  }
}

export const outputCurrencyCode = (state = '', action) => {
  const { data } = action
  switch (action.type) {
    case OUTPUT_CURRENCY_CODE:
      return data.outputCurrencyCode
    default:
      return state
  }
}

export const outputCurrencyFiatRate = (state = null, action) => {
  const { data } = action
  switch (action.type) {
    case OUTPUT_CURRENCY_FIAT_RATE:
      return data.outputCurrencyFiatRate
    default:
      return state
  }
}

export const isOrderFormProcessing = (state = false, action) => {
  const { data } = action
  switch (action.type) {
    case ORDER_FORM_PROCESSING:
      return data.isOrderFormProcessing
    default:
      return state
  }
}

export const orderFormFeedback = (state = '', action) => {
  const { data } = action
  switch (action.type) {
    case ORDER_FORM_FEEDBACK:
      return data.orderFormFeedback
    default:
      return state
  }
}

export const exchange = combineReducers({
  shapeshiftExchangeRates,
  inputCurrencyCode,
  inputCurrencyFiatRate,
  outputCurrencyCode,
  outputCurrencyFiatRate,
  isOrderFormProcessing,
  orderFormFeedback
})
