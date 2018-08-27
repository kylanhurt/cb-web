import React, {PureComponent} from 'react';
import {Progress} from 'reactstrap';
import Panel from '../../../../components/Panel';

export default class SalesReport extends PureComponent {
  render() {
    return (
      <Panel md={12} lg={7} xl={5} sm={12} xs={12} title='Sales Report'>
        <div className='dashboard__sales-report'>
          <div className='progress-wrap progress-wrap--small'>
            <p className='dashboard__sales-report-title'>Today</p>
            <p className='dashboard__sales-report-now'>$ 298,92</p>
            <p className='dashboard__sales-report-plan'>$ 250 planned</p>
            <p className='dashboard__sales-report-value progress__label'>100%</p>
            <Progress value={100}/>
          </div>
          <div className='progress-wrap progress-wrap--small progress-wrap--pink'>
            <p className='dashboard__sales-report-title'>This week</p>
            <p className='dashboard__sales-report-now'>$ 1423,01</p>
            <p className='dashboard__sales-report-plan'>$ 1500 planned</p>
            <p className='dashboard__sales-report-value progress__label'>98%</p>
            <Progress value={98}/>
          </div>
          <div className='progress-wrap progress-wrap--small progress-wrap--pink'>
            <p className='dashboard__sales-report-title'>This month</p>
            <p className='dashboard__sales-report-now'>$ 44321,74</p>
            <p className='dashboard__sales-report-plan'>$ 45000 planned</p>
            <p className='dashboard__sales-report-value progress__label'>100%</p>
            <Progress value={87}/>
          </div>
        </div>
      </Panel>
    )
  }
}

