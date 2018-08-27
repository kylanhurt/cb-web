import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import BuyBTC from './BuyBTC';
import SellBTC from './SellBTC';

export default class PlaceOrder extends PureComponent {
  render() {
    return (
      <Panel xl={6} lg={12} title='Place Order' subhead='You can buy or sell a cryptocurrency'>
        <div className='dashboard__place-order'>
          <BuyBTC onSubmit/>
          <SellBTC onSubmit/>
        </div>
      </Panel>
    )
  }
}

