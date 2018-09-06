import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { ZeroEx } from '0x.js'
import strings from '../../../locales/default.js'
import { BigNumber } from 'bignumber.js'
import { getSymbolFromCurrency } from '../../../constants/currencyConstants.js'

export class OrderBookModalComponent extends Component {
  toggle () {
    const { isOrderBookModalVisible, updateOrderBookModalVisibility } = this.props
    updateOrderBookModalVisibility(!isOrderBookModalVisible)
  }

  renderOrderInfo = () => {
    const { selectedOrder, inputCurrencyInfo, inputCurrencyFiatRate, outputCurrencyInfo, outputCurrencyFiatRate, isoFiatCurrencyCode } = this.props
    const fiatCurrencySymbol = getSymbolFromCurrency(isoFiatCurrencyCode)

    const inputNativeAmount = ZeroEx.toUnitAmount(new BigNumber(selectedOrder.takerTokenAmount), inputCurrencyInfo.decimal)
    const inputAmountBigNumber = new BigNumber(inputNativeAmount)
    const inputFiatEstimate = inputCurrencyFiatRate ? ` (${fiatCurrencySymbol} ${inputAmountBigNumber.mul(inputCurrencyFiatRate).toFixed(2)})` : ''
    const inputCurrencyCode = inputCurrencyInfo.symbol

    const outputNativeAmount = ZeroEx.toUnitAmount(new BigNumber(selectedOrder.makerTokenAmount), outputCurrencyInfo.decimal)
    const outputAmountBigNumber = new BigNumber(outputNativeAmount)
    const outputFiatEstimate = outputCurrencyFiatRate ? ` (${fiatCurrencySymbol} ${outputAmountBigNumber.mul(outputCurrencyFiatRate).toFixed(2)})` : ''
    const outputCurrencyCode = outputCurrencyInfo.symbol
    return (
      <div>
        <div>
          <span>{strings.order_book_modal_dialog_fragment_1}</span><br />
          <span><span style={{ fontWeight: 'bold' }}>{`${inputNativeAmount} ${inputCurrencyCode}`}</span>{inputFiatEstimate}</span><br />
          <span>{strings.order_book_modal_fialog_fragment_2}</span><br />
          <span><span style={{ fontWeight: 'bold' }}>{`${outputNativeAmount} ${outputCurrencyCode}`}</span>{outputFiatEstimate}</span>
        </div>
      </div>
    )
  }

  render () {
    const { isOrderBookModalVisible, selectedOrder, fillOrder, fillOrderProcessingButtonTitle, isFillOrderProcessing } = this.props

    return (
      <div>
        <Modal isOpen={isOrderBookModalVisible} toggle={this.toggle}>
          <div className='modal__header'>
            <h4 className='bold-text modal__title'>{strings.order_book_modal_fill}</h4>
          </div>
          <div className='modal__body'>
            {selectedOrder && this.renderOrderInfo()}
          </div>
          <div className='modal__footer'>
            <button className='btn btn-secondary btn-lg' style={{ width: '260px' }} type='button'>{strings.cancel}</button><br />
            <button className='btn btn-primary btn-lg' style={{ width: '260px' }} onClick={fillOrder} disabled={isFillOrderProcessing} type='submit'>{fillOrderProcessingButtonTitle}</button>
          </div>
        </Modal>
      </div>
    )
  }
}
