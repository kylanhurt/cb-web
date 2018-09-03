
import { connect } from 'react-redux'
import { OrderBookComponent } from '../../containers/OrderBook/OrderBook.js'
import { getTokenInfo } from '../../utils/utils.js'

const mapStateToProps = (state) => {
  const inputCurrencyCode = state.exchange.inputCurrencyCode
  const outputCurrencyCode = state.exchange.outputCurrencyCode

  return {
    inputCurrencyCode,
    inputCurrencyInfo: getTokenInfo(inputCurrencyCode, state),
    inputCurrencyFiatRate: state.exchange.inputCurrencyFiatRate,
    outputCurrencyCode,
    outputCurrencyInfo: getTokenInfo(outputCurrencyCode, state),
    outputCurrencyFiatRate: state.exchange.outputCurrencyFiatRate,
    isoFiatCurrencyCode: state.settings.isoFiatCurrencyCode,
    bids: state.exchange.orderBook.bids || [],
    asks: state.exchange.orderBook.asks || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const OrderBookConnector = connect(mapStateToProps, mapDispatchToProps)(OrderBookComponent)
