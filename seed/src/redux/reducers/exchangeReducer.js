import {
  INPUT_CURRENCY_CODE,
  INPUT_CURRENCY_FIAT_RATE,
  OUTPUT_CURRENCY_CODE,
  OUTPUT_CURRENCY_FIAT_RATE,
  SHAPESHIFT_EXCHANGE_RATES
} from '../actions/exchangeActions.js'
import { combineReducers } from 'redux'

const initialState = {
  shapeshiftExchangeRates: [],
  inputCurrencyCode: '',
  inputCurrencyFiatRate: null,
  outputCurrencyCode: '',
  outputCurrencyFiatRate: null
}

export const shapeshiftExchangeRates = (state = initialState, action) => {
  const { data } = action
  switch (action.type) {
    case SHAPESHIFT_EXCHANGE_RATES:
      return data.shapeshiftExchangeRates
    default:
      return state
  }
}

export const inputCurrencyCode = (state = initialState.inputCurrencyCode, action) => {
  const { data } = action
  switch (action.type) {
    case INPUT_CURRENCY_CODE:
      return data.inputCurrencyCode
    default:
      return state
  }
}

export const inputCurrencyFiatRate = (state = initialState.inputCurrencyFiatRate, action) => {
  const { data } = action
  switch (action.type) {
    case INPUT_CURRENCY_FIAT_RATE:
      return data.inputCurrencyFiatRate
    default:
      return state
  }
}

export const outputCurrencyCode = (state = initialState.outputCurrencyCode, action) => {
  const { data } = action
  switch (action.type) {
    case OUTPUT_CURRENCY_CODE:
      return data.outputCurrencyCode
    default:
      return state
  }
}

export const outputCurrencyFiatRate = (state = initialState.outputCurrencyFiatRate, action) => {
  const { data } = action
  switch (action.type) {
    case OUTPUT_CURRENCY_FIAT_RATE:
      return data.outputCurrencyFiatRate
    default:
      return state
  }
}

export const exchange = combineReducers({
  shapeshiftExchangeRates,
  inputCurrencyCode,
  inputCurrencyFiatRate,
  outputCurrencyCode,
  outputCurrencyFiatRate
})
