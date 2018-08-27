import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {AreaChart, Tooltip, Area, ResponsiveContainer} from 'recharts';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

const data = [{name: 'Mon', eth: 70.23},
  {name: 'Tue', eth: 80.5},
  {name: 'Wed', eth: 38.45},
  {name: 'Thu', eth: 89.2},
  {name: 'Fri', eth: 105.61},
  {name: 'Sat', eth: 98.6},
  {name: 'Sun', eth: 115}];

class CustomTooltip extends PureComponent{
  render() {
    const { active } = this.props;
    
    if (active) {
      const { payload } = this.props;
      return (
        <div className="dashboard__total-tooltip">
          <p className="label">{`$${payload[0].value}`}</p>
        </div>
      );
    }
    
    return null;
  }
}

export default class ETH extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      activeIndex: 0
    };
  }
  
  render() {
    const {activeIndex, data} = this.state;
    const activeItem = data[activeIndex];
    
    return (
      <Col md={12} xl={3} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>ETH</h5>
              <h5 className='subhead'>Ethereum</h5>
            </div>
            <div className='dashboard__total dashboard__total--area'>
              <TrendingDownIcon className='dashboard__trend-icon'/>
              <p className='dashboard__total-stat'>
                ${(activeItem.eth).toFixed(2)}
              </p>
              <ResponsiveContainer height={70} className='dashboard__chart-container'>
                <AreaChart data={data} margin={{top: 0, left: 0, bottom: 0}}>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Area name='ETH' type='monotone' dataKey='eth' fill='#f198ca' stroke='#f198ca'
                        fillOpacity={0.2}/>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

