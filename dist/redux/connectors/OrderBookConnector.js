import { connect } from 'react-redux';
import { OrderBookComponent } from '../../containers/OrderBook/OrderBook.js';
import { selectOrder } from '../actions/exchangeActions.js';
import { getTokenInfoFromCurrencyCode } from '../../utils/utils.js';
const mapStateToProps = (state) => {
    const inputCurrencyCode = state.exchange.inputCurrencyCode;
    const outputCurrencyCode = state.exchange.outputCurrencyCode;
    return {
        inputCurrencyCode,
        inputCurrencyInfo: getTokenInfoFromCurrencyCode(inputCurrencyCode, state),
        inputCurrencyFiatRate: state.exchange.inputCurrencyFiatRate,
        outputCurrencyCode,
        outputCurrencyInfo: getTokenInfoFromCurrencyCode(outputCurrencyCode, state),
        outputCurrencyFiatRate: state.exchange.outputCurrencyFiatRate,
        isoFiatCurrencyCode: state.settings.isoFiatCurrencyCode,
        bids: state.exchange.orderBook.bids || [],
        asks: state.exchange.orderBook.asks || [],
        isOrderBookModalVisible: state.exchange.isOrderBookModalVisible
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectOrder: (orderHash) => dispatch(selectOrder(orderHash))
    };
};
export const OrderBookConnector = connect(mapStateToProps, mapDispatchToProps)(OrderBookComponent);
