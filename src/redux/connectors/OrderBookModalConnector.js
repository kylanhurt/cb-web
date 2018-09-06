
import { connect } from 'react-redux'
import {
  updateOrderBookModalVisibility,
  fillOrder
} from '../actions/exchangeActions'
import { OrderBookModalComponent } from '../../containers/OrderBook/components/OrderBookModal.js'
import { getTokenInfoFromAddress } from '../../utils/utils.js'

const mapStateToProps = (state) => {
  const selectedOrder = state.exchange.selectedOrder
  const inputCurrencyInfo = getTokenInfoFromAddress(selectedOrder.takerTokenAddress, state)
  const outputCurrencyInfo = getTokenInfoFromAddress(selectedOrder.makerTokenAddress, state)
  return {
    selectedOrder,
    inputCurrencyInfo,
    inputCurrencyFiatRate: state.exchange.inputCurrencyFiatRate,
    outputCurrencyInfo,
    outputCurrencyFiatRate: state.exchange.outputCurrencyFiatRate,
    isOrderBookModalVisible: state.exchange.isOrderBookModalVisible,
    isoFiatCurrencyCode: state.settings.isoFiatCurrencyCode,
    fillOrderProcessingButtonTitle: state.exchange.fillOrderProcessingButtonTitle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrderBookModalVisibility: (isVisible) => dispatch(updateOrderBookModalVisibility(isVisible)),
    fillOrder: () => dispatch(fillOrder())
  }
}

export const OrderBookModalConnector = connect(mapStateToProps, mapDispatchToProps)(OrderBookModalComponent)
