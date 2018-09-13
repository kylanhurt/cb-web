import {
  NETWORK_ID,
  RELAYER_ADDRESS,
  RELAYER_API_URL,
  RELAYER_SUBPROVIDER_ADDRESS
} from '../../constants/networkConstants.js'
import { BigNumber } from '@0xproject/utils'
import { Web3ProviderEngine, RPCSubprovider, PrivateKeyWalletSubprovider } from '@0xproject/subproviders'
import { ZeroEx } from '0x.js'
import { HttpClient } from '@0xproject/connect'
import { Web3Wrapper } from '@0xproject/web3-wrapper'
import { sprintf } from 'sprintf-js'
import { getTokenInfoFromCurrencyCode } from '../../utils/utils.js'
import strings from '../../locales/default.js'

export const INPUT_CURRENCY_CODE = 'INPUT_CURRENCY_CODE'
export const OUTPUT_CURRENCY_CODE = 'OUTPUT_CURRENCY_CODE'
export const INPUT_CURRENCY_FIAT_RATE = 'UPDATE_INPUT_CURRENCY_FIAT_RATE'
export const OUTPUT_CURRENCY_FIAT_RATE = 'UPDATE_OUTPUT_CURRENCY_FIAT_RATE'
export const SHAPESHIFT_EXCHANGE_RATES = 'SHAPESHIFT_EXCHANGE_RATES'
export const START_ORDER_FORM_PROCESSING = 'START_ORDER_FORM_PROCESSING'
export const STOP_ORDER_FORM_PROCESSING = 'STOP_ORDER_FORM_PROCESSING'
export const ORDER_FORM_BUTTON_TITLE = 'ORDER_FORM_BUTTON_TITLE'
export const ORDER_FORM_FEEDBACK = 'ORDER_FORM_FEEDBACK'
export const ORDER_BOOK = 'ORDER_BOOK'
export const SELECTED_ORDER = 'SELECTED_ORDER'
export const ORDER_BOOK_MODAL_VISIBILITY = 'ORDER_BOOK_MODAL_VISIBILITY'
export const START_FILL_ORDER_PROCESSING = 'START_FILL_ORDER_PROCESSING'
export const STOP_FILL_ORDER_PROCESSING = 'STOP_FILL_ORDER_PROCESSING'
export const FILL_ORDER_BUTTON_TITLE = 'FILL_ORDER_BUTTON_TITLE'
const SHAPESHIFT_RATE_ENDPOINT = 'https://shapeshift.io/rate/'
const CRYPTOCOMPARE_ENDPOINT = 'https://min-api.cryptocompare.com/data/price'
const ZRX_TOKEN_ADDRESS = '0xe41d2489571d322189246dafa5ebde1f4699f498'.toLowerCase()
const providers = {}
const configs = {
  networkId: NETWORK_ID
}

export const startWeb3Engine = (state) => {
  const ids = Object.getOwnPropertyNames(state.wallets)
  const selectedWalletId = ids[0]
  const ethereumKey = state.wallets[selectedWalletId].keys.ethereumKey
  const engine = new Web3ProviderEngine()
  // add a private key subprovider
  engine.addProvider(new PrivateKeyWalletSubprovider(ethereumKey))
  // also add an RPC subprovider
  engine.addProvider(new RPCSubprovider(RELAYER_SUBPROVIDER_ADDRESS))
  // boot it up
  engine.start()
  providers[selectedWalletId] = engine
  return providers[selectedWalletId]
}

export const submitOrder = (order) => async (dispatch, getState) => {
  const {
    inputAmount,
    inputCurrencyCode,
    outputAmount,
    outputCurrencyCode
  } = order
  try {
    dispatch(startOrderFormProcessing())
    const state = getState()
    startWeb3Engine(state)
    const ids = Object.getOwnPropertyNames(state.wallets)
    const selectedWalletId = ids[0]
    const engine = providers[selectedWalletId]
    const zeroEx = new ZeroEx(engine, configs)
    const web3Wrapper = new Web3Wrapper(engine)
    const accounts = await web3Wrapper.getAvailableAddressesAsync()
    console.log('accounts: ', accounts)

    const inputCurrencyInfo = getTokenInfoFromCurrencyCode(inputCurrencyCode, state)
    if (!inputCurrencyInfo) console.log('DEX: Token contract address not found for input currency: ', inputCurrencyCode)
    const SELL_TOKEN_CONTRACT_ADDRESS = inputCurrencyInfo.address.toLowerCase()
    const SELL_TOKEN_DECIMALS = inputCurrencyInfo.decimal

    const buyTokenInfo = getTokenInfoFromCurrencyCode(outputCurrencyCode, state)
    if (!buyTokenInfo) console.log('DEX: Token contract address not found for output currency: ', outputCurrencyCode)
    const BUY_TOKEN_CONTRACT_ADDRESS = buyTokenInfo.address.toLowerCase()
    const BUY_TOKEN_DECIMALS = buyTokenInfo.decimal

    const EXCHANGE_CONTRACT_ADDRESS = zeroEx.exchange.getContractAddress()
    const makerAddress = accounts[0].toLowerCase()
    console.log('setMakerAllowTxHash')
    dispatch(updateOrderFormButtonTitle(strings.setting_allowance))
    const setMakerAllowTxHash = await zeroEx.token.setUnlimitedProxyAllowanceAsync(SELL_TOKEN_CONTRACT_ADDRESS, makerAddress)
    await zeroEx.awaitTransactionMinedAsync(setMakerAllowTxHash)
    console.log('setMakerAllowTxHash has been set, hash is: ', setMakerAllowTxHash)

    // Generate feesRequest
    const feesRequest = {
      maker: makerAddress, // Ethereum address of our Maker.
      taker: ZeroEx.NULL_ADDRESS, // Ethereum address of our Taker.
      feeRecipient: RELAYER_ADDRESS, // Ethereum address of our Relayer (none for now).
      makerTokenAddress: SELL_TOKEN_CONTRACT_ADDRESS, // The token address the Maker is offering.
      takerTokenAddress: BUY_TOKEN_CONTRACT_ADDRESS, // The token address the Maker is requesting from the Taker.
      exchangeContractAddress: EXCHANGE_CONTRACT_ADDRESS, // The exchange.sol address.
      salt: ZeroEx.generatePseudoRandomSalt(), // Random number to make the order (and therefore its hash) unique.
      makerTokenAmount: ZeroEx.toBaseUnitAmount(new BigNumber(inputAmount), SELL_TOKEN_DECIMALS), // Base 18 decimals, The amount of sell token the Maker is offering.
      takerTokenAmount: ZeroEx.toBaseUnitAmount(new BigNumber(outputAmount), BUY_TOKEN_DECIMALS), // Base 18 decimals, The amount of buy token the Maker is requesting from the Taker.
      expirationUnixTimestampSec: new BigNumber(Date.now() + 28800000) // When will the order expire (in unix time), Valid for up to 8 hours
    }
    const relayerClient = new HttpClient(RELAYER_API_URL)
    const feesResponse = await relayerClient.getFeesAsync(feesRequest)
    console.log('feesResponse is: ', feesResponse)
    const order = {
      ...feesRequest,
      ...feesResponse
    }
    const orderHash = ZeroEx.getOrderHashHex(order)
    const shouldAddPersonalMessagePrefix = false
    const ecSignature = await zeroEx.signOrderHashAsync(orderHash, makerAddress, shouldAddPersonalMessagePrefix)
    const signedOrder = {
      orderHash,
      ...order,
      ecSignature
    }
    await relayerClient.submitOrderAsync(signedOrder)
    console.log('order submitted to relayer, signedOrder is: ', signedOrder)
    dispatch(updateOrderFormFeedback(sprintf(strings.submit_order_success, orderHash), 'success'))
  } catch (e) {
    console.log('error: ', e)
    dispatch(updateOrderFormFeedback(e.message, 'danger'))
  }
  dispatch(stopOrderFormProcessing())
}

export const startOrderFormProcessing = () => {
  return {
    type: START_ORDER_FORM_PROCESSING
  }
}

export const stopOrderFormProcessing = () => {
  return {
    type: STOP_ORDER_FORM_PROCESSING
  }
}

export const updateOrderFormButtonTitle = (orderFormProcessingButtonTitle) => {
  return {
    type: ORDER_FORM_BUTTON_TITLE,
    data: { orderFormProcessingButtonTitle }
  }
}

export const updateOrderFormFeedback = (message, type) => {
  return {
    type: ORDER_FORM_FEEDBACK,
    data: {
      message,
      type
    }
  }
}

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

export const updateInputCurrencyCode = (inputCurrencyCode) => async (dispatch, getState) => {
  const state = getState()
  const outputCurrencyCode = state.exchange.outputCurrencyCode
  let inputCurrencyFiatRate = null
  dispatch({
    type: INPUT_CURRENCY_CODE,
    data: { inputCurrencyCode }
  })
  if (inputCurrencyCode && outputCurrencyCode) dispatch(fetchDexOrderBook())
  const settingsIsoFiatCurrencyCode = state.settings.isoFiatCurrencyCode // state.settings.fiatCurrencyCode
  const settingsFiatCurrencyCode = settingsIsoFiatCurrencyCode.replace('iso:', '')
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

export const updateOutputCurrencyCode = (outputCurrencyCode) => async (dispatch, getState) => {
  const state = getState()
  const inputCurrencyCode = state.exchange.inputCurrencyCode
  let outputCurrencyFiatRate = null
  dispatch({
    type: OUTPUT_CURRENCY_CODE,
    data: { outputCurrencyCode }
  })
  if (inputCurrencyCode && outputCurrencyCode) dispatch(fetchDexOrderBook())
  const settingsIsoFiatCurrencyCode = state.settings.isoFiatCurrencyCode // state.settings.fiatCurrencyCode
  const settingsFiatCurrencyCode = settingsIsoFiatCurrencyCode.replace('iso:', '')
  const url = `${CRYPTOCOMPARE_ENDPOINT}?fsym=${outputCurrencyCode}&tsyms=${settingsFiatCurrencyCode}`
  const response = await fetch(url, { mode: 'cors' })
  const exchangeRateInfo = await response.json()
  if (exchangeRateInfo.Response === 'Error') {
    outputCurrencyFiatRate = null
  } else {
    outputCurrencyFiatRate = exchangeRateInfo[settingsFiatCurrencyCode]
  }

  dispatch({
    type: OUTPUT_CURRENCY_FIAT_RATE,
    data: { outputCurrencyFiatRate }
  })
}

export const fetchDexOrderBook = () => async (dispatch, getState) => {
  const state = getState()
  const tokenDirectory = state.tokens.tokensDirectory
  const inputCurrencyCode = state.exchange.inputCurrencyCode
  const outputCurrencyCode = state.exchange.outputCurrencyCode
  // get inputCurrency info
  const inputCurrencyInfo = tokenDirectory.find(token => token.symbol === inputCurrencyCode)
  if (!inputCurrencyInfo) console.log('DEX: Token contract address not found for ', inputCurrencyCode)
  const INPUT_CURRENCY_CONTRACT_ADDRESS = inputCurrencyInfo.address.toLowerCase()

  // get outputCurrency info
  const outputCurrencyInfo = tokenDirectory.find(token => token.symbol === outputCurrencyCode)
  if (!outputCurrencyInfo) console.log('DEX: Token contract address not found for ', outputCurrencyCode)
  const OUTPUT_CURRENCY_CONTRACT_ADDRESS = outputCurrencyInfo.address.toLowerCase()

  const relayerClient = new HttpClient(RELAYER_API_URL)
  console.log('DEX: Relayer client set')

  const orderBookRequest = {
    baseTokenAddress: OUTPUT_CURRENCY_CONTRACT_ADDRESS,
    quoteTokenAddress: INPUT_CURRENCY_CONTRACT_ADDRESS
  }

  const orderBookResponse = await relayerClient.getOrderbookAsync(orderBookRequest)
  console.log('DEX: orderBookResponse is: ', orderBookResponse)
  dispatch(updateDexOrderBook(orderBookResponse))
}

export function updateDexOrderBook (orderBook) {
  return {
    type: ORDER_BOOK,
    data: orderBook
  }
}

export const selectOrder = (orderHash) => (dispatch, getState) => {
  const state = getState()
  if (!state.account) return
  const orderBook = state.exchange.orderBook
  const combinedOrderBook = [...orderBook.asks, ...orderBook.bids]
  let selectedOrder = combinedOrderBook.find(order => orderHash === order.orderHash)
  if (!selectedOrder) selectedOrder = null
  dispatch({
    type: SELECTED_ORDER,
    data: { selectedOrder }
  })
  if (selectedOrder) dispatch(updateOrderBookModalVisibility(true))
}

export const updateOrderBookModalVisibility = (isVisible) => {
  return {
    type: ORDER_BOOK_MODAL_VISIBILITY,
    data: { isVisible }
  }
}

export const fillOrder = () => async (dispatch, getState) => {
  dispatch(startFillOrderProcessing())
  try {
    const state = getState()
    const ids = Object.getOwnPropertyNames(state.wallets)
    const selectedWalletId = ids[0]
    const order = state.exchange.selectedOrder
    const TAKER_CONTRACT_ADDRESS = order.takerTokenAddress
    let web3Engine = providers[selectedWalletId]
    if (!web3Engine) web3Engine = startWeb3Engine(state)
    const zeroEx = new ZeroEx(providers[selectedWalletId], configs)
    const web3Wrapper = new Web3Wrapper(web3Engine)

    const accounts = await web3Wrapper.getAvailableAddressesAsync()
    const takerAddress = accounts[0].toLowerCase() // own address
    dispatch(updateFillOrderButtonTitle(strings.setting_allowance))
    const allowanceAmount = await zeroEx.token.getProxyAllowanceAsync(TAKER_CONTRACT_ADDRESS, takerAddress)
    console.log('DEX: allowanceAmount is: ', allowanceAmount)
    if (allowanceAmount.lt(order.takerTokenAmount)) {
      console.log('DEX: taker token allowance not high enough, setting unlimited proxy allowance')
      const setTakerAllowTxHash = await zeroEx.token.setUnlimitedProxyAllowanceAsync(TAKER_CONTRACT_ADDRESS, takerAddress)
      console.log('DEX: increase setMakerAllowTxHash: ', setTakerAllowTxHash)
      await zeroEx.awaitTransactionMinedAsync(setTakerAllowTxHash)
    }

    // may need something more graceful than just setting to unlimited...
    const setZrxAllowTxHash = await zeroEx.token.setUnlimitedProxyAllowanceAsync(ZRX_TOKEN_ADDRESS, takerAddress)
    await zeroEx.awaitTransactionMinedAsync(setZrxAllowTxHash)

    const orderHash = ZeroEx.getOrderHashHex(order)
    console.log('DEX: orderHash is: ', orderHash)
    // Signing orderHash -> ecSignature
    const shouldAddPersonalMessagePrefix = false
    dispatch(updateFillOrderButtonTitle(strings.signing))
    const ecSignature = await zeroEx.signOrderHashAsync(orderHash, takerAddress, shouldAddPersonalMessagePrefix)
    console.log('DEX: ecSignature is: ', ecSignature)

    const signedOrder = {
      ...order
    }

    // Verify that order is fillable
    await zeroEx.exchange.validateOrderFillableOrThrowAsync(signedOrder)

    // Try to fill order
    const shouldThrowOnInsufficientBalanceOrAllowance = true
    console.log('DEX: about to fill order')
    const fillTxHash = await zeroEx.exchange.fillOrderAsync(
      signedOrder,
      order.takerTokenAmount,
      shouldThrowOnInsufficientBalanceOrAllowance,
      takerAddress
    )
    console.log('DEX: fillTxHash is: ', fillTxHash)
    dispatch(updateFillOrderButtonTitle(strings.mining_transaction))
    const txReceipt = await zeroEx.awaitTransactionMinedAsync(fillTxHash)
    console.log('DEX: order fulfillment transaction completed!, txReceipt is: ', txReceipt)
    dispatch(updateOrderBookModalVisibility(false))
  } catch (e) {
    console.log('DEX Order Fill error', e)
  }
  dispatch(stopFillOrderProcessing())
}

export const startFillOrderProcessing = () => {
  return {
    type: START_FILL_ORDER_PROCESSING
  }
}

export const stopFillOrderProcessing = () => {
  return {
    type: STOP_FILL_ORDER_PROCESSING
  }
}

export const updateFillOrderButtonTitle = (fillOrderProcessingButtonTitle) => {
  return {
    type: FILL_ORDER_BUTTON_TITLE,
    data: { fillOrderProcessingButtonTitle }
  }
}
