import React, {PureComponent} from 'react';
import {Progress} from 'reactstrap';
import Panel from '../../../../components/Panel';

export default class Emails extends PureComponent {
  render() {
    return (
      <Panel md={12} lg={5} xl={3} sm={12} xs={12} title='Emails'>
        <div className='progress-wrap progress-wrap--small progress-wrap--pink progress-wrap--label-top'>
          <p>Open rate</p>
          <Progress value={84}><p className='progress__label'>84%</p></Progress>
        </div>
        <div className='progress-wrap progress-wrap--small progress-wrap--label-top'>
          <p>Sent</p>
          <Progress value={60}><p className='progress__label'>121/300</p></Progress>
        </div>
      </Panel>
    )
  }
}

