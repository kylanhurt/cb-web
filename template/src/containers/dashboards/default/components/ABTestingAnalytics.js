import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [{name: 'Mon', a: 590, b: 1400},
  {name: 'Tue', a: 868, b: 1506},
  {name: 'Wed', a: 1397, b: 989},
  {name: 'Thu', a: 1480, b: 1228},
  {name: 'Fri', a: 1520, b: 1100},
  {name: 'Sat', a: 1520, b: 1100},
  {name: 'Sun', a: 1400, b: 1700}];

export default class ABTestingAnalytics extends PureComponent {
  render() {
    return (
      <Panel md={12} lg={12} xl={12} title='A/B Testing Analytics'>
        <ResponsiveContainer height={250} className='dashboard__area'>
          <AreaChart data={data} margin={{top: 20, left: -15, bottom: 20}}>
            <XAxis dataKey='name' tickLine={false}/>
            <YAxis tickLine={false}/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid/>
            <Area name='Site A' type='monotone' dataKey='a' fill='#4ce1b6' stroke='#4ce1b6' fillOpacity={0.2}/>
            <Area name='Site B' type='monotone' dataKey='b' fill='#70bbfd' stroke='#70bbfd' fillOpacity={0.2}/>
          </AreaChart>
        </ResponsiveContainer>
      </Panel>
    )
  }
}

