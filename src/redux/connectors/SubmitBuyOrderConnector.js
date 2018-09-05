
import { connect } from 'react-redux'
import { fetchTokenList } from '../../redux/actions/tokenActions.js'
import {
  submitOrder,
  updateInputCurrencyCode,
  updateOutputCurrencyCode,
  fetchExchangeRates
} from '../../redux/actions/exchangeActions'
import { SubmitBuyOrderComponent } from '../../containers/SubmitBuyOrder/SubmitBuyOrder.js'

const mapStateToProps = (state) => ({
  account: state.account,
  tokenDirectory: state.tokens.tokensDirectory || [],
  inputCurrencyCode: state.exchange.inputCurrencyCode,
  outputCurrencyCode: state.exchange.outputCurrencyCode,
  inputCurrencyFiatRate: state.exchange.inputCurrencyFiatRate,
  outputCurrencyFiatRate: state.exchange.outputCurrencyFiatRate,
  isoFiatCurrencyCode: state.settings.isoFiatCurrencyCode,
  isOrderFormProcessing: state.exchange.isOrderFormProcessing,
  orderFormFeedback: state.exchange.orderFormFeedback,
  orderFormProcessingButtonTitle: state.exchange.orderFormProcessingButtonTitle

})

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: (order) => dispatch(submitOrder(order)),
    fetchTokenList: () => dispatch(fetchTokenList()),
    fetchExchangeRates: () => dispatch(fetchExchangeRates()),
    updateInputCurrencyCode: (currencyCode: string) => dispatch(updateInputCurrencyCode(currencyCode)),
    updateOutputCurrencyCode: (currencyCode: string) => dispatch(updateOutputCurrencyCode(currencyCode))
  }
}

export const SubmitBuyOrderConnector = connect(mapStateToProps, mapDispatchToProps)(SubmitBuyOrderComponent)
