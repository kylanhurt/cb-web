
import {connect} from 'react-redux'
import { fetchTokenList } from '../../redux/actions/tokenActions.js'
import {
  updateInputCurrencyCode,
  updateOutputCurrencyCode,
  fetchExchangeRates
} from '../../redux/actions/exchangeActions'
import { HomepageComponent } from '../../containers/homepage/Homepage.js'

const mapStateToProps = (state: State) => ({
  tokenDirectory: state.tokens.tokensDirectory || []
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchTokenList: () => {
      dispatch(fetchTokenList())
    },
    fetchExchangeRates: () => {
      dispatch(fetchExchangeRates())
    },
    updateInputCurrencyCode: (currencyCode: string) => {
      dispatch(updateInputCurrencyCode(currencyCode))
    },
    updateOutputCurrencyCode: (currencyCode: string) => {
      dispatch(updateOutputCurrencyCode(currencyCode))
    }
  }
}

export const HomepageConnector = connect(mapStateToProps, mapDispatchToProps)(HomepageComponent)