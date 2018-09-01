export const INPUT_CURRENCY_CODE = 'INPUT_CURRENCY_CODE'
export const OUTPUT_CURRENCY_CODE = 'OUTPUT_CURRENCY_CODE'
export const INPUT_CURRENCY_FIAT_RATE = 'UPDATE_INPUT_CURRENCY_FIAT_RATE'
export const OUTPUT_CURRENCY_FIAT_RATE = 'UPDATE_OUTPUT_CURRENCY_FIAT_RATE'
export const SHAPESHIFT_EXCHANGE_RATES = 'SHAPESHIFT_EXCHANGE_RATES'

const SHAPESHIFT_RATE_ENDPOINT = 'https://shapeshift.io/rate/'
const CRYPTOCOMPARE_ENDPOINT = 'https://min-api.cryptocompare.com/data/price'

export const fetchExchangeRates = () => async (dispatch) => {
  const response = await fetch(SHAPESHIFT_RATE_ENDPOINT, { mode: 'cors' })
  const exchangeRates = await response.json()
  dispatch(updateShapeshiftExchangeRates(exchangeRates))
}

export const updateShapeshiftExchangeRates = (shapeshiftExchangeRates) => (dispatch) => {
  dispatch({
    type: SHAPESHIFT_EXCHANGE_RATES,
    data: { shapeshiftExchangeRates }
  })
}

export const updateInputCurrencyCode = (inputCurrencyCode: string) => async (dispatch) => {
  let inputCurrencyFiatRate = null
  dispatch({
    type: INPUT_CURRENCY_CODE,
    data: { inputCurrencyCode }
  })
  const settingsFiatCurrencyCode = 'USD' // state.settings.fiatCurrencyCode
  const url = `${CRYPTOCOMPARE_ENDPOINT}?fsym=${inputCurrencyCode}&tsyms=${settingsFiatCurrencyCode}`
  const response = await fetch(url, { mode: 'cors' })
  const exchangeRateInfo = await response.json()
  if (exchangeRateInfo.Response === 'Error') {
    inputCurrencyFiatRate = null
  } else {
    inputCurrencyFiatRate = exchangeRateInfo[settingsFiatCurrencyCode]
  }
  dispatch({
    type: INPUT_CURRENCY_FIAT_RATE,
    data: { inputCurrencyFiatRate }
  })
}

export const updateOutputCurrencyCode = (outputCurrencyCode: string) => (dispatch) => {
  dispatch({
    type: OUTPUT_CURRENCY_CODE,
    data: { outputCurrencyCode }
  })
}
