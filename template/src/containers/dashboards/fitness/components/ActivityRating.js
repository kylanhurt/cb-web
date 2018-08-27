import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {PieChart, Pie, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data01 = [{name: 'Cycling', value: 10, fill: '#4ce1b6'},
  {name: 'Walking', value: 37, fill: '#70bbfd'},
  {name: 'Run', value: 21, fill: '#f6da6e'},
  {name: 'Swimming', value: 32, fill: '#ff4861'}];

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

export default class ActivityRating extends PureComponent {
  render() {
    return (
      <Panel lg={12} xl={6} md={12} title='Activity Rating'>
        <ResponsiveContainer className='dashboard__chart-pie dashboard__chart-pie--fitness' width='100%' height={360}>
          <PieChart className='dashboard__chart-pie-container'>
            <Tooltip/>
            <Pie data={data01} dataKey='value' cy={180} innerRadius={130} outerRadius={160} label/>
            <Legend layout='vertical' verticalAlign='bottom' wrapperStyle={style} content={renderLegend}/>
          </PieChart>
        </ResponsiveContainer>
      </Panel>
    )
  }
}

