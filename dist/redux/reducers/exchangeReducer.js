"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exchangeActions_js_1 = require("../actions/exchangeActions.js");
const redux_1 = require("redux");
const default_js_1 = require("../../locales/default.js");
exports.shapeshiftExchangeRates = (state = [], action) => {
    const { data } = action;
    switch (action.type) {
        case exchangeActions_js_1.SHAPESHIFT_EXCHANGE_RATES:
            return data.shapeshiftExchangeRates;
        default:
            return state;
    }
};
exports.inputCurrencyCode = (state = '', action) => {
    const { data } = action;
    switch (action.type) {
        case exchangeActions_js_1.INPUT_CURRENCY_CODE:
            return data.inputCurrencyCode;
        default:
            return state;
    }
};
exports.inputCurrencyFiatRate = (state = null, action) => {
    const { data } = action;
    switch (action.type) {
        case exchangeActions_js_1.INPUT_CURRENCY_FIAT_RATE:
            return data.inputCurrencyFiatRate;
        default:
            return state;
    }
};
exports.outputCurrencyCode = (state = '', action) => {
    const { data } = action;
    switch (action.type) {
        case exchangeActions_js_1.OUTPUT_CURRENCY_CODE:
            return data.outputCurrencyCode;
        default:
            return state;
    }
};
exports.outputCurrencyFiatRate = (state = null, action) => {
    const { data } = action;
    switch (action.type) {
        case exchangeActions_js_1.OUTPUT_CURRENCY_FIAT_RATE:
            return data.outputCurrencyFiatRate;
        default:
            return state;
    }
};
exports.isOrderFormProcessing = (state = false, action) => {
    switch (action.type) {
        case exchangeActions_js_1.START_ORDER_FORM_PROCESSING:
            return true;
        case exchangeActions_js_1.STOP_ORDER_FORM_PROCESSING:
            return false;
        default:
            return state;
    }
};
exports.orderFormProcessingButtonTitle = (state = default_js_1.default.submit, action) => {
    const { data } = action;
    switch (action.type) {
        case exchangeActions_js_1.ORDER_FORM_BUTTON_TITLE:
            return data.orderFormProcessingButtonTitle;
        case exchangeActions_js_1.START_ORDER_FORM_PROCESSING:
            return default_js_1.default.processing;
        case exchangeActions_js_1.STOP_ORDER_FORM_PROCESSING:
            return default_js_1.default.submit;
        default:
            return state;
    }
};
exports.orderFormFeedback = (state = { message: '', type: null }, action) => {
    if (!action.data)
        return state;
    const { message, type } = action.data;
    switch (action.type) {
        case exchangeActions_js_1.ORDER_FORM_FEEDBACK:
            return {
                message,
                type
            };
        case exchangeActions_js_1.OUTPUT_CURRENCY_CODE:
            return {
                message: '',
                type: null
            };
        case exchangeActions_js_1.INPUT_CURRENCY_CODE:
            return {
                message: '',
                type: null
            };
        default:
            return state;
    }
};
exports.orderBook = (state = [], action) => {
    switch (action.type) {
        case exchangeActions_js_1.ORDER_BOOK:
            return action.data;
        default:
            return state;
    }
};
exports.selectedOrder = (state = null, action) => {
    switch (action.type) {
        case exchangeActions_js_1.SELECTED_ORDER:
            return action.data.selectedOrder;
        default:
            return state;
    }
};
exports.isOrderBookModalVisible = (state = false, action) => {
    switch (action.type) {
        case exchangeActions_js_1.ORDER_BOOK_MODAL_VISIBILITY:
            return action.data.isVisible;
        default:
            return state;
    }
};
exports.isFillOrderProcessing = (state = false, action) => {
    switch (action.type) {
        case exchangeActions_js_1.START_FILL_ORDER_PROCESSING:
            return true;
        case exchangeActions_js_1.STOP_FILL_ORDER_PROCESSING:
            return false;
        default:
            return state;
    }
};
exports.fillOrderProcessingButtonTitle = (state = default_js_1.default.confirm, action) => {
    const { data } = action;
    switch (action.type) {
        case exchangeActions_js_1.FILL_ORDER_BUTTON_TITLE:
            return data.fillOrderProcessingButtonTitle;
        case exchangeActions_js_1.START_FILL_ORDER_PROCESSING:
            return default_js_1.default.processing;
        case exchangeActions_js_1.STOP_FILL_ORDER_PROCESSING:
            return default_js_1.default.submit;
        default:
            return state;
    }
};
exports.exchange = redux_1.combineReducers({
    shapeshiftExchangeRates: exports.shapeshiftExchangeRates,
    inputCurrencyCode: exports.inputCurrencyCode,
    inputCurrencyFiatRate: exports.inputCurrencyFiatRate,
    outputCurrencyCode: exports.outputCurrencyCode,
    outputCurrencyFiatRate: exports.outputCurrencyFiatRate,
    orderBook: exports.orderBook,
    selectedOrder: exports.selectedOrder,
    isOrderFormProcessing: exports.isOrderFormProcessing,
    orderFormProcessingButtonTitle: exports.orderFormProcessingButtonTitle,
    orderFormFeedback: exports.orderFormFeedback,
    isOrderBookModalVisible: exports.isOrderBookModalVisible,
    isFillOrderProcessing: exports.isFillOrderProcessing,
    fillOrderProcessingButtonTitle: exports.fillOrderProcessingButtonTitle
});
//# sourceMappingURL=exchangeReducer.js.map