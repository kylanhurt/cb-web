"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const tokenActions_js_1 = require("../../redux/actions/tokenActions.js");
const exchangeActions_1 = require("../../redux/actions/exchangeActions");
const SubmitBuyOrder_js_1 = require("../../containers/SubmitBuyOrder/SubmitBuyOrder.js");
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
});
const mapDispatchToProps = (dispatch) => {
    return {
        submitOrder: (order) => dispatch(exchangeActions_1.submitOrder(order)),
        fetchTokenList: () => dispatch(tokenActions_js_1.fetchTokenList()),
        fetchExchangeRates: () => dispatch(exchangeActions_1.fetchExchangeRates()),
        updateInputCurrencyCode: (currencyCode) => dispatch(exchangeActions_1.updateInputCurrencyCode(currencyCode)),
        updateOutputCurrencyCode: (currencyCode) => dispatch(exchangeActions_1.updateOutputCurrencyCode(currencyCode))
    };
};
exports.SubmitBuyOrderConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SubmitBuyOrder_js_1.SubmitBuyOrderComponent);
//# sourceMappingURL=SubmitBuyOrderConnector.js.map