import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';

export default class DefaultPanelWithSubhead extends PureComponent {
  render() {
    return (
      <Panel xs={12} md={12} lg={6} title='Default Panel With Subhead'
             subhead='Folly words widow one downs few age every seven.'>
        <p>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered
          had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure
          education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.</p>
      </Panel>
    )
  }
}