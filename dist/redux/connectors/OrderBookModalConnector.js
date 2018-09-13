"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const exchangeActions_1 = require("../actions/exchangeActions");
const OrderBookModal_js_1 = require("../../containers/OrderBook/components/OrderBookModal.js");
const utils_js_1 = require("../../utils/utils.js");
const mapStateToProps = (state) => {
    const selectedOrder = state.exchange.selectedOrder;
    const inputCurrencyInfo = utils_js_1.getTokenInfoFromAddress(selectedOrder.takerTokenAddress, state);
    const outputCurrencyInfo = utils_js_1.getTokenInfoFromAddress(selectedOrder.makerTokenAddress, state);
    return {
        selectedOrder,
        inputCurrencyInfo,
        inputCurrencyFiatRate: state.exchange.inputCurrencyFiatRate,
        outputCurrencyInfo,
        outputCurrencyFiatRate: state.exchange.outputCurrencyFiatRate,
        isOrderBookModalVisible: state.exchange.isOrderBookModalVisible,
        isoFiatCurrencyCode: state.settings.isoFiatCurrencyCode,
        fillOrderProcessingButtonTitle: state.exchange.fillOrderProcessingButtonTitle
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateOrderBookModalVisibility: (isVisible) => dispatch(exchangeActions_1.updateOrderBookModalVisibility(isVisible)),
        fillOrder: () => dispatch(exchangeActions_1.fillOrder())
    };
};
exports.OrderBookModalConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(OrderBookModal_js_1.OrderBookModalComponent);
//# sourceMappingURL=OrderBookModalConnector.js.map