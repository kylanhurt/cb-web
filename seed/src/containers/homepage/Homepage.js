import React, { Component } from 'react'
import { BigNumber } from '@0xproject/utils'
import { Col, Container, Row, Card, CardBody } from 'reactstrap'
import { ellipsizeString } from '../../utils/utils.js'
import { getSymbolFromCurrency } from '../../constants/currencyConstants.js'

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

  onChangeInputAmount = (event) => {
    const { inputCurrencyFiatRate } = this.props
    const inputAmount = new BigNumber(event.target.value)
    if (inputCurrencyFiatRate) {
      const inputFiatAmountEstimate = inputAmount.mul(inputCurrencyFiatRate).toFixed(2).toString()
      this.setState({
        inputFiatAmountEstimate
      })
    }
  }

  onChangeOutputAmount = (event) => {
    const { outputCurrencyFiatRate } = this.props
    const outputAmount = new BigNumber(event.target.value)
    if (outputCurrencyFiatRate) {
      const outputFiatAmountEstimate = outputAmount.mul(outputCurrencyFiatRate).toFixed(2).toString()
      this.setState({
        outputFiatAmountEstimate
      })
    }
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
    const { inputFiatAmountEstimate, outputFiatAmountEstimate } = this.state

    const fiatCurrencySymbol = getSymbolFromCurrency(isoFiatCurrencyCode)
    const inputCurrencyFiatRateSyntax = inputCurrencyFiatRate ? `~ ${fiatCurrencySymbol} ${inputCurrencyFiatRate}` : ''
    const inputEstimate = inputFiatAmountEstimate ? `~ ${fiatCurrencySymbol} ${inputFiatAmountEstimate}` : ''
    const outputCurrencyFiatRateSyntax = outputCurrencyFiatRate ? `~ ${fiatCurrencySymbol} ${outputCurrencyFiatRate}` : ''
    const outputEstimate = outputFiatAmountEstimate ? `~ ${fiatCurrencySymbol} ${outputFiatAmountEstimate}` : ''

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
                      <input type='number' placeholde='0' onChange={this.onChangeInputAmount} />
                    </div>
                    <div className='col-2 form__form-group-label-wrap post'>
                      <span className='form__form-group-label'>{inputEstimate}</span>
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
                      <input type='number' placeholde='0' onChange={this.onChangeOutputAmount} />
                    </div>
                    <div className='col-2 form__form-group-label-wrap post'>
                      <span className='form__form-group-label'>{outputEstimate}</span>
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
