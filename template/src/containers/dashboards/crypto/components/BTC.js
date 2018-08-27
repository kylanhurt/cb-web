import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {AreaChart, Tooltip, Area, ResponsiveContainer} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [{name: 'Mon', btc: 70.23},
  {name: 'Tue', btc: 80.5},
  {name: 'Wed', btc: 38.45},
  {name: 'Thu', btc: 89.2},
  {name: 'Fri', btc: 105.61},
  {name: 'Sat', btc: 98.6},
  {name: 'Sun', btc: 115}];

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

export default class BTC extends PureComponent {
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
              <h5 className='bold-text'>BTC</h5>
              <h5 className='subhead'>Bitcoin</h5>
            </div>
            <div className='dashboard__total dashboard__total--area'>
              <TrendingUpIcon className='dashboard__trend-icon'/>
              <p className='dashboard__total-stat'>
                ${(activeItem.btc).toFixed(2)}
              </p>
              <ResponsiveContainer height={70} className='dashboard__chart-container'>
                <AreaChart data={data} margin={{top: 0, left: 0, bottom: 0}}>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Area name='BTC' type='monotone' dataKey='btc' fill='#4ce1b6' stroke='#4ce1b6'
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


//TODO: вынести тултип отдельно?
