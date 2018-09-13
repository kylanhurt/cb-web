"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const _0x_js_1 = require("0x.js");
const default_js_1 = require("../../../locales/default.js");
const bignumber_js_1 = require("bignumber.js");
const currencyConstants_js_1 = require("../../../constants/currencyConstants.js");
class OrderBookModalComponent extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderOrderInfo = () => {
            const { selectedOrder, inputCurrencyInfo, inputCurrencyFiatRate, outputCurrencyInfo, outputCurrencyFiatRate, isoFiatCurrencyCode } = this.props;
            const fiatCurrencySymbol = currencyConstants_js_1.getSymbolFromCurrency(isoFiatCurrencyCode);
            const inputNativeAmount = _0x_js_1.ZeroEx.toUnitAmount(new bignumber_js_1.BigNumber(selectedOrder.takerTokenAmount), inputCurrencyInfo.decimal);
            const inputAmountBigNumber = new bignumber_js_1.BigNumber(inputNativeAmount);
            const inputFiatEstimate = inputCurrencyFiatRate ? ` (${fiatCurrencySymbol} ${inputAmountBigNumber.mul(inputCurrencyFiatRate).toFixed(2)})` : '';
            const inputCurrencyCode = inputCurrencyInfo.symbol;
            const outputNativeAmount = _0x_js_1.ZeroEx.toUnitAmount(new bignumber_js_1.BigNumber(selectedOrder.makerTokenAmount), outputCurrencyInfo.decimal);
            const outputAmountBigNumber = new bignumber_js_1.BigNumber(outputNativeAmount);
            const outputFiatEstimate = outputCurrencyFiatRate ? ` (${fiatCurrencySymbol} ${outputAmountBigNumber.mul(outputCurrencyFiatRate).toFixed(2)})` : '';
            const outputCurrencyCode = outputCurrencyInfo.symbol;
            return (<div>
        <div>
          <span>{default_js_1.default.order_book_modal_dialog_fragment_1}</span><br />
          <span><span style={{ fontWeight: 'bold' }}>{`${inputNativeAmount} ${inputCurrencyCode}`}</span>{inputFiatEstimate}</span><br />
          <span>{default_js_1.default.order_book_modal_fialog_fragment_2}</span><br />
          <span><span style={{ fontWeight: 'bold' }}>{`${outputNativeAmount} ${outputCurrencyCode}`}</span>{outputFiatEstimate}</span>
        </div>
      </div>);
        };
    }
    toggle() {
        const { isOrderBookModalVisible, updateOrderBookModalVisibility } = this.props;
        updateOrderBookModalVisibility(!isOrderBookModalVisible);
    }
    render() {
        const { isOrderBookModalVisible, selectedOrder, fillOrder, fillOrderProcessingButtonTitle, isFillOrderProcessing } = this.props;
        return (<div>
        <reactstrap_1.Modal isOpen={isOrderBookModalVisible} toggle={this.toggle}>
          <div className='modal__header'>
            <h4 className='bold-text modal__title'>{default_js_1.default.order_book_modal_fill}</h4>
          </div>
          <div className='modal__body'>
            {selectedOrder && this.renderOrderInfo()}
          </div>
          <div className='modal__footer'>
            <button className='btn btn-secondary btn-lg' style={{ width: '260px' }} type='button'>{default_js_1.default.cancel}</button><br />
            <button className='btn btn-primary btn-lg' style={{ width: '260px' }} onClick={fillOrder} disabled={isFillOrderProcessing} type='submit'>{fillOrderProcessingButtonTitle}</button>
          </div>
        </reactstrap_1.Modal>
      </div>);
    }
}
exports.OrderBookModalComponent = OrderBookModalComponent;
//# sourceMappingURL=OrderBookModal.js.map