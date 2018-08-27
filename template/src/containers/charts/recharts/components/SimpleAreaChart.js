import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class SimpleAreaChart extends PureComponent {
  render() {
    return (
      <Col xs={12} md={12} lg={6} xl={4}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Simple Area Chart</h5>
            </div>
            <ResponsiveContainer height={300}>
              <AreaChart data={data}
                         margin={{top: 0, right: 0, left: -15, bottom: 0}}>
                <XAxis dataKey='name'/>
                <YAxis/>
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#24d6a3' fill='#4ce1b6'/>
              </AreaChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </Col>
    )
  }
}