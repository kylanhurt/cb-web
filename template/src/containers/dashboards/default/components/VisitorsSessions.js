import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {PieChart, Pie, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data01 = [{name: 'Chrome', value: 12934, fill: '#4ce1b6'},
  {name: 'Safari', value: 9934, fill: '#70bbfd'},
  {name: 'Mozilla', value: 20432, fill: '#f6da6e'},
  {name: 'IE', value: 15432, fill: '#ff4861'}];

const style = {
  left: 0,
  width: 150,
  lineHeight: '24px'
};

const renderLegend = (props) => {
  const {payload} = props;
  return (
    <ul className='dashboard__chart-legend'>
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`}><span style={{backgroundColor: entry.color}}/>{entry.value}</li>
        ))
      }
    </ul>
  );
};

export default class VisitorsSessions extends PureComponent {
  render() {
    return (
      <Panel lg={6} xl={4} md={12} title='Visitors sessions' subhead='What browsers are most popular'>
        <div className='dashboard__visitors-chart'>
          <p className='dashboard__visitors-chart-title'>Total visitors <span>on 23.08.2017</span></p>
          <p className='dashboard__visitors-chart-number'>12,384</p>
          <ResponsiveContainer className='dashboard__chart-pie' width='100%' height={220}>
            <PieChart className='dashboard__chart-pie-container'>
              <Tooltip/>
              <Pie data={data01} dataKey='value' cy={110} innerRadius={70} outerRadius={100}/>
              <Legend layout='vertical' verticalAlign='bottom' wrapperStyle={style} content={renderLegend}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    )
  }
}

