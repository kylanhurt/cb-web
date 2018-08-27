import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {BarChart, Bar, Cell, ResponsiveContainer} from 'recharts';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

const data = [
  {name: 'Page A', pv: 255},
  {name: 'Page B', pv: 452},
  {name: 'Page C', pv: 154},
  {name: 'Page D', pv: 85},
  {name: 'Page E', pv: 545},
  {name: 'Page F', pv: 438},
  {name: 'Page G', pv: 523},
  {name: 'Page H', pv: 226},
  {name: 'Page I', pv: 112},
  {name: 'Page J', pv: 101},
];

export default class OrdersToday extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      activeIndex: 0
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(data, index) {
    this.setState({
      activeIndex: index,
    });
  }
  
  render() {
    const {activeIndex, data} = this.state;
    const activeItem = data[activeIndex];
    
    return (
      <Col md={12} xl={3} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Orders today</h5>
            </div>
            <div className='dashboard__total'>
              <TrendingDownIcon className='dashboard__trend-icon'/>
              <p className='dashboard__total-stat'>
                {(activeItem.pv)}
              </p>
              <ResponsiveContainer height={50} className='dashboard__chart-container'>
                <BarChart data={data}>
                  <Bar dataKey='pv' onClick={this.handleClick}>
                    {
                      data.map((entry, index) => (
                        <Cell cursor='pointer' fill={index === activeIndex ? '#4ce1b6' : '#c88ffa'}
                              key={`cell-${index}`}/>
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

