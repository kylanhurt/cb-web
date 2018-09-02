
import { connect } from 'react-redux'
import { fetchTokenList } from '../../redux/actions/tokenActions.js'
import {
  submitOrder,
  updateInputCurrencyCode,
  updateOutputCurrencyCode,
  fetchExchangeRates
} from '../../redux/actions/exchangeActions'
import { HomepageComponent } from '../../containers/homepage/Homepage.js'

const mapStateToProps = (state) => ({
  account: state.account,
  tokenDirectory: state.tokens.tokensDirectory || [],
  inputCurrencyFiatRate: state.exchange.inputCurrencyFiatRate,
  outputCurrencyFiatRate: state.exchange.outputCurrencyFiatRate,
  isoFiatCurrencyCode: state.settings.isoFiatCurrencyCode
})

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: () => dispatch(submitOrder()),
    fetchTokenList: () => dispatch(fetchTokenList()),
    fetchExchangeRates: () => dispatch(fetchExchangeRates()),
    updateInputCurrencyCode: (currencyCode: string) => dispatch(updateInputCurrencyCode(currencyCode)),
    updateOutputCurrencyCode: (currencyCode: string) => dispatch(updateOutputCurrencyCode(currencyCode))
  }
}

export const HomepageConnector = connect(mapStateToProps, mapDispatchToProps)(HomepageComponent)
