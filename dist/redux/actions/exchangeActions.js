"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const networkConstants_js_1 = require("../../constants/networkConstants.js");
const utils_1 = require("@0xproject/utils");
const subproviders_1 = require("@0xproject/subproviders");
const _0x_js_1 = require("0x.js");
const connect_1 = require("@0xproject/connect");
const web3_wrapper_1 = require("@0xproject/web3-wrapper");
const sprintf_js_1 = require("sprintf-js");
const utils_js_1 = require("../../utils/utils.js");
const default_js_1 = require("../../locales/default.js");
exports.INPUT_CURRENCY_CODE = 'INPUT_CURRENCY_CODE';
exports.OUTPUT_CURRENCY_CODE = 'OUTPUT_CURRENCY_CODE';
exports.INPUT_CURRENCY_FIAT_RATE = 'UPDATE_INPUT_CURRENCY_FIAT_RATE';
exports.OUTPUT_CURRENCY_FIAT_RATE = 'UPDATE_OUTPUT_CURRENCY_FIAT_RATE';
exports.SHAPESHIFT_EXCHANGE_RATES = 'SHAPESHIFT_EXCHANGE_RATES';
exports.START_ORDER_FORM_PROCESSING = 'START_ORDER_FORM_PROCESSING';
exports.STOP_ORDER_FORM_PROCESSING = 'STOP_ORDER_FORM_PROCESSING';
exports.ORDER_FORM_BUTTON_TITLE = 'ORDER_FORM_BUTTON_TITLE';
exports.ORDER_FORM_FEEDBACK = 'ORDER_FORM_FEEDBACK';
exports.ORDER_BOOK = 'ORDER_BOOK';
exports.SELECTED_ORDER = 'SELECTED_ORDER';
exports.ORDER_BOOK_MODAL_VISIBILITY = 'ORDER_BOOK_MODAL_VISIBILITY';
exports.START_FILL_ORDER_PROCESSING = 'START_FILL_ORDER_PROCESSING';
exports.STOP_FILL_ORDER_PROCESSING = 'STOP_FILL_ORDER_PROCESSING';
exports.FILL_ORDER_BUTTON_TITLE = 'FILL_ORDER_BUTTON_TITLE';
const SHAPESHIFT_RATE_ENDPOINT = 'https://shapeshift.io/rate/';
const CRYPTOCOMPARE_ENDPOINT = 'https://min-api.cryptocompare.com/data/price';
const ZRX_TOKEN_ADDRESS = '0xe41d2489571d322189246dafa5ebde1f4699f498'.toLowerCase();
const providers = {};
const configs = {
    networkId: networkConstants_js_1.NETWORK_ID
};
exports.startWeb3Engine = (state) => {
    const ids = Object.getOwnPropertyNames(state.wallets);
    const selectedWalletId = ids[0];
    const ethereumKey = state.wallets[selectedWalletId].keys.ethereumKey;
    const engine = new subproviders_1.Web3ProviderEngine();
    // add a private key subprovider
    engine.addProvider(new subproviders_1.PrivateKeyWalletSubprovider(ethereumKey));
    // also add an RPC subprovider
    engine.addProvider(new subproviders_1.RPCSubprovider(networkConstants_js_1.RELAYER_SUBPROVIDER_ADDRESS));
    // boot it up
    engine.start();
    providers[selectedWalletId] = engine;
    return providers[selectedWalletId];
};
exports.submitOrder = (order) => (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
    const { inputAmount, inputCurrencyCode, outputAmount, outputCurrencyCode } = order;
    try {
        dispatch(exports.startOrderFormProcessing());
        const state = getState();
        exports.startWeb3Engine(state);
        const ids = Object.getOwnPropertyNames(state.wallets);
        const selectedWalletId = ids[0];
        const engine = providers[selectedWalletId];
        const zeroEx = new _0x_js_1.ZeroEx(engine, configs);
        const web3Wrapper = new web3_wrapper_1.Web3Wrapper(engine);
        const accounts = yield web3Wrapper.getAvailableAddressesAsync();
        console.log('accounts: ', accounts);
        const inputCurrencyInfo = utils_js_1.getTokenInfoFromCurrencyCode(inputCurrencyCode, state);
        if (!inputCurrencyInfo)
            console.log('DEX: Token contract address not found for input currency: ', inputCurrencyCode);
        const SELL_TOKEN_CONTRACT_ADDRESS = inputCurrencyInfo.address.toLowerCase();
        const SELL_TOKEN_DECIMALS = inputCurrencyInfo.decimal;
        const buyTokenInfo = utils_js_1.getTokenInfoFromCurrencyCode(outputCurrencyCode, state);
        if (!buyTokenInfo)
            console.log('DEX: Token contract address not found for output currency: ', outputCurrencyCode);
        const BUY_TOKEN_CONTRACT_ADDRESS = buyTokenInfo.address.toLowerCase();
        const BUY_TOKEN_DECIMALS = buyTokenInfo.decimal;
        const EXCHANGE_CONTRACT_ADDRESS = zeroEx.exchange.getContractAddress();
        const makerAddress = accounts[0].toLowerCase();
        console.log('setMakerAllowTxHash');
        dispatch(exports.updateOrderFormButtonTitle(default_js_1.default.setting_allowance));
        const setMakerAllowTxHash = yield zeroEx.token.setUnlimitedProxyAllowanceAsync(SELL_TOKEN_CONTRACT_ADDRESS, makerAddress);
        yield zeroEx.awaitTransactionMinedAsync(setMakerAllowTxHash);
        console.log('setMakerAllowTxHash has been set, hash is: ', setMakerAllowTxHash);
        // Generate feesRequest
        const feesRequest = {
            maker: makerAddress,
            taker: _0x_js_1.ZeroEx.NULL_ADDRESS,
            feeRecipient: networkConstants_js_1.RELAYER_ADDRESS,
            makerTokenAddress: SELL_TOKEN_CONTRACT_ADDRESS,
            takerTokenAddress: BUY_TOKEN_CONTRACT_ADDRESS,
            exchangeContractAddress: EXCHANGE_CONTRACT_ADDRESS,
            salt: _0x_js_1.ZeroEx.generatePseudoRandomSalt(),
            makerTokenAmount: _0x_js_1.ZeroEx.toBaseUnitAmount(new utils_1.BigNumber(inputAmount), SELL_TOKEN_DECIMALS),
            takerTokenAmount: _0x_js_1.ZeroEx.toBaseUnitAmount(new utils_1.BigNumber(outputAmount), BUY_TOKEN_DECIMALS),
            expirationUnixTimestampSec: new utils_1.BigNumber(Date.now() + 28800000) // When will the order expire (in unix time), Valid for up to 8 hours
        };
        const relayerClient = new connect_1.HttpClient(networkConstants_js_1.RELAYER_API_URL);
        const feesResponse = yield relayerClient.getFeesAsync(feesRequest);
        console.log('feesResponse is: ', feesResponse);
        const order = Object.assign({}, feesRequest, feesResponse);
        const orderHash = _0x_js_1.ZeroEx.getOrderHashHex(order);
        const shouldAddPersonalMessagePrefix = false;
        const ecSignature = yield zeroEx.signOrderHashAsync(orderHash, makerAddress, shouldAddPersonalMessagePrefix);
        const signedOrder = Object.assign({ orderHash }, order, { ecSignature });
        yield relayerClient.submitOrderAsync(signedOrder);
        console.log('order submitted to relayer, signedOrder is: ', signedOrder);
        dispatch(exports.updateOrderFormFeedback(sprintf_js_1.sprintf(default_js_1.default.submit_order_success, orderHash), 'success'));
    }
    catch (e) {
        console.log('error: ', e);
        dispatch(exports.updateOrderFormFeedback(e.message, 'danger'));
    }
    dispatch(exports.stopOrderFormProcessing());
});
exports.startOrderFormProcessing = () => {
    return {
        type: exports.START_ORDER_FORM_PROCESSING
    };
};
exports.stopOrderFormProcessing = () => {
    return {
        type: exports.STOP_ORDER_FORM_PROCESSING
    };
};
exports.updateOrderFormButtonTitle = (orderFormProcessingButtonTitle) => {
    return {
        type: exports.ORDER_FORM_BUTTON_TITLE,
        data: { orderFormProcessingButtonTitle }
    };
};
exports.updateOrderFormFeedback = (message, type) => {
    return {
        type: exports.ORDER_FORM_FEEDBACK,
        data: {
            message,
            type
        }
    };
};
exports.fetchExchangeRates = () => (dispatch) => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(SHAPESHIFT_RATE_ENDPOINT, { mode: 'cors' });
    const exchangeRates = yield response.json();
    dispatch(exports.updateShapeshiftExchangeRates(exchangeRates));
});
exports.updateShapeshiftExchangeRates = (shapeshiftExchangeRates) => (dispatch) => {
    dispatch({
        type: exports.SHAPESHIFT_EXCHANGE_RATES,
        data: { shapeshiftExchangeRates }
    });
};
exports.updateInputCurrencyCode = (inputCurrencyCode) => (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
    const state = getState();
    const outputCurrencyCode = state.exchange.outputCurrencyCode;
    let inputCurrencyFiatRate = null;
    dispatch({
        type: exports.INPUT_CURRENCY_CODE,
        data: { inputCurrencyCode }
    });
    if (inputCurrencyCode && outputCurrencyCode)
        dispatch(exports.fetchDexOrderBook());
    const settingsIsoFiatCurrencyCode = state.settings.isoFiatCurrencyCode; // state.settings.fiatCurrencyCode
    const settingsFiatCurrencyCode = settingsIsoFiatCurrencyCode.replace('iso:', '');
    const url = `${CRYPTOCOMPARE_ENDPOINT}?fsym=${inputCurrencyCode}&tsyms=${settingsFiatCurrencyCode}`;
    const response = yield fetch(url, { mode: 'cors' });
    const exchangeRateInfo = yield response.json();
    if (exchangeRateInfo.Response === 'Error') {
        inputCurrencyFiatRate = null;
    }
    else {
        inputCurrencyFiatRate = exchangeRateInfo[settingsFiatCurrencyCode];
    }
    dispatch({
        type: exports.INPUT_CURRENCY_FIAT_RATE,
        data: { inputCurrencyFiatRate }
    });
});
exports.updateOutputCurrencyCode = (outputCurrencyCode) => (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
    const state = getState();
    const inputCurrencyCode = state.exchange.inputCurrencyCode;
    let outputCurrencyFiatRate = null;
    dispatch({
        type: exports.OUTPUT_CURRENCY_CODE,
        data: { outputCurrencyCode }
    });
    if (inputCurrencyCode && outputCurrencyCode)
        dispatch(exports.fetchDexOrderBook());
    const settingsIsoFiatCurrencyCode = state.settings.isoFiatCurrencyCode; // state.settings.fiatCurrencyCode
    const settingsFiatCurrencyCode = settingsIsoFiatCurrencyCode.replace('iso:', '');
    const url = `${CRYPTOCOMPARE_ENDPOINT}?fsym=${outputCurrencyCode}&tsyms=${settingsFiatCurrencyCode}`;
    const response = yield fetch(url, { mode: 'cors' });
    const exchangeRateInfo = yield response.json();
    if (exchangeRateInfo.Response === 'Error') {
        outputCurrencyFiatRate = null;
    }
    else {
        outputCurrencyFiatRate = exchangeRateInfo[settingsFiatCurrencyCode];
    }
    dispatch({
        type: exports.OUTPUT_CURRENCY_FIAT_RATE,
        data: { outputCurrencyFiatRate }
    });
});
exports.fetchDexOrderBook = () => (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
    const state = getState();
    const tokenDirectory = state.tokens.tokensDirectory;
    const inputCurrencyCode = state.exchange.inputCurrencyCode;
    const outputCurrencyCode = state.exchange.outputCurrencyCode;
    // get inputCurrency info
    const inputCurrencyInfo = tokenDirectory.find(token => token.symbol === inputCurrencyCode);
    if (!inputCurrencyInfo)
        console.log('DEX: Token contract address not found for ', inputCurrencyCode);
    const INPUT_CURRENCY_CONTRACT_ADDRESS = inputCurrencyInfo.address.toLowerCase();
    // get outputCurrency info
    const outputCurrencyInfo = tokenDirectory.find(token => token.symbol === outputCurrencyCode);
    if (!outputCurrencyInfo)
        console.log('DEX: Token contract address not found for ', outputCurrencyCode);
    const OUTPUT_CURRENCY_CONTRACT_ADDRESS = outputCurrencyInfo.address.toLowerCase();
    const relayerClient = new connect_1.HttpClient(networkConstants_js_1.RELAYER_API_URL);
    console.log('DEX: Relayer client set');
    const orderBookRequest = {
        baseTokenAddress: OUTPUT_CURRENCY_CONTRACT_ADDRESS,
        quoteTokenAddress: INPUT_CURRENCY_CONTRACT_ADDRESS
    };
    const orderBookResponse = yield relayerClient.getOrderbookAsync(orderBookRequest);
    console.log('DEX: orderBookResponse is: ', orderBookResponse);
    dispatch(updateDexOrderBook(orderBookResponse));
});
function updateDexOrderBook(orderBook) {
    return {
        type: exports.ORDER_BOOK,
        data: orderBook
    };
}
exports.updateDexOrderBook = updateDexOrderBook;
exports.selectOrder = (orderHash) => (dispatch, getState) => {
    const state = getState();
    if (!state.account)
        return;
    const orderBook = state.exchange.orderBook;
    const combinedOrderBook = [...orderBook.asks, ...orderBook.bids];
    let selectedOrder = combinedOrderBook.find(order => orderHash === order.orderHash);
    if (!selectedOrder)
        selectedOrder = null;
    dispatch({
        type: exports.SELECTED_ORDER,
        data: { selectedOrder }
    });
    if (selectedOrder)
        dispatch(exports.updateOrderBookModalVisibility(true));
};
exports.updateOrderBookModalVisibility = (isVisible) => {
    return {
        type: exports.ORDER_BOOK_MODAL_VISIBILITY,
        data: { isVisible }
    };
};
exports.fillOrder = () => (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
    dispatch(exports.startFillOrderProcessing());
    try {
        const state = getState();
        const ids = Object.getOwnPropertyNames(state.wallets);
        const selectedWalletId = ids[0];
        const order = state.exchange.selectedOrder;
        const TAKER_CONTRACT_ADDRESS = order.takerTokenAddress;
        let web3Engine = providers[selectedWalletId];
        if (!web3Engine)
            web3Engine = exports.startWeb3Engine(state);
        const zeroEx = new _0x_js_1.ZeroEx(providers[selectedWalletId], configs);
        const web3Wrapper = new web3_wrapper_1.Web3Wrapper(web3Engine);
        const accounts = yield web3Wrapper.getAvailableAddressesAsync();
        const takerAddress = accounts[0].toLowerCase(); // own address
        dispatch(exports.updateFillOrderButtonTitle(default_js_1.default.setting_allowance));
        const allowanceAmount = yield zeroEx.token.getProxyAllowanceAsync(TAKER_CONTRACT_ADDRESS, takerAddress);
        console.log('DEX: allowanceAmount is: ', allowanceAmount);
        if (allowanceAmount.lt(order.takerTokenAmount)) {
            console.log('DEX: taker token allowance not high enough, setting unlimited proxy allowance');
            const setTakerAllowTxHash = yield zeroEx.token.setUnlimitedProxyAllowanceAsync(TAKER_CONTRACT_ADDRESS, takerAddress);
            console.log('DEX: increase setMakerAllowTxHash: ', setTakerAllowTxHash);
            yield zeroEx.awaitTransactionMinedAsync(setTakerAllowTxHash);
        }
        // may need something more graceful than just setting to unlimited...
        const setZrxAllowTxHash = yield zeroEx.token.setUnlimitedProxyAllowanceAsync(ZRX_TOKEN_ADDRESS, takerAddress);
        yield zeroEx.awaitTransactionMinedAsync(setZrxAllowTxHash);
        const orderHash = _0x_js_1.ZeroEx.getOrderHashHex(order);
        console.log('DEX: orderHash is: ', orderHash);
        // Signing orderHash -> ecSignature
        const shouldAddPersonalMessagePrefix = false;
        dispatch(exports.updateFillOrderButtonTitle(default_js_1.default.signing));
        const ecSignature = yield zeroEx.signOrderHashAsync(orderHash, takerAddress, shouldAddPersonalMessagePrefix);
        console.log('DEX: ecSignature is: ', ecSignature);
        const signedOrder = Object.assign({}, order);
        // Verify that order is fillable
        yield zeroEx.exchange.validateOrderFillableOrThrowAsync(signedOrder);
        // Try to fill order
        const shouldThrowOnInsufficientBalanceOrAllowance = true;
        console.log('DEX: about to fill order');
        const fillTxHash = yield zeroEx.exchange.fillOrderAsync(signedOrder, order.takerTokenAmount, shouldThrowOnInsufficientBalanceOrAllowance, takerAddress);
        console.log('DEX: fillTxHash is: ', fillTxHash);
        dispatch(exports.updateFillOrderButtonTitle(default_js_1.default.mining_transaction));
        const txReceipt = yield zeroEx.awaitTransactionMinedAsync(fillTxHash);
        console.log('DEX: order fulfillment transaction completed!, txReceipt is: ', txReceipt);
        dispatch(exports.updateOrderBookModalVisibility(false));
    }
    catch (e) {
        console.log('DEX Order Fill error', e);
    }
    dispatch(exports.stopFillOrderProcessing());
});
exports.startFillOrderProcessing = () => {
    return {
        type: exports.START_FILL_ORDER_PROCESSING
    };
};
exports.stopFillOrderProcessing = () => {
    return {
        type: exports.STOP_FILL_ORDER_PROCESSING
    };
};
exports.updateFillOrderButtonTitle = (fillOrderProcessingButtonTitle) => {
    return {
        type: exports.FILL_ORDER_BUTTON_TITLE,
        data: { fillOrderProcessingButtonTitle }
    };
};
//# sourceMappingURL=exchangeActions.js.map