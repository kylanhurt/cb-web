"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const OrderBook_js_1 = require("../../containers/OrderBook/OrderBook.js");
const exchangeActions_js_1 = require("../actions/exchangeActions.js");
const utils_js_1 = require("../../utils/utils.js");
const mapStateToProps = (state) => {
    const inputCurrencyCode = state.exchange.inputCurrencyCode;
    const outputCurrencyCode = state.exchange.outputCurrencyCode;
    return {
        inputCurrencyCode,
        inputCurrencyInfo: utils_js_1.getTokenInfoFromCurrencyCode(inputCurrencyCode, state),
        inputCurrencyFiatRate: state.exchange.inputCurrencyFiatRate,
        outputCurrencyCode,
        outputCurrencyInfo: utils_js_1.getTokenInfoFromCurrencyCode(outputCurrencyCode, state),
        outputCurrencyFiatRate: state.exchange.outputCurrencyFiatRate,
        isoFiatCurrencyCode: state.settings.isoFiatCurrencyCode,
        bids: state.exchange.orderBook.bids || [],
        asks: state.exchange.orderBook.asks || [],
        isOrderBookModalVisible: state.exchange.isOrderBookModalVisible
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectOrder: (orderHash) => dispatch(exchangeActions_js_1.selectOrder(orderHash))
    };
};
exports.OrderBookConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(OrderBook_js_1.OrderBookComponent);
//# sourceMappingURL=OrderBookConnector.js.map