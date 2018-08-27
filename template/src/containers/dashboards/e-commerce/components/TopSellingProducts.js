import React, {PureComponent} from 'react';
import {PieChart, Pie, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Panel from '../../../../components/Panel';

const data01 = [{name: 'Sony Xperia Z', value: 12934, fill: '#4ce1b6'},
  {name: 'Xiaomi Mi 6', value: 9934, fill: '#70bbfd'},
  {name: 'Apple Iphone 7 Plus', value: 20432, fill: '#f6da6e'},
  {name: 'Apple Iphone 6 Plus', value: 15432, fill: '#ff4861'}];

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

export default class TopSellingProducts extends PureComponent {
  render() {
    return (
      <Panel lg={12} xl={6} md={12} xs={12} title='Top Selling Products'>
        <ResponsiveContainer className='dashboard__chart-pie dashboard__chart-pie--commerce' height={360}>
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

