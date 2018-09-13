"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const utils_1 = require("@0xproject/utils");
const utils_js_1 = require("../../utils/utils.js");
const currencyConstants_js_1 = require("../../constants/currencyConstants.js");
const default_js_1 = require("../../locales/default.js");
class SubmitBuyOrderComponent extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = (e) => {
            const { submitOrder, inputCurrencyCode, outputCurrencyCode } = this.props;
            const { inputAmount, outputAmount } = this.state;
            console.log('handling submit: ', e);
            e.preventDefault();
            submitOrder({
                inputAmount,
                outputAmount,
                inputCurrencyCode,
                outputCurrencyCode
            });
        };
        this.onChangeInputCurrencyCode = (event) => {
            const { updateInputCurrencyCode } = this.props;
            updateInputCurrencyCode(event.target.value);
        };
        this.onChangeInputAmount = (event) => {
            const input = event.target.value;
            if (isNaN(input) || input === '')
                return;
            const { inputCurrencyFiatRate } = this.props;
            let inputFiatAmountEstimate = '';
            const inputAmount = new utils_1.BigNumber(event.target.value);
            if (inputCurrencyFiatRate)
                inputFiatAmountEstimate = inputAmount.mul(inputCurrencyFiatRate).toFixed(2).toString();
            this.setState({
                inputAmount: inputAmount.toString(),
                inputFiatAmountEstimate
            });
        };
        this.onChangeOutputAmount = (event) => {
            const input = event.target.value;
            if (isNaN(input) || input === '')
                return;
            const { outputCurrencyFiatRate } = this.props;
            let outputFiatAmountEstimate = '';
            const outputAmount = new utils_1.BigNumber(event.target.value);
            if (outputCurrencyFiatRate)
                outputFiatAmountEstimate = outputAmount.mul(outputCurrencyFiatRate).toFixed(2).toString();
            this.setState({
                outputAmount: outputAmount.toString(),
                outputFiatAmountEstimate
            });
        };
        this.onChangeOutputCurrencyCode = (event) => {
            const { updateOutputCurrencyCode } = this.props;
            updateOutputCurrencyCode(event.target.value);
        };
        this.props.fetchTokenList();
        this.props.fetchExchangeRates();
        this.state = {
            inputFiatAmountEstimate: '',
            inputAmount: '',
            outputFiatAmountEstimate: '',
            outputAmount: ''
        };
        // should be removed later
        setTimeout(() => {
            props.updateOutputCurrencyCode('WETH');
            props.updateInputCurrencyCode('ZRX');
        }, 3000);
    }
    render() {
        const { account, tokenDirectory, inputCurrencyCode, inputCurrencyFiatRate, outputCurrencyCode, outputCurrencyFiatRate, isoFiatCurrencyCode, isOrderFormProcessing, orderFormFeedback, orderFormProcessingButtonTitle } = this.props;
        const { inputFiatAmountEstimate, outputFiatAmountEstimate } = this.state;
        let alertClass = '';
        const fiatCurrencySymbol = currencyConstants_js_1.getSymbolFromCurrency(isoFiatCurrencyCode);
        const inputCurrencyFiatRateSyntax = inputCurrencyFiatRate ? `~ ${fiatCurrencySymbol} ${inputCurrencyFiatRate}` : '';
        const inputEstimate = inputFiatAmountEstimate ? `~ ${fiatCurrencySymbol} ${inputFiatAmountEstimate}` : '';
        const outputCurrencyFiatRateSyntax = outputCurrencyFiatRate ? `~ ${fiatCurrencySymbol} ${outputCurrencyFiatRate}` : '';
        const outputEstimate = outputFiatAmountEstimate ? `~ ${fiatCurrencySymbol} ${outputFiatAmountEstimate}` : '';
        if (orderFormFeedback.type)
            alertClass = `alert alert-${orderFormFeedback.type}`;
        return (<div>
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
            const tokenCode = token.symbol.split(' ');
            return (<option key={token.symbol} value={token.symbol}>{tokenCode[0]} | {utils_js_1.ellipsizeString(token.address, 20).toLowerCase()}</option>);
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
              <input className='form-control' type='number' placeholde='0' onChange={this.onChangeInputAmount} step='0.000000000000000001'/>
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
            const tokenCode = token.symbol.split(' ');
            return (<option key={token.symbol} value={token.symbol}>{tokenCode[0]} | {utils_js_1.ellipsizeString(token.address, 20).toLowerCase()}</option>);
        })}
              </select>
            </div>

            <div className='col-2 form__form-group-label-wrap post'>
              <span className='form__form-group-label'>{outputCurrencyFiatRateSyntax}</span>
            </div>
          </div>
          <div className='form__form-group form-row'>
            <div className='col-3 form__form-group-label-wrap'>
              <label className='form__form-group-label' htmlFor='outputCurrencyAmount'>Amount to Buy:</label>
            </div>
            <div className='col-7'>
              <input className='form-control' type='number' placeholde='0' onChange={this.onChangeOutputAmount} step='0.000000000000000001'/>
            </div>
            <div className='col-2 form__form-group-label-wrap post'>
              <span className='form__form-group-label'>{outputEstimate}</span>
            </div>
          </div>
          <div className={`feedback-area alert ${alertClass} form-row`}>
            {orderFormFeedback.message && <span>{orderFormFeedback.message}</span>}
          </div>
          <div className='centered-form-buttons form-row'>
            <button className='btn btn-secondary btn-lg' style={{ width: 200 }} type='button'>{default_js_1.default.clear}</button>
            <button className='btn btn-primary btn-lg' style={{ width: 200 }} disabled={!account || isOrderFormProcessing} type='submit'>{orderFormProcessingButtonTitle}</button>
          </div>
        </form>
      </div>);
    }
}
exports.SubmitBuyOrderComponent = SubmitBuyOrderComponent;
//# sourceMappingURL=SubmitBuyOrder.js.map