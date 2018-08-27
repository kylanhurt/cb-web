import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';

export default class DangerPanel extends PureComponent {
  render() {
    return (
      <Panel xs={12} md={12} lg={6} color='danger' title='danger panel'>
        <p>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered
          had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure
          education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.</p>
      </Panel>
    )
  }
}