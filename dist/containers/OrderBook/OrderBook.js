import React, { Component } from 'react';
import { ZeroEx } from '0x.js';
import Table from '../../components/table/Table.js';
import strings from '../../locales/default.js';
import { getSymbolFromCurrency } from '../../constants/currencyConstants.js';
import { sprintf } from 'sprintf-js';
import { OrderBookModalConnector } from '../../redux/connectors/OrderBookModalConnector.js';
export class OrderBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { asks, inputCurrencyCode, inputCurrencyInfo, inputCurrencyFiatRate, outputCurrencyCode, outputCurrencyInfo, outputCurrencyFiatRate, isoFiatCurrencyCode, isOrderBookModalVisible, selectOrder } = this.props;
        const fiatCurrencySymbol = getSymbolFromCurrency(isoFiatCurrencyCode);
        return (<div>
        <div className='card__title'>
          <h5 className='bold-text'>{sprintf(strings.order_book_view_pending_orders, outputCurrencyCode, inputCurrencyCode)}</h5>
        </div>
        <Table hover response>
          <thead>
            <tr>
              <th style={{ textAlign: 'right' }}>{`${strings.order_book_amount} ${outputCurrencyCode}`}</th>
              <th style={{ textAlign: 'right' }}>USD</th>
              <th style={{ textAlign: 'right' }}>{`${strings.order_book_amount} ${inputCurrencyCode}`}</th>
              <th style={{ textAlign: 'right' }}>USD</th>
              <th style={{ textAlign: 'right' }}>{strings.order_book_price}</th>
            </tr>
          </thead>
          <tbody>
            {asks.map(order => {
            const inputAmount = ZeroEx.toUnitAmount(order.takerTokenAmount, inputCurrencyInfo.decimal);
            const inputFiatAmountEstimate = inputAmount * inputCurrencyFiatRate;
            const inputEstimate = inputFiatAmountEstimate ? `${fiatCurrencySymbol} ${inputFiatAmountEstimate.toFixed(2)}` : '';
            const outputAmount = ZeroEx.toUnitAmount(order.makerTokenAmount, outputCurrencyInfo.decimal);
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
        </Table>
        {isOrderBookModalVisible && <OrderBookModalConnector />}
      </div>);
    }
}
