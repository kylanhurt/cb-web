import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Brush, Legend, ResponsiveContainer} from 'recharts';

const data = [{name: '25.04', btc: 59, eth: 140},
  {name: '26.04', btc: 86, eth: 150},
  {name: '27.04', btc: 139, eth: 98},
  {name: '28.04', btc: 148,eth: 122},
  {name: '29.04', btc: 152, eth: 110},
  {name: '30.04', btc: 152, eth: 110},
  {name: '1.05', btc: 140, eth: 170},
  {name: '2.05', btc: 59, eth: 140},
  {name: '3.05', btc: 86, eth: 150},
  {name: '4.05', btc: 139, eth: 98},
  {name: '5.05', btc: 50, eth: 122},
  {name: '6.05', btc: 85, eth: 75},
  {name: '7.05', btc: 152, eth: 90},
  {name: '8.05', btc: 140, eth: 170}];

export default class BtcEth extends PureComponent {
  render() {
    return (
      <Panel xl={8} lg={7} md={12} xs={12} title='BTC & ETH' subhead='Ratings by Market Capitalization'>
        <ResponsiveContainer height={280} className='dashboard__area'>
          <AreaChart data={data} margin={{top: 20, left: -15, bottom: 20}}>
            <XAxis dataKey='name' tickLine={false}/>
            <YAxis tickLine={false}/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid/>
            <Brush dataKey='name' height={12} stroke="#f2f4f7" fill='#f2f4f7'/>
            <Area name='BTC' type='monotone' dataKey='eth' fill='#4ce1b6' stroke='#4ce1b6'
                  fillOpacity={0.2}/>
            <Area name='ETH' type='monotone' dataKey='btc' fill='#70bbfd' stroke='#70bbfd' fillOpacity={0.2}/>
          </AreaChart>
        </ResponsiveContainer>
      </Panel>
    )
  }
}

