import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';

const Dog = process.env.PUBLIC_URL + '/img/for_store/dog/1.png';

export default class BasicCard extends PureComponent {
  render() {
    return (
      <Panel md={12} lg={6} xl={3} xs={12}>
        <div className='dashboard__product'>
          <div className='dashboard__product-img'>
            <img src={Dog} alt=''/>
          </div>
          <h5 className='bold-text dashboard__product-title'>Basic card</h5>
          <h5 className='subhead dashboard__product-subhead'>Knowledge nay estimable questions repulsive daughters
            boy.</h5>
          <p><a href=''>View in the item list</a></p>
        </div>
      </Panel>
    )
  }
}

