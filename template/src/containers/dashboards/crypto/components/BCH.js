import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {AreaChart, Tooltip, Area, ResponsiveContainer} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [{name: 'Mon', bch: 70.23},
  {name: 'Tue', bch: 80.5},
  {name: 'Wed', bch: 38.45},
  {name: 'Thu', bch: 89.2},
  {name: 'Fri', bch: 105.61},
  {name: 'Sat', bch: 98.6},
  {name: 'Sun', bch: 115}];

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

export default class BCH extends PureComponent {
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
              <h5 className='bold-text'>Bch</h5>
              <h5 className='subhead'>Bitcoin Cash</h5>
            </div>
            <div className='dashboard__total dashboard__total--area'>
              <TrendingUpIcon className='dashboard__trend-icon'/>
              <p className='dashboard__total-stat'>
                ${(activeItem.bch).toFixed(2)}
              </p>
              <ResponsiveContainer height={70} className='dashboard__chart-container'>
                <AreaChart data={data} margin={{top: 0, left: 0, bottom: 0}}>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Area name='BCH' type='monotone' dataKey='bch' fill='#6faae1' stroke='#6faae1'
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

