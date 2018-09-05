import {
  INPUT_CURRENCY_CODE,
  INPUT_CURRENCY_FIAT_RATE,
  OUTPUT_CURRENCY_CODE,
  OUTPUT_CURRENCY_FIAT_RATE,
  SHAPESHIFT_EXCHANGE_RATES,
  START_ORDER_FORM_PROCESSING,
  STOP_ORDER_FORM_PROCESSING,
  ORDER_FORM_BUTTON_TITLE,
  ORDER_FORM_FEEDBACK,
  ORDER_BOOK,
  SELECTED_ORDER,
  ORDER_BOOK_MODAL_VISIBILITY,
  FILL_ORDER_PROCESSING
} from '../actions/exchangeActions.js'
import { combineReducers } from 'redux'
import strings from '../../locales/default.js'

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
  switch (action.type) {
    case START_ORDER_FORM_PROCESSING:
      return true
    case STOP_ORDER_FORM_PROCESSING:
      return false
    default:
      return state
  }
}

export const orderFormProcessingButtonTitle = (state = strings.submit, action) => {
  const { data } = action
  switch (action.type) {
    case ORDER_FORM_BUTTON_TITLE:
      return data.orderFormProcessingButtonTitle
    case START_ORDER_FORM_PROCESSING:
      return strings.processing
    case STOP_ORDER_FORM_PROCESSING:
      return strings.submit
    default:
      return state
  }
}

export const orderFormFeedback = (state = { message: '', type: null }, action) => {
  if (!action.data) return state
  const { message, type } = action.data
  switch (action.type) {
    case ORDER_FORM_FEEDBACK:
      return {
        message,
        type
      }
    case OUTPUT_CURRENCY_CODE:
      return {
        message: '',
        type: null
      }
    case INPUT_CURRENCY_CODE:
      return {
        message: '',
        type: null
      }
    default:
      return state
  }
}

export const orderBook = (state = [], action) => {
  switch (action.type) {
    case ORDER_BOOK:
      return action.data
    default:
      return state
  }
}

export const selectedOrder = (state = null, action) => {
  switch (action.type) {
    case SELECTED_ORDER:
      return action.data.selectedOrder
    default:
      return state
  }
}

export const isOrderBookModalVisible = (state = false, action) => {
  switch (action.type) {
    case ORDER_BOOK_MODAL_VISIBILITY:
      return action.data.isVisible
    default:
      return state
  }
}

export const isFillOrderProcessing = (state = false, action) => {
  switch (action.type) {
    case FILL_ORDER_PROCESSING:
      return action.data.isProcessing
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
  orderBook,
  selectedOrder,
  isOrderFormProcessing,
  orderFormFeedback,
  isOrderBookModalVisible,
  isFillOrderProcessing,
  orderFormProcessingButtonTitle
})
