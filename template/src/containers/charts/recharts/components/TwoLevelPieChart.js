import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {PieChart, Pie, Tooltip, ResponsiveContainer} from 'recharts';

const data01 = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200}
];

const data02 = [{name: 'A1', value: 100},
  {name: 'A2', value: 300},
  {name: 'B1', value: 100},
  {name: 'B2', value: 80},
  {name: 'B3', value: 40},
  {name: 'B4', value: 30},
  {name: 'B5', value: 50},
  {name: 'C1', value: 100},
  {name: 'C2', value: 200},
  {name: 'D1', value: 150},
  {name: 'D2', value: 50}
];


export default class TwoLevelPieChart extends PureComponent {
  render() {
    return (
      <Col xs={12} md={12} lg={6} xl={4}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Two Level Pie Chart</h5>
            </div>
            <ResponsiveContainer height={320}>
              <PieChart>
                <Tooltip/>
                <Pie data={data01} dataKey='value' outerRadius={80} fill='#70bbfd'/>
                <Pie data={data02} dataKey='value' innerRadius={90} fill='#4ce1b6' label/>
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </Col>
    )
  }
}