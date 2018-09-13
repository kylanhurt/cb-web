"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const _0x_js_1 = require("0x.js");
const Table_js_1 = require("../../components/table/Table.js");
const default_js_1 = require("../../locales/default.js");
const currencyConstants_js_1 = require("../../constants/currencyConstants.js");
const sprintf_js_1 = require("sprintf-js");
const OrderBookModalConnector_js_1 = require("../../redux/connectors/OrderBookModalConnector.js");
class OrderBookComponent extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { asks, inputCurrencyCode, inputCurrencyInfo, inputCurrencyFiatRate, outputCurrencyCode, outputCurrencyInfo, outputCurrencyFiatRate, isoFiatCurrencyCode, isOrderBookModalVisible, selectOrder } = this.props;
        const fiatCurrencySymbol = currencyConstants_js_1.getSymbolFromCurrency(isoFiatCurrencyCode);
        return (<div>
        <div className='card__title'>
          <h5 className='bold-text'>{sprintf_js_1.sprintf(default_js_1.default.order_book_view_pending_orders, outputCurrencyCode, inputCurrencyCode)}</h5>
        </div>
        <Table_js_1.default hover response>
          <thead>
            <tr>
              <th style={{ textAlign: 'right' }}>{`${default_js_1.default.order_book_amount} ${outputCurrencyCode}`}</th>
              <th style={{ textAlign: 'right' }}>USD</th>
              <th style={{ textAlign: 'right' }}>{`${default_js_1.default.order_book_amount} ${inputCurrencyCode}`}</th>
              <th style={{ textAlign: 'right' }}>USD</th>
              <th style={{ textAlign: 'right' }}>{default_js_1.default.order_book_price}</th>
            </tr>
          </thead>
          <tbody>
            {asks.map(order => {
            const inputAmount = _0x_js_1.ZeroEx.toUnitAmount(order.takerTokenAmount, inputCurrencyInfo.decimal);
            const inputFiatAmountEstimate = inputAmount * inputCurrencyFiatRate;
            const inputEstimate = inputFiatAmountEstimate ? `${fiatCurrencySymbol} ${inputFiatAmountEstimate.toFixed(2)}` : '';
            const outputAmount = _0x_js_1.ZeroEx.toUnitAmount(order.makerTokenAmount, outputCurrencyInfo.decimal);
            const outputFiatAmountEstimate = outputAmount * outputCurrencyFiatRate;
            const outputEstimate = outputFiatAmountEstimate ? `${fiatCurrencySymbol} ${outputFiatAmountEstimate.toFixed(2)}` : '';
            const price = outputAmount / inputAmount;
            return (<tr key={order.orderHash} onClick={() => selectOrder(order.orderHash)}>
                  <td style={{ textAlign: 'right' }}>{outputAmount.toString()}</td>
                  <td style={{ textAlign: 'right' }}>{outputEstimate}</td>
                  <td style={{ textAlign: 'right' }}>{inputAmount.toString()}</td>
                  <td style={{ textAlign: 'right' }}>{inputEstimate}</td>
                  <td style={{ textAlign: 'right' }}>{price.toFixed(6).toString()}</td>
                </tr>);
        })}
          </tbody>
        </Table_js_1.default>
        {isOrderBookModalVisible && <OrderBookModalConnector_js_1.OrderBookModalConnector />}
      </div>);
    }
}
exports.OrderBookComponent = OrderBookComponent;
//# sourceMappingURL=OrderBook.js.map