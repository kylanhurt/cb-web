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

export const INPUT_CURRENCY_CODE = 'INPUT_CURRENCY_CODE'
export const OUTPUT_CURRENCY_CODE = 'OUTPUT_CURRENCY_CODE'
export const INPUT_CURRENCY_FIAT_RATE = 'UPDATE_INPUT_CURRENCY_FIAT_RATE'
export const OUTPUT_CURRENCY_FIAT_RATE = 'UPDATE_OUTPUT_CURRENCY_FIAT_RATE'
export const SHAPESHIFT_EXCHANGE_RATES = 'SHAPESHIFT_EXCHANGE_RATES'

const SHAPESHIFT_RATE_ENDPOINT = 'https://shapeshift.io/rate/'
const CRYPTOCOMPARE_ENDPOINT = 'https://min-api.cryptocompare.com/data/price'

const providers = {}
const configs = {
  networkId: NETWORK_ID
}

const ACCOUNT_INFO = {
  DEX_TRADER_1: {
    PUBLIC_ADDRESS: '0x67388c030417d0b062bd8751ed020e38f4c26d4d'
  }
}

export const startWeb3Engine = (state) => (dispatch, getState) => {
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
    sellTokenCode,
    sellTokenAmount,
    buyTokenCode,
    buyTokenAmount
  } = order
  try {
    const state = getState()
    const tokenDirectory = state.tokens.tokensDirectory
    startWeb3Engine(state)
    const ids = Object.getOwnPropertyNames(state.wallets)
    const selectedWalletId = ids[0]
    const engine = providers[selectedWalletId]
    const zeroEx = new ZeroEx(engine, configs)
    const web3Wrapper = new Web3Wrapper(engine)
    const accounts = await web3Wrapper.getAvailableAddressesAsync()
    console.log('accounts: ', accounts)

    const sellTokenInfo = tokenDirectory.find(token => token.symbol === sellTokenCode)
    if (!sellTokenInfo) console.log('DEX: Token contract address not found for ', sellTokenCode)
    const SELL_TOKEN_CONTRACT_ADDRESS = sellTokenInfo.address.toLowerCase()
    const SELL_TOKEN_DECIMALS = sellTokenInfo.decimal

    const buyTokenInfo = tokenDirectory.find(token => token.symbol === buyTokenCode)
    if (!buyTokenInfo) console.log('DEX: Token contract address not found for ', buyTokenCode)
    const BUY_TOKEN_CONTRACT_ADDRESS = buyTokenInfo.address.toLowerCase()
    const BUY_TOKEN_DECIMALS = buyTokenInfo.decimal

    const EXCHANGE_CONTRACT_ADDRESS = zeroEx.exchange.getContractAddress()
    const makerAddress = ACCOUNT_INFO.DEX_TRADER_1.PUBLIC_ADDRESS.toLowerCase()
    const setMakerAllowTxHash = await zeroEx.token.setUnlimitedProxyAllowanceAsync(SELL_TOKEN_CONTRACT_ADDRESS, makerAddress)
    await zeroEx.awaitTransactionMinedAsync(setMakerAllowTxHash)

    // Generate feesRequest
    const feesRequest = {
      maker: makerAddress, // Ethereum address of our Maker.
      taker: ZeroEx.NULL_ADDRESS, // Ethereum address of our Taker.
      feeRecipient: RELAYER_ADDRESS, // Ethereum address of our Relayer (none for now).
      makerTokenAddress: SELL_TOKEN_CONTRACT_ADDRESS, // The token address the Maker is offering.
      takerTokenAddress: BUY_TOKEN_CONTRACT_ADDRESS, // The token address the Maker is requesting from the Taker.
      exchangeContractAddress: EXCHANGE_CONTRACT_ADDRESS, // The exchange.sol address.
      salt: ZeroEx.generatePseudoRandomSalt(), // Random number to make the order (and therefore its hash) unique.
      makerTokenAmount: ZeroEx.toBaseUnitAmount(new BigNumber(sellTokenAmount), SELL_TOKEN_DECIMALS), // Base 18 decimals, The amount of sell token the Maker is offering.
      takerTokenAmount: ZeroEx.toBaseUnitAmount(new BigNumber(buyTokenAmount), BUY_TOKEN_DECIMALS), // Base 18 decimals, The amount of buy token the Maker is requesting from the Taker.
      expirationUnixTimestampSec: new BigNumber(Date.now() + 28800000) // When will the order expire (in unix time), Valid for up to 8 hours
    }
    const relayerClient = new HttpClient(RELAYER_API_URL)
    const feesResponse = await relayerClient.getFeesAsync(feesRequest)
    const order = {
      ...feesRequest,
      ...feesResponse
    }
    const orderHash = ZeroEx.getOrderHashHex(order)
    const shouldAddPersonalMessagePrefix = false
    const ecSignature = await zeroEx.signOrderHashAsync(orderHash, makerAddress, shouldAddPersonalMessagePrefix)
    const signedOrder = {
      ...order,
      ecSignature
    }
    await relayerClient.submitOrderAsync(signedOrder)
    const orderbookRequest = {
      baseTokenAddress: SELL_TOKEN_CONTRACT_ADDRESS,
      quoteTokenAddress: BUY_TOKEN_CONTRACT_ADDRESS
    }
    const orderbookResponse = await relayerClient.getOrderbookAsync(orderbookRequest)
    console.log('DEX: orderbookResponse is: ', orderbookResponse)
  } catch (e) {
    console.log('error: ', e)
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

export const updateInputCurrencyCode = (inputCurrencyCode: string) => async (dispatch, getState) => {
  const state = getState()
  let inputCurrencyFiatRate = null
  dispatch({
    type: INPUT_CURRENCY_CODE,
    data: { inputCurrencyCode }
  })
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

export const updateOutputCurrencyCode = (outputCurrencyCode: string) => async (dispatch, getState) => {
  const state = getState()
  let outputCurrencyFiatRate = null
  dispatch({
    type: OUTPUT_CURRENCY_CODE,
    data: { outputCurrencyCode }
  })
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
