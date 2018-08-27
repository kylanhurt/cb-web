import React, {PureComponent} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import Panel from '../../../../components/Panel';

const data = [
  {name: '12.03', uv: 4000},
  {name: '13.03', uv: 3000},
  {name: '14.03', uv: 2000},
  {name: '15.03', uv: 2780},
  {name: '16.03', uv: 1890},
  {name: '17.03', uv: 2390},
  {name: '18.03', uv: 3490},
  {name: '19.03', uv: 3490},
  {name: '20.03', uv: 3490},
  {name: '21.03', uv: 3490}
];

export default class BounceRateArea extends PureComponent {
  render() {
    return (
      <Panel xl={5} lg={6} md={12} title='Bounce Rate'>
        <p className='dashboard__bounce-percent'>32%</p>
        <ResponsiveContainer height={220}>
          <AreaChart data={data}
                     margin={{top: 0, right: 0, left: -15, bottom: 0}}>
            <XAxis dataKey='name' tickLine={false}/>
            <YAxis tickLine={false}/>
            <CartesianGrid vertical={false}/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stroke='#24d6a3' fill='#4ce1b6' fillOpacity={0.2}/>
          </AreaChart>
        </ResponsiveContainer>
      </Panel>
    )
  }
}