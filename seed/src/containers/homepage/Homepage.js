import React, { Component } from 'react'
import { Col, Container, Row, Card, CardBody } from 'reactstrap'
import { ellipsizeString } from '../../utils/utils.js'
import { getSymbolFromCurrency } from '../../constants/currencyConstants.js'
import strings from '../../locales/default.js'

export class HomepageComponent extends Component {
  constructor (props) {
    super(props)
    this.props.fetchTokenList()
    this.props.fetchExchangeRates()
    this.state = {
      inputFiatAmountEstimate: '',
      outputFiatAmountEstimate: ''
    }
  }
  handleSubmit = () => {
    console.log('handling submit')
  }

  onChangeInputCurrencyCode = (event) => {
    const { updateInputCurrencyCode } = this.props
    updateInputCurrencyCode(event.target.value)
  }

  onChangeOutputCurrencyCode = (event) => {
    const { updateOutputCurrencyCode } = this.props
    updateOutputCurrencyCode(event.target.value)
  }

  render () {
    const {
      tokenDirectory,
      inputCurrencyCode,
      inputCurrencyFiatRate,
      outputCurrencyCode,
      outputCurrencyFiatRate,
      isoFiatCurrencyCode
    } = this.props

    const fiatCurrencySymbol = getSymbolFromCurrency(isoFiatCurrencyCode)
    const inputCurrencyFiatRateSyntax = inputCurrencyFiatRate ? `~ ${fiatCurrencySymbol} ${inputCurrencyFiatRate}` : strings.not_applicable
    const outputCurrencyFiatRateSyntax = outputCurrencyFiatRate ? `~ ${fiatCurrencySymbol} ${outputCurrencyFiatRate}` : strings.not_applicable

    return (
      <Container className='dashboard'>
        <Row>
          <Col xs={12} md={12} lg={12} xl={12}>
            <h3 className='page-title'>Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} xl={6}>
            <Card>
              <CardBody id='tradeCurrenciesForm'>
                <div className='card__title'>
                  <h5 className='bold-text'>Choose trading pairs:</h5>
                </div>
                <form className='form form--horizontal' onSubmit={this.handleSubmit}>
                  <div className='form__form-group form-row'>
                    <div className='col-3 form__form-group-label-wrap'>
                      <label className='form__form-group-label' htmlFor='inputCurrencyCode'>Token to Sell:</label>
                    </div>
                    <div className='col-7'>
                      <select value={inputCurrencyCode} onChange={this.onChangeInputCurrencyCode} className='form-control'>
                        <option key={null} value={null}>----</option>
                        {tokenDirectory.map((token) => {
                          const tokenCode = token.symbol.split(' ')
                          return (
                            <option key={token.symbol} value={token.symbol}>{tokenCode[0]} | {ellipsizeString(token.address, 20).toLowerCase()}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className='col-2 form__form-group-label-wrap post'>
                      <span className='form__form-group-label'>{inputCurrencyFiatRateSyntax}</span>
                    </div>
                  </div>

                  <div className='form__form-group form-row'>
                    <div className='col-3 form__form-group-label-wrap'>
                      <label className='form__form-group-label' htmlFor='inputCurrencyAmount'>Amount to Sell:</label>
                    </div>
                    <div className='col-7'>
                      <input type='number' placeholde='0' />
                    </div>
                    <div className='col-2 form__form-group-label-wrap post'>
                      <span className='form__form-group-label'>~ Test2</span>
                    </div>
                  </div>

                  <div className='form__form-group form-row'>
                    <div className='col-3 form__form-group-label-wrap'>
                      <label className='form__form-group-label' htmlFor='outputCurrencyCode'>Token to Buy:</label>
                    </div>
                    <div className='col-7'>
                      <select value={outputCurrencyCode} onChange={this.onChangeOutputCurrencyCode} className='form-control'>
                        <option key={null} value={null}>----</option>
                        {tokenDirectory.map((token) => {
                          const tokenCode = token.symbol.split(' ')
                          return (
                            <option key={token.symbol} value={token.symbol}>{tokenCode[0]} | {ellipsizeString(token.address, 20).toLowerCase()}</option>
                          )
                        })}
                      </select>
                    </div>

                    <div className='col-2 form__form-group-label-wrap post'>
                      <span className='form__form-group-label'>{outputCurrencyFiatRateSyntax}</span>
                    </div>
                  </div>
                  <div className='form__form-group form-row'>
                    <div className='col-3 form__form-group-label-wrap'>
                      <label className='form__form-group-label' htmlFor='outputCurrencyAmount'>Amount to Sell:</label>
                    </div>
                    <div className='col-7'>
                      <input type='number' placeholde='0' />
                    </div>
                    <div className='col-2 form__form-group-label-wrap post'>
                      <span className='form__form-group-label'>~ Test2</span>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
